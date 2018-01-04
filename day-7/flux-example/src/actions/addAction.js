import AppDispatcher from '../dispatchers/appDispatcher';

var AddAction = {
	addNewItem(text){
		AppDispatcher.dispatch({
			actionType: 'Add_new_item',
			text: text
		})
	}
}