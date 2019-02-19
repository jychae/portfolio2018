<!-- Onepage scrolling begins -->

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage','lastPage'],
    menu: '#menu',
    scrollingSpeed: 1000
  });

});

<!-- Onepage scrolling ends -->

<!-- Jumbotron floating box begins -->

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

<!-- Jumbotron floating box begins -->

<!-- Jumbotron animated text begins -->

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

<!-- Jumbotron animated text ends -->


<!-- Pinterest Layout begins -->

$('.wall').jaliswall({item:'.wall-item'});

<!-- Pinterest Layout ends -->
