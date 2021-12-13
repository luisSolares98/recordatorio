import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import * as Toast from 'nativescript-toast';
import { ItemService } from './item.service';
import { Nota } from './nota';
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "ns-details",
    moduleId: module.id,
    providers:[ItemService],
    templateUrl: "./home.detail.html",
})
export class HomeDetail implements OnInit {
    item: Nota;
    public items: Nota[];
    titulo:string;
    the_nota:string;
    id:number;
    id_usuario:number;
    constructor( private itemService: ItemService,
        private route: ActivatedRoute,private router:RouterExtensions){
    }
    public onClick(){
        
    }
    ngOnInit(): void {
        this.id=+this.route.snapshot.params["id"];
        this.id_usuario=+this.route.snapshot.params["id_usuario"];
        //console.log(id_usuario);
        this.itemService.getList(this.id_usuario).subscribe(response=> 
            (
                this.itemService.not = JSON.stringify(response),
                this.itemService.notas = JSON.parse(this.itemService.not),
                this.items=this.itemService.getItems(),
                this.item= this.items.filter(item => item.id === this.id)[0]
            ),error=> console.log(error));;
    }
    onSave():void{
        this.item.title=this.titulo+"";
        this.item.note=this.the_nota+"";
        /*if(this.titulo==""){
            Toast.makeText("ingrese un titulo").show();
            return;
        }
        if(this.the_nota==""){
            Toast.makeText("ingrese un titulo").show();
            return;
        }*/
        this.itemService.update_nota(this.item).subscribe(
            response=>{
                this.router.navigate(["/list", this.item.id_usuario],{clearHistory:true});
        },
        error=> {
            console.log(error);
        });
    }
    onDelete():void{
        const id_usuario=+this.route.snapshot.params["id_usuario"];
       this.itemService.deleteNota_id(this.item.id).subscribe(response=> {
        this.router.navigate(["/list",id_usuario],{clearHistory:true});
       },error=> {console.log(error);});
    }
 }
