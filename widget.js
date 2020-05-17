//we create class
class Widget {
	constructor(id, color) {
  	this.id = id;
    this.color = color;
  }
  //inject css width jQuery
  //we detect browser because width chrome and firefox is different comportment
  widgetCSS () {
    window.addEventListener("load", function() {
      // CHROME
      //width chrome I place widget on the left
      if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        console.log("Google Chrome");
        $('#widget-social').css({
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          zIndex: '1001',
          left: '0',
          top: '25%',
        });
        
      }
      // FIREFOX
      //width firefox I place widget on the right
      else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        console.log("Mozilla Firefox");
        $('#widget-social').css({
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          zIndex: '1001',
          right: '0',
          top: '25%',
        });
      }
      // INTERNET EXPLORER
      else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        console.log("Internet Exploder");
      }
      // EDGE
      else if (navigator.userAgent.indexOf("Edge") != -1 ) {
        console.log("Internet Exploder");
        //edge it like that chrome propriety 
      }
      // SAFARI
      else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        console.log("Safari");
      }
      // OPERA
      else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        console.log("Opera");
      }
  	
    $('.link-social').css({
      width: '100%',
      height: '4em',
      textDecoration: 'none',
      display: 'inline-flex',
      justifyContent: 'end'
  });
    $('.icon-social').css({
        width: '5em',
        height: '4em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000'
    });
    $('.icon-social i').css({
        fontSize: '3em'
    });
    $('.label-social').css({
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        width: '0%',
        background: '#fff',
        boxShadow: '4px 5px 15px #1a1a1a',
        color: '#333',
        fontWeight: 'bolder',
        zIndex: '400',
        transition: 'width 500ms',
    });	
    
      
  });
  }//END widgetCSS

  action (id, color) {
  	let that = $(this);
    //color background
    $(`#${id} .icon-social`).css({
    	background: color,
      color: '#fff',
    });
    
    $(`#${id}`).mouseover(e => {
      e.preventDefault();
      $(`#${id} .label-social`).css({
        display: 'flex',
        width: '100%'
      });
      if (navigator.userAgent.indexOf("Chrome") != -1 ) {
         $(`#${id} .label-social`).css({
          width: 'auto',
          padding: '1em'
        });
      }
    })

    $(`#${id}`).mouseout(e => {
      e.preventDefault();
      $(`#${id} .label-social`).css({
         width: '0'
      });
      if (navigator.userAgent.indexOf("Chrome") != -1 ) {
         $(`#${id} .label-social`).css({
          width: '0',
          padding: '0',
          display: 'none'
        });
      }
    })
  }//END action
}//END Widget class

//we declar Widget constructor
const Social = new Widget();

//we inject CSS
const apparence = Social.widgetCSS();

//we create element width id and color
const twitter = Social.action('twitter', 'red');
const facebook = Social.action('facebook', 'blue');
const instagram = Social.action('instagram', 'yellow');
const twitch = Social.action('twitch', 'violet');


    
