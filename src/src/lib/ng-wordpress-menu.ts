import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output, Input, ViewEncapsulation, AfterViewInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgWpMenu } from './menu';

@Component({
  selector: 'ng-wordpress-menu',
  template: `
<ng-template #listItemTemplate let-item let-index="index" let-childLength="childLength">
  <li
  [class]="item.addClass"
  (mouseenter)="item.isOpen = !wpResponsiveActive"
  (mouseleave)="item.isOpen = false"
  [routerLinkActive]="childLength ? 'wp-has-current-submenu wp-menu-open' : 'current'" 
  #exportedItemRouterLinkActive="routerLinkActive"
    [ngClass]="{ 'selected': wpResponsiveActive && item.isSelected, 'menu-top': true, 'wp-not-current-submenu': !exportedItemRouterLinkActive.isActive && childLength, 'wp-has-submenu': childLength, 'open-sub': !wpResponsiveActive && item.isOpen, 'wp-first-item':index === 0}">
    <a 
    (click)="item.isSelected = !item.isSelected"
    [routerLink]="(wpResponsiveActive) ? null : item.routerLink"
    routerLinkActive
    #exportedAnchorRouterLinkActive="routerLinkActive"
    [ngClass]="{'current':(exportedAnchorRouterLinkActive.isActive && childLength) || (exportedItemRouterLinkActive.isActive && childLength === 0),'wp-has-current-submenu wp-menu-open':(exportedAnchorRouterLinkActive.isActive && childLength) || (exportedItemRouterLinkActive.isActive && childLength), 'menu-top': true, 'wp-not-current-submenu': !exportedAnchorRouterLinkActive.isActive && !exportedItemRouterLinkActive.isActive && childLength, 'wp-has-submenu': childLength, 'open-sub': !wpResponsiveActive && item.isOpen, 'wp-first-item':index === 0}"
      [attr.aria-haspopup]="childLength">
      <div class="wp-menu-image dashicons-before" *ngIf="item.icon as icon" [class]="icon" 
        [attr.aria-hidden]="!item.isOpen"></div>
      <div class="wp-menu-name">{{item.name}}<span class="menu-counter" *ngIf="item.badge as badge">{{badge}}</span></div>
    </a>
    <ul *ngIf="childLength"
    [ngClass]="{ 'wp-submenu wp-submenu-wrap': true, 'sub-open': !wpResponsiveActive && item.isOpen}">
 
      <li class="wp-submenu-head" [routerLink]="[item.routerLink]" [attr.aria-hidden]="!item.isOpen">{{item.name}}<span class="menu-counter" *ngIf="item.badge as badge">{{badge}}</span></li>
      <li 
      *ngFor="let child of item.children;let childIndex= index"
      [ngClass]="{'wp-first-item': childIndex === 0}"
      [routerLinkActive]="['current', child.routerLinkActive]" 
      >
        <a 
        (focus)="item.isOpen = true" (blur)="item.isOpen = false"
        [routerLink]="[child.routerLink]"
        [routerLinkActive]="['current', child.routerLinkActive]" 
        [ngClass]="{'wp-first-item': childIndex === 0 }"
        >{{child.name}}<span class="menu-counter" *ngIf="child.badge as badge">{{badge}}</span></a>
      </li>
    </ul>
  </li>
</ng-template>

<ng-template #ulListTemplate let-menuGroup let-groupIndex="groupIndex">
  <ng-template ngFor let-item let-index="index"  [ngForOf]="menuGroup">
    <ng-container *ngTemplateOutlet="listItemTemplate;context:{$implicit: item, index: index, childLength:item.children.length}">
    </ng-container>
  </ng-template>
  <li *ngIf="groupIndex != menu.menuGroups.length - 1" class="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
    <div class="separator"></div>
  </li>
</ng-template>

<div id="adminmenumain" role="navigation" [attr.aria-label]="menu.menuName">
  <div id="adminmenuback"></div>
  <div id="adminmenuwrap">
    <ul id="adminmenu">
      <ng-container *ngIf="true">
        <ng-template ngFor let-menuGroup let-groupIndex="index"  [ngForOf]="menu.menuGroups">
          <ng-container *ngTemplateOutlet="ulListTemplate;context:{$implicit: menuGroup, groupIndex: groupIndex}">
          </ng-container>
        </ng-template>
        <li id="collapse-menu">
          <button type="button" id="collapse-button" [attr.aria-label]="menu.collapseLable" aria-expanded="false" (click)="toggleMenu()">
            <span class="collapse-button-icon" aria-hidden="true"></span>
              <span class="collapse-button-label">{{menu.collapseLable}}</span>
            </button>
        </li>
      </ng-container>
    </ul>
  </div>
</div>
`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dashicons.scss', './ng-wordpress-menu.scss']
})
export class Menu implements OnInit, AfterViewInit {
  
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

@NgModule({
  declarations: [
    Menu
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    Menu
  ]
})
export class NgWordpressMenu { }
