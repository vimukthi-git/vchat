/**
 * Created by vimukthib on 7/12/14.
 */
var VideoLayout = $.inherit({
  name: null,
  panels: [
    { type: 'top', size: '75%', resizable: true, content: 'main video' },
    { type: 'bottom', size: '25%', resizable: true, content: 'other videos chats if present' }
  ],
  __constructor : function(name) { // constructor
    this.name = name;
  },

  init: function(){
    var _this = this;
    //_this._topbar = new ConversationTopbar(_this.name + '-topbar');
    //w2ui[_this.name].content('top', $().w2toolbar(_this._topbar));
//    w2ui[VCHAT.MAIN_LAYOUT].content('main', $().w2layout(_this._mainContent));
//    w2ui[VCHAT.MAIN_LAYOUT].content('left', $().w2grid(_this._buddyListGrid));
//    w2ui[VCHAT.MAIN_LAYOUT].content('bottom', $().w2toolbar(_this._statusbar));
  }
});