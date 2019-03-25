console.log($);

$(function()
{
  // Footer position absolute on authentcate view
  let screenWidth = window.screen.width;
  let MIN_WIDTH = 767;
  let pathnameExpected = "/authentication_login_gateway/";

  let fixeFooter = function(){
    let currentPath = window.location.pathname;
    if( currentPath.toLowerCase() === pathnameExpected )
    {
      if( screenWidth > MIN_WIDTH  )
      {
        if( !($( "footer" ).hasClass( "fixebottom" ))  )
        {
          $( "footer" ).addClass( "fixebottom" );
        }
      }
      else {
        $( "footer" ).removeClass( "fixebottom" );
      }
    }
  }
  fixeFooter( )
  $( window ).resize( e =>
  {
    screenWidth = $( window ).width();
    fixeFooter( )
  })



});
