import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Contact.module.scss'
import { Location } from './contactData'
import BcLoc from '@/public/image/bcloc.png'

const Contact = () => {
    const formReg = (e) => {
        console.log('ok');
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.contact}>
                <div className={`${styles.container} container`}>
                    <div className={styles.container__location}>
                        <ul className={styles.container__location__list}>
                            {
                                Location?.map((e) => (
                                    <li className={styles.container__location__list__item} key={e.id}>
                                        <div className={styles.container__location__list__item__div}>
                                            <i className={`bi ${e.icon}`}></i>
                                            <Image
                                                src={BcLoc}
                                                alt='bc'
                                                width={70}
                                                height={70}
                                            />
                                        </div>
                                        <h3>{e.name}</h3>
                                        <ul>
                                            {
                                                e.text?.map((j) => (
                                                    <li key={j.id}>
                                                        <Link href={j.link}>
                                                            {j.item}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <form onSubmit={formReg} className={styles.container__form} action="#" >
                        <input className={styles.container__form__inp} type="text" placeholder='Your Full Name' />
                        <input className={styles.container__form__inp} type="email" placeholder='Your Email' />
                        <input className={styles.container__form__inp} type="number" placeholder='Your Phone' />
                        <input className={styles.container__form__inp} type="text" placeholder='Subject' />
                        <textarea className={styles.container__form__inp1} type="text" placeholder='Case Description' />
                        <button className={styles.container__form__btn} type='submit'>Submit</button>
                    </form>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Contact;