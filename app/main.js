/**
 * Created by broven on 2016/10/15.
 */
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var widget = document.querySelectorAll('#canvas-menu >img')
for(var i = 0;i<widget.length;i++){
    widget[i].addEventListener('click',widgetClick)
}




function widgetClick(evt) {
    //生成新的widget
    var a = new InputWidget({
        src:this.src,
        width:"200",
        height:"200"
    });
    a.init();

}




var $save = document.querySelector('#save');
var $showJSON =document.querySelector('#showJSON');




//文件保存
$save.addEventListener('click',saveImage)
$showJSON.addEventListener('click',getWidgetTextContext)
/**
 * 获取json字符串
 */


function getWidgetTextContext() {
    var textJSON={};
  var textareas = document.querySelectorAll('.inputWidgetTextarea');
    for (var i = 0;i<textareas.length;i++){
        textJSON[i+1]=textareas[i].value;
    }
    console.log(textJSON); //舞台元素json
}
function saveImage() {
    /**
     * 保存成图片
     */
    html2canvas(document.querySelector('#canvasStage'), {
        onrendered: function(canvas) {
            Canvas2Image.saveAsImage(canvas, 600, 600, "png","文件名，不填则随机");    //可以指定文件名   see https://github.com/broven/canvas2image
            //getWidgetTextContext();
        }
    });
}


