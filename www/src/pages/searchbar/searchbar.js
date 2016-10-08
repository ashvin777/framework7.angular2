function SearchbarPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/searchbar/searchbar.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function () {
      window.application.init();
    }
  });
}
