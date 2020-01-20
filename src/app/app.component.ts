import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { units } from './data/unit';
import { UnitDataService } from './data/unit.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'feh-builder';

  units = units;
  selectedUnit: string;
  hp: number;

  constructor(private unitDataService: UnitDataService) {
    of(units)
      .pipe(delay(500))
      .subscribe(items => (this.units = items));
  }

  ngOnInit() {
    of(units)
      .pipe(delay(500))
      .subscribe(items => (this.units = items));

    this.selectedUnit = this.units[0].key;
  }

  onChange($event) {
    console.log($event);
    const foundUnitStats = this.unitDataService.getStatsByUnit($event.key);

    this.hp = foundUnitStats.hp;
  }
}
