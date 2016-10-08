function PreloaderPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/preloader/preloader.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function(){
      window.application.init();
    },
    demoIndicator: function() {
      window.application.showIndicator();
      setTimeout(function() {
        window.application.hideIndicator();
      }, 2000);
    },
    demoPreloader: function() {
      window.application.showPreloader();
      setTimeout(function() {
        window.application.hidePreloader();
      }, 2000);
    },
    demoPreloaderCustom: function() {
      window.application.showPreloader('My text...');
      setTimeout(function() {
        window.application.hidePreloader();
      }, 2000);
    }
  });
}
