import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { ForgotPasswordComponent } from './views/forgotPassword/forgot-password.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './_helpers';

export const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    // canActivate:[AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'integration',
        loadChildren: () => import('./views/integration/integration.module').then(m => m.IntegrationModule)
      },
      {
        path: 'loans',
        loadChildren: () => import('./views/loans/loans.module').then(m => m.LoansModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./views/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'email',
        loadChildren: () => import('./views/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./views/setting/setting.module').then(m => m.SettingModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
