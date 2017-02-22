import { Injectable, Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'like',
})
@Injectable()
export class LikePipe implements PipeTransform {
    public transform(items: any[], field: string, value: string): any[] {
        return _.filter(items, i => new RegExp(value, 'i').test(i[field]));
    }
}
