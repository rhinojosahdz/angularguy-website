import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-contact',
    styleUrls: ['contact.component.scss'],
    templateUrl: 'contact.component.html',
})
export class ContactComponent {
    constructor(
        modelService: ModelService,
    ) {
    }
}
