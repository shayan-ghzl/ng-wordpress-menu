import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.scss']
})
export class TestRouteComponent implements OnInit {

  pageName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.pageName = this.activatedRoute.snapshot.data['pageTitle'];
  }

  toggleMobileMenu() {
    document.body.classList.toggle('wp-responsive-open');
  }

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
      duration: 7000
    });
  }
}
