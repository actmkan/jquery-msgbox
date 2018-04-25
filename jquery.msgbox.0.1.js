
(function ( $ ) {
  var call = null;
  $.msg = function (options) {

    if(typeof options==='string'){
      options = {content : options}
    }

    defaultOptions = $.extend({
      title : '알림!',
      content : '',
      type : 'basic',
      call : function () {},
      okBtn : true,
      cancelBtn : false
    },options);

    call = defaultOptions.call;

    $("<div class='farmAlert'>\n" +
      "  <div class='overlay'></div>\n" +
      "  <div class='box'>\n" +
      "    <div class='boxHeader'>\n" +
      "      <span class='boxHeaderTitle'></span>\n" +
      "      <span class='close boxClose'>X</span>\n" +
      "    </div>\n" +
      "    <div class='boxBody'>\n" +
      "      <div class='msg'></div>\n" +
      "    </div>\n" +
      "    <div class='boxFooter'>\n" +
      "      <div class='button'>\n" +
      "        <a href='#' class='cancel boxClose'>취소</a>\n" +
      "        <a href='#' class='ok'>확인</a>\n" +
      "      </div>\n" +
      "    </div>\n" +
      "  </div>\n" +
      "</div>").appendTo("body");

    $('.farmAlert .boxHeaderTitle').text(defaultOptions.title);
    $('.farmAlert .msg').text(defaultOptions.content);
    $('.farmAlert .box').addClass(defaultOptions.type);

    if(defaultOptions.okBtn===false){
      $('.farmAlert .ok').remove();
    }
    if(defaultOptions.cancelBtn===false){
      $('.farmAlert .cancel').remove();
    }
  }

  $(document).on('click', '.farmAlert .ok', function () {
    call();
    $('.farmAlert').remove();
  })

  $(document).on('click', '.farmAlert .boxClose', function () {
    $('.farmAlert').remove();
  })
}( jQuery ));
