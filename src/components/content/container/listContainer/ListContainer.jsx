import React from 'react';
import MoreBtn from './moreBtn/MoreBtn';
import SearchBar from './searchBar/SearchBar';
import CreateList from './createList/CreateList'
import { Accordion } from 'chayns-components';
import { connect } from 'react-redux'
import { fetchData } from '../../../../actions/fetchData';
import { search } from '../../../../actions/search';
import { emptyList } from '../../../../actions/emptyList';

const count = 10;
class ListContainer extends React.Component {
    constructor(props) {
        super(props);    
        this.appendList(props.searchString);
    }

    render() {
        return (
            <Accordion head="MyFavoriteSites" defaultOpened className="accordion--fixed" right={<SearchBar callback={(value) => {this.props.search(value);this.props.emptyList();this.appendList()}}/>}>
                <CreateList list={this.props.list}/>
                <MoreBtn callback={() => this.appendList()}/>
            </Accordion>
        );
    }
    appendList = () => {
        if(this.props.list !== null){
           this.props.fetchData("https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=" + this.props.searchString + "&Skip="+ this.props.list.length +"&Take="+ count)
        }
    } 
}

const mapStateToProps = (state) => {
    return {
        list: state.listReducer.list,
        searchString: state.searchReducer.searchString
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (link) => dispatch(fetchData(link)),
        search: (value) => dispatch(search(value)),
        emptyList: () => dispatch(emptyList())
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(ListContainer);  
