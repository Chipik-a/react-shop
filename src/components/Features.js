import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <div className='features'>
                <span>Features</span>
                <h2>Brief description of our advantages</h2>
                <div className="blocks">
                    <div>
                        <img src="./img/fast.png" alt="fast" />
                        <h3>Fast</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates excepturi facilis vero cupiditate velit.</p>
                    </div>
                    <div>
                        <img src="./img/safety.png" alt="safety" />
                        <h3>Safety</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <img src="./img/comfort.png" alt="comfort" />
                        <h3>Comfort</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti animi dolore expedita! Inventore, nam!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features
