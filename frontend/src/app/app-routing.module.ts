import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MemberComponent } from './pages/member/member.component';
import { SurveyClassifyComponent } from './pages/survey-classify/survey-classify.component';
import { SurveyTemplateComponent } from './pages/survey-template/survey-template.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { LoginGuard } from './core/login.guard';

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
        path: 'member',
        component: MemberComponent,
      },
      {
        path: 'survey-classify',
        component: SurveyClassifyComponent,
      },
      {
        path: 'survey-template',
        component: SurveyTemplateComponent,
      },
      {
        path: 'survey',
        component: SurveyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
