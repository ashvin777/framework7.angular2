function Router() {
  var router;
  router = ng.router.RouterModule.forRoot([{
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
    },{
      path: 'forms',
      component: FormsPageComponent()
    },{
      path: 'forms-elements',
      component: FormsElementsPageComponent()
    },{
      path: 'forms-checkboxes',
      component: FormsCheckboxesPageComponent()
    },{
      path: 'forms-selects',
      component: FormsSelectsPageComponent()
    },{
      path: 'forms-buttons',
      component: FormsButtonsPageComponent()
    },{
      path: 'forms-storage',
      component: FormsStoragePageComponent()
    },{
      path: 'grid',
      component: GridPageComponent()
    },{
      path: 'infinite-scroll',
      component: InfiniteScrollPageComponent()
    },{
      path: 'lazy-load',
      component: LazyLoadPageComponent()
    },{
      path: 'list-view',
      component: ListViewPageComponent()
    },{
      path: 'login-screen-embedded',
      component: LoginScreenEmbeddedPageComponent()
    },{
      path: 'login-screen',
      component: LoginScreenPageComponent()
    },{
      path: 'media-lists',
      component: MediaListPageComponent()
    },{
      path: 'messages',
      component: MessagesPageComponent()
    },{
      path: 'modals',
      component: ModalsPageComponent()
    },{
      path: 'notifications',
      component: NotificationsPageComponent()
    },{
      path: 'panels',
      component: PanelsPageComponent()
    },{
      path: 'panel-left',
      component: PanelLeftPageComponent()
    },{
      path: 'panel-right',
      component: PanelRightPageComponent()
    },{
      path: 'panel-right2',
      component: PanelRight2PageComponent()
    },{
      path: 'panel-right3',
      component: PanelRight3PageComponent()
    },{
      path: 'photo-browser',
      component: PhotoBrowserPageComponent()
    },{
      path: 'picker',
      component: PickerPageComponent()
    },{
      path: 'popover',
      component: PopoverPageComponent()
    },{
      path: 'preloader',
      component: PreloaderPageComponent()
    },{
      path: 'progressbar',
      component: ProgressBarPageComponent()
    },{
      path: 'pull-to-refresh',
      component: PullToRefreshPageComponent()
    },{
      path: 'searchbar',
      component: SearchbarPageComponent()
    },{
      path: 'sortable-list',
      component: SortableListPageComponent()
    },{
      path: 'virtual-list',
      component: VirtualListPageComponent()
    },{
      path: 'swipe-delete',
      component: SwipeDeletePageComponent()
    },{
      path: 'swiper-3d-coverflow',
      component: Swiper3DCoverflowPageComponent()
    },{
      path: 'swiper-3d-cube',
      component: Swiper3DCubePageComponent()
    },{
      path: 'swiper-3d-flip',
      component: Swiper3dFlipPageComponent()
    },{
      path: 'swiper-control',
      component: SwiperControlPageComponent()
    },{
      path: 'swiper-custom',
      component: SwiperCustomPageComponent()
    },{
      path: 'swiper-fade',
      component: SwiperFadePageComponent()
    },{
      path: 'swiper-gallery',
      component: SwiperGalleryPageComponent()
    },{
      path: 'swiper-horizontal',
      component: SwiperHorizontalPageComponent()
    },{
      path: 'swiper-loop',
      component: SwiperLoopPageComponent()
    },{
      path: 'swiper-multiple',
      component: SwiperMultiplePageComponent()
    },{
      path: 'swiper-nested',
      component: SwiperNestedPageComponent()
    },{
      path: 'swiper-pagination-fraction',
      component: SwiperPaginationFractionPageComponent()
    },{
      path: 'swiper-pagination-progress',
      component: SwiperPaginationProgressPageComponent()
    },{
      path: 'swiper-parallax',
      component: SwiperParallaxPageComponent()
    },{
      path: 'swiper-scrollbar',
      component: SwiperScrollbarPageComponent()
    },{
      path: 'swiper-space-between',
      component: SwiperSpaceBetweenPageComponent()
    },{
      path: 'swiper-verticle',
      component: SwiperVerticlePageComponent()
    },{
      path: 'swiper',
      component: SwiperPageComponent()
    },{
      path: 'tabs-animated',
      component: TabsAnimatedPageComponent()
    },{
      path: 'tabs-static',
      component: TabsStaticPageComponent()
    },{
      path: 'tabs-swipeable',
      component: TabsSwipeablePageComponent()
    },{
      path: 'tabs',
      component: TabsPageComponent()
    }]
  }], {
    useHash: true
  });

  return router;
}
