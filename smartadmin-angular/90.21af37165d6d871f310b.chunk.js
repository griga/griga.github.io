webpackJsonp([90,93],{YmeI:function(t,e,o){var i,r;/*!
 * Bootstrap Colorpicker v2.5.1
 * https://itsjavi.com/bootstrap-colorpicker/
 *
 * Originally written by (c) 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 *
 */
!function(s,a){i=[o("7t+N")],void 0!==(r=function(t){return a(t)}.apply(e,i))&&(t.exports=r)}(0,function(t){"use strict";var e=function(o,i,r,s,a){this.fallbackValue=r?r&&void 0!==r.h?r:this.value={h:0,s:0,b:0,a:1}:null,this.fallbackFormat=s||"rgba",this.hexNumberSignPrefix=!0===a,this.value=this.fallbackValue,this.origFormat=null,this.predefinedColors=i||{},this.colors=t.extend({},e.webColors,this.predefinedColors),o&&(void 0!==o.h?this.value=o:this.setColor(String(o))),this.value||(this.value={h:0,s:0,b:0,a:1})};e.webColors={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",transparent:"transparent"},e.prototype={constructor:e,colors:{},predefinedColors:{},getValue:function(){return this.value},setValue:function(t){this.value=t},_sanitizeNumber:function(t){return"number"==typeof t?t:isNaN(t)||null===t||""===t||void 0===t?1:""===t?0:void 0!==t.toLowerCase?(t.match(/^\./)&&(t="0"+t),Math.ceil(100*parseFloat(t))/100):1},isTransparent:function(t){return!(!t||!("string"==typeof t||t instanceof String))&&("transparent"===(t=t.toLowerCase().trim())||t.match(/#?00000000/)||t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))},rgbaIsTransparent:function(t){return 0===t.r&&0===t.g&&0===t.b&&0===t.a},setColor:function(t){if(t=t.toLowerCase().trim()){if(this.isTransparent(t))return this.value={h:0,s:0,b:0,a:0},!0;var e=this.parse(t);e?(this.value=this.value={h:e.h,s:e.s,b:e.b,a:e.a},this.origFormat||(this.origFormat=e.format)):this.fallbackValue&&(this.value=this.fallbackValue)}return!1},setHue:function(t){this.value.h=1-t},setSaturation:function(t){this.value.s=t},setBrightness:function(t){this.value.b=1-t},setAlpha:function(t){this.value.a=Math.round(parseInt(100*(1-t),10)/100*100)/100},toRGB:function(t,e,o,i){0===arguments.length&&(t=this.value.h,e=this.value.s,o=this.value.b,i=this.value.a),t*=360;var r,s,a,n,l;return t=t%360/60,l=o*e,n=l*(1-Math.abs(t%2-1)),r=s=a=o-l,t=~~t,r+=[l,n,0,0,n,l][t],s+=[n,l,l,n,0,0][t],a+=[0,0,n,l,l,n][t],{r:Math.round(255*r),g:Math.round(255*s),b:Math.round(255*a),a:i}},toHex:function(t,e,o,i){0===arguments.length&&(t=this.value.h,e=this.value.s,o=this.value.b,i=this.value.a);var r=this.toRGB(t,e,o,i);return this.rgbaIsTransparent(r)?"transparent":(this.hexNumberSignPrefix?"#":"")+((1<<24)+(parseInt(r.r)<<16)+(parseInt(r.g)<<8)+parseInt(r.b)).toString(16).slice(1)},toHSL:function(t,e,o,i){0===arguments.length&&(t=this.value.h,e=this.value.s,o=this.value.b,i=this.value.a);var r=t,s=(2-e)*o,a=e*o;return a/=s>0&&s<=1?s:2-s,s/=2,a>1&&(a=1),{h:isNaN(r)?0:r,s:isNaN(a)?0:a,l:isNaN(s)?0:s,a:isNaN(i)?0:i}},toAlias:function(t,e,o,i){var r,s=0===arguments.length?this.toHex():this.toHex(t,e,o,i),a="alias"===this.origFormat?s:this.toString(this.origFormat,!1);for(var n in this.colors)if((r=this.colors[n].toLowerCase().trim())===s||r===a)return n;return!1},RGBtoHSB:function(t,e,o,i){t/=255,e/=255,o/=255;var r,s,a,n;return a=Math.max(t,e,o),n=a-Math.min(t,e,o),r=0===n?null:a===t?(e-o)/n:a===e?(o-t)/n+2:(t-e)/n+4,r=(r+360)%6*60/360,s=0===n?0:n/a,{h:this._sanitizeNumber(r),s:s,b:a,a:this._sanitizeNumber(i)}},HueToRGB:function(t,e,o){return o<0?o+=1:o>1&&(o-=1),6*o<1?t+(e-t)*o*6:2*o<1?e:3*o<2?t+(e-t)*(2/3-o)*6:t},HSLtoRGB:function(t,e,o,i){e<0&&(e=0);var r;r=o<=.5?o*(1+e):o+e-o*e;var s=2*o-r,a=t+1/3,n=t,l=t-1/3;return[Math.round(255*this.HueToRGB(s,r,a)),Math.round(255*this.HueToRGB(s,r,n)),Math.round(255*this.HueToRGB(s,r,l)),this._sanitizeNumber(i)]},parse:function(e){if(0===arguments.length)return!1;var o,i,r=this,s=!1,a=void 0!==this.colors[e];return a&&(e=this.colors[e].toLowerCase().trim()),t.each(this.stringParsers,function(t,n){var l=n.re.exec(e);return!(o=l&&n.parse.apply(r,[l]))||(s={},i=a?"alias":n.format?n.format:r.getValidFallbackFormat(),s=i.match(/hsla?/)?r.RGBtoHSB.apply(r,r.HSLtoRGB.apply(r,o)):r.RGBtoHSB.apply(r,o),s instanceof Object&&(s.format=i),!1)}),s},getValidFallbackFormat:function(){var t=["rgba","rgb","hex","hsla","hsl"];return this.origFormat&&-1!==t.indexOf(this.origFormat)?this.origFormat:this.fallbackFormat&&-1!==t.indexOf(this.fallbackFormat)?this.fallbackFormat:"rgba"},toString:function(t,o){t=t||this.origFormat||this.fallbackFormat,o=o||!1;var i=!1;switch(t){case"rgb":return i=this.toRGB(),this.rgbaIsTransparent(i)?"transparent":"rgb("+i.r+","+i.g+","+i.b+")";case"rgba":return i=this.toRGB(),"rgba("+i.r+","+i.g+","+i.b+","+i.a+")";case"hsl":return i=this.toHSL(),"hsl("+Math.round(360*i.h)+","+Math.round(100*i.s)+"%,"+Math.round(100*i.l)+"%)";case"hsla":return i=this.toHSL(),"hsla("+Math.round(360*i.h)+","+Math.round(100*i.s)+"%,"+Math.round(100*i.l)+"%,"+i.a+")";case"hex":return this.toHex();case"alias":return i=this.toAlias(),!1===i?this.toString(this.getValidFallbackFormat()):o&&!(i in e.webColors)&&i in this.predefinedColors?this.predefinedColors[i]:i;default:return i}},stringParsers:[{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(t){return[t[1],t[2],t[3],1]}},{re:/rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(t){return[t[1]/360,t[2]/100,t[3]/100,t[4]]}},{re:/hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(t){return[t[1]/360,t[2]/100,t[3]/100,t[4]]}},{re:/#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),1]}},{re:/#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),1]}}],colorNameToHex:function(t){return void 0!==this.colors[t.toLowerCase()]&&this.colors[t.toLowerCase()]}};var o={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",fallbackColor:!1,fallbackFormat:"hex",hexNumberSignPrefix:!0,sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',align:"right",customClass:null,colorSelectors:null},i=function(e,i){this.element=t(e).addClass("colorpicker-element"),this.options=t.extend(!0,{},o,this.element.data(),i),this.component=this.options.component,this.component=!1!==this.component&&this.element.find(this.component),this.component&&0===this.component.length&&(this.component=!1),this.container=!0===this.options.container?this.element:this.options.container,this.container=!1!==this.container&&t(this.container),this.input=this.element.is("input")?this.element:!!this.options.input&&this.element.find(this.options.input),this.input&&0===this.input.length&&(this.input=!1),this.color=this.createColor(!1!==this.options.color?this.options.color:this.getValue()),this.format=!1!==this.options.format?this.options.format:this.color.origFormat,!1!==this.options.color&&(this.updateInput(this.color),this.updateData(this.color));var r=this.picker=t(this.options.template);if(this.options.customClass&&r.addClass(this.options.customClass),this.options.inline?r.addClass("colorpicker-inline colorpicker-visible"):r.addClass("colorpicker-hidden"),this.options.horizontal&&r.addClass("colorpicker-horizontal"),-1===["rgba","hsla","alias"].indexOf(this.format)&&!1!==this.options.format&&"transparent"!==this.getValue()||r.addClass("colorpicker-with-alpha"),"right"===this.options.align&&r.addClass("colorpicker-right"),!0===this.options.inline&&r.addClass("colorpicker-no-arrow"),this.options.colorSelectors){var s=this,a=s.picker.find(".colorpicker-selectors");a.length>0&&(t.each(this.options.colorSelectors,function(e,o){var i=t("<i />").addClass("colorpicker-selectors-color").css("background-color",o).data("class",e).data("alias",e);i.on("mousedown.colorpicker touchstart.colorpicker",function(e){e.preventDefault(),s.setValue("alias"===s.format?t(this).data("alias"):t(this).css("background-color"))}),a.append(i)}),a.show().addClass("colorpicker-visible"))}r.on("mousedown.colorpicker touchstart.colorpicker",t.proxy(function(t){t.target===t.currentTarget&&t.preventDefault()},this)),r.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker",t.proxy(this.mousedown,this)),r.appendTo(this.container?this.container:t("body")),!1!==this.input&&(this.input.on({"keyup.colorpicker":t.proxy(this.keyup,this)}),this.input.on({"change.colorpicker":t.proxy(this.change,this)}),!1===this.component&&this.element.on({"focus.colorpicker":t.proxy(this.show,this)}),!1===this.options.inline&&this.element.on({"focusout.colorpicker":t.proxy(this.hide,this)})),!1!==this.component&&this.component.on({"click.colorpicker":t.proxy(this.show,this)}),!1===this.input&&!1===this.component&&this.element.on({"click.colorpicker":t.proxy(this.show,this)}),!1!==this.input&&!1!==this.component&&"color"===this.input.attr("type")&&this.input.on({"click.colorpicker":t.proxy(this.show,this),"focus.colorpicker":t.proxy(this.show,this)}),this.update(),t(t.proxy(function(){this.element.trigger("create")},this))};i.Color=e,i.prototype={constructor:i,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker","color").off(".colorpicker"),!1!==this.input&&this.input.off(".colorpicker"),!1!==this.component&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(!1!==this.options.inline||this.options.container)return!1;var t=this.container&&this.container[0]!==window.document.body?"position":"offset",e=this.component||this.element,o=e[t]();"right"===this.options.align&&(o.left-=this.picker.outerWidth()-e.outerWidth()),this.picker.css({top:o.top+e.outerHeight(),left:o.left})},show:function(e){this.isDisabled()||(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),t(window).on("resize.colorpicker",t.proxy(this.reposition,this)),!e||this.hasInput()&&"color"!==this.input.attr("type")||e.stopPropagation&&e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!this.component&&this.input||!1!==this.options.inline||t(window.document).on({"mousedown.colorpicker":t.proxy(this.hide,this)}),this.element.trigger({type:"showPicker",color:this.color}))},hide:function(e){if(void 0!==e&&e.target&&(t(e.currentTarget).parents(".colorpicker").length>0||t(e.target).parents(".colorpicker").length>0))return!1;this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),t(window).off("resize.colorpicker",this.reposition),t(window.document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(t){return t=t||this.color.toString(this.format,!1),this.element.data("color",t),t},updateInput:function(t){return t=t||this.color.toString(this.format,!1),!1!==this.input&&(this.input.prop("value",t),this.input.trigger("change")),t},updatePicker:function(t){void 0!==t&&(this.color=this.createColor(t));var e=!1===this.options.horizontal?this.options.sliders:this.options.slidersHorz,o=this.picker.find("i");if(0!==o.length)return!1===this.options.horizontal?(e=this.options.sliders,o.eq(1).css("top",e.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",e.alpha.maxTop*(1-this.color.value.a))):(e=this.options.slidersHorz,o.eq(1).css("left",e.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",e.alpha.maxLeft*(1-this.color.value.a))),o.eq(0).css({top:e.saturation.maxTop-this.color.value.b*e.saturation.maxTop,left:this.color.value.s*e.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",(this.options.hexNumberSignPrefix?"":"#")+this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",(this.options.hexNumberSignPrefix?"":"#")+this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format,!0)),t},updateComponent:function(t){var e;if(e=void 0!==t?this.createColor(t):this.color,!1!==this.component){var o=this.component.find("i").eq(0);o.length>0?o.css({backgroundColor:e.toString(this.format,!0)}):this.component.css({backgroundColor:e.toString(this.format,!0)})}return e.toString(this.format,!1)},update:function(t){var e;return!1===this.getValue(!1)&&!0!==t||(e=this.updateComponent(),this.updateInput(e),this.updateData(e),this.updatePicker()),e},setValue:function(t){this.color=this.createColor(t),this.update(!0),this.element.trigger({type:"changeColor",color:this.color,value:t})},createColor:function(t){return new e(t||null,this.options.colorSelectors,this.options.fallbackColor?this.options.fallbackColor:this.color,this.options.fallbackFormat,this.options.hexNumberSignPrefix)},getValue:function(t){t=void 0===t?this.options.fallbackColor:t;var e;return e=this.hasInput()?this.input.val():this.element.data("color"),void 0!==e&&""!==e&&null!==e||(e=t),e},hasInput:function(){return!1!==this.input},isDisabled:function(){return!!this.hasInput()&&!0===this.input.prop("disabled")},disable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!0),this.element.trigger({type:"disable",color:this.color,value:this.getValue()}),!0)},enable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!1),this.element.trigger({type:"enable",color:this.color,value:this.getValue()}),!0)},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(e){!e.pageX&&!e.pageY&&e.originalEvent&&e.originalEvent.touches&&(e.pageX=e.originalEvent.touches[0].pageX,e.pageY=e.originalEvent.touches[0].pageY),e.stopPropagation(),e.preventDefault();var o=t(e.target),i=o.closest("div"),r=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!i.is(".colorpicker")){if(i.is(".colorpicker-saturation"))this.currentSlider=t.extend({},r.saturation);else if(i.is(".colorpicker-hue"))this.currentSlider=t.extend({},r.hue);else{if(!i.is(".colorpicker-alpha"))return!1;this.currentSlider=t.extend({},r.alpha)}var s=i.offset();this.currentSlider.guide=i.find("i")[0].style,this.currentSlider.left=e.pageX-s.left,this.currentSlider.top=e.pageY-s.top,this.mousePointer={left:e.pageX,top:e.pageY},t(window.document).on({"mousemove.colorpicker":t.proxy(this.mousemove,this),"touchmove.colorpicker":t.proxy(this.mousemove,this),"mouseup.colorpicker":t.proxy(this.mouseup,this),"touchend.colorpicker":t.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(t){!t.pageX&&!t.pageY&&t.originalEvent&&t.originalEvent.touches&&(t.pageX=t.originalEvent.touches[0].pageX,t.pageY=t.originalEvent.touches[0].pageY),t.stopPropagation(),t.preventDefault();var e=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((t.pageX||this.mousePointer.left)-this.mousePointer.left))),o=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((t.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=e+"px",this.currentSlider.guide.top=o+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,e/this.currentSlider.maxLeft),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,o/this.currentSlider.maxTop),!1!==this.options.format||"setAlpha"!==this.currentSlider.callTop&&"setAlpha"!==this.currentSlider.callLeft||(1!==this.color.value.a?(this.format="rgba",this.color.origFormat="rgba"):(this.format="hex",this.color.origFormat="hex")),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(e){return e.stopPropagation(),e.preventDefault(),t(window.document).off({"mousemove.colorpicker":this.mousemove,"touchmove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup,"touchend.colorpicker":this.mouseup}),!1},change:function(t){this.keyup(t)},keyup:function(t){38===t.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===t.keyCode?(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)):(this.color=this.createColor(this.input.val()),this.color.origFormat&&!1===this.options.format&&(this.format=this.color.origFormat),!1!==this.getValue(!1)&&(this.updateData(),this.updateComponent(),this.updatePicker())),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})}},t.colorpicker=i,t.fn.colorpicker=function(e){var o=Array.prototype.slice.call(arguments,1),r=1===this.length,s=null,a=this.each(function(){var r=t(this),a=r.data("colorpicker"),n="object"==typeof e?e:{};a||(a=new i(this,n),r.data("colorpicker",a)),"string"==typeof e?t.isFunction(a[e])?s=a[e].apply(a,o):(o.length&&(a[e]=o[0]),s=a[e]):s=r});return r?s:a},t.fn.colorpicker.constructor=i})}});