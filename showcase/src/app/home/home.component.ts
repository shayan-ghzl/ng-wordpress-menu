import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  angularExample = `import { Component } from '@angular/core';
import { NgWpMenu, NgWpMenuTheme } from 'ng-wordpress-menu';

@Component({
  selector: 'app-root',
  template: \`
  <div id="wpwrap">
  <ng-wp-menu [menu]="menuModel" [theme]="themeName" [direction]="menuDirection" (onMenuToggle)="onMenuToggle()"></ng-wp-menu>
  <div id="wpcontent">
      <div id="wpbody" role="main">
          <div id="wpbody-content">
              <router-outlet></router-outlet>
          </div>
      </div>
  </div>
  </div>\`
})
export class AppComponent {
  menuDirection:'ltr' | 'rtl' = 'ltr';
  themeName:NgWpMenuTheme = 'default';

  onMenuToggle() {
    console.log('menu toggled');
  }

  menuModel: NgWpMenu = {
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
            "routerLink": "/icons",
            "icon": "dashicons-admin-tools",
            "name": "Icons",
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
}`;
}
