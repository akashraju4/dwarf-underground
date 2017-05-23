import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render() {
        const links = this.props.links.map(link => <a href="#">{link}</a>)
        return (
        <div className="float-right nav-links">
            {links}
        </div>
        )
    }
}

export default Nav