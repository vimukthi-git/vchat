/**
 * Created by vimukthib on 7/12/14.
 */
var ChatHistory = $.inherit({
  name: null,
  resizable: false,
  columns: [
    { field: '_message', caption: 'Chat', size: '100%', sortable: true }
  ],
  records: [
    { recid: 1, _from: 'John', _to: 'Tom', _message: 'Blahhhh blashhhhdie ', _date: '4/3/2012' },
    { recid: 2, _from: 'Tom', _to: 'John', _message: 'Blahhhh blas <br/> test', _date: '4/3/2012' },
    { recid: 3, _from: 'John', _to: 'Tom', _message: 'Blahhhh blashhhhdie ', _date: '4/3/2012' }
  ],
  __constructor : function(name) { // constructor
    this.name = name;
  },

  addChat: function(message){
    w2ui[this.name].add(message);
  },

  onClick: function (event) {
    var record = this.get(event.recid);
    console.log(record);
    this.addChat(new Chat(event.recid + 3, "my test message 1", '29/3/1290', 'Tom', 'John'));
  }
});