// $("#side-nav div a").click(function(){
//     $("#side-nav div a").removeClass("clicked");
//     $(this).addClass("clicked");
//   })


let section = document.querySelectorAll('.content-box');
let navLinks = document.querySelectorAll('#side-nav div a');

window.onscroll = () =>{
  section.forEach(section =>{
    let top = window.scrollY;
    let offset = section.offsetTop-60;
    // console.log(offset);
    let height = section.offsetHeight;
    let id = section.getAttribute('id');
    areEqual = 'content0' === id;
    if(areEqual){
      id = 'content-heading'
    }
    console.log(id);
    if(top >= offset && top < offset + height){
      navLinks.forEach(link=>{
        console.log(link);
        link.classList.remove('active');
        document.querySelector('#side-nav div a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}