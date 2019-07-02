import React from 'react';
import List from '../components/List/List';
import './App.css';

export default class App extends React.Component {
  componentDidMount() {
    const { getList } = this.props.pageActions;
    getList(); 
  }
  render() {
    return(
      <div className="board">
        <div className="board__column">
            <h3>To do</h3>
            <List />
        </div>
      </div>
    )
  }
}

