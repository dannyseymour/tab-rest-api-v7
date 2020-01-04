import { NgModule } from '@angular/core';
import { TabRestApiV7SharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [TabRestApiV7SharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [TabRestApiV7SharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective]
})
export class TabRestApiV7SharedModule {}
