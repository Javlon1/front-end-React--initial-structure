import * as React from 'react'
import './Team.scss'
import { Teams } from '../../../../Data/Data'
import Img from '../../../../Assets/Img/img.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

export default function Team() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className='team'>
            <div className='container'>
                <p className='container__title'>TEAM MEMBER</p>
                <h2 className='container__text'>Meet Our Expert Attorneys</h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        Teams?.map((e) => (
                            <div className='container__item' key={e.id}>
                                <img className='container__item__img' src={Img} alt="" />
                                <ul className='container__item__list'>
                                    {
                                        e.social?.map((i) => (
                                            <a href={i.link} target="_blank" className='container__item__list__item' key={i.id}>
                                                <i className={`bi bi-${i.icon}`}></i>
                                            </a>
                                        ))
                                    }
                                </ul>
                                <main className='container__item__main'>
                                    <h2 className='container__item__main__name'>
                                        <Link>
                                            {e.fullName}
                                        </Link>
                                    </h2>
                                    <p className='container__item__main__position'>{e.position}</p>
                                </main>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}