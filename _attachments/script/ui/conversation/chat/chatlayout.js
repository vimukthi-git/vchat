/**
 * Created by vimukthib on 7/12/14.
 */
var ChatLayout = $.inherit({
  name: null,
  _chatHistory: null,
  _chatToolbar: null,
  _chatInput: null,
  _peer: null,
  panels: [
    { type: 'top', size: 390},
    { type: 'main', size: 25},
    { type: 'bottom', size: 145}
  ],
  __constructor : function(name) { // constructor
    this.name = name;
  },

  init: function(){
    var _this = this;
    _this._chatHistory = new ChatHistory(_this.name + '-history');
    _this._chatToolbar = new ChatToolbar(_this.name + '-toolbar');
    _this._chatInput = _this.name + '-input';
    w2ui[_this.name].content('top', $().w2grid(_this._chatHistory));
    w2ui[_this.name].content('main', $().w2toolbar(_this._chatToolbar));
    w2ui[_this.name].content('bottom', '<textarea id="'+ _this._chatInput +'" name="'+ _this._chatInput +'" type="text" style="width: 100%; height: 95%;"></textarea>');
    _this.initPeerConnection();
    _this.initChatEvents();
  },

  initChatEvents: function(){
    
  },

  handleLocalMessage: function(message){

  },

  handleRemoteMessage: function(message){
    var _this = this;
    _this._chatHistory.addChat(message);
  }

});