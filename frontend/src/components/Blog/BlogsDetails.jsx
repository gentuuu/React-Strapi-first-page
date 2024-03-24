import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import parse from 'html-react-parser';
import './Blogs.scss';


const BLOG = gql`
query GetBlog($id: ID!) {
  blog(id: $id) {
    data {
      id
      attributes {
        Title
        ShortText
        Text
        Author
        publishedAt
        Image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`



export default function BlogsDetails() {

  //Get the id from the URL
  const { id } = useParams()

  //Pass variables to the query and execute it. Store the results in an object
  const { loading, error, data } = useQuery(BLOG, {
      variables: { id: id }
    })

  //Display messages accordingly
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
    console.log(data)

 

  return (
    <div className="blog">
      <div className="header-page">
        <img src={data.blog.data.attributes.Image.data.attributes.url} alt="" />
        <div className="header-page__title"> {data.blog.data.attributes.Title}</div>
      </div>
      <div className="container">
        <div className="blog-content">
          {parse(data.blog.data.attributes.Text)}
        </div>
      </div>
      

      
    </div>
  )
}
