
(jQuery)(
  function ($) {
    const $scrollContainer = $('.drag-gallery');
    let isDragging = false;
    let startX;
    let scrollLeft;

    $scrollContainer.on('mousedown', function (e) {
      isDragging = true;
      startX = e.pageX - $(this).offset().left;
      scrollLeft = $(this).scrollLeft();
      $(this).addClass('dragging');
    });

    $scrollContainer.on('mouseleave', function () {
      isDragging = false;
      $(this).removeClass('dragging');
    });

    $scrollContainer.on('mouseup', function () {
      isDragging = false;
      $(this).removeClass('dragging');
    });

    $scrollContainer.on('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - $(this).offset().left;
      const walk = (x - startX) * .75; // You can adjust this multiplier for faster/slower scrolling
      $(this).scrollLeft(scrollLeft - walk);
    });

    const animateDelay = 600;

    $('.drag-gallery-control.prev').on('click', function () {
      var scrollContainer = $(this).closest('.drag-gallery');
      scrollContainer.animate({ scrollLeft: 0 }, animateDelay); // Scroll to the initial position in animateDelay
    });

    $('.drag-gallery-control.next').on('click', function () {
      var scrollContainer = $(this).closest('.drag-gallery');
      const scrollWidth = scrollContainer.get(0).scrollWidth - $(window).width();
      console.log(scrollWidth, $(window).width())
      scrollContainer.animate({ scrollLeft: scrollWidth }, animateDelay); // Scroll to the end position in animateDelay
    });

    // Show the modal when an image is clicked
    $('.drag-gallery-image').on('click', function () {
      const $imgSrc = $(this).find('img').attr('src');
      $('.drag-gallery-modal img').attr('src', $imgSrc);
      $('.drag-gallery-modal').fadeIn(200);
    });

    // Close the modal when the close button or overlay is clicked
    $('.drag-gallery-modal #overlay, .drag-gallery-modal #close').on('click', function (e) {
      console.log('here');
      $(this).closest('.drag-gallery-modal').fadeOut(200);
    });
  }
);
