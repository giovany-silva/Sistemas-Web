import { Component } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja de Confecções';
  name = "";
  quant= "";
  total1="";
  total2 = 0;


  produtos: Array<Produto> = [
    new Produto(1,"Calça Jeans", 100, 0),
    new Produto(2,"Blusa T-Shirt", 60, 5),
    new Produto(3,"Casaco de Couro", 120, 10),
    new Produto(4,"Calça Saruel", 80, 10),
    new Produto(5,"Camiseta M", 45, 20)
  ]

  produto = ""

  addItem() {
    this.produtos.forEach(p => { 
      if (p.descricao == this.produto) {
        p.quant += Number(this.quant)
        p.total = p.quant*(p.valor - p.desconto)
      }
    });
    console.log(this.produtos)
    this.quant="";
    this.produto="";
  }

  fecha() {
    this.produtos.forEach(p => { 
      this.total2 +=p.total;
    });
    this.total1 = "O valor da nota de "+this.name+" é: "+this.total2;
  }

  notZero(num: number):boolean {
    return num !== 0
  }
}
