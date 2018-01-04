import EventEmitter from 'events';
import assign from 'object-assign';

var ListStore = assign({}, EventEmitter.prototype, {
	items : ["ABC", "123", "XYZ"],
	getAll : function(){
		return this.items;
	},
	addNewItem : function(item){
		this.items.push(item);
	},
	emitChange : function(){
		this.emit('change');
	},
	addChange : function(cb){
		this.on('change', cb);
	}
});

export default ListStore;