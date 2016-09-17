function ChipsPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/chips/chips.html"
  }).Class({
    constructor: [ng.core.ElementRef, function(element) {
      this.$element = element.nativeElement;
    }],
    ngAfterViewInit: function() {
      Dom7(this.$element).find('.chip-delete').on('click', function(e) {
        e.preventDefault();
        var chip = Dom7(this).parents('.chip');
        window.application.confirm('Do you want to delete this tiny demo Chip?', function() {
          chip.remove();
        });
      });
    }
  });
}
