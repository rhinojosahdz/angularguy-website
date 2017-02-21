import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-hamburger-button',
    styleUrls: ['hamburger-button.component.scss'],
    templateUrl: 'hamburger-button.component.html',
})
export class HamburgerButtonComponent {
    constructor(
        modelService: ModelService,
    ) {
    }
}
