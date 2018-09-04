import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    callback: PropTypes.func.isRequired
};
const MoreBtn = props => (
    <div className="right" style={{ textAlign: 'right', margin: '10px 10px 5px 0px' }}>
        <a href='#' id='right' onClick={()=>{
                props.callback();
            }}
        >
        Mehr anzeigen
        </a>
    </div>
);

MoreBtn.propTypes = propTypes;

export default MoreBtn;
