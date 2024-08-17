import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrapsComponent } from './craps/craps.component';
import { CasinoFloorComponent } from './casino-floor/casino-floor.component';
import { ChipRackComponent } from './chip-rack/chip-rack.component';
import { DigitOnlyDirective } from './digit-only.directive';
import { BoxNumberComponent } from './craps/box-number/box-number.component';

@NgModule({ declarations: [
        AppComponent,
        CrapsComponent,
        CasinoFloorComponent,
        ChipRackComponent,
        DigitOnlyDirective,
        BoxNumberComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
