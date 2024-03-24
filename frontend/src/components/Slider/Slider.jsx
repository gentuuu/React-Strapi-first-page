
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gql, useQuery } from '@apollo/client';
import './Slider.scss';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'

const SLIDERS = gql`
    {
        sliders{
            data{
            id
            attributes{
                Title
                Body
                Link
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

export default function Slider() {

    const {loading, error, data } = useQuery(SLIDERS);

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error :(</p>

    console.log(data)


    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.sliders.data.map(slider => (
         <SwiperSlide>
            <div className="slider">
                <div className="slider__img">
                    <img src={slider.attributes.Image.data.attributes.url} alt="" />
                </div>
                <div className="slider__body">
                    <div className="slider__title">{slider.attributes.Title}</div>
                    <div className="slider__text">{parse(slider.attributes.Body)}</div>
                    <Link to={slider.attributes.Link} className="slider__link"> Czytaj więcej</Link>
                </div>
            </div>
         </SwiperSlide>
        ))}

      </Swiper>
     
    )
}



<div>
<div>

 </div>
</div>