/**
 * Created by vimukthib on 7/13/14.
 */
var Chat = $.inherit({
  recid: null,
  _message: null,
  _date: null,
  _from: null,
  _to: null,

  __constructor : function(id, message, date, from, to) { // constructor
    this.recid = id;
    this._message = message;
    this._date = date;
    this._from = from;
    this._to = to;
  },

  /**
   * GetterSetter for recid
   */
  setId : function (value) {
    this.recid = value;
  },
  getId : function () {
    return this.recid;
  },
  /**
   * GetterSetter for message
   */
  setMessage : function (value) {
    this._message = value;
  },
  getMessage : function () {
    return this._message;
  },
  /**
   * GetterSetter for _date
   */
  setDate: function (value) {
    this._date = value;
  },
  getDate : function () {
    return this._date;
  },
  /**
   * GetterSetter for _from
   */
  setFrom : function (value) {
    this._from = value;
  },
  getFrom : function () {
    return this._from;
  },
  /**
   * GetterSetter for _to
   */
  setTo : function (value) {
    this._to = value;
  },
  getTo : function () {
    return this._to;
  }

});