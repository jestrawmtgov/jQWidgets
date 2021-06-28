/*
jQWidgets v12.1.2 (2021-July)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxHeatMap","",{});a.extend(a.jqx._jqxHeatMap.prototype,{defineInstance:function(){var b={width:"auto",xAxis:{labels:[],opposedPosition:false,isInversed:false,minimum:null,maximum:null,labelFormat:"short",},yAxis:{labels:[],opposedPosition:false,isInversed:false,},source:[],title:"Title",paletteSettings:{palette:[{value:0,color:"#5dc3f0",label:""},{value:50,color:"#4bb1de",label:""},{value:100,color:"#3885a6",label:""}],type:"Gradient",emptyPointColor:"#eee"},legendSettings:{position:"Right"},tooltipRender:null,_isXAxisInversed:false,_isYAxisInversed:false,};if(this===a.jqx._jqxHeatMap.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;if("NodeList" in window&&!NodeList.prototype.forEach){console.info("polyfill for IE11");NodeList.prototype.forEach=function(e,c){c=c||window;for(var d=0;d<this.length;d++){e.call(c,this[d],d,this)}}}b._setDefaultValues();b._renderAllElements();b._addHandlers()},_addHandlers:function(){var b=this;b.host.find(".jqx-heatmap-cell").on("mouseenter",function(c){var e=c.target;var d=e.getAttribute("data-value");if(b.legendSettings.position==="Top"||b.legendSettings.position==="Bottom"){b._showLegendArrow("horizontal",d)}else{b._showLegendArrow("vertical",d)}if(b._hideTimer){clearTimeout(b._hideTimer)}b._showTooltip(c.target);e.classList.toggle("jqx-opacity-50")});b.host.find(".jqx-heatmap-cell").on("mouseleave",function(){var d=event.target;var c;b._arrow.style.display="";d.classList.toggle("jqx-opacity-50");c=setTimeout(function(){b._tooltipContainer.classList.add("jqx-heatmap-hidden")},300);b._hideTimer=c});b.host.find(".jqx-color-container, .jqx-color-container-tick").on("click",function(){var c=a(this).attr("data-value");var d=a(this).attr("data-color-index");b._hideCells(d);b._toggleClass("jqx-color-container","jqx-selected-color",c);b._toggleClass("jqx-color-container-tick","jqx-opacity-50",c)})},_setDefaultValues:function(){var e=this;var d=Object.keys(e.xAxis);var b=Object.keys(e.yAxis);var c=Object.keys(e.legendSettings);var f=Object.keys(e.paletteSettings);if(d.indexOf("labels")===-1){e.xAxis.labels=[]}if(d.indexOf("opposedPosition")===-1){e.xAxis.opposedPosition=false}if(d.indexOf("isInversed")===-1){e.xAxis.isInversed=false}if(b.indexOf("opposedPosition")===-1){e.yAxis.opposedPosition=false}if(b.indexOf("isInversed")===-1){e.yAxis.isInversed=false}if(c.indexOf("position")===-1){e.legendSettings.position="Right"}if(f.indexOf("type")===-1){e.paletteSettings.type="Gradient"}if(f.indexOf("palette")===-1){e.paletteSettings.palette=[{value:0,color:"#5dc3f0",label:""},{value:50,color:"#4bb1de",label:""},{value:100,color:"#3885a6",label:""}]}if(f.indexOf("emptyPointColor")===-1){e.paletteSettings.emptyPointColor="#eee"}},_showTooltip:function(l){var i=this;var d=document.createElement("div");var p=l.getAttribute("data-value");var e=l.getAttribute("data-date");var g=l.getAttribute("data-column");var f=i.xAxis.labels[g];var c=l.getAttribute("data-row");var n=i.yAxis.labels[c];var k=f+" | "+n+" : "+p;var o=l.offsetWidth;var j=10;var h;var q;var b;if(!i._tooltipContainer){i._tooltipContainer=d}i.element.appendChild(i._tooltipContainer);i._tooltipContainer.classList.remove("jqx-heatmap-hidden");i._tooltipContainer.className="jqx-heatmap-tooltip";if(i.tooltipRender){if(i.xAxis.minimum&&i.xAxis.maximum){var m={xLabel:f,yLabel:n,value:p,date:e,content:k}}else{var m={xLabel:f,yLabel:n,value:p,content:k}}i.tooltipRender(m);k=m.content}if(i.xAxis.minimum&&i.xAxis.maximum){i._tooltipContainer.innerHTML=p+" on "+i._defaultDateTooltipFormat(new Date(e))}else{i._tooltipContainer.innerHTML=k}h=i._tooltipContainer.offsetWidth;q=i._tooltipContainer.offsetHeight;b=h-o;i._tooltipContainer.style.top=(l.offsetTop-q+j)+"px";if(b>0){i._tooltipContainer.style.left=(l.offsetLeft-b/2)+"px"}else{i._tooltipContainer.style.left=(l.offsetLeft+Math.abs(b)/2)+"px"}},_defaultDateTooltipFormat:function(c){var b={day:"numeric",weekday:"short",month:"short",year:"numeric"};var d=new Intl.DateTimeFormat("en-US",b);return d.format(c)},_getAllDates:function(){var d=this;var g=new Date(d.xAxis.minimum);var i=new Date(d.xAxis.maximum);var h=d.source[0].length;var f=[];var e=[];for(var c=g,b=0;c<=i;c.setDate(c.getDate()+1),b++){if(b<h){e.push(c.toISOString());continue}f.push(e);d._addMonthLabel(e);e=[];b=0;e.push(c.toISOString())}d._dateArray=f},_addMonthLabel:function(f){var e=this;var c={month:e.xAxis.labelFormat};var d=new Intl.DateTimeFormat("en-US",c);var b=new Date(f[0]);var g=d.format(b);e.xAxis.labels.push(g)},_renderGrid:function(){var g=this;var b=document.createElement("div");var e=document.createElement("div");var l=document.createElement("div");var f=document.createElement("div");b.className="jqx-heatmap-grid";e.className="jqx-x-axis-container";l.className="jqx-y-axis-container";f.className="jqx-heatmap-container-wrapper";g._setAxisOrigin();for(var d=0,c=g.source.length;d<c;d++){var k=document.createElement("div");var h=g.source[d];g._setGridColumn(k,d,c);for(var m=0,i=h.length;m<i;m++){var j=document.createElement("div");g._setGridCell(j,d,m,h);k.appendChild(j)}b.appendChild(k)}f.style.width=g._toPx(g.width);e.appendChild(b);l.appendChild(e);f.appendChild(l);g._gridXAxisContainer=e;g._gridYAxisContainer=l;g._gridContainerWrapper=f;g.element.appendChild(f)},_renderAxis:function(d,h,k,m){var f=this;var j=document.createElement("div");var c=f.element.querySelector(".jqx-heatmap-grid").offsetHeight;for(var g=0,b=h.length;g<b;g++){var n=h[g];var e=document.createElement("div");e.innerHTML=n;e.className=m;if(d==="x"){e.style.width="calc(100% /"+b+")";if(f.xAxis.minimum&&f.xAxis.maximum){var l=f.source.length;var i=(n.duplicates/l)*100;e.innerHTML=n.name;e.style.width=i+"%";if(f.xAxis.isInversed){e.style.textAlign="right"}else{e.style.textAlign="left"}}}else{j.style.height=c+"px";e.style.height="calc(100% /"+b+")"}j.appendChild(e)}if(d==="x"){j.className=k;f._gridXAxisContainer.appendChild(j)}else{j.className=k;f._gridYAxisContainer.appendChild(j)}},_getLabels:function(b){var d=this;var e={};var f=[];var c=0;b.forEach(function(h,g){if(h===b[g+1]){c++}else{c++;e={name:h,duplicates:c};f.push(e);c=0}});d.xAxis.labels=f},_renderAllAxis:function(){var d=this;var c;var e;var b;if(d.xAxis.minimum&&d.xAxis.maximum){d._getLabels(d.xAxis.labels)}d._renderAxis("x",d.xAxis.labels,"jqx-x-axis","jqx-x-axis-label");d._renderAxis("y",d.yAxis.labels,"jqx-y-axis","jqx-y-axis-label");b=d.element.querySelector(".jqx-y-axis");c=d.element.querySelectorAll(".jqx-x-axis-label");e=d.element.querySelectorAll(".jqx-y-axis-label");if(d.xAxis.opposedPosition){d._gridXAxisContainer.style.flexDirection="column-reverse";b.classList.add("jqx-margin-top-auto");c.forEach(function(f){f.classList.add("jqx-top")})}if(d.yAxis.opposedPosition){d._gridYAxisContainer.style.flexDirection="row";e.forEach(function(f){f.classList.add("jqx-right")})}},_setGridColumn:function(d,c,b){d.id="jqx-column-"+c;d.classList.add("jqx-column");d.style.width="calc(100% / "+b+")"},_setGridCell:function(b,c,e,h){var i=this;var n=h[e];b.classList.add("jqx-heatmap-cell");b.setAttribute("data-row",e);b.setAttribute("data-column",c);b.setAttribute("data-value",n);if(i.xAxis.minimum&&i.xAxis.maximum){b.setAttribute("data-date",i._dateArray[c][e])}for(var j=0,d=i.paletteSettings.palette.length;j<d;j++){if(n===null){continue}var m=Number(n);var f=i.paletteSettings.palette[j].value;var g=Number(f);var l=null;var k=null;if(j+1<d){l=i.paletteSettings.palette[j+1].value;k=Number(l)}if(k&&((m>=g&&m<k)||m<i._minValue)){b.setAttribute("data-color-index",j);break}else{if(!k&&(m>=g)){b.setAttribute("data-color-index",j)}}}if(i.xAxis.minimum&&i.xAxis.maximum){if(n===null){b.classList.add("jqx-empty-cell")}return}if(n===null){b.innerHTML="&nbsp";b.classList.add("jqx-empty-cell");return}b.innerHTML=n},_getTicksMinMax:function(){var h=this;var f=JSON.parse(JSON.stringify(h.paletteSettings.palette));var j=f[0].value;var g=f[0].value;var d=[];for(var i=0,e=f.length;i<e;i++){var c=f[i].value;var b=f[i].label||"";d.push({value:c,label:b});if(c<j){j=c;continue}if(c>g){g=c;continue}}h._minValue=j;h._maxValue=g;h._ticksArray=d},_renderTitle:function(){var c=this;var b=document.createElement("div");b.className="jqx-heatmap-title";b.innerHTML=c.title;b.style.width=c._toPx(c.width);c._title=b;c.element.appendChild(b)},_renderLegend:function(b){var e=this;var d=document.createElement("div");var c=e.paletteSettings.type==="Gradient"?document.createElement("canvas"):document.createElement("div");var f=document.createElement("div");d.classList.add("jqx-legend-"+b);c.classList.add("jqx-palette-"+b);f.classList.add("jqx-arrow-"+b);e._drawLegend(d,c,b);d.appendChild(c);d.appendChild(f);e._gridContainerWrapper.appendChild(d);e._arrow=f;e._palette=c;e._legend=d;e._adjustLegend(b)},_drawLegend:function(c,e,b){var d=this;if(b==="vertical"){if(d.xAxis.opposedPosition===true){c.classList.add("jqx-margin-top-auto")}if(d.paletteSettings.type==="Gradient"){d._drawGradientLegend(e,"vertical")}else{d._drawFixedLegend(e,"vertical")}if(d.legendSettings.position==="Left"){c.classList.add("jqx-left")}d._gridXAxisContainer.width="calc(100% - "+c.offsetWidth+"px)"}else{if(d.paletteSettings.type==="Gradient"){d._drawGradientLegend(e,"horizontal")}else{d._drawFixedLegend(e,"horizontal")}if(d.legendSettings.position==="Bottom"){c.classList.add("jqx-bottom")}if(d.yAxis.opposedPosition===true){c.classList.add("jqx-margin-right-auto")}}},_drawFixedLegend:function(e,f){var h=this;var d=JSON.parse(JSON.stringify(h.paletteSettings.palette));var j=h.element.querySelector(".jqx-heatmap-grid").offsetWidth;var b=h.element.querySelector(".jqx-heatmap-grid").offsetHeight;if(f==="horizontal"){e.classList.add("jqx-fixed")}for(var i=0,c=d.length;i<c;i++){var g=d[i];var k=document.createElement("div");var l=((j/c)/j)*100;k.id="jqx-color-container-"+i;k.className="jqx-color-container";k.setAttribute("data-value",g.value);k.setAttribute("data-color-index",i);k.setAttribute("data-color",g.color);k.style.background=g.color;if(f==="vertical"){k.style.width="10px";k.style.height="calc("+b+"px / "+c+")"}else{k.style.width=l+"%";k.style.height="10px"}e.appendChild(k)}},_drawGradientLegend:function(e,f){var h=this;var d=JSON.parse(JSON.stringify(h.paletteSettings.palette));var b=e.getContext("2d");if(f==="vertical"){var k=b.createLinearGradient(0,0,0,150)}else{var k=b.createLinearGradient(0,0,300,0)}if(h.paletteSettings.type==="Gradient"){h._checkNewMinMax()}for(var i=0,c=d.length;i<c;i++){var g=d[i];var j=((g.value-h._minValue)/(h._maxValue-h._minValue));k.addColorStop(j,g.color)}b.fillStyle=k;b.fillRect(0,0,300,150);h._canvasContext=b},_getSourceMinMax:function(){var g=this;var e=g.source[0][0];var b=g.source[0][0];for(var d=0,f=g.source.length;d<f;d++){for(var h=0,i=g.source[d].length;h<i;h++){var c=g.source[d][h];if(c===null){continue}if(e>c){e=c;continue}if(b<c){b=c;continue}}}return{min:e,max:b}},_checkNewMinMax:function(){var c=this;var b=JSON.parse(JSON.stringify(c.paletteSettings.palette));var d=c._getSourceMinMax();if(c._minValue>d.min){c._minValue=d.min;b.splice(0,0,{value:d.min,color:b[0].color})}if(c._maxValue<d.max){c._maxValue=d.max;b.push({value:d.max,color:b[b.length-1].color})}},_adjustLegend:function(b){var c=this;if(b==="vertical"){c._setVerticalLegendHeight();c._renderScale("vertical")}else{c._setHorizontalLegendWidth();c._renderScale("horizontal")}},_renderScale:function(b){var g=this;for(var d=0,f=g._ticksArray.length;d<f;d++){var c=g._ticksArray[d].value;var h=g._ticksArray[d].label;var e=document.createElement("div");if(g.paletteSettings.type==="Fixed"){e.classList.add("jqx-color-container-tick")}e.classList.add("jqx-tick","jqx-tick-"+b);e.setAttribute("data-value",c);e.setAttribute("data-color-index",d);e.innerHTML=h||c;g._setLegendTicksPosition(e,c,d,b);g._legend.appendChild(e)}if(b==="vertical"){g._tick=e;g._setVerticalLegendWidth()}},_setLegendTicksPosition:function(f,g,c,h){var i=this;var n="6px";if(i.paletteSettings.type==="Gradient"){if(g===i._minValue||g===i._maxValue){if(g===i._minValue){if(h==="vertical"){f.style.top="-0.5%"}else{f.style.left="-3px"}}else{if(h==="vertical"){f.style.top="96%"}else{f.style.right="-11px"}}f.classList.add("jqx-no-line")}else{var k=((g-i._minValue)/(i._maxValue-i._minValue))*100;if(h==="vertical"){f.style.top="calc("+k+"% - "+n+")"}else{f.style.left="calc("+k+"% - "+n+")"}}}else{var b=i.element.querySelector(".jqx-color-container").offsetHeight;var d=i.element.querySelector(".jqx-color-container").offsetWidth;var m=5;if(h==="vertical"){if(c===0){f.style.top=c*b+"px"}else{f.style.top=c*b-m+"px"}}else{if(c===0){f.style.left=c*d+"px"}else{var e=i.paletteSettings.palette.length;var j=i.element.querySelector(".jqx-heatmap-grid").offsetWidth;var l=((j/e)/j)*100;f.style.left="calc("+l*c+"% - "+m+"px)"}}f.classList.add("jqx-no-line")}},_showLegendArrow:function(b,f){var e=this;var d="6px";var c=((f-e._minValue)/(e._maxValue-e._minValue))*100;if(e.paletteSettings.type==="Gradient"&&f<=e._maxValue){e._arrow.style.display="block";if(b==="vertical"){e._arrow.style.top="calc("+c+"% - "+d+")"}else{e._arrow.style.left="calc("+c+"% - "+d+")"}}},_setVerticalLegendWidth:function(){var b=this;var d=15;var c=15;b._legend.style.width=d+b._tick.offsetWidth+"px";b._gridXAxisContainer.style.width="calc(100% - "+(b._legend.offsetWidth+c)+"px)"},_setVerticalLegendHeight:function(){var c=this;var b=c.element.querySelector(".jqx-heatmap-grid").offsetHeight;c._legend.style.height=b+"px"},_setHorizontalLegendWidth:function(){var c=this;var b=c.element.querySelector(".jqx-y-axis").offsetWidth;c._legend.style.width="calc(100% - "+b+"px)"},_hideCells:function(g){var f=this;var d=f.element.querySelectorAll('.jqx-heatmap-cell[data-color-index="'+g+'"]');for(var c=0,e=d.length;c<e;c++){var b=d[c];b.classList.toggle("jqx-heatmap-hidden")}},_toggleClass:function(j,i,h){var e=this;var g=e.element.querySelectorAll("."+j);for(var f=0,c=g.length;f<c;f++){var d=g[f];var b=d.getAttribute("data-value");if(h===b){d.classList.toggle(i);return}}},_toPx:function(b){if(typeof b==="number"){return b+"px"}else{return b}},_getLegendColor:function(i,e){var f=this;var d=149;var b=299;var g=((i-f._minValue)/(f._maxValue-f._minValue))*d;var h=((i-f._minValue)/(f._maxValue-f._minValue))*b;var j=null;var c=null;if(i>f._maxValue||i<f._minValue){return}if(e==="vertical"){j=f._canvasContext.getImageData(0,g,1,1).data}else{j=f._canvasContext.getImageData(h,0,1,1).data}c="rgba("+j[0]+", "+j[1]+", "+j[2]+", "+(j[3]/255)+")";return c},_getFixedLegendColor:function(h){var g=this;var e=JSON.parse(JSON.stringify(g.paletteSettings.palette));for(var d=0,f=e.length;d<f;d++){var b=e[d];var c=e[d+1];if(c&&((h>=b.value&&h<c.value)||h<g._minValue)){return b.color}else{if(!c&&h>=b.value){return b.color}}}},_setCellsBackground:function(c){var h=this;var f=h.element.querySelectorAll(".jqx-heatmap-cell");for(var e=0,g=f.length;e<g;e++){var b=f[e];var i=f[e].getAttribute("data-value");if(i==="null"){b.style.background=h.paletteSettings.emptyPointColor}else{if(h.paletteSettings.type==="Gradient"){var d=h._getLegendColor(i,c)}else{var d=h._getFixedLegendColor(i)}b.style.background=d}}},_renderLegendPosition:function(){var b=this;switch(b.legendSettings.position){default:case"Right":b._gridContainerWrapper.style.flexDirection="row";b._renderLegend("vertical");b._setCellsBackground("vertical");break;case"Left":b._gridContainerWrapper.style.flexDirection="row-reverse";b._renderLegend("vertical");b._setCellsBackground("vertical");break;case"Top":b._gridContainerWrapper.style.flexDirection="column-reverse";b._renderLegend("horizontal");b._setCellsBackground("horizontal");break;case"Bottom":b._gridContainerWrapper.style.flexDirection="column";b._renderLegend("horizontal");b._setCellsBackground("horizontal");break}},_reverseXAxisOrigin:function(){var b=this;b.xAxis.labels.reverse();b.source.reverse();b._isXAxisInversed=!b._isXAxisInversed;if(b.xAxis.minimum&&b.xAxis.maximum){b._dateArray.reverse()}},_reverseYAxisOrigin:function(){var b=this;b.yAxis.labels.reverse();b._isYAxisInversed=!b._isYAxisInversed;b._reverseNestedArray(b.source);if(b.xAxis.minimum&&b.xAxis.maximum){b._reverseNestedArray(b._dateArray)}},_reverseNestedArray:function(e){for(var b=0,d=e.length;b<d;b++){var c=e[b];c.reverse()}},_setAxisOrigin:function(){var b=this;if(b.xAxis.isInversed!==b._isXAxisInversed){b._reverseXAxisOrigin()}if(b.yAxis.isInversed!==b._isYAxisInversed){b._reverseYAxisOrigin()}},_destroyGrid:function(){var b=this;a(b._gridContainerWrapper).remove();if(b.xAxis.minimum&&b.xAxis.maximum){b.xAxis.labels=[]}},_destroyTitle:function(){var b=this;a(b._title).remove()},_renderAllElements:function(){var b=this;b._renderTitle();b._getTicksMinMax();if(b.xAxis.minimum&&b.xAxis.maximum){b._getAllDates()}b._renderGrid();b._renderAllAxis();b._renderLegendPosition()},_rerender:function(){var b=this;b._destroyTitle();b._destroyGrid();b._renderAllElements();b._addHandlers()},setLegendPosition:function(b){var c=this;if(c.legendSettings.position!==b){c.legendSettings.position=b;c._rerender()}},setOpposedXAxisPosition:function(c){var b=this;if(b.xAxis.opposedPosition!==c){b.xAxis.opposedPosition=c;b._rerender()}},setOpposedYAxisPosition:function(c){var b=this;if(b.yAxis.opposedPosition!==c){b.yAxis.opposedPosition=c;b._rerender()}},reverseXAxisPosition:function(c){var b=this;b.xAxis.isInversed=c;b._rerender()},reverseYAxisPosition:function(c){var b=this;b.yAxis.isInversed=c;b._rerender()},setPaletteType:function(b){var c=this;c.paletteSettings.type=b;c._rerender()},destroy:function(){var b=this;b.host.remove()}})})(jqxBaseFramework);

