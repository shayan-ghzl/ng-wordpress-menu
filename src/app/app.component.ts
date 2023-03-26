import { Component } from '@angular/core';
import { NgWpMenu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuModel: NgWpMenu = {
    'menuName': 'فهرست اصلی',
    'collapseLable': 'جمع کردن فهرست',
    'menuDirection': 'rtl',
    'menuGroups':
      [
        [
          {
            "routerLink": "/home",
            "icon": "dashicons-dashboard",
            "name": "پیشخوان",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/home",
                "name": "خانه",
              },
              {
                "routerLink": "/updates",
                "name": "به‌روزرسانی‌ها",
              },
            ]
          }
        ],
        [
          {
            "routerLink": "/posts",
            "icon": "dashicons-admin-post",
            "name": "نوشته‌ها",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/posts",
                "name": "همهٔ نوشته‌ها",
              },
              {
                "routerLink": "/add-post",
                "name": "افزودن نوشته",
              },
              {
                "routerLink": "/categories",
                "name": "دسته‌ها",
              },
              {
                "routerLink": "/tags",
                "name": "برچسب‌ها",
              },
            ]
          },
          {
            "routerLink": "/media",
            "icon": "dashicons-admin-media",
            "name": "رسانه",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/library",
                "name": "کتابخانه",
              },
              {
                "routerLink": "/add-new",
                "name": "افزودن جدید",
              }
            ]
          },
          {
            "routerLink": "/pages",
            "icon": "dashicons-admin-page",
            "name": "برگه‌ها",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/all-pages",
                "name": "همهٔ برگه‌ها",
              },
              {
                "routerLink": "/add-new",
                "name": "افزودن جدید",
              }
            ]
          },
          {
            "routerLink": "/comments",
            "icon": "dashicons-admin-comments",
            "name": "دیدگاه‌ها",
            "isOpen": false,
            "isSelected": false,
            "children": []
          }
        ],
        [
          {
            "routerLink": "/preview",
            "icon": "dashicons-admin-appearance",
            "name": "نمایش",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/theme",
                "name": "پوسته",
              },
              {
                "routerLink": "/editor",
                "name": "ویرایشگر",
                "badge": "آزمایشی"
              },
            ]
          },
          {
            "routerLink": "/plugins",
            "icon": "dashicons-admin-plugins",
            "badge": "2",
            "name": "افزونه‌ها",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/installed-plugins",
                "name": "افزونه‌های نصب‌شده",
              },
              {
                "routerLink": "/add",
                "name": "افزودن",
              }
            ]
          },
          {
            "routerLink": "/users",
            "icon": "dashicons-admin-users",
            "name": "کاربران",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/all-users",
                "name": "همه کاربران",
              },
              {
                "routerLink": "/add",
                "name": "افزودن",
              },
              {
                "routerLink": "/user-id",
                "name": "شناسنامه",
              }
            ]
          },
          {
            "routerLink": "/tools",
            "icon": "dashicons-admin-tools",
            "name": "ابزارها",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/all-tools",
                "name": "ابزارهای دردسترس",
              },
              {
                "routerLink": "/import",
                "name": "درون‌ریزی",
              },
              {
                "routerLink": "/export",
                "name": "برون‌بری",
              },
              {
                "routerLink": "/health",
                "name": "سلامت سایت",
              },
              {
                "routerLink": "/export-personals",
                "name": "برون‌بری دادهٔ شخصی",
              },
              {
                "routerLink": "/clean-personals",
                "name": "پاک‌سازی اطلاعات شخصی",
              },
              {
                "routerLink": "/theme-editor",
                "name": "ویرایشگر پرونده پوسته",
              },
              {
                "routerLink": "/plugin-editor",
                "name": "ویرایشگر پرونده افزونه",
              }
            ]
          },
          {
            "routerLink": "/settings",
            "icon": "dashicons-admin-settings",
            "name": "تنظیمات",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/public",
                "name": "عمومی",
              },
              {
                "routerLink": "/write",
                "name": "نوشتن",
              },
              {
                "routerLink": "/read",
                "name": "خواندن",
              },
              {
                "routerLink": "/discussion",
                "name": "گفت‌وگو",
              },
              {
                "routerLink": "/media",
                "name": "رسانه",
              },
              {
                "routerLink": "/permalink",
                "name": "پیوندهای یکتا",
              },
              {
                "routerLink": "/privacy",
                "name": "حریم خصوصی",
              },
            ]
          },
        ],
      ],
  };

}
