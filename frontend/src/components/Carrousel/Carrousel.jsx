import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import './Carrousel.css';

const Carrousel = ({images=imagesc}) => {
  return (
    <div className="carousel-container right-aligned">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              onError={(e) => e.target.style.display = 'none'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
