// eslint-disable-next-line no-unused-vars
const addOneItem = (state, todoItem) => {
	const obj = { completed: false, item: todoItem };
	localStorage.setItem(todoItem, JSON.stringify(obj));
	state.todoItems.push(obj);
}

// eslint-disable-next-line no-unused-vars
const removeOneItem = (state, payload) => {
	localStorage.removeItem(payload.todoItem.item);
	state.todoItems.splice(payload.index, 1)
}

// eslint-disable-next-line no-unused-vars
const toggleOneItem = (state, payload) => {
	state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
	localStorage.removeItem(payload.todoItem.item);
	localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

// eslint-disable-next-line no-unused-vars
const removeAllItem = (state) => {
	localStorage.clear();
	state.todoItems = '';
}

export { addOneItem, removeOneItem, toggleOneItem, removeAllItem }
