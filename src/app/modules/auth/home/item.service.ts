import { Injectable } from "@angular/core";

import { Nota } from './nota';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
    LoadingIndicator,
    Mode,
    OptionsCommon
  } from 'nativescript-loading-indicator';
@Injectable()
export class ItemService {
    
    public not:string;
    public notas=new Array<Nota>();
    constructor(private http:HttpClient){}
    direcion:string="http://192.168.137.36";
    public getList(id:number){
        return this.http.post(this.direcion+"/recordatorio/api/nota/getList",JSON.stringify({
            id_usuario:id
        }),
        {
            headers:this.headers()
        })
    }

    getItems(): Nota[] {
        //console.log(this.notas);
        return this.notas;
    }

    getItem(id: number): Nota {
        return this.notas.filter(item => item.id === id)[0];
    }
    deleteNota_id(id:number){
        return this.http.post(this.direcion+"/recordatorio/api/nota/delete",JSON.stringify({
            id:id
        }),
        {
            headers:this.headers()
        })
    }
    update_nota( nota:Nota){
        return this.http.post(this.direcion+"/recordatorio/api/nota/update",JSON.stringify({
            id:nota.id,
            title:nota.title,
            note:nota.note
        }),
        {
            headers:this.headers()
        })
    }
    insert_nota(nota:Nota){
        return this.http.post(this.direcion+"/recordatorio/api/nota/insert",JSON.stringify({
            id_usuario:nota.id_usuario,
            title:nota.title,
            note:nota.note
        }),
        {
            headers:this.headers()
        })
    }

    private headers(){
        return new HttpHeaders({
        "content-type":"application/json"
        });
    }
}