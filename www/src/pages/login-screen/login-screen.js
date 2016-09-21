function LoginScreenPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/login-screen/login-screen.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function(){
      window.application.init();
    }
  });
}
