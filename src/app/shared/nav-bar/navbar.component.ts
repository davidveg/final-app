
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl : 'navbar.template.html'
})
export class NavBarComponent {
    constructor(private _router: Router){
    }


}