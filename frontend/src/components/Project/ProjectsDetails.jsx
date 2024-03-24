import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import parse from 'html-react-parser';
import './Projects.scss';


const PROJECT = gql`
query GetProject($id: ID!) {
  project(id: $id) {
    data {
      id
      attributes {
        Title
        ShortText
        Text
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



export default function ProjectsDetails() {

  //Get the id from the URL
  const { id } = useParams()

  //Pass variables to the query and execute it. Store the results in an object
  const { loading, error, data } = useQuery(PROJECT, {
      variables: { id: id }
    })

  //Display messages accordingly
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
    console.log(data)

 

  return (
    <div className="blog">
      <div className="header-page">
        <img src={data.project.data.attributes.Image.data.attributes.url} alt="" />
        <div className="header-page__title"> {data.project.data.attributes.Title}</div>
      </div>
      <div className="container">
        <div className="blog-content">
          {parse(data.project.data.attributes.Text)}
        </div>
      </div>
      

      
    </div>
  )
}
