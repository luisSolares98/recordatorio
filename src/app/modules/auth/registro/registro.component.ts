import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId:module.id,
    templateUrl: "./registro.component.html"
})
export class RegistroComponent { 
    
    constructor(private page:Page){
        this.page.actionBarHidden=true;
    }
    private onClick(){

    } 

}
