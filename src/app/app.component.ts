import { Component } from "@angular/core";

//https://github.com/kf24/nrpparser/blob/master/src/Validation/walidacja.php

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  pesel = "";
  isTrue = false;

  testPesel() {
    return this.isTrue ? "OK" : "NOK";
  }

  checkPesel() {
    this.isTrue = false;

    let _pregPesel = /^([0-9]{11})$/;
    if (!_pregPesel.test(this.pesel) || this.pesel == "00000000000") {
      return false;
    }

    let pPeseltab = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    var peselSuma = 0;

    for (var i = 0; i < 10; i++) {
      peselSuma += parseInt(this.pesel.charAt(i)) * pPeseltab[i];
    }

    peselSuma %= 10;
    //if(peselSuma)

    console.log(peselSuma);
    let validPesel = new RegExp("^([0-9]{10})(" + peselSuma + ")$");
    if (!validPesel.test(this.pesel)) {
      return false;
    }

    //console.log(this.pesel);
    this.isTrue = true;
  }
}
