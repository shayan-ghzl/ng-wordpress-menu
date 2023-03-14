import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  isActive = false;
  constructor() {
    // document.body.classList.add('ltr');
    // document.body.classList.add('sticky-menu');
    // document.body.classList.add('folded');
    // document.body.classList.add('no-js');
    // document.body.classList.add('auto-fold');
    // document.body.classList.add('auto-fold');
    // document.body.classList.add('upper-space');
    // document.body.classList.add('focus-off');
    // document.body.classList.add('focus-on');
    // document.body.classList.add('wp-responsive-open');
    // document.body.classList.add('is-fullscreen-mode');
    // document.body.classList.add('sub-open');
    // document.body.classList.add('opensub');
    // document.body.classList.add('menu-over-content');
  }

  stayOpen(){
    this.isActive = true;
  }
  closeIt(){
    this.isActive = false;
  }

}
