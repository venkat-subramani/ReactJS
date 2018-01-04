import ListStore from '../stores/listStore';

AppDispatcher.register(){
	switch('Add_new_item'):
		ListStore.addNewItem(action.text)
		ListStore.emitChange();
		break;
}