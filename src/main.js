import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './styles/style.scss';
import {getQuote} from './scripts/swiper-api';
import {addSwiperSlider} from './scripts/swiper-create-element';
import chakingStatus from './scripts/statusCode/status.js';

export const api_url = 'https://nekos.best/api/v2/neko?amount=10'
const results = await getQuote("https://nekos.best/api/v2/neko?amount=10")

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

  for(let i = 0; i < results.length; i++) {
      addSwiperSlider(
          await results[i].artist_href,
          await results[i].artist_name,
          await results[i].source_url,
          await results[i].url
      )
  }
swiper.update()