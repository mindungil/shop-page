'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slide() {
    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><img src="/dog.jpg" style={{width: "100vw", height: "40vh", objectFit: "cover"}}/></SwiperSlide>
            <SwiperSlide><img src="/main.jpg" style={{width: "100vw", height: "40vh", objectFit: "cover"}}/></SwiperSlide>
            <SwiperSlide><img src="/background.jpg" style={{width: "100vw", height: "40vh", objectFit: "cover"}}/></SwiperSlide>
            <SwiperSlide><img src="/background2.jpg" style={{width: "100vw", height: "40vh", objectFit: "cover"}}/></SwiperSlide>
        </Swiper>
    )
}