# 文件说明
文件名|说明
---|---
index.html| 演示界面
main.js |演示界面主要js文件，其中演示了如何创建浮动图片，保存图片，以及产生js
inputWidget.js| 浮动元素类（库文件）
inputWidget.css| 对浮动元素的每一个元素进行样式调整
canvas2image.js html2cnavas.js |保存图片必须要引用的库
fastClick.js|去掉触摸300ms点击延迟


# 使用
## 初始化浮动元素
1.首先要有一个舞台元素（对应demo中的`div#canvasStage`）
舞台元素是用来盛放所有的浮动层的
在点击左侧图片后，创建浮动元素：
```js
  /**
     *括号为可选参数
     * @param image 图片{src:"图片地址",width:,height:想要在画布中显示的大小} {src:"",width:"200",height:"200"}
     * @param [position] 文字框在图片的位置，{X，Y}
     * @param [des]          舞台根div，默认document.querySelector('#canvasStage')
     * @constructor
     */
     
     //InputWidget({src:"图片地址",width:,height:想要在画布中显示的大小},{x:"50px",y:"0px"},des)
     
       //生成新的widget
       var a = new InputWidget({
           src:this.src,
           width:"200",
           height:"200"
       });
       a.init();


```
## 保存图片
调用main.js中的`saveImage()`方法
保存图片可以设置图片的大小和文件类型
## 返回json数据
调用main.js中的`getWidgetTextContext()`方法

# 修改
### 修改样式
要想修改弹出层的样式，在widget.css中写入对应的样式
### 修改弹出层元素
在inputWidget.js中的`create()`中写了所有弹出层的元素
### 修改弹出层事件
在inputWidget.js中的`listen()`中定义了所有事件