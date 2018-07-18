$( document ).ready(function() {
    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: '.gutter-sizer'
        // columnWidth: 25%,
        // gutter: 20
    });
});

// $(window).on('resize', function (event) {
//     var $window = $(window);
  
//     if ($window.width() <= 320) {
//         var $masonryTarget = $('.grid');
        
//         $hasMasonry = $masonryTarget.data('masonry') ? true : false;

//         if ($masonryTarget.length > 0 && $hasMasonry) {
//                 // Destroy masonry if exists.
//                 $masonryTarget.masonry('destroy');
//                 alert(0);
//                 var $grid = $('.grid').masonry({
//                     itemSelector: '.grid-item',
//                     columnWidth: 280,
//                 });
//         }
//     } else {
//       // Enable all masonry instances.
//       alert(1);
//         var $grid = $('.grid').masonry({
//             itemSelector: '.grid-item',
//             columnWidth: 220,
//             gutter: 20
//         });
//     }
//   });