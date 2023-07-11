window.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    banner.addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('active_1');
    });
});