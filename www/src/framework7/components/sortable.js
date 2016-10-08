function Sortable() {
  return ng.core.Directive({
    selector: "[sortable]",
    inputs: ["sortable", "open", "close"]
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element.nativeElement;
    }],
    ngOnInit: function() {
      Dom7(this.$element).on("open", this.open);
      Dom7(this.$element).on("close", this.close);
    }
  });
}
