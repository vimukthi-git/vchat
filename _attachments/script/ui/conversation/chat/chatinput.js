/**
 * Created by vimukthib on 7/12/14.
 */
var ChatInput = $.inherit({
  name: null,
  fields: [
    { name: 'chatinput', type: 'text' }
  ],
  __constructor : function(name) { // constructor
    this.name = name;
  }
});