function initialize() {

  var BodyComponent = ng.core.Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
  }).Class({
    constructor: function() {}
  });

  var MainModule = ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        ng.forms.FormsModule,
        Router()
      ],
      declarations: [
        BodyComponent,
        MainLayoutComponent(),
        HomePageComponent(),
        AboutPageComponent(),
        AccordionPageComponent()
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
