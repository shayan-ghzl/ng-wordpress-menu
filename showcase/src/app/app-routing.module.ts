import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRouteComponent } from './test-route/test-route.component';

const routes: Routes = [
  {
    path: 'home',
    component: TestRouteComponent,
    data: { pageTitle: 'home' }
  },
  {
    path: 'updates',
    component: TestRouteComponent,
    data: { pageTitle: 'updates' }
  },
  {
    path: 'posts',
    component: TestRouteComponent,
    data: { pageTitle: 'posts' }
  },
  {
    path: 'add-post',
    component: TestRouteComponent,
    data: { pageTitle: 'add-post' }
  },
  {
    path: 'categories',
    component: TestRouteComponent,
    data: { pageTitle: 'categories' }
  },
  {
    path: 'tags',
    component: TestRouteComponent,
    data: { pageTitle: 'tags' }
  },
  {
    path: 'media',
    component: TestRouteComponent,
    data: { pageTitle: 'media' }
  },
  {
    path: 'library',
    component: TestRouteComponent,
    data: { pageTitle: 'library' }
  },
  {
    path: 'add-new',
    component: TestRouteComponent,
    data: { pageTitle: 'add-new' }
  },
  {
    path: 'pages',
    component: TestRouteComponent,
    data: { pageTitle: 'pages' }
  },
  {
    path: 'all-pages',
    component: TestRouteComponent,
    data: { pageTitle: 'all-pages' }
  },
  {
    path: 'add-new',
    component: TestRouteComponent,
    data: { pageTitle: 'add-new' }
  },
  {
    path: 'comments',
    component: TestRouteComponent,
    data: { pageTitle: 'comments' }
  },
  {
    path: 'preview',
    component: TestRouteComponent,
    data: { pageTitle: 'preview' }
  },
  {
    path: 'theme',
    component: TestRouteComponent,
    data: { pageTitle: 'theme' }
  },
  {
    path: 'editor',
    component: TestRouteComponent,
    data: { pageTitle: 'editor' }
  },
  {
    path: 'plugins',
    component: TestRouteComponent,
    data: { pageTitle: 'plugins' }
  },
  {
    path: 'installed-plugins',
    component: TestRouteComponent,
    data: { pageTitle: 'installed-plugins' }
  },
  {
    path: 'add',
    component: TestRouteComponent,
    data: { pageTitle: 'add' }
  },
  {
    path: 'users',
    component: TestRouteComponent,
    data: { pageTitle: 'users' }
  },
  {
    path: 'all-users',
    component: TestRouteComponent,
    data: { pageTitle: 'all-users' }
  },
  {
    path: 'add',
    component: TestRouteComponent,
    data: { pageTitle: 'add' }
  },
  {
    path: 'user-id',
    component: TestRouteComponent,
    data: { pageTitle: 'user-id' }
  },
  {
    path: 'tools',
    component: TestRouteComponent,
    data: { pageTitle: 'tools' }
  },
  {
    path: 'all-tools',
    component: TestRouteComponent,
    data: { pageTitle: 'all-tools' }
  },
  {
    path: 'import',
    component: TestRouteComponent,
    data: { pageTitle: 'import' }
  },
  {
    path: 'export',
    component: TestRouteComponent,
    data: { pageTitle: 'export' }
  },
  {
    path: 'health',
    component: TestRouteComponent,
    data: { pageTitle: 'health' }
  },
  {
    path: 'export-personals',
    component: TestRouteComponent,
    data: { pageTitle: 'export-personals' }
  },
  {
    path: 'clean-personals',
    component: TestRouteComponent,
    data: { pageTitle: 'clean-personals' }
  },
  {
    path: 'theme-editor',
    component: TestRouteComponent,
    data: { pageTitle: 'theme-editor' }
  },
  {
    path: 'plugin-editor',
    component: TestRouteComponent,
    data: { pageTitle: 'plugin-editor' }
  },
  {
    path: 'settings',
    component: TestRouteComponent,
    data: { pageTitle: 'settings' }
  },
  {
    path: 'public',
    component: TestRouteComponent,
    data: { pageTitle: 'public' }
  },
  {
    path: 'write',
    component: TestRouteComponent,
    data: { pageTitle: 'write' }
  },
  {
    path: 'read',
    component: TestRouteComponent,
    data: { pageTitle: 'read' }
  },
  {
    path: 'discussion',
    component: TestRouteComponent,
    data: { pageTitle: 'discussion' }
  },
  {
    path: 'permalink',
    component: TestRouteComponent,
    data: { pageTitle: 'permalink' }
  },
  { path: 'privacy', component: TestRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
