import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor(props){
    super(props); 
    this.state = {
      item: '',
    }
  }



  handleChanges = event => {
    // update state with each keystroke
    event.preventDefault();
    this.setState({...this.state, item: event.target.value})
  };

  // class property to submit form
  submitForm = (event) => {
    event.preventDefault();
    this.props.addItem(event, this.state.item)
    this.setState({...this.state, item:''})
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;