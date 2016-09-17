function CalendarPageComponent() {
  return ng.core.Component({
    templateUrl: "src/pages/calendar/calendar.html"
  }).Class({
    constructor: function() {
      this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      this.calendarDefault = {};

      this.calendarDateFormat = {
        dateFormat: 'DD, MM dd, yyyy'
      };

      this.calendarMultiple = {
        dateFormat: 'M dd yyyy',
        multiple: true
      };
      this.calendarRange = {
        dateFormat: 'M dd yyyy',
        rangePicker: true
      };

      this.calendarInline = {
        value: [new Date()],
        weekHeader: false,
        header: false,
        footer: false,
        toolbarTemplate: this.getToolbarTemplate(),
        onOpen: this.onOpen.bind(this),
        onMonthYearChangeStart: this.onMonthYearChangeStart.bind(this)
      };
    },
    getToolbarTemplate: function() {
      return '<div class="toolbar calendar-custom-toolbar">' +
        '<div class="toolbar-inner">' +
        '<div class="left">' +
        '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
        '</div>' +
        '<div class="center"></div>' +
        '<div class="right">' +
        '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
        '</div>' +
        '</div>' +
        '</div>';
    },
    onOpen: function(p) {
      Dom7('.calendar-custom-toolbar .center').text(this.monthNames[p.currentMonth] + ', ' + p.currentYear);
      Dom7('.calendar-custom-toolbar .left .link').on('click', function() {
        p.prevMonth();
      });
      Dom7('.calendar-custom-toolbar .right .link').on('click', function() {
        p.nextMonth();
      });
    },
    onMonthYearChangeStart: function(p) {
      Dom7('.calendar-custom-toolbar .center').text(this.monthNames[p.currentMonth] + ', ' + p.currentYear);
    }
  })
}
