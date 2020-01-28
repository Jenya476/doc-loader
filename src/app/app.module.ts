import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocCardComponent } from './components/doc-card/doc-card.component';
import { DocItemComponent } from './components/doc-item/doc-item.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {LoaderComponent} from './components/loader/loader.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    DocCardComponent,
    DocItemComponent,
    TabsComponent,
    LoaderComponent,
    ToolbarComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
