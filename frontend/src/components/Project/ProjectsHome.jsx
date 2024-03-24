import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';


const PROJECTS = gql`{

projects{
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
        }
      }
    }
}`


export default function ProjectsHome() {

    const {loading, error, data } = useQuery(PROJECTS);

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error :(</p>

    console.log(data)


    return (

        <div className="homeprojects">
            <div className="container">
                <div className="homeprojects-content">
                    <div className="homeprojects__title">Nasze Projekty</div>
                    <div className="homeprojects__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa unde nulla possimus quis reprehenderit numquam odio necessitatibus assumenda ex cum quas, delectus ducimus eos minus quidem molestias veritatis sint?</div>
                    <div className="homeprojects-items">
                    {data.projects.data.map(project =>(
                        <Link to={`/project/${project.id}`} className="homeprojects-item">
                            <div className="homeprojects-item__img">
                                <img src={project.attributes.Image.data.attributes.url} alt="" />
                            </div>
                            <div className="homeprojects-item__title">{project.attributes.Title}</div>
                        </Link>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
