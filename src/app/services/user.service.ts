import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, retry, delay } from 'rxjs/operators';
import { api_url } from 'src/environments/environment';
import { GuidService } from './guid.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiPath = `${api_url}/User`;

  public onGetUser$: Observable<UserProfile | null>;
  private userBehaviorSubject: BehaviorSubject<UserProfile | null>;

  constructor(private httpClient: HttpClient, private guidService: GuidService, private localStorageService: LocalStorageService) {
    this.userBehaviorSubject = new BehaviorSubject<UserProfile | null>(null);
    this.onGetUser$ = this.userBehaviorSubject.asObservable();
    if (this.localStorageService.getValue('user-id')) {
      this.httpClient.get<UserProfile>(`${this.apiPath}?id=${this.localStorageService.getValue('user-id')}`).pipe(
        retry({count: 5, delay: delay(2000)}),
      ).subscribe((user: UserProfile) => {
        if (user) {
          this.userBehaviorSubject.next(user);
        }
      });
    }
  }

  public createNewUserProfile(username: string): Observable<UserProfile | null> {
    if (this.localStorageService.getValue('user-id')){
      return this.onGetUser$;
    } 
    else {
      var guid = this.guidService.newGuid();
      return this.httpClient.post<UserProfile>(this.apiPath, { UserId: guid, Username: username })
                            .pipe(
                              tap((x: UserProfile) => {
                                this.localStorageService.setValue('user-id', x.userId);
                                this.userBehaviorSubject.next(x);
                              })
                            );
    }
  }

}

export interface UserProfile {
  userId: string;
  username: string;
  channels: Set<string>;
  createdDate: Date;
  updatedDate: Date;
  dateLastLogedIn: Date;
}