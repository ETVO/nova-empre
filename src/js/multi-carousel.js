
(jQuery)(
  function ($) {

    var carouselIndex = 0;

    function getCarouselCols($carousel, width) {
      var cols = 5;
      switch (true) {
        case (width >= 1200):
          cols = $carousel.data('cols-xl');
          if (cols) break;
        case (width >= 992):
          cols = $carousel.data('cols-lg');
          if (cols) break;
        case (width >= 768):
          cols = $carousel.data('cols-md');
          if (cols) break;
        case (width >= 460):
          cols = $carousel.data('cols-sm');
          if (cols) break;
        default:
          cols = $carousel.data('cols');
          if (!cols) cols = 1;
      }

      return cols;
    }

    function loadMultiCarousel() {
      var $carousel = $('.multi-carousel');
      var $inner = $carousel.find('.multi-carousel-inner');
      var $indicators = $carousel.find('.multi-carousel-indicators');
      var cols = getCarouselCols($carousel, $(window).width());
      
      $indicators.find('button:not(:first)').remove()

      $inner.find('.multi-carousel-item').each(function (i) {
        if (i + 1 > cols) {
          $(this).removeClass('active')
          var newButton = $indicators.find('button').first().clone()
          newButton.attr('data-slide-to', (i + 1) - cols)
          newButton.removeClass('active')
          // newButton.removeAttr('id')
          newButton.click(indicatorClick)
          $indicators.append(newButton)
        }
        else {
          $(this).addClass('active')
        }
      });
      carouselIndex = 0;
      carouselIndicatorsUpdate($carousel);
    }

    $('.multi-carousel-control.next').on('click', moveCarousel);

    $('.multi-carousel-control.prev').on('click', moveCarousel);

    const animateDelay = 600;
    var isAnimating = false;

    function moveCarousel() {
      if(isAnimating) return;
      var direction = 'next';
      if ($(this).hasClass('prev')) direction = 'prev';

      const animateDirection = direction == 'prev'
        ? 'right'
        : 'left';

      var $carousel = $(this).parent('.multi-carousel');
      var $inner = $carousel.find('.multi-carousel-inner');
      var cols = getCarouselCols($carousel, $(window).width());

      if (direction == 'prev') {
        if (!$inner.find('.multi-carousel-item.active').first().prev().length) {
          return;
        }
        carouselIndex--;
      }
      else {
        if (!$inner.find('.multi-carousel-item.active').last().next().length) {
          return;
        }
        carouselIndex++;
      }
      isAnimating = true;

      if (direction == 'prev') {
        $inner.find('.multi-carousel-item.active').last().removeClass('transitioning');
        $inner.find('.multi-carousel-item.active').first().prev().addClass('transitioning');
      }
      else {
        $inner.find('.multi-carousel-item.active').first().removeClass('transitioning');
        $inner.find('.multi-carousel-item.active').last().next().addClass('transitioning');
      }
      
      let animateProps = {}
      animateProps[animateDirection] = '-' + 100 / cols + '%';

      $inner.find('.multi-carousel-item.active').animate(
        animateProps,
        animateDelay,
        () => {
          $inner.find('.multi-carousel-item').removeAttr('style');
          $inner.find('.multi-carousel-item').removeClass('transitioning');
        }
      );

      setTimeout(() => {
        if (direction == 'prev') {
          $inner.find('.multi-carousel-item.active').first().prev().addClass('active');
          $inner.find('.multi-carousel-item.active').last().removeClass('active');
        }
        else {
          $inner.find('.multi-carousel-item.active').last().next().addClass('active');
          $inner.find('.multi-carousel-item.active').first().removeClass('active');
        }
        isAnimating = false;
      }, animateDelay)

      carouselIndicatorsUpdate($carousel);
    }

    function carouselIndicatorsUpdate($carousel) {
      $indicators = $carousel.find('.multi-carousel-indicators');

      $indicators.find('button.active').removeClass('active');
      $indicators.find('button[data-slide-to="' + carouselIndex + '"]').addClass('active');
    }

    $('.multi-carousel-indicators button').click(indicatorClick)

    function indicatorClick() {
      $(this).siblings('button.active').removeClass('active');
      $(this).addClass('active');

      var slideTo = $(this).data('slide-to');

      var $carousel = $(this).parents('.multi-carousel');
      var $inner = $carousel.find('.multi-carousel-inner');
      var cols = getCarouselCols($carousel, $(window).width());

      const animateDirection = slideTo < carouselIndex
        ? 'right'
        : 'left';

      var multiple = Math.abs(slideTo - carouselIndex);

      let animateProps = {}
      animateProps[animateDirection] = '-' + multiple * (100 / cols) + '%';

      $inner.find('.multi-carousel-item.active').animate(
        animateProps,
        animateDelay,
        () => {
          $inner.find('.multi-carousel-item').removeAttr('style');
        }
      );
      setTimeout(() => {
        $inner.find('.multi-carousel-item').each(function (i) {
          if (i < slideTo) {
            $(this).removeClass('active')
          }
          else if (i + 1 > cols + slideTo) {
            $(this).removeClass('active')
          }
          else {
            $(this).addClass('active')
          }
        });

      }, animateDelay)

      carouselIndex = slideTo;

    }

    $(document).ready(function () {
      loadMultiCarousel();
    });
    $(window).on('load resize', function () {
      loadMultiCarousel();
    });
  }
);
