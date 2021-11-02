import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeadsComponent } from './leads/leads.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { InterceptService } from './intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeadsComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   MatDialogModule
  ],
  providers: [InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true,
    },],
  bootstrap: [AppComponent],
  entryComponents: [DialogboxComponent]
})
export class AppModule { }
