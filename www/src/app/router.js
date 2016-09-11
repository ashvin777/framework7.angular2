function Router() {
  return ng.router.RouterModule.forRoot([{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: '',
    component: MainLayoutComponent(),
    children: [{
      path: 'home',
      component: HomePageComponent()
    },{
      path: 'about',
      component: AboutPageComponent()
    },{
      path: 'accordion',
      component: AccordionPageComponent()
    }]
  }], {
    useHash: true
  });
}
