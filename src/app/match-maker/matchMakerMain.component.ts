import { Component,
        OnInit } from '@angular/core';
import { Router, } from '@angular/router';

@Component({
    selector: 'match-maker-main',
    template: ` Match Maker Module <br/>
                <a [routerLink]="['/matchMaker/makeABaby']">Make A Baby</a>
                <a [routerLink]="['/matchMaker/getMarried']">Get Married</a>
                <router-outlet></router-outlet>`
})
export class MatchMakerMainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}