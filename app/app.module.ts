import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { varIndexService }    from './services/var-by-index.service';
import { varNameService }    from './services/var-by-name.service';
import { jsonLoaderService }    from './services/json-loader.service';

import { HttpModule } from '@angular/http';


@NgModule({
    imports: [ BrowserModule, HttpModule],
  declarations: [
    AppComponent,
      HighlightDirective,
  ],
    bootstrap: [ AppComponent ],
    providers: [jsonLoaderService, varNameService, varIndexService]
})
export class AppModule {
    constructor(private varIndex: varIndexService, private varName: varNameService) {
    }

    ngOnInit() {
        this.varName.getPosition('hello')
    }

}
