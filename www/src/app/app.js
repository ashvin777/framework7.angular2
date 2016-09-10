//declarations of app root object
window.app = {
  Modules: {},
  Components: {},
  Pages: {},
  Directives: {},
  Pipes: {},
  Services: {},
  Storage: {},
  Config: {}
};

app.Config.init = function() {

  app.Modules.Services = ng.core.NgModule({
    imports: []
  }).Class({
    constructor: function() {}
  });

  app.Modules.Pipes = ng.core.NgModule({
    imports: []
  }).Class({
    constructor: function() {}
  });

  app.Modules.Factories = ng.core.NgModule({
    imports: []
  }).Class({
    constructor: function() {}
  });

  app.Directives.App = ng.core.Component({
    selector: "app",
    template: ""
  }).Class({
    constructor: function() {

    }
  });

  app.Modules.Directives = ng.core.NgModule({
    import: [app.Directives.App]
  }).Class({
    constructor: function() {}
  });

  app.Modules.MainModule = ng.core.NgModule({
      imports: [ng.platformBrowser.BrowserModule, app.Modules.Services, app.Modules.Pipes, app.Modules.Factories, app.Modules.Directives],
      declarations: [app.Directives.App],
      bootstrap: [app.Directives.App],
      providers: []
    })
    .Class({
      constructor: function() {}
    });

  ng.platformBrowserDynamic
    .platformBrowserDynamic()
    .bootstrapModule(app.Modules.MainModule);
}

document.addEventListener('DOMContentLoaded', app.Config.init);
