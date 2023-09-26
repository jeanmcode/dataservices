import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingServices } from '../LoggingService.service';
import { PersonasService } from '../personas.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LoggingServices, PersonasService] //importamos el servicio como proveedor
})
export class FormularioComponent {

    //ombreInput: string='';
    //apellidoInput: string='';

    //el output es para enviar info  al componente padre y el eventEmitter es una clase que nos ayuda 
    //a transmitir la info hacia el componente padre y hay que especificar el tipo de info que se
    //transmitirá
   // @Output() personaCreada = new EventEmitter<Persona>();


    //desactivamos el strictpropertyinitializtation para que no de error
    @ViewChild('nombreInput') nombreInput: ElementRef;
    @ViewChild('apellidoInput') apellidoInput: ElementRef;


    //realizamos una inyeccion de dependencias desde el constructor, la inyeccion de dependencias
    //es como una instancia implicita de una clase
    constructor(private LoggingService: LoggingServices, private PersonaServices:PersonasService){}

    //local references
    AgregarPersona(){

      //extraemos el valor del input del html con viewchild
    let persona1= new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);

    //this.personas.push(persona1);

    //invocamos el servicio(clase) y le pasamos un mensaje para imprimir(se lo pasamos al metodo que esta en el servicio))
    this.LoggingService.enviaMensajeAConsola("enviamos persona :"+persona1.nombre +" "+ persona1.apellido);


    this.PersonaServices.PersonaAgregada(persona1);

    //llamamos el objeto que emitira la info hacia el objeto padre y le pasamos persona1(info del form)
   // this.personaCreada.emit(persona1);

  }

}
