import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Skill } from '../data/data.types';

@Component({
    selector: 'skill-component',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent {
    @Output() skillChange = new EventEmitter();
    @Output() skillLevelChange = new EventEmitter();

    @Input() skills;
    @Input() skillLevels;

    @Input() skillLabel: string;
    @Input() skillValue: Skill;

    @Input() containsSkillLevel: boolean;
    @Input() skillLevel: any;
    @Input() skillDesc: string;
    @Input() skillInheritance: string;

    @Input() sp: string;

    @Input() subClearable: boolean;

    changedSelectedSkill($event) {
        this.skillChange.emit($event);
    }

    changedSelectedSkillLevel($event) {
        this.skillLevelChange.emit($event);
    }

    clearEvent() {
        this.changedSelectedSkill(undefined);
    }
}
