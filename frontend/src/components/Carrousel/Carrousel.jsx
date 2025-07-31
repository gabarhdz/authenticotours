import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './Carrousel.css';

// Si no se pasan imágenes, usar estas por defecto
const defaultImages = [
  'https://via.placeholder.com/600x350?text=Imagen+1',
  'https://via.placeholder.com/600x350?text=Imagen+2',
  'https://via.placeholder.com/600x350?text=Imagen+3',
];

// Función para duplicar imágenes hasta que haya al menos 5
const fillToFiveSlides = (images) => {
  const result = [...images];
  while (result.length < 5) {
    result.push(...images);
    if (result.length >= 5) break;
  }
  return result.slice(0, 5);
};

const Carrousel = ({ images = defaultImages }) => {
  const displayImages = fillToFiveSlides(images);

  return (
    <div className="carousel-container right-aligned">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {displayImages.map((src, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              onError={(e) => (e.target.style.display = 'none')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;


