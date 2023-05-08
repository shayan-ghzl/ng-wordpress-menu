import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  constructor(
    private _snackBar: MatSnackBar,
  ){}

  target!: HTMLElement;
  timeout: any;
  copy(copyText: string, e: any) {
    this.target?.classList.remove('copied');
    this.target = e.currentTarget;
    let target = e.currentTarget;
    target.classList.add('copied');
    this.openSnackBar('Text copied : ' + copyText);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      target.classList.remove('copied');
    }, 5000);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }
  
}
