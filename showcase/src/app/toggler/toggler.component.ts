import { Component } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent {
  togglerHtml = `<button type="button" (click)="toggleMobileMenu()" class="mobile-menu-toggler">
  <span class="dashicons dashicons-menu-alt"></span>
</button>`;

  togglerCss = `.mobile-menu-toggler{
    display: none;
    cursor: pointer;
}
@media screen and (max-width: 782px) {
    .mobile-menu-toggler{
        display: block;
    }
}`;

  togglerMethod = `toggleMobileMenu() {
  document.body.classList.toggle('wp-responsive-open');
}`;
  toggleMobileMenu() {
    document.body.classList.toggle('wp-responsive-open');
  }
}
