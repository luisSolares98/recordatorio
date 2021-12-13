import { ActivatedRoute } from '@angular/router';
import * as Toast from 'nativescript-toast';

import { RouterExtensions } from "nativescript-angular/router";
import { Component, OnInit } from "@angular/core";
import { ItemService } from '../home/item.service';
import { Nota } from '../home/nota';
import { Image } from "tns-core-modules/ui/image";
import * as camera from "nativescript-camera";
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
import { error } from 'tns-core-modules/trace/trace';

@Component({
    providers:[ItemService],
    templateUrl: "./create.component.html"
})
export class CreateComponent {
    nota:Nota;
    titulo:string;
    the_nota:string;
    public picture: any;
    constructor( private itemService: ItemService,
        private route: ActivatedRoute,private router:RouterExtensions){
            this.picture = "https://placehold.it/200x200";
    }
    onSave(){
        this.nota=new Nota();
        this.nota.title=this.titulo+"";
        this.nota.note=this.the_nota+"";
        /*if(this.titulo==""){
            Toast.makeText("ingrese un titulo").show();
            return;
        }
        if(this.the_nota==""){
            Toast.makeText("ingrese un titulo").show();
            return;
        }*/
        this.nota.id_usuario=this.route.snapshot.params["id_usuario"];
        this.itemService.insert_nota(this.nota).subscribe(response=>{this.router.navigate(["/list", this.nota.id_usuario],{clearHistory:true});},error=>{});
    }
    onCamara(){
        camera.takePicture().then(picture => {
            this.picture = picture;
        });
        /*camera.requestPermissions().then(
            function success(){
                const option={width: 300,height:300, keepAspectRatio:false,saveToGallery:true};
                camera.takePicture(option).then(ImageAsset =>{
                    console.log("Tamaño:"+ImageAsset.options.width+"x"+ImageAsset.options.height);
                    this.picture=ImageAsset;
                }).catch(error =>{
                    console.log("ERROR "+error);
                });
            },
            function failure(){
                console.log("permiso no aceptado");
            }
        );*/

    }

 }
