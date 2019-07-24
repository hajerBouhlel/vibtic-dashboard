import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { IconsComponent } from '../../icons/icons.component';

import { NotificationsComponent } from '../../notifications/notifications.component';

import { ListEmployerComponent } from 'app/list-employer/list-employer.component';
import { ListCongeComponent } from 'app/list-conge/list-conge.component';
import { ListAvanceComponent } from 'app/list-avance/list-avance.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'Acceuil',      component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'liste-employè',     component: ListEmployerComponent },
    { path: 'liste-congè',     component: ListCongeComponent },
    { path: 'liste-avance',     component: ListAvanceComponent},

    { path: 'icons',          component: IconsComponent },

    { path: 'notifications',  component: NotificationsComponent },
]
