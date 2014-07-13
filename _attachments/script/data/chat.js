/**
 * Created by vimukthib on 7/13/14.
 */
var Chat = $.inherit({
  _id: null,
  _message: null,
  _date: null,
  _from: null,
  _to: null,

  /**
   * GetterSetter for _id
   */
  setId : function (value) {
    this._id = value;
  },
  getId : function () {
    return this._id;
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