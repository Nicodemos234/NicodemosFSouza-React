import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => (
    <div className="fill-avaliable center center-elements">
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <h1>Error 404, Not Found</h1>
    </div>
)

export default NotFound;