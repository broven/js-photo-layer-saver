/**
 * Created by broven on 10/16/2016.
 */
// 图片导出为 png 格式
var saveimage = function () {
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