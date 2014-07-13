/**
 * Created by vimukthib on 7/11/14.
 */
var BuddyListGrid = $.inherit({
  name: VCHAT.BUDDY_LIST,
  resizable: false,
  show: {
    toolbar 	: true
  },
  columns: [
    { field: 'fname', caption: 'Buddies', size: '100%', sortable: true }
  ],
  records: [
    { recid: 1, fname: 'John', lname: 'doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
    { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
    { recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
    { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012' }
  ],
  onClick: function (event) {
    //w2ui['grid2'].clear();
    var record = this.get(event.recid);
    console.log(record);
  }
});