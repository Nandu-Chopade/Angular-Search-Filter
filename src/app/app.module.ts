import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UserComponent } from './Assignment/user.component';
import { UserSearchPipe } from './Assignment/userFilter.pipe';






 
@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        UserComponent,
        UserSearchPipe
       
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule {}