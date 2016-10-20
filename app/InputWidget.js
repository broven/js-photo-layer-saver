/**
 * Created by broven on 10/16/2016.
 * 浮动组件
 */
(function (window) {
    /**
     *
     * @param image 图片{src:"图片地址",width:,height:想要在画布中显示的大小} {src:"",width:"200",height:"200"}
     * @param [position] 文字框在图片的位置，{x，y}
     * @param [fontSetting]  字体设置   预留功能，暂未实现
     * @param [des]          舞台根div，默认document.querySelector('#canvasStage')
     * @constructor
     */
    function InputWidget(image,position,fontSetting,des) {
        //TODO 默认参数问题
        this.des = des === undefined?document.querySelector('#canvasStage'):des;
        this.image = image === undefined?{src:"example2.jpg",width:"200",height:"200"}:image;    //可以在这里设置显示错误的图片
        this.position = position === undefined?{x:"50px",y:"0px"}:position;
        this.fontSetting = {};
        this.rootDiv;                                                                             //这个浮动图层的div
        this.id = randomString(12);                                                                //浮动图层id
        this.destoryID = randomString(12);


    }


    InputWidget.prototype.init=function () {
        //对画布div进行样式调整
        this.des.style.overflow='hidden';



        this.create();

        this.rootDiv = document.querySelector('#'+this.id);

        order.call(this)

        this.listen();
    };

    InputWidget.prototype.create = function () {

        var rootDiv=document.createElement('div');
        rootDiv.className="inputWidgetRootDiv";
        rootDiv.id = this.id;
        rootDiv.style.cssText='position:absolute;'
            +'background-image: url('+this.image.src+');'
            +'width:'+this.image.width+'px;'
            +'height:'+this.image.height+'px;'
            +'background-position: center;'
            +'background-size:cover;'
            +'cursor:all-scroll;'
            +'z-index:2;';




        var count = document.createElement('div');
        count.className = "inputWidgetCount";
        rootDiv.appendChild(count);

        this.des.appendChild(rootDiv);



        var input = document.createElement('textarea');
        input.display='absolute';
        input.className="inputWidgetTextarea";
        input.setAttribute('type',"text");
        input.setAttribute('placeholder',"请在这输入文字");
        input.style.position="absolute";
        input.style.boder="none";
        input.style.top=this.position['x'];
        input.style.left=this.position['y'];


        rootDiv.appendChild(input);
        var destory = document.createElement('div');
        destory.textContent="X";
        destory.className="inputWidgetClose";
        destory.style.cssText='position:absulute;'
            +'right:0;'
            +'top:0;'
            +'z-index:2;'
            +'cursor:pointer;';
        destory.id = this.destoryID;

        rootDiv.appendChild(destory);
    };
    InputWidget.prototype.listen = function () {
        var dragable=false;
        var that=this;
        var rootDivStyle,originLeft,originTop,clickX,clickY;

        var destoryDiv = document.querySelector('#'+this.destoryID);
        destoryDiv.addEventListener('click',function () {
            that.rootDiv.remove();
            order.call(that);
        });

        that.rootDiv.addEventListener('touchstart',function (e) {

            dragable = true;
            rootDivStyle = that.rootDiv.style;
            originLeft = that.rootDiv.offsetLeft;
            originTop = that.rootDiv.offsetTop;
            clickX = e.touches[0].clientX;
            clickY = e.touches[0].clientY;

            that.rootDiv.addEventListener('touchmove',function(e){

                if(dragable){
                    e.preventDefault();
                    this.style.zIndex=6666;
                    rootDivStyle.top = (originTop + (e.touches[0].clientY-clickY))+'px';
                    rootDivStyle.left = (originLeft + (e.touches[0].clientX-clickX))+'px';
                }
            },false);
            that.rootDiv.addEventListener('touchend',function (e) {

                if(dragable){
                    this.style.zIndex=2;
                    dragable=false;
                }

            },false);
        });
        /////////////////////////////////////

        that.rootDiv.addEventListener('mousedown',function (e) {

            dragable = true;
            rootDivStyle = that.rootDiv.style;
            originLeft = that.rootDiv.offsetLeft;
            originTop = that.rootDiv.offsetTop;
            clickX = e.clientX;
            clickY = e.clientY;


            that.rootDiv.addEventListener('mousemove',function(e){
                if(dragable){
                    this.style.zIndex=6666;
                    rootDivStyle.top = (originTop + (e.clientY-clickY))+'px';
                    rootDivStyle.left = (originLeft + (e.clientX-clickX))+'px';
                }
            },false);

            that.rootDiv.addEventListener('mouseup',function (e) {
                if(dragable){
                    this.style.zIndex=2;
                    dragable=false;
                }

            },false);
    });

    };
    /**
     * 为所有的浮动块设置顺序
     */
    function order(){
        var childList = this.des.childNodes;
        for(var i = 0;i<childList.length;i++){
            var $orderItem = childList[i].childNodes[0];
            $orderItem.textContent=i+1;
        }

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

    window.InputWidget = InputWidget;


})(window);


