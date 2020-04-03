import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'cart.html'
})

export class CartPage {

  nocomprados: any[];
  comprados: any[];

  constructor(public navCtrl: NavController) {
    const prod1 = {
      nombre: 'Pan',
      descripcion: 'Pan de masa madre hecho artesanalmente.',
      img: 'assets/imgs/bread.png',
      comprado: true
    };
    const prod2 = {
      nombre: 'Pescado',
      descripcion: 'Pescado procedente de mares gallegos. Disponible en diferentes variedades.',
      img: 'assets/imgs/fish.png',
      comprado: false
    };
    const prod3 = {
      nombre: 'Carne',
      descripcion: 'Carne de cerdo, vaca...',
      img: 'assets/imgs/meat.png',
      comprado: false
    };
    const prod4 = {
      nombre: 'Huevos',
      descripcion: 'Huevos de gallinas camperas.',
      img: 'assets/imgs/egg.png',
      comprado: true
    };
    const prod5 = {
      nombre: 'Café',
      descripcion: 'Café procedente de Colombia.',
      img: 'assets/imgs/coffee.png',
      comprado: false
    };
    const prod6 = {
      nombre: 'Leche',
      descripcion: 'Leche de vaca, procedente de Galicia.',
      img: 'assets/imgs/milk.png',
      comprado: false
    };
    const prod7 = {
      nombre: 'Queso',
      descripcion: 'Queso de cabra',
      img: 'assets/imgs/cheese.png',
      comprado: true
    };
    const prod8 = {
      nombre: 'Manzanas',
      descripcion: 'Manzanas golden',
      img: 'assets/imgs/apple.png',
      comprado: false
    };
    const prod9 = {
      nombre: 'Chocolate',
      descripcion: 'Chocolate con leche',
      img: 'assets/imgs/chocolate.png',
      comprado: false
    };
    const prod10 = {
      nombre: 'Miel',
      descripcion: 'Miel de abejas',
      img: 'assets/imgs/honey.png',
      comprado: false
    };
    const prod11 = {
      nombre: 'Cerveza',
      descripcion: 'Estrella Galicia',
      img: 'assets/imgs/beer.png',
      comprado: false
    };
    const prod12 = {
      nombre: 'Zanahorias',
      descripcion: 'Dos kilos de zanahorias',
      img: 'assets/imgs/carrot.png',
      comprado: false
    };

    this.nocomprados = [];
    this.comprados = [];

    this.comprados.push(prod1);
    this.comprados.push(prod4);
    this.comprados.push(prod7);

    this.nocomprados.push(prod2);
    this.nocomprados.push(prod3);
    this.nocomprados.push(prod5);
    this.nocomprados.push(prod6);
    this.nocomprados.push(prod8);
    this.nocomprados.push(prod9);
    this.nocomprados.push(prod10);
    this.nocomprados.push(prod11);
    this.nocomprados.push(prod12);
  }
  seleccionarCompra(index, nomArray: any[], nomArray2: any[]) {
    nomArray2.push(nomArray[index]);
    nomArray.splice(index, 1);
  }
}
