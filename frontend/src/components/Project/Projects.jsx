import React from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import oferta from '../../image/oferta.jpg'
import '../../css/Header.scss'


const PROJECTS = gql`{

  projects{
        data {
          id
          attributes {
            Title
            Text
            ShortText
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

export default function Projects() {

  const {loading, error, data } = useQuery(PROJECTS);

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    
    <div className="projects">
      <div className="header-page">
        <img src={oferta} alt="" />
        <div className="header-page__title">Projekty</div>
      </div>
      <div className="container">
        <div className="projects-content">
          <div className="projects__title">Projekty</div>
          <div className="projects__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eveniet aspernatur expedita deleniti molestiae maxime. Perspiciatis asperiores eum blanditiis ipsa nostrum! Hic repellendus autem, explicabo laboriosam quos distinctio culpa aspernatur.</div>
          <div className="projects-items">
            {data.projects.data.map(projects => (
            <div className="projects-item">
              <div className="projects-item__img">
                <img src={projects.attributes.Image.data.attributes.url} alt="" />
              </div>
              <div className="projects-item__content">
                <div className="projects-item__title">{projects.attributes.Title}</div>
                <div className="projects-item__text">{parse(projects.attributes.ShortText)}</div>
                <div className="projects-item__link">
                  <Link to={projects.id}>Czytaj więcej</Link>
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

