

export const routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'content', pathMatch: 'full'},
      {path: 'main', loadChildren: './main-function/main-function.module#MaiFunctionModule'},
      {path: 'content', loadChildren: './content-page/content-page.module#ContentPageModule'},
    ]
  }
];

