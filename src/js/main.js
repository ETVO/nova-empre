(jQuery)(
  function ($) {
    const windowHeightBeforeFooter = $(document).height() - $(window).height() - 200;
    const header = $('#header');

    $(window).on('load scroll', function () {
        scroll = $(window).scrollTop();

      var headerHeight = header.outerHeight();

      if (scroll >= headerHeight && scroll < windowHeightBeforeFooter) {
        header.addClass('scrolled');
      }
      else {
        header.removeClass('scrolled');
      }
    });

    $(document).ready(function () {
      // Apply the input mask to the telephone input field
      $('#telefone').inputmask("(99) 9 9999-9999");
    });

    $('.multi-carousel-item, .empre').on('click', function () {
      const link = $(this).find("a").attr("href");
      if (link) {
        window.location.href = link;
      }
    });

    $(".form-select").on("click", function () {
      const selectedValue = $(this).val();
      const isDisabledOptionSelected = $(this).find("option:selected").prop("disabled");

      if (!$(this).hasClass('valid-value'))
        $(this).addClass("valid-value");
    });
    $(".form-select").on("blur", function () {
      const selectedValue = $(this).val();
      const isDisabledOptionSelected = $(this).find("option:selected").prop("disabled");

      if (isDisabledOptionSelected)
        $(this).removeClass("valid-value");
      else
        $(this).addClass("valid-value");

    });


    // Show the modal when an image is clicked
    $('.gallery-has-modal .gallery-image').on('click', function () {
      const $imgSrc = $(this).find('img').attr('src');
      $('.gallery-modal img').attr('src', $imgSrc);
      $('.gallery-modal').fadeIn(200);
    });

    // Close the modal when the close button or overlay is clicked
    $('.gallery-modal #overlay, .gallery-modal #close').on('click', function (e) {
      $(this).closest('.gallery-modal').fadeOut(200);
    });
  }
);
