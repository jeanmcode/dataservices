import { Persona } from "./persona.model";

export class PersonasService{

    //Declaramos un arreglo de tipo Persona y le añadimos dos nuevos objetos
    personas: Persona[] = [
        new Persona('Juan', 'perez'),
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'LAra'),
      ];


      //le pasamos el objeto al metodo 
  PersonaAgregada(persona: Persona) {

    //agregamos la nueva persona
    this.personas.push(persona);

    console.log(this.personas);

  }

}