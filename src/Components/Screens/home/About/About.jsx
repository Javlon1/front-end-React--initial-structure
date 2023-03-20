import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './About.module.scss'
import Counter from './counter/Counter'
import Me from '@/public/image/me.jpg'
import { Inner } from './HaboutData'


const About = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.about}>
                <div className={`${styles.container} container`}>
                    <Counter />
                    <div className={styles.container__row}>
                        <div className={styles.container__row__left}>
                            <Image
                                className={styles.container__row__left__img}
                                src={Me}
                                alt='index-adout'
                                width={610} 
                                height={550}
                            />
                        </div>
                        <div className={styles.container__row__right}>
                            <h2 className={styles.container__row__right__title}>We Are Happy To Help You</h2>
                            <p className={styles.container__row__right__text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro, iusto saepe optio magnam explicabo voluptas blanditiis sit ut, unde nihil deserunt id. Recusandae distinctio magnam ad fugiat quibusdam veritatis!
                            </p>
                            <ul className={styles.container__row__right__list}>
                                {
                                    Inner?.map((e) => (
                                        <li className={styles.container__row__right__list__item} key={e.id}>
                                            <i className={e.icon}></i>
                                            {e.text}
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link href='/' className={styles.btn}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default About;