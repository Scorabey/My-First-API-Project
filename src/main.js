import Swiper from 'swiper';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './styles/style.scss';
import {getQuote} from './scripts/swiper-api';
import {addSwiperSlider} from './scripts/swiper-create-element';

export const api_url = 'https://nekos.best/api/v2/neko?amount=10'
const results = await getQuote(api_url)

// Create elements
results.forEach(({ artist_href, artist_name, source_url, url }) => {
  addSwiperSlider(artist_href, artist_name, source_url, url)
})

// Add swiper

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, FreeMode, Autoplay],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 60,

  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
  },

  freeMode: {
    enabled: true,
    sticky: true,
    momentum: true,
    momentumRatio: 1,
  },

  speed: 1000,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});