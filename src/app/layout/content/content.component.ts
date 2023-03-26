import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  openMenu(e:any) {
    e.preventDefault();
    document.body.classList.toggle('wp-responsive-open')
  }

}
