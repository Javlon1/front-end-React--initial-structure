import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Team.module.scss'
import { Teams } from './teamData'
import Me from '@/public/image/me.jpg'


const Team = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.team}>
                <div className={`${styles.container} container`}>
                    <div className={styles.container__title}>
                        <p className={styles.container__title__p}>TEAM MEMBER</p>
                        <h2 className={styles.container__title__h2}>Meet Our Experts</h2>
                    </div>
                    <ul className={styles.container__list}>
                        {
                            Teams?.map((e) => (
                                <li
                                    className={styles.container__list__item}
                                    key={e.id}>
                                    <Image
                                        src={Me}
                                        alt='team'
                                        width={300}
                                        height={400}
                                    />
                                    <div className={styles.container__list__item__social}>
                                        <ul className={styles.container__list__item__social__list}>
                                            {
                                                e.social?.map((j) => (
                                                    <li
                                                        className={styles.container__list__item__social__list__item}
                                                        key={j.id}>
                                                        <Link
                                                            className={styles.container__list__item__social__list__item__a}
                                                            href={j.link}>
                                                            <i className={`bi bi-${j.icon}`}></i>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <Link
                                            className={styles.container__list__item__social__title}
                                            href='/team'>
                                            <p className={styles.container__list__item__social__title__p}>{e.fullName}</p>
                                        </Link>
                                        <b className={styles.container__list__item__social__position}>{e.position}</b>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Team;