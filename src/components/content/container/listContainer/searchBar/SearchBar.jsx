import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss'
import { Input } from 'chayns-components';

const propTypes ={
    callback: PropTypes.func.isRequired
};


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state={
            timeoutId: 0
        }
    }
    render(){
        return(
            <div className="Suche Suche--accordion">
                <Input id= "search" type="text" placeholder="Suche" onKeyUp={(value) =>
                    this.handleChange(value)
                }/>                
                <label id="iconlabel">
                    <i className="fa fa-search"></i>
                </label>
            </div>
        );
    }
    handleChange(value){
        clearTimeout(this.state.timeoutId);
            this.state.timeoutId = setTimeout(() => {
                this.props.callback(value === '' ? 'love' : value);
        }, 500);
    }
}

SearchBar.propTypes = propTypes;

export default SearchBar;