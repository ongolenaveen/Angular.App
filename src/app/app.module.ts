import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { ModelModule } from "./models/model.module";
import { ControllersModule } from "./controllers/controllers.module";
import { RouterModule } from "@angular/router";
import { RiskComponent } from "./controllers/risk.component";
import { ContactsRepositoryResolver } from "./models/repository.resolver"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,BrowserAnimationsModule,MaterialModule,ModelModule
    ,ControllersModule,RouterModule.forRoot([
      { path: "Risks", component: RiskComponent,resolve:{model:ContactsRepositoryResolver}  },
      { path: "**", redirectTo: "/Risks",resolve:{model:ContactsRepositoryResolver} }
      ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
