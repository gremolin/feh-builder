import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Skill } from '../data/data.types';

@Component({
    selector: 'skill-component',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent {
    @Output() skillChange = new EventEmitter();

    @Input() skills;
    skillLevels;

    @Input() skillLabel: string;
    @Input() skillValue: Skill;
    @Input() skillLevel: string;
    @Input() skillDesc: string;
    @Input() skillInheritance: string;

    changedSelectedSkill($event) {
        console.log('changed skill ' + this.skillLabel);
        this.skillChange.emit($event);
    }

    changedSelectedSkillLevel($event) {
        console.log('changed skill Level ' + this.skillLevel);
    }
}
