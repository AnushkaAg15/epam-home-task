import React from 'react';
import ReactDOM from 'react-dom';
import './footer.scss';

function Footer(){
    return(
        <div>
            <footer>
                <ul>
                    <li>
                        <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> newsfeed 2019</p>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

export default Footer;
