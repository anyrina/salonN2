if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    //slider
    var splide = new Splide( '.splide', {
      type   : 'loop',
      perPage: 2,
      perMove: 1,
    } );

    splide.mount();
  } else {
      //slider
    var splide = new Splide( '.splide', {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
    } );

    splide.mount();
  }
  
