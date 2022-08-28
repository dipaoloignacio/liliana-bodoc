import React, { useEffect } from 'react'
import { useState } from 'react';
import obras from '../../../../Data/Biblioteca/Biblioteca';
import ListaDeLibros from '../lista-de-libros/ListaDeLibros';

function ContenedorListaDeLibros() {
    const [libros, setLibros] = useState([]);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        setLibros(obras.filter((libro) => libro.page === pagination));
        console.log(pagination);
    }, [pagination]);

    const prev = () => {
        if (pagination > 1) {
            setPagination(prev => prev - 1);
        }
    }

    const next = () => {
        if (pagination < 8) {
            setPagination(next => next + 1);
            console.log(pagination)
        }
    }

    return (
        <div className='content-obras'>
            <div className="content-tittle">
                <h2 className="tittle-section"><span className='span-title'>Bibliografia</span> </h2>
            </div>
            <ListaDeLibros libros={libros} />
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center pb-5">
                    <li class="page-item">
                        <button onClick={() => prev()} className="page-link text-dark">Anterior</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(1)} className="page-link text-dark">1</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(2)} className="page-link text-dark">2</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(3)} className="page-link text-dark">3</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(4)} className="page-link text-dark">4</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(5)} className="page-link text-dark">5</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(6)} className="page-link text-dark">6</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(7)} className="page-link text-dark">7</button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => setPagination(8)} className="page-link text-dark">8</button>
                    </li>
                    <li class="page-item">
                        <button onClick={next} className="page-link text-dark">Siguiente</button>
                    </li>
                </ul>
            </nav>
            <section className='fondo-curvo'>
                <div className="curve"></div>
            </section>
        </div>
    )
}

export default ContenedorListaDeLibros