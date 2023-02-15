import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
 
  valor: valor = new valor();
  num1:number;
  num2:number;
  relationship:string;
  result: number;

  constructor(public navCtrl: NavController) { 
    
  }
    
  format(){
    this.valor = new valor();
  }
  ngOnInit() {
    
  }
  onSubmit(){
switch (this.relationship) {
  case "+" :
    this.result = this.num1 + this.num2
    break;
    case "-" : 
      this.result = this.num1 - this.num2
      break;
      case "*" :
        this.result = this.num1 * this.num2
        break;
        case "/" :
          this.result = this.num1 / this.num2
          break;
  default:
    break;
} 
console.log(this.result);   
   
  } 
  

}

export class valor {
  v1!: string;
  v2!: string;
 
}
