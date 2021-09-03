import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.page.html',
  styleUrls: ['./ejemplo2.page.scss'],
})
export class Ejemplo2Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var valor = this.activatedRoute.snapshot.paramMap.get('valor');
    //alert('recupero parametro:' + valor);
    this.buscar(valor); //vaya al metodo BUSCAR*****
  }

  persona = new FormGroup({
    elRut: new FormControl(''),
    elNombreCompleto: new FormControl(''),
    laEdad: new FormControl('')
  });

  perso:any={
    rut:'23456',
    nombre:'jose pedro',
    edad:'32'
  }

  //METODO BUSCAR**************
  buscar(rut: String) {
    var datos = localStorage.getItem('misdatos');
    //reemplazamos datos del registro para que se vea mas bonito, sin comas, etc!
    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(";");
    
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      if (la_persona.rut == rut) {
        this.perso={
          rut: la_persona.rut,
          nombre: la_persona.nombre,
          edad: la_persona.edad
        };
      }
    }
  }
}

