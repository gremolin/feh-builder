import { UnitStats } from './data.types';
import { unitStats } from './unit.stats';

export class UnitDataService {
  statsByUnit = new Map();

  constructor() {
    for (const stats of unitStats) {
      this.statsByUnit.set(stats.key, stats);
    }
  }

  getStatsByUnit(unit: string): UnitStats {
    console.log(unit);
    console.log(this.statsByUnit);
    return this.statsByUnit.get(unit);
  }
}
