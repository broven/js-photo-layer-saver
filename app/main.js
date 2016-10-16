/**
 * Created by broven on 2016/10/15.
 */


var widget = document.querySelectorAll('#canvas-menu >img')
for(var i = 0;i<widget.length;i++){
    widget[i].addEventListener('click',widgetClick)
}




function widgetClick(evt) {
    var a = new InputWidget({
        src:this.src,
        width:"200",
        height:"200"
    })
    a.init();

}



var canvas = document.querySelector('#mycanvas')
var save = document.querySelector("#save")
save.addEventListener('click',function (e) {
    console.log("click")
    //Canvas2Image.saveAsImage(canvas,600,400,"png")
    html2canvas(document.querySelector('#canvasStage'), {
        onrendered: function(canvas) {
            //document.body.appendChild(canvas);
            //Canvas2Image.saveAsImage(canvas, 600, 600, "png")


                var type = 'png';
                var imgData = canvas.toDataURL(type);


//获取mimeType

                var _fixType = function(type) {
                    type = type.toLowerCase().replace(/jpg/i, 'jpeg');
                    var r = type.match(/png|jpeg|bmp|gif/)[0];
                    return 'image/' + r;
                };

// 加工image data，替换mime type
                imgData = imgData.replace(_fixType(type),'image/octet-stream');


                var saveFile = function(data, filename){
                    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                    save_link.href = data;
                    save_link.download = filename;

                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    save_link.dispatchEvent(event);
                };

// 下载后的问题名
                var filename = 'baidufe_' + (new Date()).getTime() + '.' + type;
// download
                saveFile(imgData,filename);





        }
    });
})




