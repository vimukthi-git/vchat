/**
 * Created by vimukthib on 7/11/14.
 */
var VCHAT = {
  MAIN_LAYOUT: 'main_layout',
  TOPBAR: 'topbar',
  BUDDY_LIST: 'buddylistgrid',
  STATUSBAR : 'statusbar',
  USER_ID: '',
  DB: '',
  CONNECTOR: ''
};


$(function () {
  VCHAT.DB = new Database();
  var app = null;
  w2popup.open({
    title     : 'Enter User name and Password',
    body      : '<div class="w2ui-centered"><div><label for="username">Username :</label><input type="text" name="username" id="username"/><br/>' +
      '<label for="password">Password :</label><input type="password" name="password" id="password"/></div></div>',
    buttons   : '<button class="btn" onclick="w2popup.close();">OK</button> ',
    width     : 500,
    height    : 300,
    modal     : true,
    onClose   : function (event) {
      VCHAT.USER_ID = $('#username').val();
      var pass = $('#password').val();
      VCHAT.DB.startSession(VCHAT.USER_ID, pass, function(data){
        app = new VChat();
        app.start("");
      }, function (status) {
        console.log(status);
      });

    }
  });

});