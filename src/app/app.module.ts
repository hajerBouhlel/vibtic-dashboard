import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';

import { IconsComponent } from './icons/icons.component';

import { NotificationsComponent } from './notifications/notifications.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { ListCongeComponent } from './list-conge/list-conge.component';
import { ListAvanceComponent } from './list-avance/list-avance.component';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './erreur/erreur.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
 /*   AgmCoreModule.forRoot({
    //  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })*/
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ErreurComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
