import {Injectable} from "@angular/core";
import {Risk} from "./risk.model";
import {Observable} from "rxjs/Observable";
import {RisksRestDataSource} from "./rest.datasource";

@Injectable()
export class RisksRepository{
    private risks:Risk[];

    constructor(private risksDataSource:RisksRestDataSource){
        this.risksDataSource.getRisks(1,100).subscribe(
            (data)=>{
                this.risks =data;
            });
    }
    
    public getRisks():Risk[]{
        return this.risks;
    };
}