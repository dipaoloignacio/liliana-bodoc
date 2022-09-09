import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

function Donaciones({ closeModal, viewModal }) {
    return (
        <>
            {viewModal &&
                <div className='donaciones-bg'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            default: {
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            },
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                        
                        className='donacion-modal'>
                        <motion.button
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className='btn-closeModal'
                            onClick={() => { closeModal() }}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </motion.button>
                        <h3>Tu donación nos ayuda</h3>
                        <p>Las donaciones pueden efectuarse, por transferencias bancarias o bien por e-cheq O en forma presencial mediante cheques o dinero en efectivo. Tambien se puede utilizar Modo o Mercado de Pagos.</p>
                        <ul>
                            <li>Banco:<strong>Credicoop Cooperativo Ltdo</strong></li>
                            <li>Cuenta Corriente en Pesos N°:<strong>191-239-012426/5</strong></li>
                            <li>CBU:<strong>1910239755023901242650</strong>	</li>
                            <li>Titular:<strong>Fundación Liliana Bodoc</strong></li>
                            <li>CUIT:<strong>30-70707658-1</strong> </li>
                        </ul>
                        <p>Las donaciones efectuadas cumpliendo el Regimen Tributario, podrán descontarse del importe a pagar de impuesto a las ganancias, hasta un 5% del mismo.</p>
                    </motion.div>
                </div>
            }
        </>
    )
}

export default Donaciones