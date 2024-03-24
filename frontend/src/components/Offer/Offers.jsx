import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import oferta from '../../image/oferta.jpg'
import '../../css/Header.scss'


const OFFERS = gql`{

  offers{
      data{
      id
      attributes{
          Title
          ShortText
          Text
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

}`

export default function Offers() {

  const {loading, error, data } = useQuery(OFFERS);

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    
    <div className="offers">
      <div className="header-page">
        <img src={oferta} alt="" />
        <div className="header-page__title">Oferta</div>
      </div>
      <div className="container">
        <div className="offers-content">
          <div className="offers__title">Nasze oferty</div>
          <div className="offers__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eveniet aspernatur expedita deleniti molestiae maxime. Perspiciatis asperiores eum blanditiis ipsa nostrum! Hic repellendus autem, explicabo laboriosam quos distinctio culpa aspernatur.</div>
          <div className="offers-items">
            {data.offers.data.map(offers => (
            <div className="offers-item">
              <div className="offers-item__img">
                <img src={offers.attributes.Image.data.attributes.url} alt="" />
              </div>
              <div className="offers-item__content">
                <div className="offers-item__title">{offers.attributes.Title}</div>
                <div className="offers-item__text">{parse(offers.attributes.ShortText)}</div>
                <div className="offers-item__link">
                  <Link to={offers.id}>Czytaj więcej</Link>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

