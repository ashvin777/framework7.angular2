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
    },{
      path: 'autocomplete',
      component: AutoCompletePageComponent()
    },{
      path: 'calendar',
      component: CalendarPageComponent()
    },{
      path: 'cards',
      component: CardsPageComponent()
    },{
      path: 'contacts',
      component: ContactsPageComponent()
    },{
      path: 'chips',
      component: ChipsPageComponent()
    },{
      path: 'floating-button',
      component: FloatingButtonPageComponent()
    },{
      path: 'floating-button-static',
      component: FloatingButtonStaticPageComponent()
    },{
      path: 'floating-button-popover',
      component: FloatingButtonPopoverPageComponent()
    },{
      path: 'floating-button-dial',
      component: FloatingButtonDialPageComponent()
    }]
  }], {
    useHash: true
  });
}
