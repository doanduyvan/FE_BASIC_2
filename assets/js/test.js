

window.addEventListener('load',()=>{
    let width = document.documentElement.clientWidth;
    const in_width = document.querySelector('.in-width');
    in_width.textContent = "Width của trình duyệt là: " + width;
})