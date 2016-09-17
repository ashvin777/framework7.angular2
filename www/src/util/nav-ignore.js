function NavIgnore() {
  return ng.core.Directive({
    selector: "[navIgnore]",
    host: { // tslint:disable-line:use-host-property-decorator
      '(click)': 'handleClick($event)',
    }
  }).Class({
    constructor: [ng.router.Router, function(router) {
      this.router = router;
    }],
    handleClick: function functionName($event) {
      var subscription = this.router.events.subscribe(function(routerEvent) {
        console.log(routerEvent);
        if (routerEvent instanceof ng.router.NavigationEnd) {
          subscription.unsubscribe();
        } else if (routerEvent instanceof ng.router.NavigationError || routerEvent instanceof ng.router.NavigationCancel) {
          subscription.unsubscribe();
        }
      });
      return false;
    }
  });
}
