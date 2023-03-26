export interface NgWpMenuChild {
    // type: string;
    addClass?: string;
    routerLink: string;
    routerLinkActive?: string;
    name: string;
    badge?: string;
}

export interface NgWpMenuItem {
    // type: string;
    addClass?: string;
    routerLink: string;
    routerLinkActive?: string;
    icon?: string;
    badge?: string;
    name: string;
    isOpen: boolean;
    isSelected: boolean;
    children: NgWpMenuChild[];
}

export interface NgWpMenu {
    menuName: string;
    collapseLable: string;
    menuDirection?: 'rtl' | 'ltr';
    menuGroups: NgWpMenuItem[][];
}

// menuModel = {
  //   'menuName': 'فهرست اصلی',
  //   'collapseLable': 'جمع کردن فهرست',
  //   'menuStates': [],
  //   'menuDirection': 'rtl',
  //   'stickyMenu': true,
  //   'menuGroups':
  //     [
  //       [
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/home",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-dashboard",
  //           "badge": "",
  //           "name": "پیشخوان",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/home",
  //               "routerLinkActive": "",
  //               "name": "خانه",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/updates",
  //               "routerLinkActive": "",
  //               "name": "به‌روزرسانی‌ها",
  //               "badge": ""
  //             },
  //           ]
  //         }
  //       ],
  //       [
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/posts",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-post",
  //           "badge": "",
  //           "name": "نوشته‌ها",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/posts",
  //               "routerLinkActive": "",
  //               "name": "همهٔ نوشته‌ها",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/add-post",
  //               "routerLinkActive": "",
  //               "name": "افزودن نوشته",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/categories",
  //               "routerLinkActive": "",
  //               "name": "دسته‌ها",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/tags",
  //               "routerLinkActive": "",
  //               "name": "برچسب‌ها",
  //               "badge": ""
  //             },
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/media",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-media",
  //           "badge": "",
  //           "name": "رسانه",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/library",
  //               "routerLinkActive": "",
  //               "name": "کتابخانه",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/add-new",
  //               "routerLinkActive": "",
  //               "name": "افزودن جدید",
  //               "badge": ""
  //             }
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/pages",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-page",
  //           "badge": "",
  //           "name": "برگه‌ها",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/all-pages",
  //               "routerLinkActive": "",
  //               "name": "همهٔ برگه‌ها",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/add-new",
  //               "routerLinkActive": "",
  //               "name": "افزودن جدید",
  //               "badge": ""
  //             }
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/comments",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-comments",
  //           "badge": "",
  //           "name": "دیدگاه‌ها",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": []
  //         }
  //       ],
  //       [
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/preview",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-appearance",
  //           "badge": "",
  //           "name": "نمایش",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/theme",
  //               "routerLinkActive": "",
  //               "name": "پوسته",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/editor",
  //               "routerLinkActive": "",
  //               "name": "ویرایشگر",
  //               "badge": "آزمایشی"
  //             },
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/plugins",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-plugins",
  //           "badge": "2",
  //           "name": "افزونه‌ها",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/installed-plugins",
  //               "routerLinkActive": "",
  //               "name": "افزونه‌های نصب‌شده",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/add",
  //               "routerLinkActive": "",
  //               "name": "افزودن",
  //               "badge": ""
  //             }
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/users",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-users",
  //           "badge": "",
  //           "name": "کاربران",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/all-users",
  //               "routerLinkActive": "",
  //               "name": "همه کاربران",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/add",
  //               "routerLinkActive": "",
  //               "name": "افزودن",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/user-id",
  //               "routerLinkActive": "",
  //               "name": "شناسنامه",
  //               "badge": ""
  //             }
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/tools",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-tools",
  //           "badge": "",
  //           "name": "ابزارها",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/all-tools",
  //               "routerLinkActive": "",
  //               "name": "ابزارهای دردسترس",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/import",
  //               "routerLinkActive": "",
  //               "name": "درون‌ریزی",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/export",
  //               "routerLinkActive": "",
  //               "name": "برون‌بری",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/health",
  //               "routerLinkActive": "",
  //               "name": "سلامت سایت",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/export-personals",
  //               "routerLinkActive": "",
  //               "name": "برون‌بری دادهٔ شخصی",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/clean-personals",
  //               "routerLinkActive": "",
  //               "name": "پاک‌سازی اطلاعات شخصی",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/theme-editor",
  //               "routerLinkActive": "",
  //               "name": "ویرایشگر پرونده پوسته",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/plugin-editor",
  //               "routerLinkActive": "",
  //               "name": "ویرایشگر پرونده افزونه",
  //               "badge": ""
  //             }
  //           ]
  //         },
  //         {
  //           "type": "menu-item",
  //           "addClass": "",
  //           "routerLink": "/settings",
  //           "routerLinkActive": "",
  //           "icon": "dashicons-admin-settings",
  //           "badge": "",
  //           "name": "تنظیمات",
  //           "isOpen": false,
  //           "isSelected": false,
  //           "children": [
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/public",
  //               "routerLinkActive": "",
  //               "name": "عمومی",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/write",
  //               "routerLinkActive": "",
  //               "name": "نوشتن",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/read",
  //               "routerLinkActive": "",
  //               "name": "خواندن",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/discussion",
  //               "routerLinkActive": "",
  //               "name": "گفت‌وگو",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/media",
  //               "routerLinkActive": "",
  //               "name": "رسانه",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/permalink",
  //               "routerLinkActive": "",
  //               "name": "پیوندهای یکتا",
  //               "badge": ""
  //             },
  //             {
  //               "type": "menu-sub-item",
  //               "addClass": "",
  //               "routerLink": "/privacy",
  //               "routerLinkActive": "",
  //               "name": "حریم خصوصی",
  //               "badge": ""
  //             },
  //           ]
  //         },
  //       ],
  //     ],
  // };