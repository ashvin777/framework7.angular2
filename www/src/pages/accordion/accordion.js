function AccordionPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/accordion/accordion.html"
  }).Class({
    constructor: function() {

    },
    ngOnInit: function(){
      window.application.init();
    }
  });
}
