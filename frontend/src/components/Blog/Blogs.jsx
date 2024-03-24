import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import oferta from '../../image/oferta.jpg'
import '../../css/Header.scss'


const BLOGS = gql`{
  blogs{
      data{
      id
      attributes{
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
}`

export default function Offers() {

  const {loading, error, data } = useQuery(BLOGS);

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    
    <div className="blogs">
      <div className="header-page">
        <img src={oferta} alt="" />
        <div className="header-page__title">Blog</div>
      </div>
      <div className="container">
        <div className="blogs-content">
          <div className="blogs__title">Blog</div>
          <div className="blogs__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eveniet aspernatur expedita deleniti molestiae maxime. Perspiciatis asperiores eum blanditiis ipsa nostrum! Hic repellendus autem, explicabo laboriosam quos distinctio culpa aspernatur.</div>
          <div className="blogs-items">
            {data.blogs.data.map(blogs => (
            <div className="blogs-item">
              <div className="blogs-item__img">
                <img src={blogs.attributes.Image.data.attributes.url} alt="" />
              </div>
              <div className="blogs-item__content">
                <div className="blogs-item__date">{blogs.attributes.publishedAt}</div>
                <div className="blogs-item__author">Artykuł dodany przez: {blogs.attributes.Author}</div>
                <hr />
                <div className="blogs-item__title">{blogs.attributes.Title}</div>
                <div className="blogs-item__text">{parse(blogs.attributes.ShortText)}</div>
                <div className="blogs-item__link">
                  <Link to={blogs.id}>Czytaj więcej</Link>
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

