import React from 'react';
import './listSyles.scss';
import ListItem from './ListItem';

const CreateList = props => (
        <React.Fragment>
            {props.list.length > 1 ? props.list.map(s => <ListItem key={s.siteId} {...s} />) : <div style={{ textAlign: 'center' }}><br /><h3>Keine Ergebnisse gefunden</h3></div>}
        </React.Fragment>
);

export default CreateList;
