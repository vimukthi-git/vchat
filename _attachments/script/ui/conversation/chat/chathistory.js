/**
 * Created by vimukthib on 7/12/14.
 */
var ChatHistory = $.inherit({
  name: null,
  resizable: false,
  columns: [
    { field: 'message', caption: 'History', size: '100%', sortable: true }
  ],
  records: [
    { recid: 1, fname: 'John', message: 'Blahhhh blashhhhdie ', sdate: '4/3/2012' },
    { recid: 2, fname: 'Stuart', message: 'Blahhhh blashhhhdie vfdb htthtrh <br/> bgdhddh yjhytj', sdate: '4/3/2012' },
    { recid: 3, fname: 'Jin', message: 'Blahhhh tyejbjk ', sdate: '4/3/2012' },
    { recid: 4, fname: 'Susan', message: 'Blahhhh blashhhhdie ', sdate: '4/3/2012' }
  ],
  __constructor : function(name) { // constructor
    this.name = name;
  },
  onClick: function (event) {
    //w2ui['grid2'].clear();
    var record = this.get(event.recid);
    console.log(record);
  }
});