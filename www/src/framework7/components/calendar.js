function Calendar() {
  return ng.core.Directive({
    selector: "[calendar]",
    inputs: ["calendar"]
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element.nativeElement;
    }],
    ngOnInit: function() {
      if (this.$element.tagName.toLowerCase() == 'input') {
        this.calendar.input = this.$element;
      } else {
        this.calendar.container = this.$element;
      };
      window.application.calendar(this.calendar);
    },
  });
}
