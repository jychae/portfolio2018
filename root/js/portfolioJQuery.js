/*!
 * all script in main page
 * created on 9 May 2018
 */
 <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
 <script src="js/bootstrap.js"></script>
 <!-- Jumbotron floating box begins -->
 <script src="js/jquery.plate.js"></script>
 <script>
       $('#plate-default').plate();
       $('#plate-inverse').plate({
           inverse: true
       });
       $('#plate-custom').plate({
           perspective: 200,
           maxRotation: 20,
           animationDuration: 100
       });
       $('#listener-contained').plate({
           element: '#plate-contained'
       });
       $('#listener-remote').plate({
           element: $('#plate-remote')
       });
   </script>
   <script type="text/javascript">
       var _gaq = _gaq || [];
       _gaq.push(['_setAccount', 'UA-36251023-1']);
       _gaq.push(['_setDomainName', 'jqueryscript.net']);
       _gaq.push(['_trackPageview']);

       (function() {
         var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
         ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
       })();
   </script>
   <!-- Jumbotron floating box begins -->
   <!-- Jumbotron animated text begins -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
   <script src="js/jumble.js"></script>
   <script>
     (function($) {
      $('.one h1').jumble([90,200,150],false,false,true);
      $('.two h1').jumble([255,220,100],false,true,false,1000);
      $('.three h1').jumble([190,180,110],[250,20,170],false,false,200);
      $('.four h1').jumble([100,180,220],false,true);
     })(jQuery);
     </script>
     <script type="text/javascript">

       var _gaq = _gaq || [];
       _gaq.push(['_setAccount', 'UA-36251023-1']);
       _gaq.push(['_setDomainName', 'jqueryscript.net']);
       _gaq.push(['_trackPageview']);

       (function() {
         var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
         ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
       })();
   </script>
   <!-- Jumbotron animated text ends -->
   <!-- Pinterest Layout begins -->
   <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT" crossorigin="anonymous"></script>
   <script src="js/dnWaterfall.js"></script>
   <script>
   $(".dnWaterfall").dnWaterfall();
   </script>
   </body>
   <script type="text/javascript">

     var _gaq = _gaq || [];
     _gaq.push(['_setAccount', 'UA-36251023-1']);
     _gaq.push(['_setDomainName', 'jqueryscript.net']);
     _gaq.push(['_trackPageview']);

     (function() {
       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
       ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
     })();

   </script>
   <!-- Pinterest Layout ends -->
   <!-- work image changing begins-->
   <!-- <script>
     $( document ).ready( function() {
       $("img")
         .mouseover( function() {
           $(this).attr( 'src', 'images/lotteryWebsite02.png' );
         } )
         .mouseout( function() {
           $(this).attr( 'src', 'images/lotteryWebsite01.png' );
         } );
     } );
   </script> -->
   <!-- work image changing ends-->
