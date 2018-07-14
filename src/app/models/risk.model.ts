
import {Owner} from "./owner.model"

export class Risk{
    constructor(public Id? :number, 
        public Title?:string , 
        public Score?:number, 
        public Status?:string,
        public Owner?:Owner){
    }
}


