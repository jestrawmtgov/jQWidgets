
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("ConditionalFormatter",class{constructor(a){const b=this;b.data=a||[],b._allowedDateComparators=["yesterday","today","tomorrow","last7Days","lastWeek","thisWeek","nextWeek","lastMonth","thisMonth","nextMonth","lastYear","thisYear","nextYear"],b._colorSchemes=[{name:"scheme01",colors:["#307DD7","#AA4643","#89A54E","#71588F","#4198AF"]},{name:"scheme02",colors:["#7FD13B","#EA157A","#FEB80A","#00ADDC","#738AC8"]},{name:"scheme03",colors:["#E8601A","#FF9639","#F5BD6A","#599994","#115D6E"]},{name:"scheme04",colors:["#D02841","#FF7C41","#FFC051","#5B5F4D","#364651"]},{name:"scheme05",colors:["#25A0DA","#309B46","#8EBC00","#FF7515","#FFAE00"]},{name:"scheme06",colors:["#0A3A4A","#196674","#33A6B2","#9AC836","#D0E64B"]},{name:"scheme07",colors:["#CC6B32","#FFAB48","#FFE7AD","#A7C9AE","#888A63"]},{name:"scheme08",colors:["#3F3943","#01A2A6","#29D9C2","#BDF271","#FFFFA6"]},{name:"scheme09",colors:["#1B2B32","#37646F","#A3ABAF","#E1E7E8","#B22E2F"]},{name:"scheme10",colors:["#5A4B53","#9C3C58","#DE2B5B","#D86A41","#D2A825"]},{name:"scheme11",colors:["#993144","#FFA257","#CCA56A","#ADA072","#949681"]},{name:"scheme12",colors:["#105B63","#EEEAC5","#FFD34E","#DB9E36","#BD4932"]},{name:"scheme13",colors:["#BBEBBC","#F0EE94","#F5C465","#FA7642","#FF1E54"]},{name:"scheme14",colors:["#60573E","#F2EEAC","#BFA575","#A63841","#BFB8A3"]},{name:"scheme15",colors:["#444546","#FFBB6E","#F28D00","#D94F00","#7F203B"]},{name:"scheme16",colors:["#583C39","#674E49","#948658","#F0E99A","#564E49"]},{name:"scheme17",colors:["#142D58","#447F6E","#E1B65B","#C8782A","#9E3E17"]},{name:"scheme18",colors:["#4D2B1F","#635D61","#7992A2","#97BFD5","#BFDCF5"]},{name:"scheme19",colors:["#844341","#D5CC92","#BBA146","#897B26","#55591C"]},{name:"scheme20",colors:["#56626B","#6C9380","#C0CA55","#F07C6C","#AD5472"]},{name:"scheme21",colors:["#96003A","#FF7347","#FFBC7B","#FF4154","#642223"]},{name:"scheme22",colors:["#5D7359","#E0D697","#D6AA5C","#8C5430","#661C0E"]},{name:"scheme23",colors:["#16193B","#35478C","#4E7AC7","#7FB2F0","#ADD5F7"]},{name:"scheme24",colors:["#7B1A25","#BF5322","#9DA860","#CEA457","#B67818"]},{name:"scheme25",colors:["#0081DA","#3AAFFF","#99C900","#FFEB3D","#309B46"]},{name:"scheme26",colors:["#0069A5","#0098EE","#7BD2F6","#FFB800","#FF6800"]},{name:"scheme27",colors:["#FF6800","#A0A700","#FF8D00","#678900","#0069A5"]},{name:"scheme28",colors:["#63BE7B","#FDD17F","#F8696B"]},{name:"scheme29",colors:["#F8696B","#FDD17F","#63BE7B"]},{name:"scheme30",colors:["#63BE7B","#FCFCFF","#F8696B"]},{name:"scheme31",colors:["#F8696B","#FCFCFF","#63BE7B"]},{name:"scheme32",colors:["#5A8AC6","#FCFCFF","#F8696B"]},{name:"scheme33",colors:["#F8696B","#FCFCFF","#5A8AC6"]},{name:"scheme34",colors:["#FCFCFF","#F8696B"]},{name:"scheme35",colors:["#F8696B","#FCFCFF"]},{name:"scheme36",colors:["#63BE7B","#FCFCFF"]},{name:"scheme37",colors:["#FCFCFF","#63BE7B"]},{name:"scheme38",colors:["#63BE7B","#FFEF9C"]},{name:"scheme39",colors:["#FFEF9C","#63BE7B"]},{name:"scheme40",colors:["#000000","#8b0000 ","#FFFF00","#FFFFFF"]},{name:"scheme41",colors:["#63BE7B","#FDD17F ","#F8696B","#FF69B4"]},{name:"scheme42",colors:["#63BE7B","#FDD17F ","#FDD17F","#F8696B"]},{name:"scheme00",colors:["#63BE7B","#FDD17F","#FDD17F","#FDD17F","#F8696B"]}]}format(a,b,c){const d=this,e=d.data;if(0!==e.length&&(a?d.condition=a:a=d.condition,!!a)){(void 0===d.comparator||null===d.comparator)&&(d.comparator=c),b?d.columns=b:b=d.columns,d.color&&(d.color=/^#[0-9A-F]{6}$/i.test(d.color)?d.color:void 0),b&&Array.isArray(b)&&(!Array.isArray(b)||0!==b.length)||(b=d.columns=[]);let a={};for(let f=0;f<b.length;f++){const c=b[f];null!==e[0][c]&&void 0!==e[0][c]&&(a[c]=d._validateColumnData(c))}return 0===Object.keys(a).length?void 0:a}}_applyColorScale(a){function b(a){let b=0;for(;b<m;){if(a<=l[b].max)return b;b++}return c(0,d(m-1,b))}var c=Math.max,d=Math.min;const e=this,f=a.length;if(0===f)return;const g=e.colorScheme===void 0?[e.color]:e._getSchemeColors();if(0===g.length||void 0===g[0]||null===g[0])return;let h,j,k={},l={};const m=g.length-("iconSet"===e.condition?0:1),i=e._getColumnRange(a),n=parseFloat(e.min)||i.min,o=c(n,parseFloat(e.max)||i.max);for(let b=0;b<m;b++)l[b]={min:l[b-1]?l[b-1].max:n,max:n+(o-n)*((b+1)/m)};0==m&&(l[0]={min:n,max:o});for(let p,q=0;q<f;q++)(p=a[q]instanceof Date?a[q].getTime():a[q],p=d(o,c(n,p)),"number"==typeof p)&&(h=b(p)||0,"iconSet"===e.condition?k[q]={"--icon-set":" ","--icon-set-color":g[h],"--icon-set-rotation-angle":e._getRotationAngle(h/(m-1)||0)+"deg"}:(j=1-((p-l[h].min)/(l[h].max-l[h].min)||0),k[q]=e._getCellStyle(e._mixColors(g[h],g[d(h+1,m)],j))));return k}_applyColorBar(a){const b=this,c=a.length,d=b._getColumnRange(a),e=b.min?parseFloat(b.min)||0:d.min,f=b.max?parseFloat(b.max)||0:d.max,g=b.colorScheme===void 0?[b.color]:b._getSchemeColors();let h,i="",j={};for(let b=0;b<g.length;b++)void 0!==g[b]&&null!==g[b]&&(i+=g[b]+",");if(!i)return void console.log("Invalid color/colorScheme detected.");i=i.slice(0,-1),h=1===g.length?g[0]:"-webkit-linear-gradient(left,"+i+")";for(let b,d=0;d<c;d++)(b=a[d]instanceof Date?a[d].getTime():a[d],b=Math.min(f,Math.max(e,a[d])),"number"==typeof b)&&(j[d]={"--color-bar":" ","--bar-width":(100*((b-e)/(f-e))||0)+"%","--bar-color":h});return j}_applyRule(a){function b(b){switch(e){case"between":{if(b instanceof Date&&(b=b.getTime()),b>=i&&b<=j)return b;break}case"contains":if(-1<(b+"").indexOf(f))return b;break;case"duplicate":{let c=0;for(let e=0;e<d;e++)if(a[e]===b&&c++,1<c)return b;break}case"dateOccur":{const a=c._getDateRange(b,f);if(!a)break;if(b=new Date(b),isNaN(b.getTime()))break;const d=b.getTime(),e=a.min.getTime(),g=a.max.getTime();if(d>=e&&d<=g)return b;break}case"doesNotContain":if(0>(b+"").indexOf(f))return b;break;case"equal":if("number"==typeof b&&b===parseFloat(f))return b;if("string"==typeof b&&0===b.localeCompare(f+""))return b;if("boolean"==typeof b&&b+""==f+"")return b;if(b instanceof Date&&b.getTime()===new Date(f).getTime())return b;break;case"greaterThan":if(b>parseFloat(f))return b;break;case"lessThan":if(b<parseFloat(f))return b;break;case"notEqual":if("number"==typeof b&&b!==parseFloat(f))return b;if("string"==typeof b&&0!==b.localeCompare(f+""))return b;if("boolean"==typeof b&&b+""!=f+"")return b;if(b instanceof Date&&b.getTime()!==new Date(f).getTime())return b;break;case"topNItems":case"bottomNItems":case"topNPercent":case"bottomNPercent":if(g||(g=a.slice(0).sort(0===e.indexOf("top")?(c,a)=>c<a?1:c>a?-1:0:(c,a)=>c>a?1:c<a?-1:0).slice(0,parseInt(0<e.indexOf("Percent")?d*f/100:f))),-1<g.indexOf(b))return b;break;case"aboveAverage":case"belowAverage":if(!h){let b=0;a.map(a=>b+=parseFloat(a)),h=b/d}if("aboveAverage"===e&&b>h)return b;if("belowAverage"===e&&b<h)return b;}return null}const c=this,d=a.length,e="string"==typeof c.condition?c.condition.trim():"";let f,g,h,i=parseFloat(c.min)||0,j=Math.max(i,parseFloat(c.max)||0);if(f="dateOccur"===e?"string"==typeof c.comparator&&-1<c._allowedDateComparators.indexOf(c.comparator.trim())?c.comparator.trim():void 0:Array.isArray(c.comparator)?c.comparator[0].trim():c.comparator,!a||0===a.length)return;if(0>["odd","even","duplicate","dateOccur","between","aboveAverage","belowAverage"].indexOf(e)&&0!==e.indexOf("everyN")&&(void 0===f||null===f))return console.warn(c.condition+" requires a comparator."),[];if("odd"===e||"even"===e||0===e.indexOf("everyN"))return c._getAlternateItems(a);let k,l=[];for(let c=0;c<d;c++)k=b(a[c],c),void 0!==k&&null!==k&&l.push(c);return l}_getAlternateItems(a){const b=this,c=a.length,d="string"==typeof b.condition?b.condition.trim():"",e=parseInt(b.min)||0,f=Math.max(e,parseInt(b.max)||c)-1,g=parseInt(b.comparator);let h=[],j=0;for(let b=0;b<=c;b++)if(!(b<e)){if(b>f)break;"even"===d&&0==(b+1)%2?h.push(b):"odd"===d&&0!=(b+1)%2?h.push(b):void 0!==g&&!isNaN(g)&&(j===g?(h.push(b),j=0):j++)}return h}_getColumnRange(a){const b=a.length;let c,d,e=0;for(let f=0;f<b;f++)d=a[f],d instanceof Date&&(d=d.getTime()),d>e&&(e=d),void 0===c&&(c=d),d<c&&(c=d);return{min:parseFloat(c)||0,max:parseFloat(e)||0}}_getCellStyle(a,b){var c=this._hexToRgba(a,b).toString(),d=this._getTextElementByColor(this._hexToRgba(a,.7));return{background:c,color:d,border:a}}_getDateRange(a,b){var c=Math.abs;const d=new Date(a);let e,f;if(d instanceof Date&&b){const a=new Date;switch(b){case"yesterday":case"today":case"tomorrow":{"yesterday"===b?f=new Date(a.getFullYear(),a.getMonth(),a.getDate()-1):"today"===b?(f=new Date,f.setHours(0,0,0,0)):f=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1),e=f;break}case"last7Days":f=new Date(a.getFullYear(),a.getMonth(),a.getDate()-6),e=new Date(a);break;case"lastWeek":case"thisWeek":case"nextWeek":f="lastWeek"===b?new Date(a.getFullYear(),a.getMonth(),a.getDate()-6-a.getDay()):"thisWeek"===b?new Date(a.getFullYear(),a.getMonth(),a.getDate()-c(1-a.getDay())):new Date(a.getFullYear(),a.getMonth(),a.getDate()+c(7-a.getDay())),e=new Date(f.getFullYear(),f.getMonth(),f.getDate()+6);break;case"lastMonth":case"thisMonth":case"nextMonth":"lastMonth"===b?(e=new Date(a.getFullYear(),a.getMonth(),0),f=new Date(e.getFullYear(),e.getMonth(),1)):"thisMonth"===b?(f=new Date(a.getFullYear(),a.getMonth(),1),e=new Date(a.getFullYear(),a.getMonth()+1,0)):(f=new Date(a.getFullYear(),a.getMonth()+1,1),e=new Date(a.getFullYear(),a.getMonth()+2,0));break;case"lastYear":case"thisYear":case"nextYear":"lastYear"===b?(f=new Date(a.getFullYear()-1,0,1),e=new Date(a.getFullYear()-1,12,0)):"thisYear"===b?(f=new Date(a.getFullYear(),0,1),e=new Date(a.getFullYear(),12,0)):(f=new Date(a.getFullYear()+1,0,1),e=new Date(a.getFullYear()+1,12,0));}return{min:f,max:e}}}_getRotationAngle(a){var b=Math.round;let c=a;return .25>a?c=b(a)?.25:0:.25<a&&.5>a?c=b(a)?.5:.25:.5<a&&.75>a?c=b(a)?.75:.5:.75<a&&1>a&&(c=b(a)?1:.75),180*c}_getSchemeColors(){const a=this;let b;if("string"==typeof a.colorScheme)b=0===a.colorScheme.indexOf("scheme")?a._colorSchemes.filter(b=>b.name===a.colorScheme)[0]:void 0;else if("number"==typeof a.colorScheme)b=a._colorSchemes[a.colorScheme]?a._colorSchemes[a.colorScheme]:void 0;else return[];return b="object"==typeof b?b.colors:a._colorSchemes[0].colors}_getTextElementByColor(a){return 125<=.299*a.r+.587*a.g+.114*a.b?"Black":"White"}_hexToRgba(a,b){const c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);var d=function(){return 1<this.alpha||void 0===this.alpha||null===this.alpha?this.alpha=1:0>this.alpha&&(this.alpha=0),"rgba("+this.r+", "+this.g+", "+this.b+", "+this.alpha+")"};return void 0===b?c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16),toString:d}:null:(1<b?b=1:0>b&&(b=0),c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16),alpha:b,toString:d}:null)}_mixColors(a,b,c){const d=a=>a.toString(16),e=a=>parseInt(a,16);let f,g="#";c="undefined"==typeof c?.5:c,a=a.replace(/#/g,""),b=b.replace(/#/g,"");for(let h=0;5>=h;h+=2){const i=e(a.substr(h,2)),j=e(b.substr(h,2));for(f=d(Math.floor(j+(i-j)*c));2>f.length;)f="0"+f;g+=f}return g}_shadeColor(a,b){var c=Math.round,d=parseInt(a.slice(1),16),e=0>b?0:255,f=0>b?-1*b:b,g=d>>16,h=255&d>>8,i=255&d;return"#"+(16777216+65536*(c((e-g)*f)+g)+256*(c((e-h)*f)+h)+(c((e-i)*f)+i)).toString(16).slice(1)}_validateColumnData(a){const b=this,c=[],e=b.data;let d,f={};for(let b=0;b<e.length;b++)c.push(e[b][a]);if("colorScale"===b.condition||"iconSet"===b.condition)return b._applyColorScale(c);if("colorBar"===b.condition)return b._applyColorBar(c);if(d=b._applyRule(c),!!d){if(!b.color)return void console.warn("No color is provided. \"color\" property is not set.");for(let a=0;a<d.length;a++)f[d[a]]=b._getCellStyle(b.color);return f}}});