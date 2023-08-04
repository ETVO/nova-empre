
(jQuery)(
  function ($) {
    // your-script.js
    $(document).ready(function () {
      // var copyTimes = 4;
      // var $row = $(".video-cols .row");
      // console.log('hey');
      // for(var i = 0; i < copyTimes; i++) {
      //   let newCol = $row.find('.col').first().clone();
      //   $row.append(newCol);
      // }
    });

    $('.video-inner video').on('ended', function () {
      $(this).parent('.video-inner').removeClass("playing");
    });

    $(".video-overlay").on("click", function () {
      $parent = $(this).parent('.video-inner');
      $videoPlayer = $parent.find('video');

      if (!$videoPlayer)
        return;

      if ($videoPlayer.get(0).paused) {
        $videoPlayer.get(0).play();
        $(this).find('.video-button').removeClass("bi-play-fill");
        $(this).find('.video-button').addClass("bi-pause-fill");
      }
      else {
        $videoPlayer.get(0).pause();
        $(this).find('.video-button').removeClass("bi-pause-fill");
        $(this).find('.video-button').addClass("bi-play-fill");
      }

      $parent.toggleClass("playing");
    });
  }
);
