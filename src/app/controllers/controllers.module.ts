import {NgModule} from "@angular/core";
import {RiskComponent} from "./risk.component";
import {BrowserModule} from "@angular/platform-browser";
import {ModelModule} from  "../models/model.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material.module";
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule,MatSortModule } from '@angular/material';

@NgModule({
    imports:[BrowserModule,ModelModule,FormsModule,RouterModule,MatFormFieldModule
        ,MaterialModule,MatTableModule,CdkTableModule,MatPaginatorModule,MatSortModule],
    declarations:[RiskComponent],
    exports:[RiskComponent]
})

export class ControllersModule{

}