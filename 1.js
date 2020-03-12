$(document).ready(function () {
   console.log($('.mota').text()) 

   console.log( $('.nut').text());

   $('.anh').click(function (e) { 
       e.preventDefault();

       $('.mota').text('đây là nội dung đã thay đổi');

   });

   $('.ip').val('1 2 3');

   $('.nut').click(function (e) { 
       e.preventDefault();
       console.log($('.ip').val());
   });

 
  console.log( $('.anh').attr('src'));
$('.anh').click(function (e) { 
    e.preventDefault();
    
   $('.anh').attr('src','2.jpg');

});

$('.mota').click(function (e) { 
    e.preventDefault();
    $('.khoito').append('<h3 class="tieude">Đây là tiêu đề mới</h3>');

    $('<h1 class="tieude">Đây là tiêu đề mới</h1>').insertAfter('.anh');

});
$('.mota').click(function (e) { 
    e.preventDefault();
    $('.anh').remove();
});
    $('.nut').click(function (e) { 
        e.preventDefault();
        $('.khoito').prepend($('.ip').clone(true));
    });
  
   $('.ip').click(function (e) { 
       e.preventDefault();
       console.log('Đang click vào input đấy');
       
   });



    
});