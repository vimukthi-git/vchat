/**
 * Created by vimukthib on 7/11/14.
 */
var Database = $.inherit({

  _name: "vchat",
  _user: "test",
  _pass: "test",
  _connection : null,

  __constructor : function() { // constructor

  },

  startSession : function(successFunction, errorFunction){
    var _this = this;
    _this._connection = $.couch.db(_this._name);
    $.couch.login({
      name: _this._user,
      password: _this._pass,
      success: successFunction,
      error: errorFunction
    });
  },

  mapLocaleFunction: function (doc) {
    if (doc.Type == 'locale')  emit(null, doc);
  }


  //    $db.query(_this.mapLocaleFunction, "_count", "javascript", {
//      success: _this.processData,
//      error: function (status) {
//        console.log(status);
//      },
//      reduce: false
//    });



});