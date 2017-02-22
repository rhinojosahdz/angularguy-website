import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { ModelService } from './model.service';
@Component({
    selector: 'bob-projects',
    styleUrls: ['projects.component.scss'],
    templateUrl: 'projects.component.html',
})
export class ProjectsComponent {
    constructor(
        public modelService: ModelService,
    ) {
    }
}
