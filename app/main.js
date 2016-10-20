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
var $upLoadImage =document.querySelector('#uploadImage');


//文件保存
$save.addEventListener('click',saveImage);
$showJSON.addEventListener('click',getWidgetTextContext);
$upLoadImage.addEventListener('change',getUpLoadImage);
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
    html2canvas(document.querySelector('#canvasContainer'), {
        onrendered: function(canvas) {
            if(imageWidth != 0&&imageHeight != 0) {
                Canvas2Image.saveAsImage(canvas,imageWidth, imageHeight,  "png");
            }else{
                alert("请先上传图片！")
            }

        }
    });
}
/**
 * 显示上传图片，获得上传图片的大小
 */
var imageHeight=0,imageWidth=0;
function getUpLoadImage(e){
    console.log("触发");
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload=function(e){
        // var img = document.createElement('img');
        // img.src=e.target.result;
        document.querySelector('#userImage>img').src = e.target.result;
        var image = new Image();
        image.onload = function (e) {
            //图片真实的高度
            imageWidth = image.width;
            imageHeight = image.height;
            // setContainerSize(imageWidth,imageHeight);

        };
        image.src = e.target.result;

    };
    reader.readAsDataURL(file);


    // for (var i = 0, f; f = e.target.files[i]; i++) {
    //     if (f.type.indexOf("image") !== 0) continue;
    //     var reader = new FileReader();
    //     reader.onload = function(e) {
    //         //var $userImage = document.querySelector('#userImage');
    //         var img = document.createElement('img');
    //         img.src = e.target.result;
    //         getImageSize(e);
    //         document.querySelector('#userImage').appendChild(img);
    //     };
    //     reader.readAsDataURL(f);
    // }
    // function getImageSize(e) {
    //     var image = new Image();
    //     image.onload=function(){
    //         var width = image.width;
    //         var height = image.height;
    //         alert(width+'======'+height+"====="+f.size);
    //     };
    //     image.src= e.target.result;
    // }
}
//为了设置大小
var $canvasContainer = document.querySelector('#canvasContainer');
var $userImage = document.querySelector('#userImage');
var $canvasStage = document.querySelector('#canvasStage');

function setContainerSize(imageWidth,imageHeight){


}



