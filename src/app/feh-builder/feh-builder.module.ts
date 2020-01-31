import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { StatComponent } from '../stat/stat.component';
import { StatsPanelComponent } from '../stat/stats-panel.component';
import { SkillComponent } from './../skill/skill.component';
import { SkillsPanelComponent } from './../skill/skills-panel.component';
import { FehBuilderComponent } from './feh-builder.component';

@NgModule({
    imports: [FormsModule, NgSelectModule, NgbModule, BrowserModule],
    declarations: [FehBuilderComponent, SkillsPanelComponent, SkillComponent, StatsPanelComponent, StatComponent],
    exports: [FehBuilderComponent],
    providers: []
})
export class FehBuilderModule {}
