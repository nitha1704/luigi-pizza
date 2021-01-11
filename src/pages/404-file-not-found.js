import React from 'react';
import {Link} from 'react-router-dom';

class FileNotFound404 extends React.Component {
    render(){
        return (
          <div id="notfound">
            <div class="notfound">
              <div class="notfound-404">
                <h1>404</h1>
              </div>
              <h2>Oops! Nothing was found</h2>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <Link to="/">Return to homepage</Link>
            </div>
          </div>
        );
    }
}

export default FileNotFound404;