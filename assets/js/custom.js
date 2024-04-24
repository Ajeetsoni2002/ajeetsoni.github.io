var $affectedElements=$("p, h1, h2, h3, h4, h5, h6, div, span");$affectedElements.each(function(){var $this=$(this);$this.data("orig-size",$this.css("font-size"));});$("#btn-increase").click(function(){changeFontSize(1);});$("#btn-decrease").click(function(){changeFontSize(-1);});$("#btn-orig").click(function(){$affectedElements.each(function(){var $this=$(this);$this.css("font-size",$this.data("orig-size"));});});function changeFontSize(direction){$affectedElements.each(function(){var $this=$(this);$this.css("font-size",parseInt($this.css("font-size"))+direction);});}
$("#in-grey").click(function(){$("html").addClass("invert-color");$("#in-color").removeClass("dhide");$("#in-grey").addClass("dhide");});$("#in-color").click(function(){$("html").removeClass("invert-color");$("#in-color").addClass("dhide");$("#in-grey").removeClass("dhide");});$("#von").click(function(){$("#voff").removeClass("dhide");$("#von").addClass("dhide");});$("#voff").click(function(){$("#voff").addClass("dhide");$("#von").removeClass("dhide");});$(document).ready(function(){$(".popup-youtube").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:true,fixedContentPos:false,});});if($(window).width()<1025){$(".lpu-highlight-ranking").slick({slidesToShow:2,slidesToScroll:1,autoplay:true,autoplaySpeed:2000,arrows:true,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,},},],});}
if($(window).width()<900){$(".scholarships-type-div").slick({slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:2000,arrows:true,});$(".programmes-col").slick({slidesToShow:2,slidesToScroll:1,autoplay:true,autoplaySpeed:2000,arrows:true,});}
$(".single-image-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:3000,});$(".events-slider").slick({vertical:true,verticalSwiping:true,infinite:true,slidesToShow:2,slidesToScroll:2,arrows:false,dots:true,responsive:[{breakpoint:1025,settings:{slidesToShow:3,vertical:false,verticalSwiping:false,slidesToScroll:1,dots:true,},},{breakpoint:575,settings:{slidesToShow:1,vertical:false,verticalSwiping:false,slidesToScroll:1,dots:true,},},],});$("#next_event_slide").on("click",function(e){e.preventDefault();$(".events-slider").slick("slickNext");});$("#prev_event_slide").on("click",function(e){e.preventDefault();$(".events-slider").slick("slickPrev");});$(".inventors-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,});$("#next-sp").on("click",function(e){e.preventDefault();$(".inventors-slider").slick("slickNext");});$("#prev-sp").on("click",function(e){e.preventDefault();$(".inventors-slider").slick("slickPrev");});$(".news-slider").not('.slick-initialized').slick({infinite:true,slidesToShow:3,autoplay:true,autoplaySpeed:3000,slidesToScroll:1,arrows:false,responsive:[{breakpoint:1030,settings:{slidesToShow:2,slidesToScroll:1,dots:false,},},{breakpoint:600,settings:{slidesToShow:1,},},],});$("#next_news_slide, .next_news_slide").on("click",function(e){e.preventDefault();$(".news-slider").slick("slickNext");});$("#prev_news_slide, .prev_news_slide").on("click",function(e){e.preventDefault();$(".news-slider").slick("slickPrev");});$(".spotlight-slider").slick({infinite:true,slidesToShow:1,autoplay:true,autoplaySpeed:3000,slidesToScroll:1,arrows:false,});$("#next_spotligh_slide").on("click",function(e){e.preventDefault();$(".spotlight-slider").slick("slickNext");});$("#prev_spotligh_slide").on("click",function(e){e.preventDefault();$(".spotlight-slider").slick("slickPrev");});$("#next-sp").on("click",function(e){e.preventDefault();$(".spotlight-slider").slick("slickNext");});$("#prev-sp").on("click",function(e){e.preventDefault();$(".spotlight-slider").slick("slickPrev");});$(".global-community-slider").slick({slidesToShow:2,slidesToScroll:1,dots:false,fade:false,arrows:false,autoplay:true,autoplaySpeed:3000,cssEase:"linear",infinite:true,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,},},],});$("#next_global-community, .next_global-community").on("click",function(e){e.preventDefault();$(".global-community-slider").slick("slickNext");});$("#prev_global-community, .prev_global-community").on("click",function(e){e.preventDefault();$(".global-community-slider").slick("slickPrev");});$(".chart-slider").slick({slidesToShow:2,slidesToScroll:1,dots:false,fade:false,arrows:false,autoplay:true,autoplaySpeed:3000,cssEase:"linear",infinite:false,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,},},],});$("#next_chart-slider").on("click",function(e){e.preventDefault();$(".chart-slider").slick("slickNext");});$("#prev_chart-slider").on("click",function(e){e.preventDefault();$(".chart-slider").slick("slickPrev");});$(".research-latest-achievements-slider").slick({slidesToShow:3,slidesToScroll:1,dots:false,fade:false,arrows:false,autoplay:true,autoplaySpeed:3000,cssEase:"linear",infinite:true,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,},},],});$("#next_research-latest-achievements").on("click",function(e){e.preventDefault();$(".research-latest-achievements-slider").slick("slickNext");});$("#prev_research-latest-achievements").on("click",function(e){e.preventDefault();$(".research-latest-achievements-slider").slick("slickPrev");});$(".sports-slider").slick({slidesToShow:3,slidesToScroll:1,arrows:false,autoplay:true,autoplaySpeed:2000,responsive:[{breakpoint:1030,settings:{slidesToShow:2,slidesToScroll:1,dots:false,},},{breakpoint:600,settings:{slidesToShow:1,},},],});$("#next_sports_slide").on("click",function(e){e.preventDefault();$(".sports-slider").slick("slickNext");});$("#prev_sports_slide").on("click",function(e){e.preventDefault();$(".sports-slider").slick("slickPrev");});$(".single-image-slider-custom-nav").slick({infinite:true,slidesToShow:1,slidesToScroll:1,arrows:false,autoplay:true,autoplaySpeed:2000,});$("#next_custom-nav, .next_custom-nav").on("click",function(e){e.preventDefault();$(".single-image-slider-custom-nav").slick("slickNext");});$("#prev_custom-nav, .prev_custom-nav").on("click",function(e){e.preventDefault();$(".single-image-slider-custom-nav").slick("slickPrev");});$(".students-tesi-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,arrows:true,autoplay:true,autoplaySpeed:3000,});$(".students-tesi-slider-nav #next_testimonials").on("click",function(e){e.preventDefault();$(".students-tesi-slider").slick("slickNext");});$(".students-tesi-slider-nav #prev_testimonials").on("click",function(e){e.preventDefault();$(".students-tesi-slider").slick("slickPrev");});$(".alumni-tesi-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,arrows:false,});$(".alumni-tesi-slider-nav #next_testimonials").on("click",function(e){e.preventDefault();$(".alumni-tesi-slider").slick("slickNext");});$(".alumni-tesi-slider-nav #prev_testimonials").on("click",function(e){e.preventDefault();$(".alumni-tesi-slider").slick("slickPrev");});$(".partners-tesi-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,arrows:false,});$(".partners-tesi-slider-nav #next_testimonials").on("click",function(e){e.preventDefault();$(".partners-tesi-slider").slick("slickNext");});$(".partners-tesi-slider-nav #prev_testimonials").on("click",function(e){e.preventDefault();$(".partners-tesi-slider").slick("slickPrev");});$(".faculty-tesi-slider").slick({infinite:true,slidesToShow:1,slidesToScroll:1,arrows:false,});$(".faculty-tesi-slider-nav #next_testimonials").on("click",function(e){e.preventDefault();$(".faculty-tesi-slider").slick("slickNext");});$(".faculty-tesi-slider-nav #prev_testimonials").on("click",function(e){e.preventDefault();$(".faculty-tesi-slider").slick("slickPrev");});$(".testi-grid ul li a").on("click",function(){setTimeout(function(){$(".students-tesi-slider").slick("refresh");$(".alumni-tesi-slider").slick("refresh");$(".partners-tesi-slider").slick("refresh");$(".faculty-tesi-slider").slick("refresh");SEMICOLON.initialize.lightbox();},1);});$(".admissons-slider").slick({infinite:true,slidesToShow:6,slidesToScroll:1,arrows:false,autoplay:true,autoplaySpeed:2000,responsive:[{breakpoint:1400,settings:{slidesToShow:5,slidesToScroll:1,},},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1,},},{breakpoint:1030,settings:{slidesToShow:3,slidesToScroll:1,},},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,},},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,},},],});$("#next_admissons_slide, .next_admissons_slide").on("click",function(e){e.preventDefault();$(".admissons-slider").slick("slickNext");});$("#prev_admissons_slide, .prev_admissons_slide").on("click",function(e){e.preventDefault();$(".admissons-slider").slick("slickPrev");});$(".inner-testimonial-slider").slick({infinite:true,slidesToShow:2,slidesToScroll:1,arrows:false,margin:20,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1,},},],});$("#next_inner-testi_slide").on("click",function(e){e.preventDefault();$(".inner-testimonial-slider").slick("slickNext");});$("#prev_inner-testi_slide").on("click",function(e){e.preventDefault();$(".inner-testimonial-slider").slick("slickPrev");});$(".roadmap-cards-cont").slick({slidesToShow:6,speed:700,dots:false,arrows:false,infinite:true,responsive:[{breakpoint:900,settings:{slidesToShow:4,slidesToScroll:1,},},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,},},],});$("#next_roadmap_slide").on("click",function(e){e.preventDefault();$(".roadmap-cards-cont").slick("slickNext");});$("#prev_roadmap_slide").on("click",function(e){e.preventDefault();$(".roadmap-cards-cont").slick("slickPrev");});$(".funding-slider").slick({slidesToShow:10,slidesToScroll:1,speed:700,dots:false,arrows:false,infinite:true,responsive:[{breakpoint:900,settings:{slidesToShow:3,},},{breakpoint:1300,settings:{slidesToShow:6,},},],});$(".scientist-slider").slick({slidesToShow:8,slidesToScroll:1,speed:700,dots:false,arrows:false,infinite:true,responsive:[{breakpoint:1280,settings:{slidesToShow:6,},},{breakpoint:900,settings:{slidesToShow:4,},},{breakpoint:600,settings:{slidesToShow:2,},},],});$("#next_scientist_slide").on("click",function(e){e.preventDefault();$(".scientist-slider").slick("slickNext");});$("#prev_scientist_slide").on("click",function(e){e.preventDefault();$(".scientist-slider").slick("slickPrev");});$(".ppwnd").on("click",function(event){console.log("working");event.preventDefault();$.popupWindow("//www.lpu.in/ClickToCall.php",{width:420,height:630,});});$(".logo-width-slider").slick({centerMode:true,centerPadding:"60px",slidesToShow:5,autoplay:true,autoplaySpeed:2000,slidesToScroll:1,dots:false,arrows:false,responsive:[{breakpoint:990,settings:{arrows:false,centerMode:true,centerPadding:"40px",slidesToShow:3,},},{breakpoint:480,settings:{arrows:false,centerMode:true,centerPadding:"40px",slidesToShow:1,},},],});$("#next_logo_slide").on("click",function(e){e.preventDefault();$(".logo-width-slider").slick("slickNext");});$("#prev_logo_slide").on("click",function(e){e.preventDefault();$(".logo-width-slider").slick("slickPrev");});$(".sponsored-projects-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,infinite:true,focusOnSelect:true,cssEase:"linear",touchMove:true,asNavFor:".text-projects-slider",responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,},},],});$(".publications-featured-slider").slick({slidesToShow:1,slidesToScroll:1,arrows:false,dots:false,infinite:true,focusOnSelect:true,fade:true,cssEase:"linear",touchMove:true,});$("#next-pub").on("click",function(e){e.preventDefault();$(".publications-featured-slider").slick("slickNext");});$("#prev-pub").on("click",function(e){e.preventDefault();$(".publications-featured-slider").slick("slickPrev");});$(".alumni-video-slider").slick({slidesToShow:4,slidesToScroll:1,arrows:false,dots:false,infinite:true,cssEase:"linear",touchMove:true,autoplay:true,autoplaySpeed:2000,responsive:[{breakpoint:990,settings:{slidesToShow:2,},},{breakpoint:480,settings:{slidesToShow:1,},},],});$(".next-video-slide").on("click",function(e){e.preventDefault();$(".alumni-video-slider").slick("slickNext");});$(".pre-video-slide").on("click",function(e){e.preventDefault();$(".alumni-video-slider").slick("slickPrev");});function selectCall(value){value=value.substring(1);var vis=document.querySelector(".vis"),target=document.getElementById(value);if(vis!==null){vis.className="inv";}
if(target!==null){target.className="vis";}}
$(".explore-select").each(function(index,el){var $this=$(this),numberOfOptions=$(this).children("option").length;$this.addClass("select-hidden");$this.wrap('<div class="select"></div>');$this.after('<div class="select-styled"></div>');var $styledSelect=$this.next("div.select-styled");$styledSelect.text($this.children("option").eq(0).text());var $list=$("<ul/>",{class:"select-options",}).insertAfter($styledSelect);for(var i=0;i<numberOfOptions;i++){$("<li/>",{text:$this.children("option").eq(i).text(),rel:"."+$this.children("option").eq(i).val(),}).appendTo($list);}
var $listItems=$list.children("li");$styledSelect.click(function(e){e.stopPropagation();$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide();});$(this).toggleClass("active").next("ul.select-options").toggle();});$listItems.click(function(e){e.stopPropagation();$styledSelect.text($(this).text()).removeClass("active");$this.val($(this).attr("rel"));selectCall($(this).attr("rel"));$list.hide();});$(document).click(function(){$styledSelect.removeClass("active");$list.hide();});});$(".image-popup-no-margins").magnificPopup({type:"image",closeOnContentClick:true,closeBtnInside:false,fixedContentPos:true,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:true,},zoom:{enabled:true,duration:300,},});if($(window).width()<=992){$(".style-select").click(function(){$(".custom-select-list").toggle();$(".style-select .arrow").toggleClass("rotate");});$(".custom-select-list li a").click(function(){$(".custom-select-list li a").removeClass("active");$(this).addClass("active");$(".style-select").html($(this).text()+' <span class="arrow rotate"></span>');$(".style-select .arrow").removeClass("rotate");$(".custom-select-list").hide();});$(document).click(function(event){if(!$(event.target).closest(".custom-select-outer").length){$(".custom-select-list").hide();$(".style-select .arrow").removeClass("rotate");}});}
var sticky_header=$("#header");var headerOffset=sticky_header.offset().top;var mobile_sticky_header=$(".mobile-sticky-header");var navOffset=mobile_sticky_header.offset().top;$(window).scroll(function(){if($(window).scrollTop()>headerOffset){sticky_header.addClass("sticky");}else{sticky_header.removeClass("sticky");}});if($(window).width()<=1024){$("#header .container-fluid").removeClass('container-fluid');$(".scroll-logo").addClass('mobile-scroll-logo');$(".mobile-scroll-logo").removeClass('scroll-logo');$(window).scroll(function(){if($(window).scrollTop()>navOffset){mobile_sticky_header.addClass("sticky");sticky_header.removeClass("sticky");$(".mobile-scroll-logo").attr("src","https://www.lpu.in/lpu-assets/images/logo/LPU-socila-logo.svg");}else{mobile_sticky_header.removeClass("sticky");$(".mobile-scroll-logo").attr("src","https://www.lpu.in/lpu-assets/images/logo/logo.svg");}});}
function myFunction(x){x.classList.toggle("change");}
function PlusMinusFunction(x){x.classList.toggle("plusMinus");}
if($(window).width()>=992){$(document).scroll(function(){var y=$(this).scrollTop();var headerWrap=$('.mobile-sticky-header').offset().top;if(y>headerWrap){$('.page-custom-nav').addClass('fixed-nav');}else{$('.page-custom-nav').removeClass('fixed-nav');}});}