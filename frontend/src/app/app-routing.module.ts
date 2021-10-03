import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MemberComponent } from './pages/member/member.component';
import { SurveyClassifyComponent } from './pages/survey-classify/survey-classify.component';
import { SurveyTemplateComponent } from './pages/survey-template/survey-template.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { LoginGuard } from './core/login.guard';
import { SysSettingComponent } from './pages/sys-setting/sys-setting.component';
import { AddComponent } from './pages/survey-template/add/add.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'survey',
      },
      {
        path: 'member',
        component: MemberComponent,
      },
      {
        path: 'survey-classify',
        component: SurveyClassifyComponent,
      },
      {
        path: 'survey-template',
        children: [
          {
            path: '',
            component: SurveyTemplateComponent,
          },
          {
            path: ':id',
            component: AddComponent,
          },
          {
            path: 'add/:id',
            component: AddComponent,
          },
        ],
      },

      {
        path: 'survey',
        component: SurveyComponent,
      },
      {
        path: 'sys-setting',
        component: SysSettingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
