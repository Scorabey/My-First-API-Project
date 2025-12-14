import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './style.scss'

const api_url = 'https://nekos.best/api/v2/neko?amount=10'
const wrapper = document.querySelector('.swiper-wrapper')

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

function createSwiperSlide() {
  const slide = document.createElement('div')
  slide.className = 'swiper-slide'
  wrapper.append(slide)
  return slide
}

function createArtistName(name) {
  const div = document.createElement('div')
  div.className = 'artist-name'
  div.textContent = name
  return div
}

function createLink(text, href) {
  const link = document.createElement('a')
  link.textContent = text
  link.href = href
  link.target = '_blank'
  return link
}

function createImage(src) {
  const img = document.createElement('img')
  img.className = 'image'
  img.src = src
  return img
}

function addSwiperSlider(path_href, path_name, path_url, path_image_url) {
  const slide = createSwiperSlide()

  slide.append(
    createArtistName(path_name),
    createLink('Artist profile', path_href),
    createLink('Find image', path_url),
    createImage(path_image_url)
  )
}

async function getQuote(url) {
  const response = await fetch(url)
  const data = await response.json()
  const array_len = data.results.length

  for(let i = 0; i < array_len; i++) {
    addSwiperSlider(
      data.results[i].artist_href,
      data.results[i].artist_name,
      data.results[i].source_url,
      data.results[i].url
    )
  }
}

getQuote(api_url)