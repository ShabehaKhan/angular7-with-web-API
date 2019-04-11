import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';

import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddjobComponent } from './addjob/addjob.component';
import { CVListComponent } from './cv-list/cv-list.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  // site with layout routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
    ]
  },

  //{path:'user',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  // site with layout routes
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate:[AuthGuard] },
      { path: 'addjob', component: AddjobComponent, pathMatch: 'full', canActivate:[AuthGuard] },
      { path: 'cv-list', component: CVListComponent, pathMatch: 'full', canActivate:[AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
