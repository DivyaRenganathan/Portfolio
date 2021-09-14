/*----MENU---*/
const showMenu =(toogLeId,navId) =>{
    const toggle =document.getElementById(toogLeId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/* Active and Remove menu*/
const navLink =document.querySelectorAll('.nav_link')
/*const currentscreen =document.getElementsByClassName('.screen')*/


function linkAction(){
    /*Active link*/
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    /*Remove link*/
    const navMenu =document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n =>n.addEventListener('click',linkAction))

/*=======================ScreenAction=========================*/
document.getElementById("about").addEventListener("click", aboutFunction);
document.getElementById("work").addEventListener("click", workFunction);
document.getElementById("skills").addEventListener("click", skillsFunction);
document.getElementById("contact").addEventListener("click", contactFunction);
document.getElementById("home").addEventListener("click", homeFunction);
/*===========================aboutFunction=========================*/
function aboutFunction(){
    const  aboutscreen = document.getElementById("aboutsc")
    const homescreen =document.getElementById("homesc")
    removeScreen()
    aboutscreen.classList.add('current-screen')
  }
  /*===========================workFunction=========================*/
function workFunction(){
    removeScreen()
    const workscreen =document.getElementById("worksc") 
    workscreen.classList.add('current-screen')
  }
  /*===========================skillsFunction=========================*/
function skillsFunction(){
    removeScreen()
    const skillsscreen =document.getElementById("skillssc") 
    skillsscreen.classList.add('current-screen')
  }
   /*===========================contactFunction=========================*/
function contactFunction(){
    removeScreen()
    const contactscreen =document.getElementById("contactsc") 
    contactscreen.classList.add('current-screen')
  }
   /*===========================contactFunction=========================*/
function homeFunction(){
    removeScreen()
    const homescreen =document.getElementById("homesc") 
    homescreen.classList.add('current-screen')
  }
  /*==========================removeScreen============================================*/
  function removeScreen(){
    var x =document.querySelectorAll('.screen')
      for (i = 0; i < x.length; i++) {
      x[i].classList.remove('current-screen')
      }
  }

