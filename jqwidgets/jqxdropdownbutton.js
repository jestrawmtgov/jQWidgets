/*
jQWidgets v17.0.1 (2023-Oct)
Copyright (c) 2011-2023 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxDropDownButton","",{});a.extend(a.jqx._jqxDropDownButton.prototype,{defineInstance:function(){var b={disabled:false,width:null,height:null,arrowSize:17,enableHover:true,openDelay:250,closeDelay:300,animationType:"default",placeHolder:"",enableBrowserBoundsDetection:false,dropDownHorizontalAlignment:"left",dropDownVerticalAlignment:"bottom",popupZIndex:1500,dropDownContainer:"default",autoOpen:false,rtl:false,initContent:null,dropDownWidth:null,dropDownHeight:null,focusable:true,template:"default",touchMode:false,hint:true,aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["open","close","opening","closing"]};if(this===a.jqx._jqxDropDownButton.prototype){return b}a.extend(true,this,b);return b},createInstance:function(l){var i=this;if(!i.width){i.width=200}if(!i.height){i.height=25}i.isanimating=false;var c=a("<div style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropDownButtonWrapper' style='outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropDownButtonContent' unselectable='on' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'></div><div id='dropDownButtonArrow' unselectable='on'  style='background-color: transparent; border: none; float: right; position: relative;'><div unselectable='on'></div></div></div></div>");if(i.isMaterialized()){var o=window.getComputedStyle(this.element);var f=o.getPropertyValue("--jqx-dropdown-animation");var g=o.getPropertyValue("--jqx-action-button-size");if(g){this.arrowSize=parseInt(g)}else{this.arrowSize=25}if(f&&this.animationType=="default"){this.animationType=f.trim()}}if(i.host.attr("tabindex")){c.attr("tabindex",i.host.attr("tabindex"));i.host.removeAttr("tabindex")}else{c.attr("tabindex",0)}if(!i.focusable){c.removeAttr("tabIndex")}a.jqx.aria(this);i.popupContent=i.host.children();i.host.attr("role","button");i.host.addClass(i.toThemeProperty("jqx-dropdownbutton"));if(i.popupContent.length==0){i.popupContent=a("<div>"+i.host.text()+"</div>");i.popupContent.css("display","block");i.element.innerHTML=""}else{i.popupContent.detach()}var m=this;i.addHandler(i.host,"loadContent",function(e){m._arrange()});try{var h="dropDownButtonPopup"+i.element.id;var d=a(a.find("#"+h));if(d.length>0){d.remove()}a.jqx.aria(this,"aria-haspopup",true);a.jqx.aria(this,"aria-owns",h);var b=a("<div class='dropDownButton' style='overflow: hidden; left: -1000px; top: -1000px; position: absolute;' id='dropDownButtonPopup"+i.element.id+"'></div>");b.addClass(i.toThemeProperty("jqx-widget-content"));b.addClass(i.toThemeProperty("jqx-dropdownbutton-popup"));b.addClass(i.toThemeProperty("jqx-popup"));b.addClass(i.toThemeProperty("jqx-rc-all"));if(i.dropDownContainer!="element"){b.css("z-index",i.popupZIndex)}b.addClass(i.toThemeProperty("jqx-listbox-container"));if(a.jqx.browser.msie){b.addClass(i.toThemeProperty("jqx-noshadow"))}i.popupContent.appendTo(b);if(i.dropDownContainer=="element"){b.appendTo(i.host)}else{b.appendTo(document.body)}i.container=b;i.container.css("visibility","hidden")}catch(j){}i.touch=a.jqx.mobile.isTouchDevice();i.dropDownButtonStructure=c;i.host.append(c);i.dropDownButtonWrapper=i.host.find("#dropDownButtonWrapper");i.firstDiv=i.dropDownButtonWrapper.parent();i.dropDownButtonArrow=i.host.find("#dropDownButtonArrow");i.arrow=a(i.dropDownButtonArrow.children()[0]);i.dropDownButtonContent=i.host.find("#dropDownButtonContent");i.dropDownButtonContent.addClass(i.toThemeProperty("jqx-dropdownlist-content"));i.dropDownButtonWrapper.addClass(i.toThemeProperty("jqx-disableselect"));if(i.rtl){i.dropDownButtonContent.addClass(i.toThemeProperty("jqx-rtl"))}var p=this;if(i.host.parents()){i.addHandler(i.host.parents(),"scroll.dropdownbutton"+i.element.id,function(e){var q=p.isOpened();if(q){p.close()}})}i.addHandler(i.dropDownButtonWrapper,"selectstart",function(){return false});i.dropDownButtonWrapper[0].id="dropDownButtonWrapper"+i.element.id;i.dropDownButtonArrow[0].id="dropDownButtonArrow"+i.element.id;i.dropDownButtonContent[0].id="dropDownButtonContent"+i.element.id;var p=this;i.propertyChangeMap.disabled=function(e,r,q,s){if(s){e.host.addClass(p.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.addClass(p.toThemeProperty("jqx-fill-state-disabled"));e.dropDownButtonContent.addClass(p.toThemeProperty("jqx-dropdownlist-content-disabled"))}else{e.host.removeClass(p.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.removeClass(p.toThemeProperty("jqx-fill-state-disabled"));e.dropDownButtonContent.removeClass(p.toThemeProperty("jqx-dropdownlist-content-disabled"))}a.jqx.aria(e,"aria-disabled",e.disabled)};if(i.disabled){i.host.addClass(i.toThemeProperty("jqx-dropdownlist-state-disabled"));i.host.addClass(i.toThemeProperty("jqx-fill-state-disabled"));i.dropDownButtonContent.addClass(i.toThemeProperty("jqx-dropdownlist-content-disabled"))}var k=i.toThemeProperty("jqx-rc-all")+" "+i.toThemeProperty("jqx-fill-state-normal")+" "+i.toThemeProperty("jqx-widget")+" "+i.toThemeProperty("jqx-widget-content")+" "+i.toThemeProperty("jqx-dropdownlist-state-normal");i.host.addClass(k);i.arrow.addClass(i.toThemeProperty("jqx-icon-arrow-down"));i.arrow.addClass(i.toThemeProperty("jqx-icon"));if(i.template){i.host.addClass(i.toThemeProperty("jqx-"+i.template))}i._setSize();i.render();if(a.jqx.browser.msie&&a.jqx.browser.version<8){i.container.css("display","none");if(i.host.parents(".jqx-window").length>0){var n=i.host.parents(".jqx-window").css("z-index");b.css("z-index",n+10);i.container.css("z-index",n+10)}}},setContent:function(b){var c=this;c.dropDownButtonContent.children().remove();c.dropDownButtonContent[0].innerHTML="";c.dropDownButtonContent.append(b)},val:function(c){var b=this;if(arguments.length==0||typeof(c)=="object"){return b.dropDownButtonContent.text()}else{b.dropDownButtonContent.html(c)}},getContent:function(){var b=this;if(b.dropDownButtonContent.children().length>0){return b.dropDownButtonContent.children()}return b.dropDownButtonContent.text()},_setSize:function(){var e=this;var b=window.getComputedStyle(this.element);var c=parseInt(b.borderLeftWidth)*2;var g=b.boxSizing;if(g==="border-box"||isNaN(c)){c=0}if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.element.style.width=parseInt(this.width)-c+"px"}else{if(this.width!=undefined&&!isNaN(this.width)){this.element.style.width=parseInt(this.width)-c+"px"}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.element.style.height=parseInt(this.height)-c+"px"}else{if(this.height!=undefined&&!isNaN(this.height)){this.element.style.height=parseInt(this.height)-c+"px"}}var f=false;if(e.width!=null&&e.width.toString().indexOf("%")!=-1){f=true;e.host.width(e.width);if(c>0){this.host.css("box-sizing","border-box")}}if(e.height!=null&&e.height.toString().indexOf("%")!=-1){f=true;e.host.height(e.height)}var d=this;if(f){e.refresh(false)}a.jqx.utilities.resize(e.host,function(){d._arrange()})},isOpened:function(){var c=this;var b=a.data(document.body,"openedJQXButton"+c.element.id);if(b!=null&&b==c.popupContent){return true}return false},focus:function(){var c=this;try{c.host.focus()}catch(b){}},render:function(){var f=this;f.removeHandlers();var b=this;var d=false;if(!f.touch){f.addHandler(f.host,"mouseenter",function(){if(!b.disabled&&b.enableHover){d=true;b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-hover"));b.arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down-hover"));b.host.addClass(b.toThemeProperty("jqx-fill-state-hover"))}});f.addHandler(f.host,"mouseleave",function(){if(!b.disabled&&b.enableHover){b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-hover"));b.host.removeClass(b.toThemeProperty("jqx-fill-state-hover"));b.arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down-hover"));d=false}})}if(b.autoOpen){f.addHandler(f.host,"mouseenter",function(){var g=b.isOpened();if(!g&&b.autoOpen){b.open();b.host.focus()}});f.addHandler(a(document),"mousemove."+b.element.id,function(g){var n=b.isOpened();if(n&&b.autoOpen){var k=b.host.coord();var l=k.top;var j=k.left;var h=b.container.coord();var o=h.left;var m=h.top;var i=true;if(g.pageY>=l&&g.pageY<=l+b.host.height()){if(g.pageX>=j&&g.pageX<j+b.host.width()){i=false}}if(g.pageY>=m&&g.pageY<=m+b.container.height()){if(g.pageX>=o&&g.pageX<o+b.container.width()){i=false}}if(i){b.close()}}})}f.addHandler(f.dropDownButtonWrapper,"mousedown",function(h){if(!b.disabled){var g=b.container.css("visibility")=="visible";if(!b.isanimating){if(g){b.close();return false}else{b.open();if(!b.focusable){if(h.preventDefault){h.preventDefault()}}}}}});if(f.touch){f.addHandler(a(document),a.jqx.mobile.getTouchEventName("touchstart")+"."+f.element.id,b.closeOpenedDropDown,{me:this,popup:f.container,id:f.element.id})}f.addHandler(a(document),"mousedown."+f.element.id,b.closeOpenedDropDown,{me:this,popup:f.container,id:f.element.id});f.addHandler(f.host,"keydown",function(h){var g=b.container.css("visibility")=="visible";if(b.host.css("display")=="none"){return true}if(h.keyCode=="13"){if(!b.isanimating){if(g){b.close()}}}if(h.keyCode==115){if(!b.isanimating){if(!b.isOpened()){b.open()}else{if(b.isOpened()){b.close()}}}return false}if(h.altKey){if(b.host.css("display")=="block"){if(h.keyCode==38){if(b.isOpened()){b.close()}}else{if(h.keyCode==40){if(!b.isOpened()){b.open()}}}}}if(h.keyCode=="27"){if(!b.ishiding){b.close();if(b.tempSelectedIndex!=undefined){b.selectIndex(b.tempSelectedIndex)}}}});f.addHandler(f.firstDiv,"focus",function(){b.host.addClass(b.toThemeProperty("jqx-dropdownlist-state-focus"));b.host.addClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.bar){b.bar.addClass("focused");b.label.addClass("focused")}});f.addHandler(f.firstDiv,"blur",function(){b.host.removeClass(b.toThemeProperty("jqx-dropdownlist-state-focus"));b.host.removeClass(b.toThemeProperty("jqx-fill-state-focus"));if(b.bar){b.bar.removeClass("focused");b.label.removeClass("focused")}});var c=a("<label></label");if(this.hint){c[0].innerHTML=this.placeHolder}c.addClass(b.toThemeProperty("jqx-input-label"));b.dropDownButtonWrapper.append(c);b.label=c;var e=a("<span></span>");b.dropDownButtonWrapper.append(e);e.addClass(b.toThemeProperty("jqx-input-bar"));b.bar=e;b.bar.css("top",this.host.height());var f=this;if(f.template){f.bar.addClass(f.toThemeProperty("jqx-"+f.template));f.label.addClass(f.toThemeProperty("jqx-"+f.template))}},removeHandlers:function(){var c=this;var b=this;c.removeHandler(c.dropDownButtonWrapper,"mousedown");c.removeHandler(c.host,"keydown");c.removeHandler(c.firstDiv,"focus");c.removeHandler(c.firstDiv,"blur");c.removeHandler(c.host,"mouseenter");c.removeHandler(c.host,"mouseleave");if(c.autoOpen){c.removeHandler(c.host,"mouseenter");c.removeHandler(c.host,"mouseleave")}c.removeHandler(a(document),"mousemove."+b.element.id)},_findPos:function(c){while(c&&(c.type=="hidden"||c.nodeType!=1||a.expr.filters.hidden(c))){c=c.nextSibling}var b=a(c).coord(true);return[b.left,b.top]},testOffset:function(h,f,c){var j=this;var g=h.outerWidth();var k=h.outerHeight();var i=a(window).width()+a(window).scrollLeft();var e=a(window).height()+a(window).scrollTop();if(f.left+g>i){if(g>j.host.width()){var d=j.host.coord().left;var b=g-j.host.width();f.left=d-b+2}}if(f.left<0){f.left=parseInt(j.host.coord().left)+"px"}f.top-=Math.min(f.top,(f.top+k>e&&e>k)?Math.abs(k+c+22):0);return f},_getBodyOffset:function(){var c=0;var b=0;if(a("body").css("border-top-width")!="0px"){c=parseInt(a("body").css("border-top-width"));if(isNaN(c)){c=0}}if(a("body").css("border-left-width")!="0px"){b=parseInt(a("body").css("border-left-width"));if(isNaN(b)){b=0}}return{left:b,top:c}},open:function(){a.jqx.aria(this,"aria-expanded",true);var i=this;var o=this;if((i.dropDownWidth==null||i.dropDownWidth=="auto")&&i.width!=null&&i.width.indexOf&&i.width.indexOf("%")!=-1){var q=i.host.width();i.container.width(parseInt(q))}o._raiseEvent("2");var c=i.popupContent;var f=a(window).scrollTop();var g=a(window).scrollLeft();var m=parseInt(i._findPos(i.host[0])[1])+parseInt(i.host.outerHeight())-1+"px";var e,p=parseInt(Math.round(i.host.coord(true).left));e=p+"px";var u=false;i.ishiding=false;i.tempSelectedIndex=i.selectedIndex;if((u!=null&&u)){e=a.jqx.mobile.getLeftPos(i.element);m=a.jqx.mobile.getTopPos(i.element)+parseInt(i.host.outerHeight());if(a("body").css("border-top-width")!="0px"){m=parseInt(m)-i._getBodyOffset().top+"px"}if(a("body").css("border-left-width")!="0px"){e=parseInt(e)-i._getBodyOffset().left+"px"}}c.stop();i.host.addClass(i.toThemeProperty("jqx-dropdownlist-state-selected"));i.host.addClass(i.toThemeProperty("jqx-fill-state-pressed"));i.arrow.addClass(i.toThemeProperty("jqx-icon-arrow-down-selected"));var h=false;if(a.jqx.browser.msie&&a.jqx.browser.version<8){h=true}if(h){i.container.css("display","block")}i.container.css("left",e);i.container.css("top",m);var d=true;var b=false;var s=function(){if(i.dropDownHorizontalAlignment=="right"||i.rtl){var v=i.container.width();var t=Math.abs(v-i.host.width());if(v>i.host.width()){i.container.css("left",parseInt(Math.round(p))-t+"px")}else{i.container.css("left",parseInt(Math.round(p))+t+"px")}}};s.call(this);if(i.dropDownVerticalAlignment=="top"){var r=c.height();b=true;i.container.height(c.outerHeight());c.addClass(this.toThemeProperty("jqx-popup-up"));var l=parseInt(i.host.outerHeight());var k=parseInt(m)-Math.abs(r+l);if(i.interval){clearInterval(i.interval)}i.interval=setInterval(function(){if(c.outerHeight()!=i.container.height()){i.container.height(c.outerHeight());var v=parseInt(m)-Math.abs(c.height()+l);i.container.css("top",v)}},50);c.css("top",23);i.container.css("top",k)}if(i.enableBrowserBoundsDetection){var j=i.testOffset(c,{left:parseInt(i.container.css("left")),top:parseInt(m)},parseInt(i.host.outerHeight()));if(parseInt(i.container.css("top"))!=j.top){b=true;i.container.height(c.outerHeight());c.css("top",23);if(i.interval){clearInterval(i.interval)}i.interval=setInterval(function(){if(c.outerHeight()!=o.container.height()){var t=o.testOffset(c,{left:parseInt(i.container.css("left")),top:parseInt(m)},parseInt(i.host.outerHeight()));i.container.css("top",t.top);i.container.height(c.outerHeight())}},50)}else{c.css("top",0)}i.container.css("top",j.top);if(parseInt(i.container.css("left"))!=j.left){i.container.css("left",j.left)}}if(i.animationType=="none"){i.container.css("visibility","visible");a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+i.element.id,c);c.css("margin-top",0);c.css("opacity",1);i._raiseEvent("0");s.call(o)}else{if(i.animationType==="transform"){i.container.css("visibility","visible");i.container.css("display","block");a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+i.element.id,c);c.css("margin-top",0);c.css("opacity",1);i._raiseEvent("0");s.call(o)}else{i.container.css("visibility","visible");var n=c.outerHeight();o.isanimating=true;if(i.animationType=="fade"){c.css("margin-top",0);c.css("opacity",0);c.animate({opacity:1},i.openDelay,function(){a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+o.element.id,c);o.ishiding=false;o.isanimating=false;o._raiseEvent("0")});s.call(o)}else{c.css("opacity",1);if(b){c.css("margin-top",n)}else{c.css("margin-top",-n)}s.call(o);if(b){c.animate({"margin-top":0},i.openDelay,function(){a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+o.element.id,c);o.ishiding=false;o.isanimating=false;o._raiseEvent("0")})}else{c.animate({"margin-top":0},i.openDelay,function(){a.data(document.body,"openedJQXButtonParent",o);a.data(document.body,"openedJQXButton"+o.element.id,c);o.ishiding=false;o.isanimating=false;o._raiseEvent("0")})}}}}if(!b){i.host.addClass(i.toThemeProperty("jqx-rc-b-expanded"));i.container.addClass(i.toThemeProperty("jqx-rc-t-expanded"))}else{i.host.addClass(i.toThemeProperty("jqx-rc-t-expanded"));i.container.addClass(i.toThemeProperty("jqx-rc-b-expanded"))}if(i.focusable){i.firstDiv.focus();setTimeout(function(){o.firstDiv.focus()},10)}i.container.addClass(i.toThemeProperty("jqx-fill-state-focus"));i.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-focus"));i.host.addClass(o.toThemeProperty("jqx-fill-state-focus"));i.container.addClass("jqx-popup-show")},close:function(){a.jqx.aria(this,"aria-expanded",false);var g=this;var e=g.popupContent;var d=g.container;var f=this;f._raiseEvent("3");var c=false;if(a.jqx.browser.msie&&a.jqx.browser.version<8){c=true}if(!g.isOpened()){return}d.removeClass("jqx-popup-show");a.data(document.body,"openedJQXButton"+g.element.id,null);if(g.animationType=="none"){g.container.css("visibility","hidden");if(c){g.container.css("display","none")}e.css({opacity:0})}else{if(g.animationType==="transform"){setTimeout(function(){f.isanimating=false;g.container.css("visibility","hidden");g.container.css("display","none")},this.closeDelay)}else{if(!f.ishiding){f.isanimating=true;e.stop();var b=e.outerHeight();e.css("margin-top",0);var h=-b;if(parseInt(g.container.coord().top)<parseInt(g.host.coord().top)){h=b}if(g.animationType=="fade"){e.css({opacity:1});e.animate({opacity:0},g.closeDelay,function(){d.css("visibility","hidden");f.isanimating=false;f.ishiding=false;if(c){d.css("display","none")}})}else{e.animate({"margin-top":h},g.closeDelay,function(){d.css("visibility","hidden");f.isanimating=false;f.ishiding=false;if(c){d.css("display","none")}})}}}}g.ishiding=true;g.host.removeClass(g.toThemeProperty("jqx-dropdownlist-state-selected"));g.host.removeClass(g.toThemeProperty("jqx-fill-state-pressed"));g.arrow.removeClass(g.toThemeProperty("jqx-icon-arrow-down-selected"));g.host.removeClass(g.toThemeProperty("jqx-rc-b-expanded"));g.container.removeClass(g.toThemeProperty("jqx-rc-t-expanded"));g.host.removeClass(g.toThemeProperty("jqx-rc-t-expanded"));g.container.removeClass(g.toThemeProperty("jqx-rc-b-expanded"));g.container.removeClass(g.toThemeProperty("jqx-fill-state-focus"));g.host.removeClass(g.toThemeProperty("jqx-dropdownlist-state-focus"));g.host.removeClass(g.toThemeProperty("jqx-fill-state-focus"));g._raiseEvent("1")},closeOpenedDropDown:function(e){var c=e.data.me;var b=a(e.target);if(a(e.target).ischildof(e.data.me.host)){return true}if(a(e.target).ischildof(e.data.me.popupContent)){return true}var f=c;var d=false;a.each(b.parents(),function(){if(this.className!="undefined"){if(this.className.indexOf&&this.className.indexOf("dropDownButton")!=-1){d=true;return false}if(this.className.indexOf&&this.className.indexOf("jqx-popup")!=-1){d=true;return false}}});if(!d){c.close()}return true},refresh:function(){var b=this;b._arrange()},_arrange:function(){var g=this;var f=parseInt(g.host.width());var b=parseInt(g.host.height());var e=g.arrowSize;var d=g.arrowSize;var h=3;var c=f-d-2*h;if(c>0){g.dropDownButtonContent[0].style.width=c+"px"}g.dropDownButtonContent[0].style.height=parseInt(b)+"px";g.dropDownButtonContent[0].style.left="0px";g.dropDownButtonContent[0].style.top="0px";g.dropDownButtonArrow[0].style.width=parseInt(d)+"px";g.dropDownButtonArrow[0].style.height=parseInt(b)+"px";if(g.rtl){g.dropDownButtonArrow.css("float","left");g.dropDownButtonContent.css("float","right");g.dropDownButtonContent.css("left",-h)}if(g.dropDownWidth!=null){if(g.dropDownWidth.toString().indexOf("%")>=0){var f=(parseInt(g.dropDownWidth)*g.host.width())/100;g.container.width(f)}else{g.container.width(g.dropDownWidth)}}if(g.dropDownHeight!=null){g.container.height(g.dropDownHeight)}},destroy:function(){a.jqx.utilities.resize(this.host,null,true);var b=this;if(b.interval){clearInterval(b.interval)}b.removeHandler(b.dropDownButtonWrapper,"selectstart");b.removeHandler(b.dropDownButtonWrapper,"mousedown");b.removeHandler(b.host,"keydown");b.host.removeClass();b.removeHandler(a(document),"mousedown."+b.element.id,b.closeOpenedDropDown);b.host.remove();b.container.remove()},_raiseEvent:function(h,c){var g=this;if(c==undefined){c={owner:null}}if(h==2&&!g.contentInitialized){if(g.initContent){g.initContent();g.contentInitialized=true}}var d=g.events[h];var e=c;e.owner=this;var f=new a.Event(d);f.owner=this;if(h==2||h==3||h==4){f.args=c}var b=g.host.trigger(f);return b},resize:function(c,b){var d=this;d.width=c;d.height=b;d._setSize();d._arrange()},propertiesChangedHandler:function(b,c,d){if(d.width&&d.height&&Object.keys(d).length==2){b._setSize();b._arrange();b.close()}},propertyChangedHandler:function(b,c,f,e){var d=this;if(d.isInitialized==undefined||d.isInitialized==false){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c==="dropDownVerticalAlignment"){b.close()}if(c=="template"){b.host.removeClass(b.toThemeProperty("jqx-"+f+""));b.host.addClass(b.toThemeProperty("jqx-"+b.template+""))}if(c=="rtl"){if(e){b.dropDownButtonArrow.css("float","left");b.dropDownButtonContent.css("float","right")}else{b.dropDownButtonArrow.css("float","right");b.dropDownButtonContent.css("float","left")}}if(c=="autoOpen"){b.render()}if(c=="theme"&&e!=null){a.jqx.utilities.setTheme(f,e,b.host)}if(c=="width"||c=="height"){b._setSize();b._arrange()}}})})(jqxBaseFramework);

