import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './styles/style.scss';
import {getQuote} from './scripts/swiper-api';

const api_url = 'https://nekos.best/api/v2/neko?amount=10'

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

swiper.update()
getQuote(api_url)