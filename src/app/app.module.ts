import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { CatelogueComponent } from './catelogue/catelogue.component';
import { BienService } from './bien.service'
import { Observable } from 'rxjs/Observable'
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormbienComponent } from './formbien/formbien.component';
import { FormBienComponent } from './form-bien/form-bien.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ImmobilierComponent,
    CatelogueComponent,
    FormbienComponent,
    FormBienComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
