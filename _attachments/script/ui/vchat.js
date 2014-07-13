var localedata = {};

var VChat = $.inherit({

   _mainLayout: null,

  _topbar : null,

  _mainContent : null,

  _buddyListGrid : null,

  _statusbar: null,

  __constructor : function() { // constructor

  },

  start: function(data){
    var _this = this;
    // initialization
    _this._mainLayout = new MainLayout();
    _this._topbar = new Topbar();
    //_this._mainContent = new ConversationLayout("test");
    _this._buddyListGrid = new BuddyListGrid();
    _this._statusbar = new Statusbar();
    $(_this._mainLayout.getDiv()).w2layout(_this._mainLayout);
    w2ui[VCHAT.MAIN_LAYOUT].content('top', $().w2toolbar(_this._topbar));
    //w2ui[VCHAT.MAIN_LAYOUT].content('main', $().w2layout(_this._mainContent));
    w2ui[VCHAT.MAIN_LAYOUT].content('main', '<div>Click a Buddy from the list to get started</div>');
    w2ui[VCHAT.MAIN_LAYOUT].content('left', $().w2grid(_this._buddyListGrid));
    w2ui[VCHAT.MAIN_LAYOUT].content('bottom', $().w2toolbar(_this._statusbar));
    _this._buddyListGrid.refreshBuddies();
    setInterval(function(){_this._buddyListGrid.refreshBuddies();}, 10000);
    //_this._mainContent.init();
    VCHAT.CONNECTOR = new Connector();
    VCHAT.CONNECTOR.init();

  },

//  processData: function (data) {
//    console.log(data);
//    var selected = false;
//    for (var i = 0; i < data.rows.length; i++) {
//      localedata[data.rows[i].id] = data.rows[i].value;
//      if (i == 0) {
//
//        this._refreshGrid(data.rows[i].value.Strings, data.rows[i].value.SupportedLocales);
//        selected = true;
//      } else {
//        selected = false;
//      }
//      this._sidebar.nodes[i] = {
//        id: data.rows[i].id,
//        text: data.rows[i].value.Name,
//        img: 'icon-page',
//        selected: selected
//      }
//    }
//
//    console.log(localedata);
//  },

  refreshGrid : function (data, locales) {
//    w2ui.grid.clear();
//    var size = (100 / (locales.length + 1)) + '%';
//    w2ui.grid.columns[0] = {
//      field: 'key',
//      caption: 'Key',
//      size: size,
//      resizable: true
//    };
//
//    for (var i = 0; i < locales.length; i++) {
//      w2ui.grid.columns[i+1] = {
//        field: locales[i],
//        caption: locales[i],
//        size: size,
//        resizable: true
//      }
//    }
//    var recid = 0;
//    for (var key in data) {
//      if (data.hasOwnProperty(key)) {
//        console.log(key, data[key]);
//        w2ui.grid.records[recid] = {};
//        w2ui.grid.records[recid]['recid'] = recid;
//        w2ui.grid.records[recid]['key'] = key;
//        for (var i = 0; i < locales.length; i++) {
//          w2ui.grid.records[recid][locales[i]] = data[key][locales[i]];
//        }
//      }
//      recid++;
//    }
//    w2ui.grid.total = w2ui.grid.records.length;
//    w2ui.grid.refresh();
  }
});