function ProgressBarPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/progressbar/progressbar.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function() {
      window.application.init();
    },
    demoProgressbarInline: function(progress) {
      var progressbar = Dom7('.ks-demo-progressbar-inline .progressbar');
      window.application.setProgressbar(progressbar, progress);
    },
    demoProgressbarLoadHide: function() {
      var container = Dom7('.ks-demo-progressbar-load-hide p:first-child');
      if (container.children('.progressbar').length) return; //don't run all this if there is a current progressbar loading

      window.application.showProgressbar(container, 0);

      // Simluate Loading Something
      var progress = 0;

      function simulateLoading() {
        setTimeout(function() {
          var progressBefore = progress;
          progress += Math.random() * 20;
          window.application.setProgressbar(container, progress);
          if (progressBefore < 100) {
            simulateLoading(); //keep "loading"
          } else window.application.hideProgressbar(container); //hide
        }, Math.random() * 200 + 200);
      }
      simulateLoading();
    },
    demoProgressbarOverlay: function() {
      // Add Directly To Body
      var container = Dom7('body');
      if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading

      window.application.showProgressbar(container, 0, 'yellow');

      // Simluate Loading Something
      var progress = 0;

      function simulateLoading() {
        setTimeout(function() {
          var progressBefore = progress;
          progress += Math.random() * 20;
          window.application.setProgressbar(container, progress);
          if (progressBefore < 100) {
            simulateLoading(); //keep "loading"
          } else window.application.hideProgressbar(container); //hide
        }, Math.random() * 200 + 200);
      }
      simulateLoading();
    },
    demoProgressbarInfiniteOverlay: function() {
      var container = Dom7('body');
      if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
      window.application.showProgressbar(container, 'yellow');
      setTimeout(function() {
        window.application.hideProgressbar();
      }, 5000);
    },
    demoProgressbarInfiniteMultiOverlay: function() {
      var container = Dom7('body');
      if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
      window.application.showProgressbar(container, 'multi');
      setTimeout(function() {
        window.application.hideProgressbar();
      }, 5000);
    }
  });
}
