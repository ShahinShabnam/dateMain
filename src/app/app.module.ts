import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SampleModule,SampleComponent,SampleService } from 'datepackage';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule
  ],
  providers: [SampleComponent,SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
