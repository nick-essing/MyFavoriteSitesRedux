import React from 'react';

import { HEADLINE, DESCRIPTION, LINK } from '../../constants/text';

const Intro = () => (
    <div className="tapp__intro">
        <h1 className="headline">
            {HEADLINE}
        </h1>
        <p>
            {DESCRIPTION}<a>{LINK}</a>
        </p>
    </div>
);

export default Intro;
