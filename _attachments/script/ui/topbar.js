/**
 * Created by vimukthib on 7/12/14.
 */
var Topbar = $.inherit({
  name: VCHAT.TOPBAR,
  items: [
    { type: 'html', id: 'apptitle', html: '<div style="padding: 12px 20px; font-size: 18px;">VChat</div>'},
    { type: 'break', id: 'break1' },
    { type: 'menu', id: 'newmenu', caption: 'New', icon: 'fa-table', count: 17, items: [
      { text: 'Voice Call', icon: 'fa-camera', count: 5 },
      { text: 'Video Call', icon: 'fa-picture'},
      { text: 'Buddy', icon: 'fa-camera', count: 5 },
      { text: 'Group', icon: 'fa-camera', count: 5 }
    ]},
    { type: 'spacer' },
    { type: 'break', id: 'break2' },
    { type: 'menu', id: 'managemenu', caption: 'Vimukthi', icon: 'fa-table', count: 17, items: [
      { text: 'Profile', icon: 'fa-camera', count: 5 },
      { text: 'Buddies', icon: 'fa-camera', count: 5 },
      { text: 'Groups', icon: 'fa-picture'}
    ]},
    { type: 'button',  id: 'logout',  caption: 'Signout', icon: 'fa-flag' }

  ]
});

//{ type: 'check',  id: 'item1', caption: 'Check', icon: 'fa-check', checked: true },
//{ type: 'break',  id: 'break0' },
//{ type: 'menu',   id: 'item2', caption: 'Menu', icon: 'fa-table', count: 17, items: [
//  { text: 'Item 1', icon: 'fa-camera', count: 5 },
//  { text: 'Item 2', icon: 'fa-picture', disabled: true },
//  { text: 'Item 3', icon: 'fa-glass', count: 12 }
//]},
//{ type: 'break', id: 'break1' },
//{ type: 'radio',  id: 'item3',  group: '1', caption: 'Radio 1', icon: 'fa-star', checked: true },
//{ type: 'radio',  id: 'item4',  group: '1', caption: 'Radio 2', icon: 'fa-heart' },
//{ type: 'break', id: 'break2' },
//{ type: 'drop',  id: 'item5', caption: 'Drop Down', icon: 'fa-plus', html: '<div style="padding: 10px">Drop down</div>' },
//{ type: 'break', id: 'break3' },
//{ type: 'html',  id: 'item6',
//  html: '<div style="padding: 3px 10px;">'+
//  ' Input:'+
//  '    <input size="10" style="padding: 3px; border-radius: 2px; border: 1px solid silver"/>'+
//'</div>'
//},
//{ type: 'spacer' },
//{ type: 'button',  id: 'item7',  caption: 'Item 5', icon: 'fa-flag' }