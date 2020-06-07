import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/layout/pages/About';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    todos : [
      {
      id: uuid.v4(),
      title : 'Learn React',
      completed: false
    },
    {
      id: uuid.v4(),
      title : 'Cool food',
      completed: true
    },
    {
      id: uuid.v4(),
      title : 'Learn React',
      completed: false
    }
 ]
  }

  toggleComplete = (id) => {
    this.setState({todo: this.state.todos
      .filter(todo => todo.id === id)
      .map(todo => todo.completed = !todo.completed)
    });
  }

  deleteTodo = (id) => {
    console.log(id);
    this.setState({todos: [...this.state.todos.filter(it => it.id !== id)]});
  }

  addTodo = (title) => {
      console.log(title);
      const newTodo = {
        id: uuid.v4(),
        title:title,
        completed: false
      }
      this.setState({todos : [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render = {props => (
            <Route.Fragment>
                 <AddTodo addTodo= {this.addTodo} />
       <Todos todos={ this.state.todos }
       toggleComplete={this.toggleComplete}
       deleteTodo={this.deleteTodo}/>
            </Route.Fragment>
        )} />

        <Route path="/about" component= {About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
