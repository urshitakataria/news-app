import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl,newsUrl, author,published} = this.props
        return (
            
            <div>
              <div className="card my-3" style={{width: "22rem"}}>
                <img src={imageUrl} height="234" width="350" className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(published).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
