'use strict'
const header = document.querySelector('header'),
headerBtn = header.querySelector('.headermenu'),
headerNav = header.querySelector('nav');
headerBtn.addEventListener('click', function(){
    headerNav.classList.toggle('show')
});

const heroSection = document.querySelector('.hero-section'),
heroScrollDiv = heroSection.querySelector('.scrollimage'),
heroControlRight =  heroSection.querySelector('#arright'),
heroControlLeft = heroSection.querySelector('#arleft'),
heroScrollImgs = heroScrollDiv.querySelectorAll('.imagecarousel');
let heroScrollCount = 1;
heroControlLeft.addEventListener('click', function(){
    if(heroScrollCount !==  heroScrollImgs.length-1){
        ++heroScrollCount
    }
    heroScrollImgs.forEach((img, i)=> {
        let posCalc = i - heroScrollCount;
        if(posCalc === 0) {
            img.classList.remove('abs')
        }else{
            img.classList.add('abs')
        }
        img.style.translate = `${posCalc * 180}%  0px`
    })
})
heroControlRight.addEventListener('click', function(){
    if(heroScrollCount !== 0){
        --heroScrollCount
    }
    heroScrollImgs.forEach((img, i)=> {
        let posCalc = i - heroScrollCount;
        if(posCalc === 0) {
            img.classList.remove('abs')
        }else{
            img.classList.add('abs')
        }
        img.style.translate = `${posCalc * 180}%  0px`
    })
})
const destination = document.querySelector('.destination'),
destinationGridSlides = destination.querySelector('.destgrid'),
destinationScrollRight = destination.querySelector('.right'),
destinationScrollLeft = destination.querySelector('.left');
destinationScrollRight.addEventListener('click', function(){
    let  width = destinationGridSlides.querySelector('.destinationcontent').clientWidth;
    destinationGridSlides.scrollLeft += width+10;
})
destinationScrollLeft.addEventListener('click', function(){
    let  width = destinationGridSlides.querySelector('.destinationcontent').clientWidth;
    destinationGridSlides.scrollLeft -= width+10;
})
const review = document.querySelector('.review'),
reviewScrollRight = review.querySelector('.right'),
reviewScrollLeft = review.querySelector('.left'),
reviewSlide = review.querySelector('.revgrid');
reviewScrollLeft.addEventListener('click', function(){
    let  width = reviewSlide.querySelector('.reviewcontent').clientWidth;
    reviewSlide.scrollLeft -= width+10;
})
reviewScrollRight.addEventListener('click', function(){
    let  width = reviewSlide.querySelector('.reviewcontent').clientWidth;
    reviewSlide.scrollLeft += width+10;
})