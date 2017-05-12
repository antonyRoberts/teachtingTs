import { OnDestroy, ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Gender } from '../../_classes/gender.enum';

@Pipe({ name: 'genderEnum'})
export class GenderPipe implements PipeTransform{
    
    public transform(genderIndex:number){
        console.log('GenderIndex', genderIndex)
        return Gender[genderIndex]
    }
}