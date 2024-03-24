import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import parse from 'html-react-parser';
import './Offers.scss';


const OFFER = gql`
query GetOffer($id: ID!) {
        offer(id: $id) {
          data {
            id
            attributes {
              Title
              Text
              Image{
                data{
                  attributes{
                    url
                  }
                }
              }
              Gallery{
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



export default function OffersDetails() {

  //Get the id from the URL
  const { id } = useParams()

  //Pass variables to the query and execute it. Store the results in an object
  const { loading, error, data } = useQuery(OFFER, {
      variables: { id: id }
    })

  //Display messages accordingly
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
    console.log(data)

 

  return (
    <div className="offer">
      <div className="header-page">
        <img src={data.offer.data.attributes.Image.data.attributes.url} alt="" />
        <div className="header-page__title"> {data.offer.data.attributes.Title}</div>
      </div>
      <div className="container">
        <div className="offer-content">
          {parse(data.offer.data.attributes.Text)}
        </div>
      </div>
      

      
    </div>
  )
}
