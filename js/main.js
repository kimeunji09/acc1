// 메뉴
$('header nav ul li').hover(function(){
  $(this).find('.sub').stop().slideDown();
},function(){
  $(this).find('.sub').stop().slideUp();
})

// 슬라이드 페이드인아웃
$('#slide1>ul>li').hide();
$('#slide1>ul>li:first-child').show();

setInterval(function(){
    $('#slide1>ul>li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('#slide1>ul');
},3000);

//가장 인기 많은 상품 영역
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});