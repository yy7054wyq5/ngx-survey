import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LayoutComponent } from './layout/layout.component';
import { MemberComponent } from './pages/member/member.component';
import { SurveyClassifyComponent } from './pages/survey-classify/survey-classify.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyTemplateComponent } from './pages/survey-template/survey-template.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './shared/shared.module';
import { SysSettingComponent } from './pages/sys-setting/sys-setting.component';
import { AddComponent } from './pages/survey-template/add/add.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MemberComponent,
    SurveyClassifyComponent,
    SurveyComponent,
    SurveyTemplateComponent,
    LoginComponent,
    SysSettingComponent,
    AddComponent,
    StatisticsComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
