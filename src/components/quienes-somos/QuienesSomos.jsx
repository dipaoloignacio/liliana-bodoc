import React from 'react'
import { motion } from 'framer-motion'
import foto from '../../images/img-quienes-somos/Liliana-Bodoc.jpg'
import libroIcon from '../../images/img-body/libro-icon.png'
import libroIcon1 from '../../images/img-body/libro-icon2.png'
import libroIcon2 from '../../images/img-body/libro-icon3.png'
import foto2 from '../../images/img-quienes-somos/lili2.jpg'
import foto3 from '../../images/img-quienes-somos/lili3.jpg'
import foto4 from '../../images/img-quienes-somos/libro.png'
import logo from '../../images/img-header/logo-sinFondo1.png'
import foto5 from '../../images/img-quienes-somos/grupo-childrens.png'
import { useEffect } from 'react'
import AnimationLeftToRight from '../animations/book-animation/AnimationLeftToRight'
import ViewAnimation from '../animations/ViewAnimation'

function QuienesSomos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='quienes-somos'>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ width: '150px' }}
        className="d-block m-auto mt-5"
        src={logo} alt="" />

      <div className='content-title'>
        <h1 className='tittle-section'><span className='color-letter'>Fun<span className='span-title'>dac</span>ión</span></h1>
      </div>
      <div className=''>
        <div className='fotos'>

        </div>
        <div className='content-manifiesto'>
          <div className="manifiesto-romina">
            <br />
            "La magia me autoriza a desobedecer y a morirme en la paz de los que saben que la piel es un límite impreciso. Y que tras la apariencia del final hay un ciclo de ave, tierra, niño, tortuga, dátil, mujer de nuevo. Otra mujer ¿y qué? La magia me autoriza a no tomarme en serio que soy un individuo único, irrepetible, piel adentro. Prefiero parecerme a cada ser. La magia me autoriza. Y ya muerta llegar a la tortuga, al alacrán, al risco, como quien vuelve a casa". <br />
            <br />
            <AnimationLeftToRight>
              <img src={foto} alt="" />
            </AnimationLeftToRight>

            <span className='span-autor'> Liliana Bodoc </span>

            La magia nos autoriza, y nos autoriza la voz de la propia autora, a proclamar el primer principio de la fundación. Para pregonarlo en voz alta, de modo que llegue a los oídos, se multiplique en las manos y prospere en los imaginarios de quienes acompañen este recorrido. Fallaríamos en este intento si, en este acto fundacional, en este impulso originario y provisorio, definieramos este espacio planteando límites fijos, unívocos, paredes adentro. Fallaríamos también si nos tomáramos demasiado en serio la apariencia de final de quién, generosamente y atreviéndose a cuestionar los límites de su propia piel, le dió el soplo de vida a esta fundación que honramos con su nombre. Nos atrevemos entonces a desobedecer, y a soñar un espacio que nos encuentre la Madre de Los Confines. Que nos encuentre, no para ponerla en un sitio inmóvil, en un cuadro, en una estampa, sino para multiplicarla en el pulso de los <strong><a target={'_blank'} href="https://www.youtube.com/watch?v=L38nt3APfLQ&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&ab_channel=CanalEncuentro">nuevos ciclos.</a></strong> <br />
            Para que, por obra y gracia de la magia y del arte, continúe en cada acto creativo.<br />

            Todo principio se hace prolífico, se activa, por así decirlo, cuando opera sobre una realidad fundante. Cuando tensa los hilos de una red preexistente y los proyecta como nuevas líneas sobre el firmamento. Así, nuestro primer principio se intrinca íntimamente con una convicción:<br />

            Liliana Bodoc más que una artista, más que un conjunto de obras, es una práctica, es un modo de volcarse hacia el mundo. Y es en torno a este presupuesto, a esta mirada expandida sobre la vida y trayectoria de la Madre de Los Confines, que construimos los propósitos y la dirección de este espacio.<br />

            La práctica convoca, a nuestro entender, tres conceptos: el <a className='text-decoration-none' target={'_blank'} href="https://www.youtube.com/watch?v=hJ04Or8qRgc&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&index=12&ab_channel=CanalEncuentro">ejercicio</a>, <a target={'_blank'} href="https://www.youtube.com/watch?v=jZRlB05Cmro&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&index=13&ab_channel=CanalEncuentro">la acción</a>,y <a target={'_blank'} href="https://www.youtube.com/watch?v=guPkMrr_AGM&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&index=14&ab_channel=CanalEncuentro"> la transformación</a>. Nos invita no sólo a contemplar la obra como un objeto cerrado y concluido sino a <a target={'_blank'} href="https://www.youtube.com/watch?v=CMg29cNIrUU&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&index=4&ab_channel=CanalEncuentro">“ejercer el oficio de poetas”</a> . No sólo a admirar su colosal imaginario, sino a ensayar otros modos de comprometer la ficción y la realidad, de instalarnos en la cooperación entre ambos dominios. Nos convida a mirar el recorrido de una artista, pero más profundamente a seguir sus pasos. A llegar con las palabras a cuestas hasta las escuelas más alejadas, a las soledades más recónditas. A sumergirnos en la grieta de un poema para derribar muros conceptuales y sensibles. A devolverle a la oralidad su destronado sitio en la producción del saber. A batallar en los confines del lenguaje para hacerlo en los confines del mundo. Para, atreviendonos a desobedecer, arrojarnos el derecho y el deber de cantar bellamente, de imaginar y, finalmente, de hacer de nuestras vidas una insinuación, un gesto, un acto creativo.<br />

            Por eso, como haría Liliana, abrimos nuestra fundación como una casa, o como se puede abrir un corazón. Para que sea un sitio de límites imprecisos donde la Madre de Los Confines no sea un fin sino un comienzo, no un límite sino un horizonte. Para que, como lo hacen los hijos, hagamos de la continuidad un acto creativo. Porque más allá aún de una práctica, Liliana nos propone un modo de habitar y caminar el mundo.<br />

            <span className='span-autor'> Romina Bodoc </span> <br />
          </div>
          <AnimationLeftToRight>
            <img className='w-75 mb-5' src={foto3} alt="" />
          </AnimationLeftToRight>
          <div>
            <div className="manifiesto-silvia">
              ¿Qué imaginamos, qué proyectamos cuando pensamos en ponerle a la Fundación el nombre de Liliana Bodoc.? <br />

              Seguramente lo mismo que soñaron, imaginaron todos los que eligieron su nombre para una biblioteca escolar, una biblioteca pública, una escuela, una librería, una plaza.<br />

              No para colocar una placa, colgar un cuadro, poner un cartel. Todo eso es quietud, es inmóvil. No para homenajear ni exaltar a su persona, sino para darle vida a su palabra, multiplicarla, hacerla caminar, que todos y todas la conozcan, la lean, y comprendan el propósito de su obra.<br />

              <a href="https://www.youtube.com/watch?v=NtcuEMHmF_8&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&index=10&ab_channel=CanalEncuentro" target={'_blank'}>“Sólo el amor nos hace eternos”</a>, decían los husihuilkes. Entonces nos preguntamos ¿para qué la Fundación?<br />

              Para que Liliana siga viva en lo que ella amaba. Para conocerla, para entenderla, para saber cuáles eran las cosas que le más le importaban, las cosas que no le importaban nada y las otras, las que la desvelaban, la hacían escribir sin parar, la hacían movilizarse hasta todos los límites, los propios y los ajenos.<br />

              Que entrar a la Fundación sea como entrar a su casa, y verla allí escribiendo, o amasando el pan, o tomando mate.<br />

              Que los que la conocimos la encontremos y enseguida podamos reconocer que ella haría eso, que aplaudiría, que reiría a carcajadas.<br />

              Y los que no la conocieron, puedan hacerlo, descubrirla, empezar a saber que fue una escritora extraordinaria, pero también mucho más que eso.<br />

              Madre de Los Confines, lectora, narradora, docente, con una generosidad y humildad poco frecuente. Sencilla, de abrazo fácil, soñadora.<br />

              Si tuviera que hacer un juego, adivinar de quién se trata, que pistas daría para encontrarla en esa adivinanza:<br />

              Diría que le gustaba madrugar, escribir por las mañanas, bien temprano, con su casa ordenada.<br />

              Que le gustaba cocinar, amasar el pan casero, el pan dulce.<br />

              Diría que amaba los cuadernos, que tenía varios, con dibujos, con historias, con frases.<br />

              Diría que amaba leer en voz alta a los niños en las escuelas o bibliotecas, que sabía cientos de poemas de memoria, y los sacaba con una gran maestría cuando eran necesarios.<br />

              Diría que era humilde, sencilla, que viajaba todo el tiempo, donde fuera que la llamaran, para ir al norte o al sur, a una escuela albergue, a una universidad.<br />

              Lo importante era que escucharan lo que iba a contarles, que hubiera jóvenes y niños, y ocurría entonces que se emocionaban con su palabra poética, con su forma única de decir, de leer, de hablar.<br />

              Lo maravilloso de su escritura es que también nos las dejó para ser un instrumento de cambio. Para cambiarnos y para contribuir a cambiar el mundo, desde la palabra poética, apelando siempre al héroe colectivo, nunca al individual.<br />

              Nunca a la meritocracia, sino a la educación pública.<br />

              Entonces, todo esto queremos que sea la Fundación, es decir, queremos que sea la Lili.<br />

              Para mantener vivo su amor, su poesía, para seguir multiplicándola, para seguir contando para que ocurra. Que ocurra la magia, la emoción, que la conozcan y la quieran quienes no lo hicieron. Que la lean y la descubran . Que sepan que tienen en sus libros un <a href="https://www.youtube.com/watch?v=bnFzWz_Kogc&list=PLZ6TIj4tHEIu-f9J6PFk1Zi0MqgdWPmRX&index=6&ab_channel=CanalEncuentro" target={'_blank'}>poderoso instrumento</a> de transformación y de cambio.<br />

              Que deberíamos aprender a amasar, como una forma de amor, de generosidad, porque el pan se hace para repartir; como una manera de cantar contra el Odio, de enseñar con las manos, haciendo, transformando.<br />

              Y aquí estamos en este círculo, en esta ronda de Mujeres, en esta Fundación. Porque en esta rueda no hay ausencias definitivas, y nada queda lejos. Porque en esta rueda todo regresa. Regresa la Lili, su palabra, su poesía. Regresa y nos sonríe. Nos acaricia con un verso.<br />

              Si releemos sus libros, si escuchamos los diálogos de sus personajes, si revisamos sus entrevistas, sus conferencias, vamos a encontrar siempre una imagen : el círculo.<br />

              No creía en la muerte como algo definitivo....<br />

              <span className='span-autor'> Silvia Chiavetta </span><br />
            </div>
            <AnimationLeftToRight>
              <img className='mb-5' src={foto2} alt="" />
            </AnimationLeftToRight>
          </div>
        </div>
      </div>

      <div className="comunidad">
        <div className='content-title'>
          <h1 className='tittle-section'>Com<span className='span-title'>uni</span>dad</h1>
        </div>
        <div className="container">
          <ul className="step-list">
            <li className="step-list__item">
              <div className="step-list__item__inner">
                <div className="content">
                  <div className="body">
                    <h2>Admi<span className='span-comunidad'>nistr</span>ación</h2>
                    <p>Presidenta: <span className='comunidad-nombres'>"Silvia Chiavetta"</span>  </p>
                    <p>Secretario: <span className='comunidad-nombres'>"Alberto Eugenio Marino"</span> 	</p>
                    <p>Tesorero: <span className='comunidad-nombres'>"Antonio Jorge Bodoc"</span> 	</p>
                  </div>
                  <ViewAnimation>
                    <div className="icon">
                      <img className='icon-libro' src={libroIcon} alt="Check" />
                    </div>
                  </ViewAnimation>
                </div>
              </div>
            </li>
            <li className="step-list__item">
              <div className="step-list__item__inner">
                <div className="content">
                  <div className="body">
                    <h2>Cola<span className='span-comunidad'>bora</span>dores</h2>
                    <p>	Actor y Director de Teatro: <span className='comunidad-nombres'>"Galileo Bodoc"</span></p>
                    <p>	Antropóloga: <span className='comunidad-nombres'>"Romina Bodoc"</span> </p>
                    <p>	Ilustrador: <span className='comunidad-nombres'>"Gonzalo Kenny"</span> </p>
                  </div>
                  <ViewAnimation>
                    <div className="icon">
                      <img className='icon-libro' src={libroIcon1} alt="Check" />
                    </div>
                  </ViewAnimation>
                </div>
              </div>

            </li>
            <li className="step-list__item">
              <div className="step-list__item__inner">
                <div className="content">
                  <div className="body">
                    <h2>Pad<span className='span-comunidad'>ri</span>nos</h2>
                    <p>Herederos de Liliana Bodoc: <span className='comunidad-nombres'>"Sucesión Liliana Chiavetta"</span></p>
                    <p>Editorial: <span className='comunidad-nombres'>"Penguin Random House"</span></p>
                    <p>Editorial: <span className='comunidad-nombres'>"Norma - Kapelusz"</span></p>
                  </div>
                  <ViewAnimation>
                    <div className="icon">
                      <img className='icon-libro' src={libroIcon2} alt="Check" />
                    </div>
                  </ViewAnimation>
                </div>
              </div>
            </li>
            <li className="step-list__item">
              <div className="step-list__item__inner">
                <div className="content">
                  <div className="body">
                    <h2>Grup<span className='span-comunidad'>os A</span>fines</h2>
                    <p>Mujeres de los Confines: <a href="https://www.facebook.com/groups/232232720667261" target={"_blank"}>Link aqui</a></p>
                    <p>Liliana Bodoc: Lectores y Fans <a href="https://www.facebook.com/groups/232232720667261" target={"_blank"}>Link aqui</a></p>
                    <p>Liliana Bodoc en el Aula: <a href="https://www.facebook.com/groups/595643973790806" target={"_blank"}>Link aqui</a></p>
                    <p>El alma en un hilo <a href="https://www.facebook.com/groups/205895256810241" target={"_blank"}>Link aqui</a></p>
                    <p>Edelij <a href="https://www.facebook.com/groups/205895256810241" target={"_blank"}>Link aqui</a></p>
                  </div>
                  <ViewAnimation>
                    <div className="icon">
                      <img className='icon-libro' src={libroIcon} alt="Check" />
                    </div>
                  </ViewAnimation>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default QuienesSomos