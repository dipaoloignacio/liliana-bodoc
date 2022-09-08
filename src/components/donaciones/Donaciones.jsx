import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Donaciones({ closeModal, viewModal, children }) {
    return (
        <>
            {viewModal &&
                <div className='donaciones-bg'>
                    <div className='donacion-modal'>
                        <button className='btn-closeModal' onClick={() => { closeModal() }}><FontAwesomeIcon icon={faClose} /></button>
                        <h3>Donaciones</h3>
                        <p>Las donaciones pueden efectuarse, por transferencias bancarias o bien por e-cheq O en forma presencial mediante cheques o dinero en efectivo. Tambien se puede utilizar Modo o Mercado de Pagos.</p>
                        <ul>
                            <li>Banco:<strong>Credicoop Cooperativo Ltdo</strong></li>
                            <li>Cuenta Corriente en Pesos N°:<strong>191-239-012426/5</strong></li>
                            <li>CBU:<strong>1910239755023901242650</strong>	</li>
                            <li>Titular:<strong>Fundación Liliana Bodoc</strong></li>
                            <li>CUIT:<strong>30-70707658-1</strong> </li>
                        </ul>
                        <p>Las donaciones efectuadas cumpliendo el Regimen Tributario, podrán descontarse del importe a pagar de impuesto a las ganancias, hasta un 5% del mismo.</p>
                        {children}
                    </div>
                </div>
            }
        </>
    )

}

export default Donaciones