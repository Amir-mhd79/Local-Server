async function slider() {
  slider = "";
  let data = await fetch("http://localhost:5000/slider");
  let res =await data.json();
  res.forEach((elem) => {
    slider+=`<div class="swiper-slide">
                <div class="img-1">
                    <img class="img-1" src="${elem.src}" alt="${elem.alt}">
                </div>
                <p class="text">${elem.body}</p>
            </div>`
  });
  document.querySelector("div.swiper-wrapper").innerHTML=slider
}
export default slider;
