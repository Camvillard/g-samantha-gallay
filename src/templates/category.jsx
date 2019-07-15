// external librairies
import React from 'react';
import { graphql } from 'gatsby';

class Category extends React.Component {
  render(data) {
  console.log(data)
    return(
      <div>to do</div>
    )
  }
}

export const query = graphql`
  query($id: String!) {

    wordpressCategory(id: { eq: $id }) {
      id
      name
      slug
      count
    }

    allWordpressPost(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
      totalCount
       edges {
         node {
           id
           date
           title
           content
           categories {
             id
             name
             slug
           }
         }
       }
    }
}
`

export default Category;
