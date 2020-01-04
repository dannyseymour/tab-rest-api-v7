import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabRestApiV7SharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [TabRestApiV7SharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}
