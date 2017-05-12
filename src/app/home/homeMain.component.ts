//src/app/home/homeMain.component.ts

//The only thing this Container is doing is providing the space for the router outlet for Home Router module.
import { Component,
         OnInit } from '@angular/core';

@Component({
    selector: 'home-main',
    template: `<router-outlet></router-outlet>`
})
export class HomeMainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}