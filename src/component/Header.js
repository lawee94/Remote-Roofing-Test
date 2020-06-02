import React from 'react';
import { Link } from 'react-router-dom'


const header = (props) => (

    <header className='bg-primary'>
        <nav className="navbar navbar-expand-sm scale navbar-dark px-0">
            
            <Link className="navbar-brand" to="/"><strong>DEMO Streaming</strong></Link>

            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse float-right " id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item mr-2">
                        <Link className="nav-link" to="/">Login</Link>
                    </li>
                    <li className="nav-item bg-dark rounded px-1">
                        <Link className="nav-link" to="/">Start your free trial</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    </header>
)

export default header;