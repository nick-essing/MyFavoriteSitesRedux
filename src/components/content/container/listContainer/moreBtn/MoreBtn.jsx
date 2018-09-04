import React from 'react';
import PropTypes from 'prop-types';

const propTypes ={
    callback: PropTypes.func.isRequired
};
let timeoutId;
const MoreBtn = (props) => (
    <div className='right' style={{textAlign: 'right', margin: 10 + 'px ' + 10 + 'px ' + 5 + 'px ' + 0}}>
        <a href='#' id='right' onClick={()=>{
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            props.callback();
        }, 300);
        }}>Mehr anzeigen</a>             
    </div>
)

MoreBtn.propTypes = propTypes;

export default MoreBtn;