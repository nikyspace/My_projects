document.addEventListener('DOMContentLoaded', ()=>{
    // console.log(document.all[0].clientHeight+', '+document.all[0].clientWidth);
    const container = document.querySelector('.container');
    const slider__item = document.querySelector('.slider__item');
    const imgs_slider = document.querySelectorAll('.imgs_slider');
    const videos = document.querySelectorAll('video');

    function pod_ekran () {
        container.style.width = document.all[0].clientWidth + 'px';
        slider__item.style.height = document.all[0].clientHeight + 'px';
        for (let i=0; i<imgs_slider.length; i++) {    
            imgs_slider[i].style.maxHeight = document.all[0].clientHeight + 'px';
            imgs_slider[i].style.maxWidth = document.all[0].clientWidth + 'px';
            imgs_slider[i].style.display = 'block';
            // imgs_slider[i].style.transform = `translate(0,${(document.all[0].clientHeight - imgs_slider[i].clientHeight)/2}px)`;  
            imgs_slider[i].style.transform = `translate(-50%,-50%)`;
            imgs_slider[i].style.top = document.all[0].clientHeight/2 + 'px';
            imgs_slider[i].style.left = document.all[0].clientWidth/2 + 'px';
        }
        for (let i=0; i<videos.length; i++) { 
            // videos[i].style.maxHeight = document.all[0].clientHeight + 'px';
            // videos[i].style.maxWidth = document.all[0].clientWidth + 'px';
            // if (videos[i].clientWidth>=videos[i].clientHeight) {
            //     videos[i].style.width = document.all[0].clientWidth + 'px';
            // }
            // videos[i].style.transform = `translate(0,-50%)`;
            // videos[i].style.top = document.all[0].clientHeight/2 + 'px';
            // videos[i].style.left = document.all[0].clientWidth/2 + 'px';
            videos[i].style.height = document.all[0].clientHeight + 'px';
            videos[i].style.width = document.all[0].clientWidth + 'px';
        }
    }
    
    pod_ekran();

    window.addEventListener('resize', pod_ekran);
});