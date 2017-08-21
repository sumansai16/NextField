import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AmChartsModule, AmChartsService } from "@amcharts/amcharts3-angular";


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
        HttpModule,
            FormsModule,
    Ng2Bs3ModalModule ,
    AmChartsModule

  ],
  providers: [ AmChartsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
