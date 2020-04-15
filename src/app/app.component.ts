import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil = 0;
  pola = "";
  hasil_pola = "";
  temp = "";
  i;
  k;
  klikbutton(a, b){
    this.hasil = Math.pow(a,b);
    if(this.hasil % 2 == 0){
      this.pola = "B";
      for (this.i = b;this.i < this.hasil;this.i++){
        this.temp = "";
        for (this.k = 0; this.k < this.i;this.k++){
          this.temp += "*";
        }
        document.getElementById("hasil").append( this.temp);
        document.getElementById("hasil").insertAdjacentHTML('beforeend','<br>');
      }
    }
    else{
      this.pola = "A";
      
    }
  };
}
