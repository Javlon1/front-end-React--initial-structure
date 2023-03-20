import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Blog.module.scss'
import Me from '@/public/image/me.jpg'
import { Blogs } from './blogData'

const Blog = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.blog}>
                <div className={`${styles.container} container`}>
                    <div className={styles.container__div}>
                        <h2 className={styles.container__div__title}>BLOG</h2>
                        <p className={styles.container__div__text}>Our Latest Blogs</p>
                    </div>
                    <ul className={`${styles.container__list}`}>
                        {
                            Blogs?.map((e) => (
                                <li key={e.id} className={styles.container__list__item}>
                                    <Link href='/' className={styles.container__list__item__a}>
                                        <Image
                                            className={styles.container__list__item__a__img}
                                            src={Me}
                                            alt='blog'
                                        />
                                    </Link>
                                    <div className={styles.container__list__item__div}>
                                        <span>{e.subject}</span>
                                        <h3>
                                            <Link href='/'>
                                                {e.title}
                                            </Link>
                                        </h3>
                                        <p>{e.text}</p>
                                        <Link className={styles.container__list__item__div__link} href='/'>
                                            Read More
                                            <i className={`bi ${e.icon}`}></i>
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className={styles.pagination}>
                        {
                            <li className={styles.page}></li>
                        }
                    </ul>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Blog;