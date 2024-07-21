let nextDom = document.getElementById('next');
let previousDom = document.getElementById('previous');
let carouselDom = document.querySelector('.carousel-body');
let listItemDom = document.querySelector('.carousel-body .list');
let thumbnailDom = document.querySelector('.carousel-body .thumbnail');



nextDom.onclick = function(){
    showSlider('next');
}

previousDom.onclick = function(){
    showSlider('previous');
}


let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun =setTimeout(()=>{
    nextDom.click();
    }, timeAutoNext);
    

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel-body .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel-body .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('previous');
    }


    clearTimeout(runTimeOut);
    runTimeOut = setTimeOut(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('previous');
    }, timeRunning)

clearTimeout(runAutoRun);
runAutoRun = setTimeout(()=>{
    nextDom.click();
    }, timeAutoNext);
    
}