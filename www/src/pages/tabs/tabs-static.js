function TabsStaticPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/tabs/tabs-static.html"
  }).Class({
    constructor: function() {

    },
    ngAfterViewInit: function () {
      window.application.init()
    }
  });
}
