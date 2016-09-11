function HomePageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/home/home.html"
  }).Class({
    constructor: function() {
      this.title = "Framework7 Angular2";
      this.userName = "test";
    }
  });
}
