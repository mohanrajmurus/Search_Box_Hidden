const btn = document.querySelector('.btn');
const searchbox = document.querySelector('.search')
btn.addEventListener('click',()=>{
    searchbox.classList.toggle('active');
})