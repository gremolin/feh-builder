import { Component, Input } from '@angular/core';

@Component({
    selector: 'stat-component',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.css']
})
export class StatComponent {
    @Input() statLabel: string;
    @Input() statValue: number;
}
