/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// Equal Height function
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
}
/*function setEqualHeight(columns)
{
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  columns.each(
    function()
    {
      $currentHeight = $(this).height();
      if($currentHeight > $tallestcolumn)
      {
        $tallestcolumn = $currentHeight;
      }
    }
    );
  columns.height($tallestcolumn);
}
*/

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

var colorArray = ["red", "blue", "green", "orange", "yellow"]; 
var i = 0; 
 
function changeColor(){
    document.getElementsByClassName(".content__box").style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    };
};
