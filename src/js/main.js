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

$('.link-on-click').on('click', function () {
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

  $(document).on('keydown', function (e) {
    if (e.key == 'Escape') {
      console.log(e.key);
      closeGalleryModal();
    }
  });
});

// Close the modal when the close button or overlay is clicked
$('.gallery-modal #overlay, .gallery-modal #close').on('click', closeGalleryModal);

function closeGalleryModal() {
  if ($(this).lenght) {
    $(this).closest('.gallery-modal').fadeOut(200);
    return;
  }
  $('.gallery-modal').fadeOut(200);
}

$('#closeCookies, #acceptCookies').on('click', () => {
  var $cookiesConsent = $('#cookiesConsent');
  $cookiesConsent.fadeOut();
  localStorage.setItem('consents-to-cookies', 'Consented use of cookies');
});

$(document).ready(function () {
  // Apply the input mask to the telephone input field
  $('#telefone').inputmask("(99) 9 9999-9999");
  
  if (localStorage.getItem('consents-to-cookies') !== 'Consented use of cookies') {
    $('#cookiesConsent').show();
  }
});