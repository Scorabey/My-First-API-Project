const wrapper = document.querySelector('.swiper-wrapper')

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

export function addSwiperSlider(path_href, path_name, path_url, path_image_url) {
  const slide = createSwiperSlide()

  slide.append(
    createArtistName(path_name),
    createLink('Artist profile', path_href),
    createLink('Find image', path_url),
    createImage(path_image_url)
  )
}