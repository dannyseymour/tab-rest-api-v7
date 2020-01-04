import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabRestApiV7SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [TabRestApiV7SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class TabRestApiV7HomeModule {}
