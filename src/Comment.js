import React, { Component } from 'react'
import './Article.css'

class Comment extends Component {
    constructor () {
        super()
        this.state = {
            comments: [],
        }
    }

    clickComment(ev) {
        const disp = ev.target
        ev.preventDefault()
        

    }
    
    render() {
        return (
        <div>
        <a className="article-link" href={this.clickComment}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
        </a>
        <input className="comment" type="text" />
        </div>
        

        );
    }
}

export default Comment