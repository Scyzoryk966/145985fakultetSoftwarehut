import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import { useService } from '../../hooks/useService';
import { useSelector } from 'react-redux';
import { TodoService } from '../../services/todo.service';
import {todosSelector} from "../../store/selectors/todos.selectors";



const Home = () => {

    const todoService = useService(TodoService);
    const todos = useSelector(todosSelector);

    React.useEffect(() => {
        todoService.setNewTodo({
            done: false,
            label: 'nowe todo',
            description: 'opis todo',
            id: 2
        });
    }, []);


    return (
        <div>
            <NavPanel />
        </div>
    );

};

export default Home;