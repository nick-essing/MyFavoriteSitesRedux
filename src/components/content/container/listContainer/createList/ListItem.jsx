import React from 'react';

class ListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className={`ListItem ListItem--accordion ${this.state.open ? 'ListItem--accordion--open' : ''}`}>
                <div className="ListItem__head" onClick={() => this.handleClick()}>
                    <div className="ListItem__Arrow">
                        <i className="fa fa-chevron-right" />
                    </div>
                    <div className="ListItem__Image">
                        <img style={{backgroundImage: `url( https://sub60.tobit.com/l/${this.props.locationId})`, backgroundSize: '40 px 40 px' }} />
                    </div>
                    <div className="ListItem__Title">
                        <p className="ListItem__Title--headline">{ this.props.appstoreName }</p>
                        <p className="ListItem__Title--description" />
                    </div>
                </div>
                    <div className="ListItem__body">
                        <div className="ListItem__content">
                            <p>
                                <a href={`https://chayns.net/${this.props.siteId}`} target="tapp">zur Website</a> <br />
                                <a href={`https://www.facebook.de/${this.props.facebookId}`} target="tapp1">zur Facebook Seite</a>
                            </p>
                        </div>
                    </div>
            </div>
        );
    }
}
export default ListItem;
