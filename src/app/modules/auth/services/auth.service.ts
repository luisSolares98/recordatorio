import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable()
export class AuthService{
    direccion:string="http://192.168.137.36";
    constructor(private http:HttpClient){}
    public login(email:string, password:string){
        //https://reqres.in/api/register
        //http://192.168.1.18/recordatorio/api/user/get
        return this.http.post(this.direccion+"/recordatorio/api/user/get",JSON.stringify({
            usuario:email,
            password:password
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