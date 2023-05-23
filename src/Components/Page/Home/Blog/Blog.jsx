import * as React from 'react'
import './Blog.scss'
import { Blogs } from '../../../../Data/Data'
import Img from '../../../../Assets/Img/img.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


export default function Blog() {
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
        <section className='blog'>
            <div className='container'>
                <p className='container__title'>BLOG</p>
                <h2 className='container__text'>Our Latest Blogs</h2>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all 1.5s ease"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        Blogs?.map((e) => (
                            <Link to='/blog-detail' className='container__a' key={e.id}>
                                <img className='container__a__img' src={Img} alt="" />
                                <div className='container__a__item'>
                                    <h3 className='container__a__item__sbject'>{e.subject}</h3>
                                    <span className='container__a__item__title'>
                                        <h2>{e.title}</h2>
                                    </span>
                                    <p className='container__a__item__text'>{e.text}</p>
                                </div>
                                <span className='container__a__link'>
                                    <p>Read More</p>
                                    <i className={`bi ${e.icon}`}></i>
                                </span>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}
