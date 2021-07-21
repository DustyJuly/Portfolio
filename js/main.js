$(function(){
//   const words = [
//     "перфекціоніст", 
//     "мати драконів", 
//     "дослідник"
//   ];
//   let index = 0;
//   setInterval(() => {
//    typeText.innerText = words[index];
//    typeText.nextElementSibling.innerText = words[index];
//    typeText.style.animation = `type 5s steps(${words[index].length}) infinite`;
//    if (index == words.length - 1) index = 0;
//    else index++;
//   }, 5000);
new TypeIt("#heading", {
   speed: 250,
   loop:true,
   waitUntilVisible: true
 })
   .type("перфекціоніст", {delay: 300})
   .delete(13)
   .type('дослідник', {delay: 300})
   .delete(9)
   .type('мати драконів', {delay: 300})
   .delete(13)
   .type('непосида', {delay: 300})
   .delete(8)
   .type('фанат', {delay: 300})
   .delete(5)
   .go();

 
   var rellax = new Rellax('.rellax');

   AOS.init({
      duration: 1500,
    });
  
  $("a.menu__list-link").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 1000,
       easing: "swing"
    });
    return false;
 });

 var rellax = new Rellax('.rellax', {
   breakpoints:[450, 768, 992]
 });
});