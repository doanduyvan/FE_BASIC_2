

window.addEventListener('load',()=>{
   in_width1();
})

window.addEventListener('resize',()=>{
   in_width1();
})




function in_width1(){
     let width = document.documentElement.clientWidth;
    const in_width = document.querySelector('.in-width');
    in_width.textContent = "Width của trình duyệt là: " + width;
}