import { Component, Input, OnInit } from '@angular/core'; //importamos el decorador inpút
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonasService]
})
export class PersonaComponent  {
  
  
  //agregamos el decorador input para poder recibir los datos de app-component
  @Input() persona: Persona= new Persona('',''); //inicializamos el objeto persona que recibira los datos del app-component.html
  @Input() indice: number= 0;

   hacer(){

    console.log(this.persona);

   }
  
}
