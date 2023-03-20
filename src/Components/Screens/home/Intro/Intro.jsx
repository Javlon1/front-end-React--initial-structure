import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Intro.module.scss'
import Me from '@/public/image/me.jpg'
import { Context } from '@/app/components/ui/Context/Context'

const Intro = () => {

    const { lan } = React.useContext(Context)

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.intro}>
                <div className={`${styles.container} container`}>

                    <div className={styles.container__left}>
                        <h2 className={styles.container__left__title}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </h2>
                        <p className={styles.container__left__text}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos pariatur ab, praesentium cum, excepturi animi saepe ex nam aspernatur
                        </p>
                        <Link
                            className={styles.container__left__btn}
                            href='/'>
                            FREE CONSULTATION
                            <i className="bi bi-arrow-right-short"></i>
                        </Link>
                    </div>

                    <div className={styles.container__right}>
                        <Image 
                            className={styles.container__right__img} 
                            src={Me}
                            alt='intro'
                            priority
                        
                        />
                    </div>

                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Intro;