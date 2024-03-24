import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './Offers.scss';


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


export default function OffersHome() {

    const {loading, error, data } = useQuery(OFFERS);

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error :(</p>

    console.log(data)


    return (
        <div className="homeoffers">
            <div className="container">
                <div className="homeoffers-content">
                    <div className="homeoffers__title">Nasza oferta</div>
                    <div className="homeoffers__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit quasi nihil aperiam accusantium nemo id voluptatum harum saepe, hic ea architecto explicabo beatae incidunt velit, eos consectetur ut dolor.</div>
                    <div className="homeoffers-items">
                        {data.offers.data.map(offer =>(
                        <div className="homeoffers-item">
                            <div className="homeoffers-item__img">
                                <img src={offer.attributes.Image.data.attributes.url} alt="" />
                            </div>
                            <div className="homeoffers-item__title">{offer.attributes.Title}</div>
                            <div className="homeoffers-item__text">{parse(offer.attributes.ShortText)}</div>
                            <div className="homeoffers-item__link">
                                <Link to={`/offer/${offer.id}`}>Czytaj więcej</Link>
                            </div>    
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
