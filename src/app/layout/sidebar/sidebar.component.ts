import { Component, EventEmitter, HostListener, OnInit, Output, Input, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NgWpMenu } from 'src/app/models/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @Output() onMenuToggle = new EventEmitter();
  @Input() menu!: NgWpMenu;
  

  constructor() {
    // TODO: add menu states and breakpoints
    // document.body.classList.add('folded');
    // document.body.classList.add('auto-fold');
    // document.body.classList.add('no-js');
    // document.body.classList.add('menu-over-content');
    // this will open menu in max-width:600px by toggle button
    // document.body.classList.add('wp-responsive-open');
    // document.body.classList.add('upper-space');
    // document.body.classList.add('focus-off');
    // document.body.classList.add('focus-on');
    // document.body.classList.add('is-fullscreen-mode');
    // document.body.classList.add('sub-open');
    // document.body.classList.add('opensub');
  }

  ngOnInit(): void {
    this.onResize();
  }

  ngAfterViewInit(): void {
    document.body.classList.add(this.menu.menuDirection || 'ltr');
    document.body.classList.add('sticky-menu');
  }


  getViewportWidth() {
    let viewportWidth: boolean | number = false;

    if (window.innerWidth) {
      // On phones, window.innerWidth is affected by zooming.
      viewportWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);
    }
    return viewportWidth;
  }

  wpResponsiveActive = false;
  windowResizeTimeout: any;
  @HostListener('window:resize')
  onResize() {
    clearTimeout(this.windowResizeTimeout);
    this.windowResizeTimeout = setTimeout(this.triggerEvent.bind(this), 200);
  }

  toggleMenu() {
    this.onMenuToggle.emit();
    let viewportWidth = this.getViewportWidth() || 961;
    if (viewportWidth <= 960) {
      if (document.body.classList.contains('auto-fold')) {
        document.body.classList.remove('folded');
      }
      document.body.classList.toggle('auto-fold');
    } else {
      document.body.classList.toggle('folded');
    }
  }

  triggerEvent() {
    let viewportWidth = this.getViewportWidth();
    if (!viewportWidth) {
      return;
    }

    if (viewportWidth <= 782) {
      this.wpResponsiveActive = true;
      document.body.classList.add('auto-fold');
    } else {
      this.wpResponsiveActive = false;
    }
    // TODO: add overlay state to menu
    // if (viewportWidth <= 480) {
    // } 
  }

}
