/**
 * Created by broven on 10/16/2016.
 */
(function (window) {
    /**
     *
     * @param image 图片{src:"图片地址",width:,height:想要在画布中显示的初始大小} {src:"",width:"200",height:"200"}
     * @param position 文字框在图片的位置，{X，Y}
     * @param fontSetting  字体设置
     * @param des          canvas上的stage层
     * @constructor
     */
    function InputWidget(image,position,fontSetting,des) {
        //TODO 默认参数问题
        this.des = document.querySelector('#canvasStage')
        this.image = image//{src:"example2.jpg",width:"200",height:"200"}
        this.position = {x:"50px",y:"0px"}
        this.fontSetting = fontSetting|{}
        this.rootDiv
        this.id = randomString(12)
        this.destoryID = randomString(12)

    }

    InputWidget.prototype.init=function () {
        this.create()
        this.rootDiv = document.querySelector('#'+this.id)
        this.listen()
    }

    InputWidget.prototype.create = function () {

        var rootDiv=document.createElement('div')

        rootDiv.id = this.id
        rootDiv.style.cssText='position:absolute;'
                                +'background-image: url('+this.image.src+');'
                                +'width:'+this.image.width+'px;'
                                +'height:'+this.image.height+'px;'
                                +'background-position: center;'
                                +'background-size:cover;'
                                +'cursor:all-scroll;'




        var input = document.createElement('input')
        input.display='absolute'
        input.setAttribute('type',"text")
        input.setAttribute('placeholder',"请在这输入文字")
        input.style.position="absolute"
        input.style.boder="none"
        input.style.top=this.position['x']
        input.style.left=this.position['y']
        rootDiv.appendChild(input)


        var destory = document.createElement('div')
        destory.textContent="X"
        destory.style.cssText='position:absulute;'
                                +'right:0;'
                                +'top:0;'
                                +'z-index:50;'
                                +'cursor:pointer;'
        destory.id = this.destoryID
        rootDiv.appendChild(destory)


        this.des.appendChild(rootDiv)
    }
    InputWidget.prototype.listen = function () {
        var dragable=false;
        var that=this
        var rootDivStyle,originLeft,originTop,clickX,clickY

        var destoryDiv = document.querySelector('#'+this.destoryID)
        console.log(this.destoryID)
        destoryDiv.addEventListener('click',function () {
            that.rootDiv.remove()
        })






        console.log(this.rootDiv)
        that.rootDiv.addEventListener('mousedown',function (e) {
            console.log("mouse down")
            dragable = true;
             rootDivStyle = that.rootDiv.style
             originLeft = that.rootDiv.offsetLeft;
             originTop = that.rootDiv.offsetTop;
             clickX = e.clientX;
             clickY = e.clientY;


            that.rootDiv.addEventListener('mousemove',function(e){
                if(dragable){
                    console.log("mouse move")
                    rootDivStyle.top = (originTop + (e.clientY-clickY))+'px'
                    rootDivStyle.left = (originLeft + (e.clientX-clickX))+'px'
                }
            },false)

            that.rootDiv.addEventListener('mouseup',function (e) {
                if(dragable){
                    console.log("mouse up")
                    dragable=false
                }

            },false)
        })


    }


    function randomString(length) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

        if (! length) {
            length = Math.floor(Math.random() * chars.length);
        }

        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

window.InputWidget = InputWidget
    

})(window)


