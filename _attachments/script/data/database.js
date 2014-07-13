/**
 * Created by vimukthib on 7/11/14.
 */
var Database = $.inherit({

  _name: "vchat_data",
  _vchatdb : null,

  __constructor : function() { // constructor

  },

  startSession : function(username, password, successFunction, errorFunction){
    var _this = this;
    _this._vchatdb = $.couch.db(_this._name);
    $.couch.login({
      name: username,
      password: password,
      success: successFunction,
      error: errorFunction
    });
  },

  getBuddies: function(buddyId, successFunc, errorFunc){
    var _this = this;
    var buddies = null;
    _this._vchatdb.view("getBuddies/getBuddies", {
        success: successFunc,
        error: errorFunc,
        reduce: false
    });
  },

  setPeerId: function(peerId){
    this._vchatdb.saveDoc(new Contact(VCHAT.USER_ID, peerId), {
      success: function() {
      }
    });
  }

});