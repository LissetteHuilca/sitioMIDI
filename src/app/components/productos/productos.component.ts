import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

@Component({
  
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  
})


export class ProductosComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '../../../assets/img/nuestros_productos.jpg',
      '../../../assets/img/escuela.jpg',
      '../../../assets/img/seres.jpg',
      '../../../assets/img/animales.jpg',
      ];

  }
  

}
