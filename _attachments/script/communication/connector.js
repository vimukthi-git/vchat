/**
 * Created by vimukthib on 7/13/14.
 */
var Connector = $.inherit({

  _chatConnections: null,

  init: function(){
    var _this = this;
    _this._chatConnections = {};
    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    _this._peer = new Peer({
      // Set API key for cloud server (you don't need this if you're running your
      // own.
      key: 'ljyg406a8sb2csor',

      // Set highest debug level (log everything!).
      debug: 1,

      // Set a logging function:
      logFunction: function() {
        var copy = Array.prototype.slice.call(arguments).join(' ');
        console.log("WEBRTC -- " + copy + '<br>');
      }
    });

    // Show this peer's ID.
    _this._peer.on('open', function(id){
      console.log('**** id *** - ' + id);
      VCHAT.DB.setPeerId(id);
    });

    // Await connections from others
    _this._peer.on('connection', _this.handleConnection);

    // Make sure things clean up properly.

    window.onunload = window.onbeforeunload = function(e) {
      if (!!_this._peer && !_this._peer.destroyed) {
        _this._peer.destroy();
      }
    };
  },

  handleConnection: function(connection){
    var _this = this;
    // Handle a chat connection.
    if (connection.label === 'chat') {
      _this._chatConnections[connection.peer] = _this.createConvUi(connection.peer);
      connection.on('data', function (data) {
        _this._chatConnections[connection.peer].handleRemoteMessage(new Chat(new Date().getTime(), data, new Date(), "", ""));
      });
      connection.on('close', function () {
        alert(connection.peer + ' has left the chat.');
        delete _this._chatConnections[connection.peer];
      });
    }
//    else if (connection.label === 'file') {
//      connection.on('data', function (data) {
//        // If we're getting a file, create a URL for it.
//        if (data.constructor === ArrayBuffer) {
//          var dataView = new Uint8Array(data);
//          var dataBlob = new Blob([dataView]);
//          var url = window.URL.createObjectURL(dataBlob);
//          $('#' + connection.peer).find('.messages').append('<div><span class="file">' + connection.peer + ' has sent you a <a target="_blank" href="' + url + '">file</a>.</span></div>');
//        }
//      });
//    }

  },

  connectChat: function(peerid, peerui){
    var _this = this;
    if (!_this._chatConnections[peerid]) {
      // Create 2 connections, one labelled chat and another labelled file.
      var connection = _this._peer.connect(peerid, {
        label: 'chat',
        serialization: 'none',
        metadata: {
          message: 'hi i want to chat with you!'
        }
      });
      connection.on('open', function () {
        _this.handleConnection(connection);
      });
      connection.on('error', function (err) {
        alert(err);
      });
      var file = _this._peer.connect(peerid, {
        label: 'file',
        reliable: true
      });
      file.on('open', function () {
        _this.handleConnection(file);
      });
      file.on('error', function (err) {
        alert(err);
      });
    }
    _this._chatConnections[peerid] = peerui;
  },

  createConvUi: function(peerid){
    var conv = new ConversationLayout(peerid);
    w2ui[VCHAT.MAIN_LAYOUT].content('main', $().w2layout(conv));
    conv.init();
    return conv;
  }

});