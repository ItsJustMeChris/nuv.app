import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './partials/header/header.component';
import { UsageReportComponent } from './components/usage-report/usage-report.component';
import { CardComponent } from './components/card/card.component';
import { UploadThisMonthComponent } from './components/upload-this-month/upload-this-month.component';
import { DownloadThisMonthComponent } from './components/download-this-month/download-this-month.component';



@NgModule({
  declarations: [SidebarComponent, PanelComponent, DashboardComponent, HeaderComponent, UsageReportComponent, CardComponent, UploadThisMonthComponent, DownloadThisMonthComponent],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, PanelComponent]
})
export class DashboardModule { }
