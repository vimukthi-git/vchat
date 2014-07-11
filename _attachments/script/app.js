$dbname = "vchat";
$appname = "vchat";
$db = $.couch.db($dbname);
var localedata = {};
var sidebar = {
  name: 'sidebar',
  nodes: [],
  onClick: sideBarClick
};
var grid = {
  name: 'grid',
  show: {
    toolbar: true
  },
  columns: [
    {
      field: 'key',
      caption: 'Key',
      size: '180px',
      resizable: true
    }
  ],
  records: []
};

// widget configuration
var config = {
  layout: {
    name: 'layout',
    padding: 0,
    panels: [
      { type: 'top', size: 45, style: 'border: 0px; border-bottom: 1px solid silver; background-color: #fff; color: #555;', overflow: 'hidden'},
      { type: 'left', size: 240, resizable: true, style: 'border-right: 1px solid silver;' },
      { type: 'main', style: 'background-color: white;' }
    ]
  }
}

$(function () {
  $.couch.login({
    name: "test",
    password: "test",
    success: startApp,
    error: function (status) {
      console.log(status);
    }
  });
});

var startApp = function (data) {
  // initialization
  $('#main_layout').w2layout(config.layout);
  w2ui.layout.content('top', '<div style="padding: 12px 20px; font-size: 18px;">LOL</div>');

  $db.query(mapLocaleFunction, "_count", "javascript", {
    success: processData,
    error: function (status) {
      console.log(status);
    },
    reduce: false
  });
  //w2ui.layout.content('left', $().w2sidebar(config.sidebar));

}

var processData = function (data) {
  console.log(data);
  var selected = false;
  for (var i = 0; i < data.rows.length; i++) {
    localedata[data.rows[i].id] = data.rows[i].value;
    if (i == 0) {
      w2ui.layout.content('main', $().w2grid(grid));
      refreshGrid(data.rows[i].value.Strings, data.rows[i].value.SupportedLocales);
      selected = true;
    } else {
      selected = false;
    }
    sidebar.nodes[i] = {
      id: data.rows[i].id,
      text: data.rows[i].value.Name,
      img: 'icon-page',
      selected: selected
    }
  }
  w2ui.layout.content('left', $().w2sidebar(sidebar));
  console.log(localedata);
}

var refreshGrid = function (data, locales) {
  w2ui.grid.clear();
  var size = (100 / (locales.length + 1)) + '%';
  w2ui.grid.columns[0] = {
    field: 'key',
    caption: 'Key',
    size: size,
    resizable: true
  };

  for (var i = 0; i < locales.length; i++) {
    w2ui.grid.columns[i+1] = {
      field: locales[i],
      caption: locales[i],
      size: size,
      resizable: true
    }
  }
  var recid = 0;
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(key, data[key]);
      w2ui.grid.records[recid] = {};
      w2ui.grid.records[recid]['recid'] = recid;
      w2ui.grid.records[recid]['key'] = key;
      for (var i = 0; i < locales.length; i++) {
        w2ui.grid.records[recid][locales[i]] = data[key][locales[i]];
      }
    }
    recid++;
  }
  w2ui.grid.total = w2ui.grid.records.length;
  w2ui.grid.refresh();
}

var mapLocaleFunction = function (doc) {
  if (doc.Type == 'locale')  emit(null, doc);
};


function sideBarClick(event) {
  refreshGrid(localedata[event.target].Strings, localedata[event.target].SupportedLocales);
}