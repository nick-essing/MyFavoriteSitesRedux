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
            <Accordion
                head="MyFavoriteSites"
                defaultOpened
                className="accordion--fixed"
                right={
                    <SearchBar
                        callback={(value) => {
                            this.props.search(value);
                            this.props.emptyList();
                            this.appendList()
                            }}
                    />
                }
            >
                <CreateList list={this.props.list}/>
                <MoreBtn callback={() => this.appendList()}/>
            </Accordion>
        );
    }
    appendList = () => {
        this.props.fetchData(this.props.searchString, this.props.list.length, count)
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
        fetchData: (serarchString, skip, take) => dispatch(fetchData(serarchString, skip, take)),
        search: (value) => dispatch(search(value)),
        emptyList: () => dispatch(emptyList())
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(ListContainer);  
