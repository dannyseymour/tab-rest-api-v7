import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TabRestApiV7SharedModule } from 'app/shared/shared.module';
import { TabRestApiV7CoreModule } from 'app/core/core.module';
import { TabRestApiV7AppRoutingModule } from './app-routing.module';
import { TabRestApiV7HomeModule } from './home/home.module';
import { TabRestApiV7EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TabRestApiV7SharedModule,
    TabRestApiV7CoreModule,
    TabRestApiV7HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TabRestApiV7EntityModule,
    TabRestApiV7AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TabRestApiV7AppModule {}
