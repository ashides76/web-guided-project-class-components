import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      groceries: groceries
    }
  }

  // componentDidMount() {
  //   console.log(this.state.groceries.map(item => item.purchased));
  // }

  // Class methods to update state
  addItem = (event, item) => {
    event.preventDefault(); 
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    }
    this.setState({...this.state, groceries: [...this.state.groceries, newItem]})
  }

  toggleItem = (itemID) => {
    console.log(itemID);
    this.setState({...this.state, groceries: this.state.groceries.map(item => {
      if (item.id === itemID) {
        return {...this.state, purchased: !item.purchased}
        this.setState(item.purchased = !item.purchased)
      }
      return item;
    })})
  }

  clearPurchased = () => {
    this.setState({...this.state, groceries: this.state.groceries.filter(item => {
      if(!item.purchased) {
        return item;
      }
    })})
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm addItem={this.addItem} />
         </div>
        <GroceryList groceries={this.state.groceries} toggleItem={this.toggleItem}/>
        <button onClick={this.clearPurchased} className="clear-btn">Clear Purchased</button>
        {/* <button onClick={(event) => this.addItem(event, 'orange')}>Add Orange</button> */}
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);