import React from 'react'
import { useEffect } from 'react'

function Novedades() {
    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    
    return (
        <div className='content-novedades'>
            <h1 className='pt-5'>Proximamente</h1>
            <p>Estamos trabajando en esta sección</p>
            <div className="book">
                <div className="gap"></div>
                <div className="pages">
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                </div>
                <div className="flips">
                    <div className="flip flip1">
                        <div className="flip flip2">
                            <div className="flip flip3">
                                <div className="flip flip4">
                                    <div className="flip flip5">
                                        <div className="flip flip6">
                                            <div className="flip flip7"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Novedades