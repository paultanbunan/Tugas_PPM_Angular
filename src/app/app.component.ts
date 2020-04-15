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
  temp1= "o";
  i;
  j;
  k;
  counter = 1;
  klikbutton(a, b){
    this.hasil = Math.pow(a,b);
    this.temp = "";
      document.getElementById("hasil").innerHTML = this.temp;
    if(this.hasil % 2 == 0){
      this.pola = "B";
      for (this.i = b;this.i < this.hasil;this.i++){
        for (this.k = 0; this.k < this.i;this.k++){
          this.temp += "*";
        }
        document.getElementById("hasil").append( this.temp);
        document.getElementById("hasil").insertAdjacentHTML('beforeend','<br>');
      }
    }
    else{
      this.pola = "A";
      this.temp = "";
      document.getElementById("hasil").innerHTML = this.temp;
      for(this.i = 0;this.i < b; this.i++){
        if (this.i == 0){
          for (this.k = b; this.k > 0;this.k--){
            this.temp += "*";
          }
          document.getElementById("hasil").append( this.temp+ this.temp1);
          document.getElementById("hasil").insertAdjacentHTML('beforeend','<br>');
        }
        else{
          for (this.k = b-1; this.k >= 0;this.k--){
            this.temp = this.temp.substring(0, this.temp.length - 1);
            if(this.counter < a){
              this.temp1 += "o"
              this.counter++;
              document.getElementById("hasil").append( this.temp+this.temp1);
              document.getElementById("hasil").insertAdjacentHTML('beforeend','<br>');
            }
            else{
              document.getElementById("hasil").append( this.temp);
              document.getElementById("hasil").insertAdjacentHTML('beforeend','<br>');
            }
          }
        }
      }
    }
  };
}
