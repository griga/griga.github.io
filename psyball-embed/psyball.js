(function(){

  var DEBUG = true
  
  var rootUrl = "https://psyball.com/"



  var renderStyles = function(){
    var sheet = (function() {
      // Create the <style> tag
      var style = document.createElement("style");
    
      // Add a media (and/or media query) here if you'd like!
      // style.setAttribute("media", "screen")
      // style.setAttribute("media", "only screen and (max-width : 1024px)")
    
      // WebKit hack :(
      style.appendChild(document.createTextNode(""));
    
      // Add the <style> element to the page
      document.head.appendChild(style);
    
      return style.sheet;
    })();

    sheet.insertRule([
      ".psyball-embed-button {" ,
        "padding: .7rem 1rem;",
        "font-size: 1rem;",
        "line-height: 1.4rem;",
        "background: #FFA800;",
        "color: #3B3E44!important;",
        "-webkit-border-radius: 5rem;",
        "border-radius: 5rem;",
        "text-align: center;",
        "max-width: 15rem;",
        "display: inline-block;",
        "-webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);",
        "box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);",
        "transition: all .2s ease-out;",
      "}"
    ].join(''), 0);
    sheet.insertRule([
      ".psyball-embed-button:hover {",
        "text-decoration: none;",
        "cursor: pointer;",
        "-webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);",
        "box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);",
      "}"
    ].join(''), 1);
    
    renderStyles.triggeredOnce = true
  }


  var psyballEmbedWidgetsProcess = function(){

    
    DEBUG && console.log('psyballEmbedWidgetsProcess run')
    
    if(!renderStyles.triggeredOnce){
      renderStyles()
    }

    var buttons = document.getElementsByTagName('psyball-button')
    
    for (var i = buttons.length; i--; ) {
      var referenceNode = buttons[i]
      var newNode = document.createElement('A')

      // company id
      if(!referenceNode.hasAttribute('company')){
        throw new Error('<psyball-button> requires `company` attribute to be set')
      }
      var company = referenceNode.getAttribute('company')

      // button mode
      var mode
      var modes = ['company', 'venue']
      if(!referenceNode.hasAttribute('mode')){
        mode = 'company'
      } else {
        mode = referenceNode.getAttribute('mode')
        if(modes.indexOf(mode) == -1){
          throw new Error('<psyball-button> `mode` attribute set wrong. Allowed values are: ' 
           + modes.map(function(it){return '`' + it +'`'}).join(', '))
        }
      }


      //active resource
      var resourcePart = referenceNode.hasAttribute('resource') ?
      '#~resource:' + referenceNode.getAttribute('resource') +'~' : ''

      // button url
      var target = rootUrl + mode + '/' + company + resourcePart
      newNode.setAttribute('href', target)

      // button classes
      var classes = ['psyball-embed-button']
      newNode.className = classes.join(' ')

      // button text
      var text = referenceNode.getAttribute('text') || 'Booking'
      newNode.innerText = text

      
      // button target
      newNode.setAttribute('target', '_blank')


      if(!(referenceNode.nextSibling && 
          referenceNode.nextSibling.className && 
          referenceNode.nextSibling.className.search(/psyball-embed-button/)>-1)){

        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
    }

    psyballEmbedWidgetsProcess.triggeredOnce = true
  }

  if(!window.psyballEmbedWidgetsProcess){
    window.psyballEmbedWidgetsProcess = psyballEmbedWidgetsProcess
  }

  
  document.addEventListener("DOMContentLoaded", function(){
    DEBUG && console.log('DOMContentLoaded')

    if(!psyballEmbedWidgetsProcess.triggeredOnce){
      psyballEmbedWidgetsProcess()
    }
  });
 
})()