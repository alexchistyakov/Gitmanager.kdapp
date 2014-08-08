/* Compiled by kdc on Fri Aug 08 2014 17:22:34 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
if (typeof window.appPreview !== "undefined" && window.appPreview !== null) {
  var appView = window.appPreview
}
/* BLOCK STARTS: /home/alexchistyakov/Applications/Gitmanager.kdapp/index.coffee */
var GitManagerController,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GitManagerController = (function(_super) {
  __extends(GitManagerController, _super);

  function GitManagerController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new GitManagerMenuView;
    options.appInfo = {
      name: "Git Manager",
      type: "application"
    };
    GitManagerController.__super__.constructor.call(this, options, data);
  }

  return GitManagerController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new GitManagerMenuView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(GitManagerController, {
      name: "Gitmanager",
      routes: {
        "/:name?/Gitmanager": null,
        "/:name?/alexchistyakov/Apps/Gitmanager": null
      },
      dockPath: "/alexchistyakov/Apps/Gitmanager",
      behavior: "application"
    });
  }
})();
/* BLOCK STARTS: /home/alexchistyakov/Applications/Gitmanager.kdapp/views/index.coffee */
var GitManagerMenuView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GitManagerMenuView = (function(_super) {
  __extends(GitManagerMenuView, _super);

  function GitManagerMenuView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'GitManager main-view';
    GitManagerMenuView.__super__.constructor.call(this, options, data);
  }

  GitManagerMenuView.prototype.viewAppended = function() {
    this.addSubView(this.container = new KDCustomHTMLView({
      cssClass: "container"
    }));
    this.container.addSubView(this.header = new KDHeaderView({
      title: "Git Manager",
      type: "big",
      cssClass: "header"
    }));
    this.container.addSubView(new KDCustomHTMLView({
      tagName: 'img',
      cssClass: 'logo',
      attributes: {
        src: "https://rest.kd.io/alexchistyakov/Gitmanager.kdapp/master/resources/logo.png"
      }
    }));
    this.container.addSubView(new KDView({
      partial: "Please select a project to manage"
    }));
    this.container.addSubView(this.list = new KDListView({
      cssClass: "list"
    }));
    this.list.addSubView(new KDView({
      partial: "Dickbutt",
      cssClass: "list-footer"
    }));
    this.list.addSubView(new KDView({
      partial: "Dickbutt",
      cssClass: "list-footer"
    }));
    return this.list.addSubView(new KDView({
      partial: "Dickbutt",
      cssClass: "list-footer"
    }));
  };

  return GitManagerMenuView;

})(KDView);
/* BLOCK STARTS: /home/alexchistyakov/Applications/Gitmanager.kdapp/views/appview.coffee */
var GitManagerAppView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

GitManagerAppView = (function(_super) {
  __extends(GitManagerAppView, _super);

  function GitManagerAppView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'GitManager main-view';
    GitManagerAppView.__super__.constructor.call(this, options, data);
  }

  return GitManagerAppView;

})(KDView);

/* KDAPP ENDS */
}).call();