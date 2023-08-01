import './multi-carousel.js';
import './drag-gallery.js';
import './video-cols.js';

(jQuery)(
  function ($) {
    // your-script.js
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
  }
);
