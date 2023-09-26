import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  //Declaramos un arreglo de tipo Persona y le añadimos dos nuevos objetos
  personas: Persona[] = [];

  //inyectamos la dependencia
  constructor(private personasService: PersonasService){}

  //metodo que se ejecuta luego del constructor para inicializar
  ngOnInit(): void {
    
    //le pasamos los datos del servicio a la clase persona(esto con el fin de que se pueda iterar el arreglo ya que en html solo son validas las variables locales por cuestion de acceso )
    this.personas= this.personasService.personas;

  }

  //le pasamos el objeto al metodo 
 // OnPersonaAgregada() {

    //agregamos la nueva persona
   // this.personas.push(persona);

     //this.personasService.PersonaAgregada(persona);

  //}
}
