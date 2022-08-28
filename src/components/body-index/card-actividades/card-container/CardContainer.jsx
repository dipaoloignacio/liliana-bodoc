import React from 'react'
import cards from '../../../../Data/Cards/dataCards';
import { useState } from 'react';
import { useEffect } from 'react';

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
                        <div className='card' style={{ backgroundImage: `url(${card.img})` }}>
                            <div className='info'>
                                <h1 className='title'>{card.title}</h1>
                                <p className='description'>
                                    {card.description}
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