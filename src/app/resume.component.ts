import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-resume',
    styleUrls: ['resume.component.scss'],
    templateUrl: 'resume.component.html',
})
export class ResumeComponent {
    constructor(
        modelService: ModelService,
    ) {
    }
}
