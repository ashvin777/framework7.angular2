function LazyLoadPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/lazy-load/lazy-load.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function () {
      window.application.init();
    }
  });
}
