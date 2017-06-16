import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public snackBar: MdSnackBar) { }

  openSnackBar() {
    this.snackBar.open('HUM', '', { duration: 500 });
    this.test().then((v) => {
      alert(v);
    });
  }

  async test() {
    const a = await this.v1();
    const b = await this.v2();
    return a + b;
  }

  v1(): any {
    return new Promise((y, n) => { setTimeout(() => y(5), 2000) });
  }

  v2(): any {
    return new Promise((y, n) => { setTimeout(() => y(15), 2000) });
  }


}
