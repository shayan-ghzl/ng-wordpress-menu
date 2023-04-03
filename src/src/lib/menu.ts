export interface NgWpMenuChild {
    addClass?: string;
    routerLink: string;
    routerLinkActive?: string;
    name: string;
    badge?: string;
}

export interface NgWpMenuItem {
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