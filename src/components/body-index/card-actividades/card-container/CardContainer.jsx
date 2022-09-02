import React, { useRef } from 'react'
import cards from '../../../../Data/Cards/dataCards';
import CardsAnimation from '../../../animations/cards-animations/CardsAnimation';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardContainer() {
    const [cardList, setCardList] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        setCardList(cards);
    }, [])


    return (
        <div className='content-cards' >
            <div>
                {
                    cardList.map((card, i) => {
                        return (
                            <CardsAnimation>
                                <div class="blog-card" >
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
                            </CardsAnimation>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardContainer