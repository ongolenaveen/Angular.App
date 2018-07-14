import {Injectable,Inject,InjectionToken} from "@angular/core";
import {Http,Request,RequestMethod,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Risk} from "./Risk.model";
import "rxjs/add/operator/map";
export const REST_URL = new InjectionToken("rest-url");

@Injectable()
export class RisksRestDataSource{

    constructor(private http:Http,@Inject(REST_URL) private baseUrl:string){
    }

    getRisks(page:number,pageSize:number):Observable<Risk[]>{
        let getRisksUrl = this.baseUrl+`Risks?pageNumber=${page}&pageSize=${pageSize}`;
        return this.http.get(getRisksUrl).map(response => response.json());
    } 
}