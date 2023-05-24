import {useEffect, useState} from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import RealtySlider from "./RealtySlider";
import axios from "axios";
import css from './slider.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function RealtyObjectsSlider() {


    const [data,setData]=useState([]);
    const [one,setOne]=useState(null)

    const info=(obj)=>{

    }

    useEffect(()=>{

        const c=axios.get("http://localhost/api/get12RandomRealtyObject")
        c.then(value =>{
            setData(value.data)
            }
        )
    },[])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return(


        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >


            {data.map((value,index)=>(<RealtySlider item={value} key={index} info={info}/>))}

        </Carousel>



    )
}