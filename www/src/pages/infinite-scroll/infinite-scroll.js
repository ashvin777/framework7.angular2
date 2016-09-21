function InfiniteScrollPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/infinite-scroll/infinite-scroll.html"
  }).Class({
    constructor: [ng.core.ElementRef,function(element) {
      this.index = 16;
      this.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
      this.onInfiniteScrollEvent = this.onInfiniteScroll.bind(this);
    }],
    ngOnInit: function(){
      window.application.init();
    },
    onInfiniteScroll: function(){
      console.log("onInfiniteScroll");
      this.items.push(this.index++);
    }
  });
}
