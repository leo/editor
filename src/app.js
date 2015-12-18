(function(){

  window.addEventListener( 'load', () => {
    if( document.contentEditable != undefined && document.execCommand != undefined ) {
      alert( 'Get me HTML5!' );
    } else {
      document.execCommand( 'styleWithCSS', false, true );
    }
  }, false);

  var underlineButton = document.querySelector( 'a[href="#underline"]' );

  underlineButton.addEventListener( 'click', (event) => {
    document.execCommand( 'underline', false, null );
    event.preventDefault();
  });

})();
