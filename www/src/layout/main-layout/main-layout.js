function MainLayoutComponent() {
  return ng.core.Component({
    templateUrl: "src/layout/main-layout/main-layout.html"
  }).Class({
    constructor: function() {

    },
    ngAfterViewInit: function() {
      window.application.addView('.view-main', {});
    }
  });
}
