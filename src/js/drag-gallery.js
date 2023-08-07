
(jQuery)(
  function ($) {
    const $scrollContainer = $('.drag-gallery');
    let isDragging = false;
    let startX;
    let scrollLeft;
    let momentum = 0;

    const animateDelay = 600;

    let preventClick = false;

    $(window).on('scroll', function () {
      const scrollPosition = $(window).scrollTop();
      const triggerPosition = $scrollContainer.offset().top - $(window).height();

      if (scrollPosition > triggerPosition) {
        $scrollContainer.find('.drag-instruction').show();
      }
    });

    function updateScrollLeft(deltaX) {
      momentum = deltaX;
      scrollLeft -= deltaX;
      $scrollContainer.scrollLeft(scrollLeft);
    }

    function animateMomentum() {
      if (Math.abs(momentum) > 1) {
        updateScrollLeft(momentum * 1); // Adjust momentum speed
        momentum *= 1;
        requestAnimationFrame(animateMomentum);
      }
    }

    $scrollContainer.on('mousedown touchstart', function (e) {
      isDragging = true;
      startX = (e.pageX || e.originalEvent.touches[0].pageX) - $(this).offset().left;
      scrollLeft = $(this).scrollLeft();
      momentum = 0; // Reset momentum
    });

    $(document).on('mouseup touchend', function (e) {
      if (isDragging) {
        isDragging = false;
        if (e.type === 'touchend') {
          animateMomentum();
        }
      }
    });

    $scrollContainer.on('mousemove touchmove', function (e) {
      if (!isDragging) return;
      e.preventDefault();

      const currentX = (e.pageX || e.originalEvent.touches[0].pageX) - $(this).offset().left;
      const diffX = currentX - startX;
      updateScrollLeft(diffX);

      startX = currentX;
    });

    $('.drag-gallery-control.prev').on('click', function () {
      var scrollContainer = $(this).closest('.drag-gallery');
      scrollContainer.animate({ scrollLeft: 0 }, animateDelay); // Scroll to the initial position in animateDelay
    });

    $('.drag-gallery-control.next').on('click', function () {
      var scrollContainer = $(this).closest('.drag-gallery');
      const scrollWidth = scrollContainer.get(0).scrollWidth - $(window).width();
      scrollContainer.animate({ scrollLeft: scrollWidth }, animateDelay); // Scroll to the end position in animateDelay
    });
  }
);
