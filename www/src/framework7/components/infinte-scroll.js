function InfiniteScroll() {
  return ng.core.Directive({
    selector: "[infiniteScroll]",
    inputs: ["infiniteScroll"]
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element.nativeElement;
    }],
    ngOnInit: function() {
      Dom7(this.$element).on('infinite', this.infiniteScroll);
    },
  });
}
