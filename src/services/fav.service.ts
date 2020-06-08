import { IFavourites } from '../store/reducers/todos.reducer';
import store from '../store';
import { todosActions } from '../store/actions/todos.actions';

export class TodoService {

  setNewTodo(todo: IFavourites) {
   store.dispatch(todosActions.setNewTodo(todo));
  }

  deleteTodo(todo: IFavourites) {
    store.dispatch(todosActions.setDeleteTodo(todo));
  }

  setTodoDone(todo: IFavourites) {
    store.dispatch(todosActions.setTodoDone(todo.id));
  }

}
