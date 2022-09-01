import React from 'react'
import cards from '../../../../Data/Cards/dataCards';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardContainer() {
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        setCardList(cards);
    }, [])

    return (
        <div className='content-cards'>
            {
                cardList.map((card, i) => {
                    return (
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: `url(${card.img})` }}></div>
                            </div>
                            <div class="description">
                                <h1>{card.title}</h1>
                                <p> {card.description}</p>
                                <p class="read-more">
                                <Link className="custom-btn btn-3" to={card.link}><span>Ver mas</span></Link>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardContainer