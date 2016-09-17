function Autocomplete() {
  return ng.core.Directive({
    selector: "[autocomplete]",
    inputs: ["autocomplete"]
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element.nativeElement;
    }],
    ngOnInit: function() {
      if (this.$element.tagName.toLowerCase() == 'input') {
        this.autocomplete.input = this.$element;
      } else {
        this.autocomplete.opener = this.$element;
      };
      window.application.autocomplete(this.autocomplete);
    },
  });
}
