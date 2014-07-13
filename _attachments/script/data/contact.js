/**
 * Created by vimukthib on 7/13/14.
 */
var Contact = $.inherit({
  _id: null,
  recid: null,
  Type: null,
  userId: null,
  peerId: null,

  __constructor : function(userId, peerId) { // constructor
    this._id = userId;
    this.recid = userId;
    this.Type = "vchat_user";
    this.userId = userId;
    this.peerId = peerId;
  }

},{

});