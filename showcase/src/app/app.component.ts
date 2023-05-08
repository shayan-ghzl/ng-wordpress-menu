import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgWpMenu } from 'src/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuModelLtr: NgWpMenu = {
    'menuName': 'Primary Menu',
    'collapseLable': 'Collapse menu',
    'menuGroups':
      [
        [
          {
            "routerLink": "/home",
            "icon": "dashicons-dashboard",
            "name": "Dashboard",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/home",
                "name": "Home",
              },
              {
                "routerLink": "/updates",
                "name": "Updates",
              },
            ]
          }
        ],
        [
          {
            "routerLink": "/posts",
            "icon": "dashicons-admin-post",
            "name": "Posts",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/posts",
                "name": "All Posts",
              },
              {
                "routerLink": "/add-post",
                "name": "Add New",
              },
              {
                "routerLink": "/categories",
                "name": "Categoties",
              },
              {
                "routerLink": "/tags",
                "name": "Tags",
              },
            ]
          },
          {
            "routerLink": "/library",
            "icon": "dashicons-admin-media",
            "name": "Media",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/library",
                "name": "Library",
              },
              {
                "routerLink": "/add-new-library",
                "name": "Add New",
              }
            ]
          },
          {
            "routerLink": "/pages",
            "icon": "dashicons-admin-page",
            "name": "Pages",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/all-pages",
                "name": "All Pages",
              },
              {
                "routerLink": "/add-new",
                "name": "Add New",
              }
            ]
          },
          {
            "routerLink": "/comments",
            "icon": "dashicons-admin-comments",
            "name": "Comments",
            "isOpen": false,
            "isSelected": false,
            "children": []
          }
        ],
        [
          {
            "routerLink": "/preview",
            "icon": "dashicons-admin-appearance",
            "name": "Appearance",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/theme",
                "name": "Themes",
              },
              {
                "routerLink": "/editor",
                "name": "Editor",
                "badge": "beta"
              },
            ]
          },
          {
            "routerLink": "/plugins",
            "icon": "dashicons-admin-plugins",
            "badge": "2",
            "name": "Plugins",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/installed-plugins",
                "name": "Installed Plugins",
              },
              {
                "routerLink": "/add",
                "name": "Add New",
              }
            ]
          },
          {
            "routerLink": "/users",
            "icon": "dashicons-admin-users",
            "name": "Users",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/all-users",
                "name": "All Users",
              },
              {
                "routerLink": "/add-user",
                "name": "Add New",
              },
              {
                "routerLink": "/user-id",
                "name": "Profile",
              }
            ]
          },
          {
            "routerLink": "/tools",
            "icon": "dashicons-admin-tools",
            "name": "Tools",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/all-tools",
                "name": "Available Tools",
              },
              {
                "routerLink": "/import",
                "name": "Import",
              },
              {
                "routerLink": "/export",
                "name": "Export",
              },
              {
                "routerLink": "/health",
                "name": "Site Health",
              },
              {
                "routerLink": "/export-personals",
                "name": "Export Personal Data",
              },
              {
                "routerLink": "/clean-personals",
                "name": "Erase Personal Data",
              },
              {
                "routerLink": "/theme-editor",
                "name": "Theme File Editor",
              },
              {
                "routerLink": "/plugin-editor",
                "name": "Plugin File Editor",
              }
            ]
          },
          {
            "routerLink": "/settings",
            "icon": "dashicons-admin-settings",
            "name": "Settings",
            "isOpen": false,
            "isSelected": false,
            "children": [
              {
                "routerLink": "/public",
                "name": "General",
              },
              {
                "routerLink": "/write",
                "name": "Writing",
              },
              {
                "routerLink": "/read",
                "name": "Reading",
              },
              {
                "routerLink": "/discussion",
                "name": "Discussion",
              },
              {
                "routerLink": "/media",
                "name": "Media",
              },
              {
                "routerLink": "/permalink",
                "name": "Permalinks",
              },
              {
                "routerLink": "/privacy",
                "name": "Privacy",
              },
            ]
          },
        ],
      ],
  };

  menuModelRtl: NgWpMenu = {
    'menuName': 'فهرست اصلی',
    'collapseLable': 'جمع کردن فهرست',
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
            "routerLink": "/library",
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
                "routerLink": "/add-new-library",
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
                "routerLink": "/add-user",
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

  menuDirection:any = 'ltr';
  themeName:any = 'default';

  togglerHtml = `<button type="button" (click)="toggleMobileMenu()" class="mobile-menu-toggler">
                    <span class="dashicons dashicons-menu-alt"></span>
                  </button>`;

  togglerCss = `{{
                  .mobile-menu-toggler{
                      display: none;
                      cursor: pointer;
                  }
                  @media screen and (max-width: 782px) {
                      .mobile-menu-toggler{
                          display: block;
                      }
                  }
                }}`;

  togglerMethod = `toggleMobileMenu() {
                      document.body.classList.toggle('wp-responsive-open');
                    }`;

  constructor(
    private _snackBar: MatSnackBar,
  ){}

  changeTheme(value: any) {
    this.themeName = value;
  }

  changeDirection(value: any) {
    this.menuDirection = value;
  }

  onMenuToggle() {
    console.log('Menu Toggled');
  }
  
  toggleMobileMenu() {
    document.body.classList.toggle('wp-responsive-open');
  }

  changeScale(value:string) {
    if(!isNaN(+value)){
      document.getElementById('wpwrap')!.style.fontSize = value + 'px';
    }
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
      duration: 5000
    });
  }

}