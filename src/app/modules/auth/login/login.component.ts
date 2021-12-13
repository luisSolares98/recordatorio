import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { AuthService } from '../services/auth.service';
import * as Toast from 'nativescript-toast';
import { RouterExtensions } from "nativescript-angular/router";
import "reflect-metadata";
import { Nota } from '../home/nota';
@Component({
    moduleId:module.id,
    providers:[AuthService],
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    public user:string;
    public pass:string;
    public myObjStr:string;
    public nota:Nota;
    constructor(private page:Page,private auth: AuthService,private router:RouterExtensions){
        this.page.actionBarHidden=true;
    }
    public onLogin(){
        /*if(this.user==""){
            Toast.makeText("ingrese el usuario").show();
            return;
        }
        if(this.pass==""){          
            Toast.makeText("ingrese el password").show();
            return;
        }*/
        this.auth.login("luisito7","75661009").subscribe(response=> 
        (
        this.myObjStr = JSON.stringify(response),
        this.nota = JSON.parse(this.myObjStr),
        this.user="",
        this.pass="",
        this.router.navigate(["/list", this.nota.id])   
        ),
        error=> console.log(error));
    }
 }
