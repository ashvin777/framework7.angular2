function MainLayoutComponent() {
  return ng.core.Component({
    templateUrl: "src/layout/main-layout/main-layout.html"
  }).Class({
    constructor: function() {
      this.root = {};
      this.root.appName = "Framework7 Angular2";
    }
  });
}
