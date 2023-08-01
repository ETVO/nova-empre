
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

    $('.video-inner video').on('ended', function() {
      $(this).parent('.video-inner').removeClass("playing");
    });

    $(".video-overlay").on("click", function () {
      $parent = $(this).parent('.video-inner');
      $videoPlayer = $parent.find('video');

      if (!$videoPlayer)
        return;

      if ($videoPlayer.get(0).paused)
        $videoPlayer.get(0).play();
      else
        $videoPlayer.get(0).pause();

      $parent.toggleClass("playing");
      $(this).find('.video-button').toggleClass("bi-pause-fill");
    });
  }
);
