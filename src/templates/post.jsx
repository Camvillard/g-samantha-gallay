// external librairies
import React from 'react';
import { graphql } from 'gatsby';

class Post extends React.Component {
  render(data) {
  console.log(data)
    return(
      <div>to do</div>
    )
  }
}

export const query = graphql`
{
  wordpressPage (slug: {eq: "accueil"}) {
    slug
    content
  }
}
`

export default Post;
