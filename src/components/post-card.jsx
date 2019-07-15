import React from "react"
import {Link} from "gatsby"

import {createPrintedDate} from "../utilities/blog-post";


class PostCard extends React.Component {
  render(){
    const post = this.props.post
    return(
      <div className="post-card">

        <div className="post-card-meta">
          <p className="categories">
          {post.categories.map( cat => {
            return <Link to={`/categorie/${cat.slug}`} key={cat.id}>
              {cat.name}</Link>
            })
          }
          </p>
          <p className="date">publié le {createPrintedDate(post.date)} </p>
        </div>

        <div className="post-card-content">

          <h3 className="post-card-title">{post.title}</h3>
          <p className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: post.excerpt}} />

        </div>

        <div className="btn-block">
          <Link to={`/${post.slug}`} className="btn-aqua">lire la suite</Link>
        </div>

      </div>
    )
  }
}

export default PostCard;
