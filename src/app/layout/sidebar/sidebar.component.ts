import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {

  menuModel = {
    'menuName': 'فهرست اصلی',
    'collapseLable': 'جمع کردن فهرست',
    'menuStates': [],
    'menuGroups':
      [
        [
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/home",
            "routerLinkActive": "",
            "icon": "dashicons-dashboard",
            "badge": "",
            "name": "پیشخوان",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/home",
                "routerLinkActive": "",
                "name": "خانه",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/updates",
                "routerLinkActive": "",
                "name": "به‌روزرسانی‌ها",
                "badge": ""
              },
            ]
          }
        ],
        [
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/posts",
            "routerLinkActive": "",
            "icon": "dashicons-admin-post",
            "badge": "",
            "name": "نوشته‌ها",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/posts",
                "routerLinkActive": "",
                "name": "همهٔ نوشته‌ها",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/add-post",
                "routerLinkActive": "",
                "name": "افزودن نوشته",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/categories",
                "routerLinkActive": "",
                "name": "دسته‌ها",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/tags",
                "routerLinkActive": "",
                "name": "برچسب‌ها",
                "badge": ""
              },
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/media",
            "routerLinkActive": "",
            "icon": "dashicons-admin-media",
            "badge": "",
            "name": "رسانه",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/library",
                "routerLinkActive": "",
                "name": "کتابخانه",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/add-new",
                "routerLinkActive": "",
                "name": "افزودن جدید",
                "badge": ""
              }
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/pages",
            "routerLinkActive": "",
            "icon": "dashicons-admin-page",
            "badge": "",
            "name": "برگه‌ها",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/all-pages",
                "routerLinkActive": "",
                "name": "همهٔ برگه‌ها",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/add-new",
                "routerLinkActive": "",
                "name": "افزودن جدید",
                "badge": ""
              }
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/comments",
            "routerLinkActive": "",
            "icon": "dashicons-admin-comments",
            "badge": "",
            "name": "دیدگاه‌ها",
            "isOpen": false,
            "children": []
          }
        ],
        [
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/preview",
            "routerLinkActive": "",
            "icon": "dashicons-admin-appearance",
            "badge": "",
            "name": "نمایش",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/theme",
                "routerLinkActive": "",
                "name": "پوسته",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/editor",
                "routerLinkActive": "",
                "name": "ویرایشگر",
                "badge": "آزمایشی"
              },
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/plugins",
            "routerLinkActive": "",
            "icon": "dashicons-admin-plugins",
            "badge": "2",
            "name": "افزونه‌ها",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/installed-plugins",
                "routerLinkActive": "",
                "name": "افزونه‌های نصب‌شده",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/add",
                "routerLinkActive": "",
                "name": "افزودن",
                "badge": ""
              }
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/users",
            "routerLinkActive": "",
            "icon": "dashicons-admin-users",
            "badge": "",
            "name": "کاربران",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/all-users",
                "routerLinkActive": "",
                "name": "همه کاربران",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/add",
                "routerLinkActive": "",
                "name": "افزودن",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/user-id",
                "routerLinkActive": "",
                "name": "شناسنامه",
                "badge": ""
              }
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/tools",
            "routerLinkActive": "",
            "icon": "dashicons-admin-tools",
            "badge": "",
            "name": "ابزارها",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/all-tools",
                "routerLinkActive": "",
                "name": "ابزارهای دردسترس",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/import",
                "routerLinkActive": "",
                "name": "درون‌ریزی",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/export",
                "routerLinkActive": "",
                "name": "برون‌بری",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/health",
                "routerLinkActive": "",
                "name": "سلامت سایت",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/export-personals",
                "routerLinkActive": "",
                "name": "برون‌بری دادهٔ شخصی",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/clean-personals",
                "routerLinkActive": "",
                "name": "پاک‌سازی اطلاعات شخصی",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/theme-editor",
                "routerLinkActive": "",
                "name": "ویرایشگر پرونده پوسته",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/plugin-editor",
                "routerLinkActive": "",
                "name": "ویرایشگر پرونده افزونه",
                "badge": ""
              }
            ]
          },
          {
            "type": "menu-item",
            "addClass": "",
            "routerLink": "/settings",
            "routerLinkActive": "",
            "icon": "dashicons-admin-settings",
            "badge": "",
            "name": "تنظیمات",
            "isOpen": false,
            "children": [
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/public",
                "routerLinkActive": "",
                "name": "عمومی",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/write",
                "routerLinkActive": "",
                "name": "نوشتن",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/read",
                "routerLinkActive": "",
                "name": "خواندن",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/discussion",
                "routerLinkActive": "",
                "name": "گفت‌وگو",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/media",
                "routerLinkActive": "",
                "name": "رسانه",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/permalink",
                "routerLinkActive": "",
                "name": "پیوندهای یکتا",
                "badge": ""
              },
              {
                "type": "menu-sub-item",
                "addClass": "",
                "routerLink": "/privacy",
                "routerLinkActive": "",
                "name": "حریم خصوصی",
                "badge": ""
              },
            ]
          },
        ],
      ],
  };


  isActive = false;
  constructor() {
    // document.body.classList.add('folded');
    // document.body.classList.add('auto-fold');
    // document.body.classList.add('no-js');
    // document.body.classList.add('menu-over-content');
    // document.body.classList.add('wp-responsive-open');
    document.body.classList.add('rtl');
    document.body.classList.add('sticky-menu');
    // document.body.classList.add('upper-space');
    // document.body.classList.add('focus-off');
    // document.body.classList.add('focus-on');
    // document.body.classList.add('is-fullscreen-mode');
    // document.body.classList.add('sub-open');
    // document.body.classList.add('opensub');
  }

  getViewportWidth() {
    let viewportWidth: boolean | number = false;

    if (window.innerWidth) {
      // On phones, window.innerWidth is affected by zooming.
      viewportWidth = Math.max(window.innerWidth, document.documentElement.clientWidth);
    }

    return viewportWidth;
  }

  toggleMenu() {
    let viewportWidth = this.getViewportWidth() || 961;

    if (viewportWidth <= 960) {
      if (document.body.classList.contains('auto-fold')) {
        document.body.classList.remove('folded');
      }
      document.body.classList.toggle('auto-fold');
    } else {
      document.body.classList.toggle('folded')
    }
  }

}
