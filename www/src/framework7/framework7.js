window.framework7 = {
  core: {}
}

framework7.NgModule =
  ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule],
    declarations: [framework7.core.Views],
    bootstrap: [framework7.core.Views],
    providers: []
  }).Class({
    constructor: function() {}
  });
