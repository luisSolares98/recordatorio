import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.componet';

import { GridViewModule } from "nativescript-grid-view/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HomeDetail } from './home/home.detail';
import { CreateComponent } from './create_nota/create.component';

const route:Routes=[
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"registro",
        component:RegistroComponent
    },
    {
        path:"list/:id",
        component:HomeComponent
    },
    {
        path:"item/:id/:id_usuario",
        component:HomeDetail
    },
    {
        path:"create/:id_usuario",
        component:CreateComponent
    }
]
@NgModule({
    imports: [
        GridViewModule,
        CommonModule,
        NativeScriptUIListViewModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(route)
    ],
    declarations: [LoginComponent,RegistroComponent,HomeComponent,HomeDetail,CreateComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AuthModule { }
