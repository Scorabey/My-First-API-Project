import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './styles/style.scss';
import {getQuote} from './scripts/swiper-api';
import {addSwiperSlider} from './scripts/swiper-create-element';

export const api_url = 'https://nekos.best/api/v2/neko?amount=10'
const results = await getQuote(api_url)

// Add swiper

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 60,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Create elements
results.forEach(({ artist_href, artist_name, source_url, url }) => {
  addSwiperSlider(artist_href, artist_name, source_url, url)
})

// Update swiper

swiper.update()