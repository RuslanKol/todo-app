import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addListItem } from '../../actions/index';
import './List.css';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemValue: "",
        }
        this.listName = [];
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleOnChange = () => {
        this.setState({itemValue: ReactDOM.findDOMNode(this.refs.addNewItem).value});
    }

    handleAddNewItem = () => {
        const { list, addListItem } = this.props;
        let newList = list;
        newList.push({text: this.state.itemValue});
        addListItem(newList);
        this.setState({itemValue: ""});
    }

    handleDeleteItem = (itemIndex) => {
        const { list, addListItem } = this.props;
        list.splice(itemIndex, 1);
        addListItem(list);
    }
    
    handleUpdate(itemIndex) {
        const { addListItem, list } = this.props;
        let updatedList = list;
        updatedList[itemIndex].text =  this.listName[itemIndex].value;
        addListItem(updatedList);
    }

    render() {
        const { list } = this.props;
        return(
            <div>
                <div>
                    {JSON.stringify(list) === '[]' || list === null
                    ?
                    <p>No items yet</p>
                    :
                    list.map((item,index) => (
                    <div className="list__item" key={index}>
                        <input
                            type="text"
                            ref={input => this.listName[index] = input}
                            value={item.text}
                            onChange={() => this.handleUpdate(index)}
                            />
                        <button
                            onClick={ () => this.handleDeleteItem(index)}
                            >
                            Delete item
                        </button>
                    </div>
                    ))
                    }
                </div>
                <input
                    type="text"
                    ref="addNewItem"
                    value={this.state.itemValue}
                    onChange={this.handleOnChange}
                    placeholder="Enter new list item"
                    />
                <button
                    onClick={this.handleAddNewItem}
                    >
                    Add
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list
  });
  
const mapDispatchToProps = dispatch => ({
    addListItem: (newList) => dispatch(addListItem(newList)),
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
