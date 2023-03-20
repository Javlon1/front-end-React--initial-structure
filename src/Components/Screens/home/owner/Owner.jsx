import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Owner.module.scss'
import { ownerdata } from './ownerData'
import BC from '@/public/image/bc.png'
import Me from '@/public/image/me.jpg'

const Owner = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.owner}>
                <div className={`${styles.container} container`}>
                    <div className={styles.container__left}>
                        <div className={styles.container__left__div}>
                            <p className={styles.container__left__div__title}>Owner</p>
                            <h2 className={styles.container__left__div__text}>Owner Law firm dedicated to our clients</h2>
                        </div>
                        <ul className={styles.container__left__list}>
                            {
                                ownerdata?.map((e) => (
                                    <li className={styles.container__left__list__item} key={e.id}>
                                        <div className={styles.container__left__list__item__icon}>
                                            <i className={`bi ${e.icon}`}></i>
                                            <Image
                                                className={styles.container__left__list__item__icon__img}
                                                src={BC}
                                                alt='bc'
                                                width={85}
                                                height={100}
                                            />
                                        </div>
                                        <h3 className={styles.container__left__list__item__title}>{e.title}</h3>
                                        <p className={styles.container__left__list__item__text}>{e.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.container__right}>
                        <div className={styles.container__right__expertise}>
                            <Image
                                className={styles.container__right__expertise__img}
                                src={Me}
                                alt='me'
                                width={600}
                                height={800}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Owner;