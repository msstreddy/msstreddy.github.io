import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
