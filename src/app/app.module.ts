import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';

import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';

import { NavComponent } from './nav/nav.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddjobComponent } from './addjob/addjob.component';
import { CVListComponent } from './cv-list/cv-list.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavigationBarComponent,
    AppLayoutComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,

    NavComponent,
    UserLayoutComponent,
    DashboardComponent,
    AddjobComponent,
    CVListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
