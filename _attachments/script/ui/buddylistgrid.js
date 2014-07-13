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
    { field: 'userId', caption: 'Buddies', size: '100%', sortable: true }
  ],
  records: [],

  refreshBuddies: function(){
    VCHAT.DB.getBuddies( VCHAT.USER_ID, function(data) {
      w2ui[VCHAT.BUDDY_LIST].clear();
      for(var i = 0; i < data.rows.length; i++){
        var obj = data.rows[i].value;
        if(obj.userId != VCHAT.USER_ID) {
          w2ui[VCHAT.BUDDY_LIST].add(new Contact(obj.userId, obj.peerId));
        }
      }
      //console.log(data);
    }, function(status) {
      console.log(status);
    });
  },

  onClick: function(event){
    //w2ui['grid2'].clear();
    var record = this.get(event.recid);
    console.log(record);
    var con = VCHAT.CONNECTOR.connectChat(record.peerId);
  }
});