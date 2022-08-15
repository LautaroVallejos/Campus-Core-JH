import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

export default function Login() {
    return (
        <div className={styles.main_container}>
            {/* Modificariones de las propiedades del head */}
            <Head>
                <title>Inicio de Sesión JH Campus</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className={styles.inner_header_flex}>
                <div className={styles.formulario}>
                    {/* [TO DO] ### Arreglar Problema con la imagen (aparece la imagen pero no el alt) ### */}
                    {/* [TODO] ### Arreglar waves animacion ### */}
                    <Image 
                        src="/src/public/index.jpg"
                        alt="JH Logo"
                        width={400}
                        height={400}
                    />

                    <form className={styles.form} action="#" method="post">
                        <label className={styles.primero} htmlFor>"Jose Hernandez"</label>
                        <label className={styles.label} htmlFor="email"> Ingrese el email institucional</label>
                        <input className={styles.input} type="email" name id="email" placeholder="Email" required />
                        <label className={styles.label} htmlFor="pass">Ingrese la contraseña</label>
                        <input className={styles.input} type="password" name id="pass" placeholder="Contraseña" required />
                        <input id="boto" type="submit" defaultValue="Inicias sesión" />
                    </form>
                </div>
            </div>

            <div className={styles.animation}>
                <div>
                    <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.paralax}>
                        <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                    </g>
                    </svg>
                </div>


            </div>
        </div>
    )
}