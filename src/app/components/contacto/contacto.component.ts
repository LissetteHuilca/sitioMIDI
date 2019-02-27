import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { NgForm } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';
  
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  private contacto:Contacto;
  optionsSelect: Array<any>;
  ngOnInit(){
    this.contacto = new Contacto();
  }

  constructor(private connectionService: ConexionService) {

  }

  enviarContacto(form: NgForm) {
     
    this.connectionService.sendMessage(form.value).subscribe(() => {
      console.log(form.value);
      alert('Your message has been sent.');
      form.reset();
    }, error => {
      console.log('Error', error);
    });
  }

}
