/**
 * Created by vimukthib on 7/12/14.
 */
var ChatToolbar = $.inherit({
  name: null,
  __constructor : function(name) { // constructor
    this.name = name;
  },
  items: [
    { type: 'button',  id: 'send',  caption: 'Send', icon: 'fa-flag' }
  ]
});