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
            <div class="book">
                <div class="gap"></div>
                <div class="pages">
                    <div class="page"></div>
                    <div class="page"></div>
                    <div class="page"></div>
                    <div class="page"></div>
                    <div class="page"></div>
                    <div class="page"></div>
                </div>
                <div class="flips">
                    <div class="flip flip1">
                        <div class="flip flip2">
                            <div class="flip flip3">
                                <div class="flip flip4">
                                    <div class="flip flip5">
                                        <div class="flip flip6">
                                            <div class="flip flip7"></div>
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