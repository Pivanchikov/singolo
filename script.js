//border of images in portfolio

function border(elements) {
 let elem = document.querySelectorAll('.portfolio__image');
    for(let i = 0; i< elem.length; i++){
      elem[i].style.boxShadow = 'none';
    }
   elements.style.boxShadow = '0px 0px 0px 5px  #F06C64';
}

  // screen phone on/off
  let  counterVertical = 0;
  function screenOnvertical(){
    let elem = document.querySelector('.phone_vertic > img');
    if (counterVertical === 0 ){
    elem.src = 'assets/images/iphoneverticblack.png';
    elem.style.marginLeft = '-2px';
    elem.style.marginTop = '-1px';
    counterVertical++
      } else if(counterVertical === 1){
        elem.src = 'assets/images/phone_vertic.png';
        elem.style.marginLeft = '0px';
        elem.style.marginTop = '0px';
        counterVertical = 0;
      }
  }

  let  counterHorizont = 0;
  function screenOnhorisont(){
    let elem = document.querySelector('.phone_horizont > img');
    if (counterHorizont === 0 ){
    elem.src = 'assets/images/iPhone_Horizontal_black.png';
    counterHorizont++
    elem.style.marginLeft = '-1px';
    elem.style.marginTop = '-1px';
      } else if(counterHorizont === 1){
        elem.src = 'assets/images/phone_horizont.png';
        elem.style.marginLeft = '0px';
        elem.style.marginTop = '0px';
        counterHorizont = 0;
      }
  }
 
//active menu logo 

window.onscroll = function(){
   let html = document.documentElement;
   let elem = document.querySelectorAll('.list__header > li > a');
    for(let i = 0; i< elem.length; i++){
      elem[i].style.color ='#fff';
    }
    if( html.scrollTop >= 0 && html.scrollTop < 600) {
        let elem = document.getElementById('home_logo');
        elem.style.color ='#f06c64';
    }
    if( html.scrollTop >= 600  && html.scrollTop < 1100) { 
        let elem = document.getElementById('services_logo');
        elem.style.color ='#f06c64';
    }
    if( html.scrollTop >= 1100  && html.scrollTop < 2010) { 
        let elem = document.getElementById('portfolio_logo');
        elem.style.color ='#f06c64';
    }
    if( html.scrollTop >= 2010  && html.scrollTop < 2750) { 
        let elem = document.getElementById('about_logo');
        elem.style.color ='#f06c64';
    }
     if( html.scrollTop >= 2750) { 
        let elem = document.getElementById('contact_logo');
        elem.style.color ='#f06c64';
     }



    if (window.innerWidth > 768 && window.innerWidth < 1020) {
      for(let i = 0; i< elem.length; i++){
        elem[i].style.color ='#fff';
      }
      if( html.scrollTop >= 0 && html.scrollTop < 600) {
          let elem = document.getElementById('home_logo');
          elem.style.color ='#f06c64';
      }
      if( html.scrollTop >= 600  && html.scrollTop < 1300) { 
          let elem = document.getElementById('services_logo');
          elem.style.color ='#f06c64';
      }
      if( html.scrollTop >= 1300  && html.scrollTop < 2600) { 
          let elem = document.getElementById('portfolio_logo');
          elem.style.color ='#f06c64';
      }
      if( html.scrollTop >= 2600  && html.scrollTop < 3400) { 
          let elem = document.getElementById('about_logo');
          elem.style.color ='#f06c64';
      }
       if( html.scrollTop >= 3400) { 
          let elem = document.getElementById('contact_logo');
          elem.style.color ='#f06c64';
       }
    }
  }
  

//active portfolio and moving images
function active(elements) {
    let elem = document.querySelectorAll('.portfolio__navigation > ul > li');
       for(let i = 0; i< elem.length; i++){
           elem[i].style.border = '1px solid #666d89';
           elem[i].style.color ='#767e9e';
       }
    elements.style.border = '1px solid #fff';
    elements.style.color ='#fff';
      function imageMoved(){
        let section = document.querySelector('.portfolio__allImage');
        let divs = section.querySelectorAll('.portfolio__image');
        for (let i = 0; i >= 0; i--) {
          section.appendChild(divs[i]);
        }
      }
      imageMoved()
   }


   //modal window of Get a quote

let counterModal = 0;
function modal() {
  let subject = document.getElementById('txt').value;
  let describe = document.getElementById('describe').value;
  let modal = document.getElementById('Modal');
  document.getElementById('Subject').innerText = 'Subject: ' + subject;
  document.getElementById('Description').innerText ='Description: ' + describe;
  if (subject.length === 0) {
    document.getElementById('Subject').innerText = 'Without subject'
    } 

  if (describe.length === 0) {
      document.getElementById('Description').innerText = 'Without description'
      }
  if (counterModal === 0 ){
      counterModal++
      modal.style.display = 'block';
    
      } else {
      modal.style.display = 'none';
      document.getElementsByName('myForm')[0].reset();
    }
    
}

// slider
let counter = 0;
let slideIndex = 1;
let sliding = false;
function plusSlide() {
  if (sliding) {
    return;
  }

  sliding = true;

  let slides = document.getElementsByClassName('item_slider');
  slides[0].style.marginLeft = '-1040px';
  slides[1].style.marginLeft = '-840px';
  showSlides(slideIndex += 1);
}
function minusSlide() {
  if (sliding) {
    return;
  }

  sliding = true;

  let slides = document.getElementsByClassName('item_slider');

  slides[0].style.marginLeft = '1040px';
  slides[1].style.marginLeft = '840px';

  showSlides(slideIndex -= 1);  
}
function showSlides(n) {
    let slides = document.getElementsByClassName('item_slider');
    let slider = document.getElementsByClassName('slider');
    if(counter === 0) {
        counter++
        slider[0].style.backgroundColor='#648bf0'
        slider[0].style.borderBottom = '6px solid #4575f3';
    } else {
        counter = 0;
        slider[0].style.backgroundColor='#f06c64'
        slider[0].style.borderBottom = '6px solid #ea676b';
    }
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
      slides[slideIndex - 1].style.display = 'block';
    let timer = setInterval(function() {
      let slidesMargin = slides[slideIndex - 1].style.marginLeft;
        if ( slidesMargin === '0px') {
            clearInterval(timer); 
            sliding = false;
            return
        }
      let Arr = [];
        for (let i = 0; i < slidesMargin.length; i++){
          if (Number(slidesMargin[i]) || slidesMargin[i] === '0' || slidesMargin[i]==='-') {
             Arr.push(slidesMargin[i])
          }
        }
      Arr = Number(Arr.join(''));
        if( Arr > 0) {
          Arr = Arr - 10;
          slides[slideIndex - 1].style.marginLeft = Arr + 'px';
          
          if ( Arr < 20) {
            slides[slideIndex - 1].style.marginLeft = '15px'
            clearInterval(timer); 
            sliding = false;
            return
          }
        }
        if( Arr < 0) {
          Arr = Arr + 10;
          slides[slideIndex - 1].style.marginLeft = Arr + 'px';
        
        if ( Arr > 40) {
          slides[slideIndex - 1].style.marginLeft = '40px'
          clearInterval(timer); 
          sliding = false;
        return
        }
      }
          
      }, 20 )
  }

// burger menu
 function getOn () {
   let active = document.getElementById('burger__menuActive');
   active.style.display = 'block'
   let actives = document.getElementsByTagName('body');
   actives[0].style.position = 'fixed'

 }

 function getOff () {
  let active = document.getElementById('burger__menuActive');
  active.style.display = 'none'
  let actives = document.getElementsByTagName('body');
   actives[0].style.position = 'relative'
}