import React, { useEffect } from 'react'
import { useState } from 'react';
import obras from '../../../../Data/Biblioteca/Biblioteca';
import ListaDeLibros from '../lista-de-libros/ListaDeLibros';

function ContenedorListaDeLibros({ isInLiliana }) {
    const [libros, setLibros] = useState([]);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        setLibros(obras.filter((libro) => libro.page === pagination));
        if (isInLiliana === 1) {
            window.scrollTo(0, window.innerHeight * 2);
        } else {
            window.scrollTo(0, 0)
        }
    }, [pagination]);

    const changePages = (numero) => {
        if (numero === 1 && pagination < 8) {
            setPagination(pagination + 1);
        }
        if (numero === -1 && pagination > 1) {
            setPagination(pagination - 1);
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
                    <li className={pagination !== 1 ? 'page-item' : 'd-none'}>
                        <button onClick={() => changePages(-1)} className="page-link text-dark">Anterior</button>
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
                    <li class={pagination !== 8 ? 'page-item' : 'd-none'}>
                        <button onClick={() => changePages(1)} className="page-link text-dark">Siguiente</button>
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