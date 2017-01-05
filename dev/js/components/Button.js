import React, { Component } from 'react';
import '../../scss/Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
    render() {
        // You can use them as regular CSS styles
        return <div>
            <div className="Buttoncontainer">
                <div className="Button">Begin</div>
            </div>
        </div>
    }
}

export default Button;