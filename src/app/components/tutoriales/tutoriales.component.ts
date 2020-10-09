import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../../models/tutorial'
import { TutorialService } from '../../../services/tutorial.service';
import { GlobalTutorials } from '../../../services/globalTutorials';
import { BusquedaTutorials } from '../../../services/globalTutorials';


@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.styl'],  
  providers: [TutorialService]
})
export class TutorialesComponent implements OnInit {
  public tutoriales: Tutorial[];
  public url: string;
  public urlBusqueda: string;

  constructor(
    private _tutorialService: TutorialService
  ) { 
    this.url = GlobalTutorials.url;
    this.urlBusqueda = BusquedaTutorials.url;
  }

  ngOnInit() {
    this.getTutorials();
  }


  getTutorials(){
    this._tutorialService.getTutorials().subscribe(
      response => {
        /*this.tutoriales = response;
        console.log(this.tutoriales);*/
        if (response) {          
          this.tutoriales = response;
        } 
      },
      error => {
        console.log(<any>error);
      }
    )
  }


}
