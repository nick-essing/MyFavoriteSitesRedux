import React from 'react';
import './listSyles.scss'
import ListItem from './ListItem';
import { connect } from 'react-redux'

class CreateList extends React.Component {

    render(){
        return (
        <React.Fragment>
            {this.props.list !== null ? this.props.list.map((s) => <ListItem key={s.siteId} {...s} />): <div style={{textAlign: 'center'}}><br /><h3>Keine Ergebnisse gefunden</h3></div>}
        </React.Fragment>
        );
    } 
}

const mapStateToProps = (state) => {
    return {
        list: state.listReducer.list,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (link) => dispatch(fetchData(link))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateList);