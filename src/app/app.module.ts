import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitDataService } from './data/unit.data.service';
import { FehBuilderModule } from './feh-builder/feh-builder.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FehBuilderModule],
    providers: [UnitDataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
