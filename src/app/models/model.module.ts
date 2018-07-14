import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RisksRepository} from "./repository.model"
import {RisksRestDataSource,REST_URL} from "./rest.datasource";
import {ContactsRepositoryResolver} from "./repository.resolver";

@NgModule({
    imports:[HttpModule],
    providers:[RisksRestDataSource,RisksRepository,ContactsRepositoryResolver,
        {provide:REST_URL,useValue:`http://localhost:64880/api/`}]
})

export class ModelModule{
}
