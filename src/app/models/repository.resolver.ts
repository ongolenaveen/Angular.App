import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/observable";
import {RisksRepository} from "./repository.model";
import {RisksRestDataSource} from "./rest.datasource";
import {Risk} from "./risk.model";

@Injectable()
export class ContactsRepositoryResolver{
    constructor(private repository:RisksRepository, private datasource:RisksRestDataSource){
    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Risk[]>{
            return (this.repository.getRisks() == undefined || this.repository.getRisks().length == 0) ? this.datasource.getRisks(1,100):null;
    }
}