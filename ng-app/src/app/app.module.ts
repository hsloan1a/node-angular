import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { httpInterceptProviders } from './interceptors';
import { AlertPopUpComponent } from './alert-pop-up/alert-pop-up.component';
import { HttpErrorService } from './services/http-error.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AlertPopUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
