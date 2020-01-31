import { Component } from '@angular/core';

import { MergedStat, UnitStats } from '../data/data.types';

@Component({
    selector: 'stats-panel',
    templateUrl: './stats-panel.component.html',
    styleUrls: ['./stats-panel.component.css']
})
export class StatsPanelComponent {
    hardcodedLevel = 40;
    hardcodedRarity = 5;

    selectedUnit: UnitStats;
    // level one values
    /*
    baseHp: number;
    baseAtt: number;
    baseSpd: number;
    baseDef: number;
    baseRes: number;
*/
    baseStats: number[];
    growthStats: number[];

    hp: number;
    att: number;
    spd: number;
    def: number;
    res: number;

    mergeLevel: number;
    asset: number;
    flaw: number;
    flower: number;
    support: number;

    applyUnitStats(unitStats: UnitStats) {
        this.selectedUnit = unitStats;
        this.calculateStats();
    }

    applyMerges(mergeLevel: any) {
        this.mergeLevel = mergeLevel;
        this.calculateStats();
    }

    applyAsset(asset: any) {
        this.asset = asset;
        this.calculateStats();
    }

    applyFlaw(flaw: any) {
        this.flaw = flaw;
        this.calculateStats();
    }

    applyFlower(flower: any) {
        this.flower = flower;
        this.calculateStats();
    }

    applySupport(support: any) {
        this.support = support;
        this.calculateStats();
    }

    calculateStats() {
        this.resetStats();
        this.calculateAssetFlaw();
        this.calculateLevelStats();
        this.calculateMerges();
        this.calculateDragonFlowers();
        this.calculateSummonerSupport();
    }

    resetStats() {
        this.baseStats = [
            this.selectedUnit.baseHp,
            this.selectedUnit.baseAtt,
            this.selectedUnit.baseSpd,
            this.selectedUnit.baseDef,
            this.selectedUnit.baseRes
        ];

        this.growthStats = [
            this.selectedUnit.growthHp,
            this.selectedUnit.growthAtt,
            this.selectedUnit.growthSpd,
            this.selectedUnit.growthDef,
            this.selectedUnit.growthRes
        ];
    }
    calculateAssetFlaw() {
        //console.log('b4 asset/flaw', this.growthStats, this.asset, this.flaw, this.mergeLevel);
        if (this.asset > -1) {
            this.growthStats[this.asset] += 5;
        }

        if (this.flaw > -1 && !(this.mergeLevel > 0)) {
            this.growthStats[this.flaw] -= 5;
        }

        if (this.asset > -1) {
            this.baseStats[this.asset]++;
        }

        if (this.flaw > -1 && !(this.mergeLevel > 0)) {
            this.baseStats[this.asset]--;
        }

        //console.log('af asset/flaw', this.growthStats, this.asset, this.flaw);
    }

    calculateLevelStats() {
        const rarityMod = 0.79 + 0.07 * this.hardcodedRarity;
        const levelMod = (this.hardcodedLevel - 1) / 100;
        //console.log('this.hardcodedRarity', this.hardcodedRarity);
        //console.log('this.hardcodedRarity', 0.07 * this.hardcodedRarity);
        //console.log('rarityMod', rarityMod);
        //console.log('levelMod', levelMod);

        this.hp = this.baseStats[0] + Math.trunc(levelMod * Math.trunc(this.growthStats[0] * rarityMod));
        this.att = this.baseStats[1] + Math.trunc(levelMod * Math.trunc(this.growthStats[1] * rarityMod));
        this.spd = this.baseStats[2] + Math.trunc(levelMod * Math.trunc(this.growthStats[2] * rarityMod));
        this.def = this.baseStats[3] + Math.trunc(levelMod * Math.trunc(this.growthStats[3] * rarityMod));
        this.res = this.baseStats[4] + Math.trunc(levelMod * Math.trunc(this.growthStats[4] * rarityMod));
    }

    calculateMerges() {
        const highestStat = this.findHighestStat(0);
        const secondStat = this.findHighestStat(1);
        const thirdStat = this.findHighestStat(2);
        const fourthStat = this.findHighestStat(3);
        const fifthStat = this.findHighestStat(4);

        //console.log('highestStat', highestStat);
        //console.log('secondStat', secondStat);
        //console.log('thirdStat', thirdStat);
        //console.log('fourthStat', fourthStat);
        //console.log('fifthStat', fifthStat);

        if (this.mergeLevel >= 1) {
            highestStat();
            secondStat();

            if (this.flaw === -1 && this.asset === -1) {
                highestStat();
                secondStat();
                thirdStat();
            }
        }
        if (this.mergeLevel >= 2) {
            thirdStat();
            fourthStat();
        }

        if (this.mergeLevel >= 3) {
            fifthStat();
            highestStat();
        }

        if (this.mergeLevel >= 4) {
            secondStat();
            thirdStat();
        }

        if (this.mergeLevel >= 5) {
            fourthStat();
            fifthStat();
        }

        if (this.mergeLevel >= 6) {
            highestStat();
            secondStat();
        }

        if (this.mergeLevel >= 7) {
            thirdStat();
            fourthStat();
        }
        if (this.mergeLevel >= 8) {
            fifthStat();
            highestStat();
        }

        if (this.mergeLevel >= 9) {
            secondStat();
            thirdStat();
        }

        if (this.mergeLevel >= 10) {
            fourthStat();
            fifthStat();
        }
    }

    findHighestStat(position: number) {
        const stats = Object.assign([], this.baseStats); //[this.baseHp, this.baseAtt, this.baseSpd, this.baseDef, this.baseRes];
        stats.sort((n1, n2) => n2 - n1);

        // In the case of a tie between two level 1 stats, the first one in the listed order will be chosen, HP > Atk > Spd > Def > Res.
        const statToFind = stats[position];
        const mergeStat = {
            rank: position + 1,
            statToFind: stats[position],
            instances: stats.filter(x => x === statToFind).length,
            amountHigher: stats.filter(x => x > statToFind).length,
            foundStats: 0
        };

        //console.log('this.baseStats', this.baseStats);
        //console.log('stats', stats);
        //console.log('statToFind', statToFind);
        //console.log('mergeStat', mergeStat);

        // TODO use the const stats array?
        if (this.baseStats[0] === statToFind && this.resolveTies(mergeStat)) {
            return this.addToHp.bind(this);
        }
        if (this.baseStats[1] === statToFind && this.resolveTies(mergeStat)) {
            return this.addToAtt.bind(this);
        }
        if (this.baseStats[2] === statToFind && this.resolveTies(mergeStat)) {
            return this.addToSpd.bind(this);
        }
        if (this.baseStats[3] === statToFind && this.resolveTies(mergeStat)) {
            return this.addToDef.bind(this);
        }
        if (this.baseStats[4] === statToFind && this.resolveTies(mergeStat)) {
            return this.addToRes.bind(this);
        }

        return null;
    }

    resolveTies(mergeStat: MergedStat): boolean {
        if (mergeStat.instances > 1) {
            mergeStat.foundStats++;
            if (mergeStat.rank === mergeStat.foundStats + mergeStat.amountHigher) {
                return true;
            }

            return false;
        }
        return true;
    }

    calculateDragonFlowers() {
        const highestStat = this.findHighestStat(0);
        const secondStat = this.findHighestStat(1);
        const thirdStat = this.findHighestStat(2);
        const fourthStat = this.findHighestStat(3);
        const fifthStat = this.findHighestStat(4);
        //console.log('this.flower', this.flower);

        if (this.flower >= 1) {
            highestStat();
        }
        if (this.flower >= 2) {
            secondStat();
        }
        if (this.flower >= 3) {
            thirdStat();
        }
        if (this.flower >= 4) {
            fourthStat();
        }
        if (this.flower >= 5) {
            fifthStat();
        }
        if (this.flower >= 6) {
            highestStat();
        }
        if (this.flower >= 7) {
            secondStat();
        }
        if (this.flower >= 8) {
            thirdStat();
        }
        if (this.flower >= 9) {
            fourthStat();
        }
        if (this.flower >= 10) {
            fifthStat();
        }
    }

    calculateSummonerSupport() {
        //console.log('this.support', this.support);
        if (this.support >= 1) {
            this.addToHp();
            this.addToHp();
            this.addToHp();
            this.addToRes();
            this.addToRes();
        }
        if (this.support >= 2) {
            this.addToHp();
            this.addToDef();
            this.addToDef();
        }
        if (this.support >= 3) {
            this.addToSpd();
            this.addToSpd();
        }
        if (this.support >= 4) {
            this.addToHp();
            this.addToAtt();
            this.addToAtt();
        }
    }

    addToHp() {
        this.hp++;
        //console.log('this.hp', this.hp);
    }

    addToAtt() {
        this.att++;
        //console.log('this.att', this.att);
    }

    addToSpd() {
        this.spd++;
        //console.log('this.spd', this.spd);
    }

    addToDef() {
        this.def++;
        //console.log('this.def', this.def);
    }

    addToRes() {
        this.res++;
        //console.log('this.res', this.res);
    }
}
