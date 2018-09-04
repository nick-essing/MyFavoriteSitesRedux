import React from 'react';
import { Accordion } from 'chayns-components';
import { connect } from 'react-redux';
import MoreBtn from './moreBtn/MoreBtn';
import SearchBar from './searchBar/SearchBar';
import CreateList from './createList/CreateList';
import { fetchData } from '../../../../actions/fetchData';
import { search } from '../../../../actions/search';

const count = 10;
class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allowMoreBtn: true,
            listLength: this.props.list.length
        }
        this.appendList(this.props.list.length);
    }

    componentWillReceiveProps (props) {
        if (props.list.length !== this.state.listLength) {
            this.setState({
                allowMoreBtn: true,
                listLength: props.list.length
            });
        }
    }

    appendList(skip) {
        this.props.fetchData(this.props.searchString, skip, count);
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
                            this.appendList(0);
                        }}
                    />
                }
            >
                <CreateList list={this.props.list}/>
                <MoreBtn callback={() => {
                    if (this.state.allowMoreBtn) {
                        this.appendList(this.props.list.length);
                        this.setState({ allowMoreBtn: false });
                    }
                    }}
                />
            </Accordion>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listReducer.list,
        searchString: state.searchReducer.searchString
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (serarchString, skip, take) => dispatch(fetchData(serarchString, skip, take)),
        search: value => dispatch(search(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
