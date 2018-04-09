import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MycustomlibModule} from './modules/mycustomlib/mycustomlib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MycustomlibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
