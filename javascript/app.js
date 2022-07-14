const menu=document.querySelector('.menu-btn');
const close=document.querySelector('.close-btn');
const header=document.querySelector('.header');
const btnNav=document.querySelector('.btn-mobile-nav')

btnNav.addEventListener('click',(e)=>{
    header.classList.toggle('nav-open');
});



window.addEventListener('scroll',function(){
    if(this.scrollY>0){
        header.classList.add('shadow');
    }
    else{
        header.classList.remove('shadow');
    }
    
})
// const sectionHeroEl = document.querySelector(".main--section");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }  
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);