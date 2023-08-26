document.addEventListener("scroll",()=>{
    const header = document.querySelector('.nav-scroll');
    if(window.scrollY > 135){
      header.classList.add('scrolled');
    } else{
      header.classList.remove('scrolled');
    }
  })
  document.addEventListener("scroll",()=>{
    const header = document.querySelector('.collapse');
    if(window.scrollY > 135){
      header.classList.add('scrolled');
    } else{
      header.classList.remove('scrolled');
    }
  })