function initialize() {

  window.application = new Framework7({
    modalTitle: 'Framework7',
    material: true,
    pushState: true
  });

  var LibModule = ng.core.NgModule({
    imports: [ng.forms.FormsModule]
  }).Class({
    constructor: function() {

    }
  });

  var BodyComponent = ng.core.Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
  }).Class({
    constructor: function() {}
  });

  var MainModule = ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        LibModule,
        Router()
      ],
      declarations: [
        BodyComponent,
        MainLayoutComponent(),
        HomePageComponent(),
        AboutPageComponent(),
        AccordionPageComponent(),
        AutoCompletePageComponent(),
        CalendarPageComponent(),
        CardsPageComponent(),
        ContactsPageComponent(),
        ChipsPageComponent(),
        FloatingButtonPageComponent(),
        FloatingButtonStaticPageComponent(),
        FloatingButtonPopoverPageComponent(),
        FloatingButtonDialPageComponent(),
        FormsPageComponent(),
        FormsButtonsPageComponent(),
        FormsCheckboxesPageComponent(),
        FormsElementsPageComponent(),
        FormsSelectsPageComponent(),
        FormsStoragePageComponent(),
        InfiniteScrollPageComponent(),
        ListViewPageComponent(),
        LazyLoadPageComponent(),
        GridPageComponent(),
        LoginScreenPageComponent(),
        LoginScreenEmbeddedPageComponent(),
        MediaListPageComponent(),
        MessagesPageComponent(),
        ModalsPageComponent(),
        NotificationsPageComponent(),
        PanelsPageComponent(),
        PanelLeftPageComponent(),
        PanelRightPageComponent(),
        PanelRight2PageComponent(),
        PanelRight3PageComponent(),
        PhotoBrowserPageComponent(),
        PickerPageComponent(),
        PopoverPageComponent(),
        PreloaderPageComponent(),
        ProgressBarPageComponent(),
        PullToRefreshPageComponent(),
        SearchbarPageComponent(),
        SortableListPageComponent(),
        VirtualListPageComponent(),
        SwipeDeletePageComponent(),
        Swiper3DCoverflowPageComponent(),
        Swiper3DCubePageComponent(),
        Swiper3dFlipPageComponent(),
        SwiperControlPageComponent(),
        SwiperCustomPageComponent(),
        SwiperFadePageComponent(),
        SwiperGalleryPageComponent(),
        SwiperHorizontalPageComponent(),
        SwiperLoopPageComponent(),
        SwiperMultiplePageComponent(),
        SwiperNestedPageComponent(),
        SwiperPaginationFractionPageComponent(),
        SwiperPaginationProgressPageComponent(),
        SwiperParallaxPageComponent(),
        SwiperScrollbarPageComponent(),
        SwiperSpaceBetweenPageComponent(),
        SwiperVerticlePageComponent(),
        SwiperPageComponent(),
        TabsAnimatedPageComponent(),
        TabsStaticPageComponent(),
        TabsSwipeablePageComponent(),
        TabsPageComponent(),
        Autocomplete(),
        Calendar(),
        InfiniteScroll()
      ],
      bootstrap: [BodyComponent],
      providers: []
    })
    .Class({
      constructor: function() {}
    });

  ng.platformBrowserDynamic
    .platformBrowserDynamic()
    .bootstrapModule(MainModule);
}
document.addEventListener('DOMContentLoaded', initialize);
