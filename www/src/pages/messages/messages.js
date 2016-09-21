function MessagesPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/messages/messages.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function () {
      window.application.init();
    }
  });
}
