import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page/page';
import { Nota } from './nota';
import { ItemService } from './item.service';
import { ActivatedRoute } from "@angular/router";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { EventData } from "tns-core-modules/data/observable";
import { RouterExtensions } from "nativescript-angular/router";
import * as Toast from 'nativescript-toast';
@Component({
    moduleId: module.id,
    providers:[ItemService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    public items: Nota[];
    isBusy: boolean = true;
    id:number=0;
    constructor(private page:Page,private itemService: ItemService,
        private route: ActivatedRoute,private router:RouterExtensions) {
        //this.page.actionBarHidden=true;
    }   
    onBusyChanged(args: EventData) {
        let indicator: ActivityIndicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }
    public ngOnInit(): void {
        this.id=+this.route.snapshot.params["id"];
        this.itemService.getList(this.id).subscribe(response=> 
            (
                this.itemService.not = JSON.stringify(response),
                this.itemService.notas = JSON.parse(this.itemService.not),
                //console.log(this.itemService.notas),
                this.items=this.itemService.getItems(),
                this.isBusy=false
            ),error=> console.log(error));;
    }
    public templateSelector(item: Nota) {
        return item.id;
    }
    public onClick(){
        //Toast.makeText(this.items[0].id_usuario+"","long").show();
        Toast.makeText(this.id+"").show();
        this.router.navigate(["/create",this.id]);
    }
    public onExit(){
        //this.router.back();
        this.router.navigate([""]);

    }
}
