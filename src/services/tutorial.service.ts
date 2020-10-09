import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs'; 
import { Tutorial } from '../models/tutorial';
import { GlobalTutorials } from './globalTutorials';
import { BusquedaTutorials } from './globalTutorials';


@Injectable()
export class TutorialService{
    public url:string;
    public urlBusqueda:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = GlobalTutorials.url;
        this.urlBusqueda = BusquedaTutorials.url;
    }


    testService(){
		return 'Probando el servicio de Angular';
    }
    
    getTutorials(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'tutorials', {headers: headers});
    }    

    /*getTutorial(description): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.urlBusqueda+description, {headers: headers});
    }*/

}