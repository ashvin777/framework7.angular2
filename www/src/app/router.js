function Router() {
  window.location.hash = 'app';
  return ng.router.RouterModule.forRoot([{
    path: 'app',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
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
