/**
 * Created by vimukthib on 7/12/14.
 */
var ChatToolbar = $.inherit({
  name: null,
  _sendHandler: null,
  __constructor : function(name) { // constructor
    this.name = name;
  },
  items: [
    { type: 'button',  id: 'send',  caption: 'Send', icon: 'fa-flag' }
  ],
  addSendHandler: function(handler){
    this._sendHandler = handler;
  },
  onClick: function (event) {
    var _this = this;
    switch (event.target) {
      case 'send':
        if(_this._sendHandler != null){
          _this._sendHandler(event);
        }
        break;
      case 'insert':
        this.insert('break1', { type: 'button', id: 'button' + btnCount, caption: 'button '+ btnCount, img: 'icon-page' });
        btnCount++;
        break;
      case 'delete':
        if (btnCount <= 0) return;
        btnCount--;
        this.remove('button'+ btnCount);
        break;
    }
  }
});