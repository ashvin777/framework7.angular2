function initialize() {

  new Framework7({
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
        NavIgnore()
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
