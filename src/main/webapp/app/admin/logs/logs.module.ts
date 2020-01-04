import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabRestApiV7SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [TabRestApiV7SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
