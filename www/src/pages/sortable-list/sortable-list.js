function SortableListPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/sortable-list/sortable-list.html"
  }).Class({
    constructor: function() {
      this.sortable = null;
    },
    onOpen: function(){
      Dom7('.toggle-sortable').text('Done');
    },
    onClose: function(){
      Dom7('.toggle-sortable').text('Edit');
    }
  });
}
