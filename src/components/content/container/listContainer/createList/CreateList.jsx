import React from 'react';
import './listSyles.scss'
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const propTypes ={
    tempList: PropTypes.array
};

class CreateList extends React.Component {

    render(){
        return (
        <React.Fragment>
            {this.props.tempList !== null ? this.props.tempList.map((s) => <ListItem key={s.siteId} {...s} />): <div style={{textAlign: 'center'}}><br /><h3>Keine Ergebnisse gefunden</h3></div>}
        </React.Fragment>
        );
    } 
}

CreateList.propTypes = propTypes;

export default CreateList;