'use strict';
var printTemplate = {
    container: document.querySelector('.main-content'),
    move: false,
    contentHeight:Number(getComputedStyle(document.querySelector('.main-content')).height.replace('px','')),
    contentWidth:Number(getComputedStyle(document.querySelector('.main-content')).width.replace('px','')),
    itemStartTop: -1,
    itemStartLeft: -1,
    itemStartHeight:-1,
    itemStartWidth:-1,
    mouseStartTop: -1,
    mouseStartLeft: -1,
    moveItem: undefined,
    handleItemMouseDown: function (item, e,isResize) {
        var self = this;
        var itemStyle=getComputedStyle(item);
        self.resize=isResize;
        self.move = true;
        self.moveItem = item;
        self.itemStartTop = Number(itemStyle.top.replace('px', ''));
        self.itemStartLeft = Number(itemStyle.left.replace('px', ''));
        self.itemStartHeight = Number(itemStyle.height.replace('px', ''));
        self.itemStartWidth = Number(itemStyle.width.replace('px', ''));
        self.maxTop=self.contentHeight-self.itemStartHeight;
        self.maxLeft=self.contentWidth-self.itemStartWidth;
        self.mouseStartTop = e.clientY;
        self.mouseStartLeft = e.clientX;
    },
    handleMouseMove: function (e) {
        var self = this;
        var offsetTop = 0;
        var offsetLeft = 0;
        var currentTop=e.clientY;
        var currentLeft=e.clientX;
        var top,left,height,width;
        if (self.move) {
            offsetTop=currentTop-self.mouseStartTop;
            offsetLeft=currentLeft-self.mouseStartLeft;
            if(self.resize){
                height=offsetTop+self.itemStartHeight;
                width=offsetLeft+self.itemStartWidth;
                self.moveItem.style.height=height+'px';
                self.moveItem.style.width=width+'px';
            }else{
                top=offsetTop+self.itemStartTop;
                left=offsetLeft+self.itemStartLeft;
                if(top<0){
                    top=0
                }
                if(left<0){
                    left=0
                }
                if(top>self.maxTop){
                    top=self.maxTop;
                }
                if(left>self.maxLeft){
                    left=self.maxLeft
                }
                self.moveItem.style.top=top+'px';
                self.moveItem.style.left=left+'px';
            }
        }
    },
    clearMoveState: function () {
        var self = this;
        self.resize=false;
        self.move = false;
        self.moveItem = undefined;
        self.itemStartTop = -1;
        self.itemStartLeft = -1;
        self.itemStartHeight = -1;
        self.itemStartWidth = -1;
        self.mouseStartTop = -1;
        self.mouseStartLeft = -1;
    },
    addMoveItem:function () {
        var self=this;
        var item=document.createElement('div');
        item.className='move-item';
        item.innerText='收件人1';
        var resize=document.createElement('span');
        resize.className="resize";
        item.appendChild(resize);
        var close=document.createElement('i');
        close.className='close';
        close.innerHTML='<i class="fa fa-close"></i>';
        item.appendChild(close);
        self.addCloseEvent(close);
        self.addMouseEvent(item);
        document.querySelector('.main-content').appendChild(item);
    },
    addMouseEvent:function (el) {
        var self=this;
        el.addEventListener('mousedown', function (event) {
            var isResize=(event.target.nodeName.toLowerCase()==='span');
            self.handleItemMouseDown(el, event,isResize);
        });
        el.addEventListener('mouseup', function () {
            self.clearMoveState();
        });
    },
    addCloseEvent:function (el) {
        el.addEventListener('click',function () {
            var parent=this.parentNode;
            parent.parentNode.removeChild(parent);
        });
    },
    eventHandle: function () {
        var self = this;
        document.querySelectorAll('.move-item').forEach(function (item) {
            self.addMouseEvent(item);
        });
        document.querySelector('.main-content').addEventListener('mousemove', function (event) {
            self.handleMouseMove(event);
        });
        document.querySelectorAll('.close').forEach(function (item) {
            self.addCloseEvent(item);
        });
        document.querySelector('.add-item').addEventListener('click',function () {
            self.addMoveItem();
        });
    }
};
printTemplate.eventHandle();