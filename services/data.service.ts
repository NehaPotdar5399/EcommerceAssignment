import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class DataService {

    currentCategoryNumber = new BehaviorSubject('');

    getCurrentCategoryNumber(){
        return this.currentCategoryNumber;
    }

    setCurrentCategoryNumber(newValue){
        this.currentCategoryNumber = newValue;
    }
}