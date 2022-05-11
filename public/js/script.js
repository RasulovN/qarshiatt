   let navbar = document.querySelector('.header .navbar');
let menuBtn =document.querySelector('#menu-btn')

   function navBtn(e) {
      navbar.classList.add('active');
      console.log('clicked')
   }
   function navBtnCls(e) {
      navbar.classList.remove('active');
      console.log('clicked close')
   }

    // document.querySelector('#menu-btn').onclick = () =>{
    //     navbar.classList.add('active');
    //     console.log('clicked')
    // }
    
    // document.querySelector('#nav-close').onclick = (e) =>{
    //     navbar.classList.remove('active');
    // }
    
    const searchForm = document.querySelector('.search-form');
    
    function navSearch(e) {
      searchForm.classList.add('active');
   }
    function navSearchCls(e) {
      searchForm.classList.remove('active');
   }
    
  //   const searchDiv = document.querySelector('.searchDiv');
    
  //   function navSearch(e) {
  //     searchDiv.classList.add('active');
  //  }
  //   function navSearchCls(e) {
  //     searchDiv.classList.remove('active');
  //  }



    // document.querySelector('#search-btn').onclick = () =>{
    //     searchForm.classList.add('active');
    // }
    
    // document.querySelector('#close-search').onclick = () =>{
    //     searchForm.classList.remove('active');
    // }
    
    window.onscroll = () =>{
        navbar.classList.remove('active');
    
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };
    
    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };
    
    
    
    





// pages
var swiper = new Swiper(".home-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          grabCursor:true,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop:true, 
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});
// NAVBAR END



// CAROUSEL
function singleGalleryCarousel () {
  if ($('.single-gallery-carousel-content-box').length && $('.single-gallery-carousel-thumbnail-box').length) {

    var $sync1 = $(".single-gallery-carousel-content-box"), // variable declaration
        $sync2 = $(".single-gallery-carousel-thumbnail-box"),
        flag = false,
        duration = 500;

        $sync1.owlCarousel({ //function for preview carousel
            items: 1,
            margin: 0,
            nav: false,
            dots: false
        })
        .on('changed.owl.carousel', function (e) {
            //var currentItem = e.item.index;
            //alert(currentItem);
            if (!flag) {
                flag = true;
                $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });

        $('.single-gallery-carousel-content-box').magnificPopup({ //function for magnific popup
            type: 'image',
            delegate: '.owl-item:not(.cloned) a',
            closeOnContentClick: false,
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                     this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                     this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-zoom-in mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            zoom: {
                enabled: true,
                duration: 300
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });
    
        $sync2.owlCarousel({ //function for thumbnails carousel
            margin: 1,
            items: 7,
            nav: true,
            dots: false,
            navText:false,
            center: false,
            responsive: {
                0:{
                    items:2,
                    autoWidth: false
                },
                400:{
                    items:3,
                    autoWidth: false
                },
                768:{
                    items:4,
                    autoWidth: false
                }
            },
        })
        .on('click', '.owl-item', function () {
            $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = true;    
                $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });
    };
}
singleGalleryCarousel (); //FUNCTION CALLED HERE
// CAROUSEL END





// LOGIN
// LOGIN END


  // Teacher
  var Slider = function() {
    var total, $slide, $slider, sliderWidth, increment = 120;
    var on = function() {
      $slider = $('.tech-slider');
      $slide = $('.tech-slide');
      sliderWidth = $slider.width();
      total = $slide.length;
      position();
    }
  
    var position = function() {
      var sign, half = $('.active').index(), x = 0, z = 0, zindex,scaleX = 1.3,scaleY = 1.3, transformOrigin;
      $slide.each(function(index, element) {
        scaleX = scaleY = 1;
        transformOrigin = sliderWidth / 2;
        if(index < half) {
          sign = 1;
          zindex = index + 1;
          x = sliderWidth / 2 - increment * (half - index + 1);
          z =  -increment * (half - index + 1);
        } else if(index > half) {
          sign = -1
          zindex = total - index;
          x = sliderWidth / 2 + increment * (index - half + 1);
          z =  -increment * (index - half + 1);
        } else {
          sign = 0;
          zindex = total;
          x = sliderWidth / 2;
          z = 1;
          scaleX = scaleY = 1.2;
          transformOrigin = 'initial';
        }
        $(element).css(
          {
            'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
            'z-index': zindex,
            'transform-origin-x': transformOrigin
          }
        );
      });
    };
  
    var calculateX = function(position, sign, width) {
      switch(sign) {
        case 1:
        case 0: return position - width / 2;
        case -1: return position - width / 2;
      }
    }
    
    var imageSize = function() {
      return $slider.width() / 3;
    }
    
    var recalculateSizes = function() {
      sliderWidth = $slider.width();
      position();
    }
    
    var clickedImage = function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
      position();
    }
    
    var addEvents = function() {
      $( window ).resize(recalculateSizes);
      $(document).on('click','.tech-slide', clickedImage);
    }
    
    return {
      init: function() {
        on();
        addEvents();
      }
    };
  }();
  
  $(function(){
    var slider = Slider.init();
  })
  // Teacher end


  // NEW LIKE
  $(document).ready(function() {
    // var commentButton = document.getElementById("btn-comment");
    // var commentName = document.getElementById("user-name");
    // commentName = commentName.innerHTML;
    // var input = document.getElementById("content");
    // var like_counter = $("#like-counter").text();
    // var share_counter = $("#share-counter").text();
    // var comment_counter = $("#comment-counter").text();
   // LIKE BUTTON CLICKED
  //  $("#like").click(function() {
  //     if($("#like-content").text() == "Like") {
  //       $("#like").addClass("liked");
  //       $("#like-content").html(`<span class="fa fa-heart"></span>`);
  //       $("#like-counter").html(++like_counter);
  //       if(like_counter == 1) {
  //         $("#like-word").html(like_counter + " like");
  //       }
  //       else $("#like-word").html(like_counter + " likes");
  //       $("#like-word").css("color", "#E74C3C");
  //       $("#like-focus").css("display", "none");
  //     }
  //     else {
  //       $("#like").removeClass("liked");
  //       $("#like-content").html("Like");
  //       $("#like-counter").html(--like_counter);
  //       $("#like-word").html(like_counter + " likes");
  //       $("#like-word").css("color", "#7F8C8D");
  //       $("#like-focus").css("display", "inline-flex");
  //     }
  //   });
   
   // SHARE BUTTON CLICKED
  //  $("#share").click(function() {
  //     if($("#share-content").text() == "Share") {
  //       $("#share").addClass("shared");
  //       // $("#share-content").html(`<span class="fas fa-share">`);
  //       $("#share-counter").html(++share_counter);
  //     }
  //     else {
  //       $("#share").removeClass("shared");
  //       $("#share-content").html("Share");
  //       $("#share-counter").html(++share_counter);
  //     }
  //   });
   // COMMENT

  //  $("#content").keypress(function(event){
  //    if(event.keyCode == 13){
  //      event.preventDefault();
  //      commentButton.click();
  //      $("#content").val("");
  //    }
  //  });
   
  //  commentButton.onclick = function() {
  //    if(input.value == "") { alert("Enter something."); }
  //    else {
  //      var text = input.value;
  //      var ul = document.getElementById("comment-list");
  //      var li = document.createElement("li");
  //      li.appendChild(document.createTextNode(commentName + " " + text));
  //      ul.appendChild(li);
  //      input.value = "";
  //    }
  //  }
  
 });

  // NEW LIKE END


  // GALERY CAROUSEL

  // GALERY CAROUSEL END



  // SEARCH 

  function show() {

    let input = document.querySelector('input').value;
    let area = document.querySelector('#search').value;

    let massiv = area.split(' ');

    massiv.forEach((element, index) => {

        if (element == input) {
            massiv[index] = "<span class='sariq'>" + element + "</span>";
        }

    });

    let str = massiv.join(' ');

    let yashirin_area = document.getElementById('area');

    yashirin_area.innerHTML = str;

    yashirin_area.classList.remove("d-none")
    document.querySelector('#asosiy').classList.add("d-none")


}


  // SEARCH END

  // new search
  // const items = document.querySelector(".items");
  // const searchInput = document.getElementById("search");
  // var posts = []
  
  // const getItem = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //         .then(res => {res.json()
  //             .then(res => {
  //                 posts = res;
  //                 viewResults(posts)
  //             })
  //             .catch(err => console.log(err));
  //         })
  //         .catch(err => console.log(err));
  // };
  
  // searchInput.addEventListener('input', e => {
  //     const element = e.target.value.toLowerCase()
  //     console.log(element)
  //     const searchFunc = posts
  //         .filter(post => post.title
  //         .toLowerCase()
  //         .includes(element))
  //     viewResults(searchFunc)
  // })
  
  // const viewResults = (arr) => {
  //     let output = "";
  
  //     arr.forEach(({ title, body }) => (output += `
        
  //                 <div class="results">
  //                     <div>
  //                         <h6>
  //                             ${title}
  //                         </h6>
  //                     </div>
  //                 </div>
  //     `));
  //     items.innerHTML = output;
  // }
  // document.addEventListener("DOMContentLoaded", getItem);
