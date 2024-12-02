let menu=document.querySelector('.material-symbols-outlined');
let navlist=document.querySelector('.navlist');


menu.onclick =()=>{
    menu.classList.toggle('bx.x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reet: true
})

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero_img',{delay:450, origin:'left'});

