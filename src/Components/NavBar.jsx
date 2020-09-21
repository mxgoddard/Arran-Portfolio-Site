import React, { Component } from 'react';
import '../Styles/NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBarWrapper">
                <ul className="NavBarUl">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        );
    };
}

export default NavBar;