import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.scss';


const BLOGS = gql`{

blogs{
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
}`


export default function BlogsHome() {

    const {loading, error, data } = useQuery(BLOGS);

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error :(</p>

    console.log(data)


    return (

        <div className="homeblogs">
            <div className="container">
                <div className="homeblogs-content">
                    <div className="homeblogs__title">Nasz blog</div>
                    <div className="homeblogs__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa unde nulla possimus quis reprehenderit numquam odio necessitatibus assumenda ex cum quas, delectus ducimus eos minus quidem molestias veritatis sint?</div>
                    <div className="homeblogs-items">
                        {data.blogs.data.map(blog => (
                        <Link to={`/blog/${blog.id}`} className="homeblogs-item">
                            <div className="homeblogs-item__img">
                                <img src={blog.attributes.Image.data.attributes.url} alt="" />
                            </div>
                            <div className="homeblogs-item__text">
                                <div className="homeblogs-item__date">{blog.attributes.Author}</div>
                                <div className="homeblogs-item__title">{blog.attributes.Title}</div>
                            </div>

                        </Link>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
