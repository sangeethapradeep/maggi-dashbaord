import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpInterceptorProviders } from './interceptor/interceptor-provider';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsTableComponent } from './pages/dashboard/jobs-table/jobs-table.component';
import { JobSubmissionComponent } from './pages/job-submission/job-submission.component';
import { scrollBarConfig } from './util/scroll.constants';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    CardComponent,
    JobsTableComponent,
    JobSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    ChartsModule,
    MaterialModule,
    NgSlimScrollModule,
    NgxSpinnerModule
  ],
  providers: [
    HttpInterceptorProviders,
    {
      provide: SLIMSCROLL_DEFAULTS,
      useValue: scrollBarConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
