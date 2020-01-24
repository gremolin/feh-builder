import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { StatComponent } from './../stats/stat.component';
import { StatsPanelComponent } from './../stats/stats-panel.component';
import { FehBuilderComponent } from './feh-builder.component';

@NgModule({
    imports: [FormsModule, NgSelectModule, NgbModule, BrowserModule],
    declarations: [FehBuilderComponent, StatsPanelComponent, StatComponent],
    exports: [FehBuilderComponent],
    providers: []
})
export class FehBuilderModule {}
