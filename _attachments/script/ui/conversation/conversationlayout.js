/**
 * Created by vimukthib on 7/11/14.
 */
var ConversationLayout = $.inherit({
  _topbar: null,
  _chat: null,
  _video: null,
  name: null,
  panels: [
    { type: 'top', size: 40, content: 'top' },
    { type: 'main', size: '50%', resizable: true, content: 'video' },
    { type: 'right', size: '50%', resizable: true, content: 'chat' }
  ],
  __constructor : function(name) { // constructor
    this.name = name;
  },

  init: function(){
    var _this = this;
    _this._topbar = new ConversationTopbar(_this.name + '-topbar');
    _this._chat = new ChatLayout(_this.name + '-chat');
    _this._video = new VideoLayout(_this.name + '-video');
    w2ui[_this.name].content('top', $().w2toolbar(_this._topbar));
    w2ui[_this.name].content('main', $().w2layout(_this._video));
    w2ui[_this.name].content('right', $().w2layout(_this._chat));
    _this._chat.init();
  }
});