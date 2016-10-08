function Picker() {
  return ng.core.Directive({
    selector: "[picker]",
    inputs: ["picker", "container"]
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element.nativeElement;
    }],
    ngOnInit: function() {
      this.picker.input = this.$element;
      if (typeof this.container != "undefined") {
        this.picker.container = this.container;
      }
      window.application.picker(this.picker);
    }
  });
}
