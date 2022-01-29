import React from "react";


class Header extends React.Component
{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="App-header">
                <nav>
                    <ul class="navigation">
                        <li><a>Surendar Raparla</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">My Projects</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header