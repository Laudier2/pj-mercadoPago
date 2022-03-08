import React from 'react'

const Nav = () => {
    return ( 
        <div>
            <nav className="nav mb-3">
                <a className="nav-link active" href="/">Active</a>
                <a className="nav-link" href="/">Link</a>
                <a className="nav-link" href="/">Link</a>
                <a className="nav-link disabled" href="/">Disabled</a>
            </nav>
        </div>
     );
}

export default Nav;