/**
 * Created by vimukthib on 7/12/14.
 */
var MainLayout = $.inherit({
  _div: '#main_layout',
  name: VCHAT.MAIN_LAYOUT,
  padding: 0,
  panels: [
    { type: 'top', size: 45, style: 'border: 0px; border-bottom: 1px solid silver; background-color: #fff; color: #555;', overflow: 'hidden'},
    { type: 'left', size: 240, style: 'border-right: 1px solid silver;' },
    { type: 'main', style: 'background-color: white;' },
    { type: 'bottom', size: 30, style: 'border: 0px; border-bottom: 1px solid silver; background-color: #dddddd; color: #555;', overflow: 'hidden'}
  ],

  getDiv: function(){
    return this._div;
  }

});