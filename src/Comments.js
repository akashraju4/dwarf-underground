import React, { Component } from 'react'
import './Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            comments: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.addComment = this.addComment.bind(this)
    }


    handleChange(ev) {
        this.setState({
            comment: ev.target.value
        })
    }
    addComment(ev) {
        const state = {...this.state}
        const comment = {
            text: this.state.comment,
            time: new Date()
        }
        state.comments.push(comment)
        state.comment = ''
        this.setState(state)
    }
    render() {
        return (
            <div className="comments">
            <textarea placeholder="Enter a comment! (1000 character limit)" value={this.state.comment} onChange={this.handleChange}></textarea>
            <button className="button" onClick={this.addComment}>Submit Comment</button>
            {this.state.comments.map((comment, i) => {
                return(
                    <div className="comment" key={i}>
                        <div>{comment.text}</div>
                    </div>
                )
            })}
            </div>

        )
    }
     
}

export default Comments