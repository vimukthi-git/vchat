/**
 * Created by vimukthib on 7/11/14.
 */

var VCHAT_NAME = "vchat";
var VCHAT = {
  MAIN_LAYOUT: 'main_layout',
  TOPBAR: 'topbar',
  BUDDY_LIST: 'buddylistgrid',
  STATUSBAR : 'statusbar'
};


$(function () {
  var db = new Database();
  var app = null;
  db.startSession(function(data){
    app = new VChat();
    app.start(data);
  }, function (status) {
    console.log(status);
  });
});