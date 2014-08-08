class GitManagerController extends AppController

  constructor:(options = {}, data)->
    options.view    = new GitManagerMenuView
    options.appInfo =
      name : "Git Manager"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?
    view = new GitManagerMenuView
    appView.addSubView view

  else
    KD.registerAppClass GitManagerController,
      name     : "Gitmanager"
      routes   :
        "/:name?/Gitmanager" : null
        "/:name?/alexchistyakov/Apps/Gitmanager" : null
      dockPath : "/alexchistyakov/Apps/Gitmanager"
      behavior : "application"