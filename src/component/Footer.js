import React from 'react';
import './footer.css';

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer className='foo'>
                <center>
                    <h3>&copy; The Healthy shopping {props.year} {props.month}</h3>
                </center>
            </footer>


        </React.Fragment>
    )
}

export default Footer;
