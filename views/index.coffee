class GitManagerMenuView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'GitManager main-view'
    super options, data

  viewAppended:->
    @addSubView @container = new KDCustomHTMLView
      cssClass:"container"
    @container.addSubView @header = new KDHeaderView
      title:"Git Manager"
      type: "big"
      cssClass: "header"
    @container.addSubView new KDCustomHTMLView
      tagName       : 'img'
      cssClass      : 'logo'
      attributes    :
        src         : "https://rest.kd.io/alexchistyakov/Gitmanager.kdapp/master/resources/logo.png"
    @container.addSubView new KDView
      partial: "Please select a project to manage"
    @container.addSubView @list = new KDListView
      cssClass: "list"
    @list.addSubView new KDView
      partial: "Dickbutt"
      cssClass: "list-footer"
    @list.addSubView new KDView
      partial: "Dickbutt"
      cssClass: "list-footer"
    @list.addSubView new KDView
      partial: "Dickbutt"
      cssClass: "list-footer"
    