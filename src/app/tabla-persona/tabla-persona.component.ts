import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements OnInit {
  personas!: any;
  size = 4;
  page =1; 
  persona: any;
  genero!: string;
  ciudad!: string;
  email!: string;
  galeria = false;
 
  constructor(private galeryServices: ServicesService) { }

  ngOnInit(): void {
    this.datosPersona();
  }

  datosPersona(){
    this.galeryServices.obtenerDatosApi().subscribe(
      datos => {
        this.personas = datos;
        console.log(this.personas);
      }
    )
  }

  mostrarDatosId( nombre: string, genero: string, ciudad: string, email: string){
    this.persona = nombre;
    this.genero = genero;
    this.ciudad = ciudad;
    this.email = email;
    console.log(this.persona);

     
  }
 

  

}
