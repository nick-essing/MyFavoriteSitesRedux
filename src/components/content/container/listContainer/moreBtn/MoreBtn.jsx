import React from 'react';
import PropTypes from 'prop-types';

const propTypes ={
    callback: PropTypes.func.isRequired
};

class MoreBtn extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className='right' style={{textAlign: 'right', margin: 10 + 'px ' + 10 + 'px ' + 5 + 'px ' + 0}}>
                <a href='#' id='right' onClick={()=>{
                    this.props.callback();
                }}>Mehr anzeigen</a>             
            </div>
        );
    }
}

MoreBtn.propTypes = propTypes;

export default MoreBtn;