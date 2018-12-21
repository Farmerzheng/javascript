var ElementUtil=ElementUtil || (function () {
        return {
            changeObjectStyle:function (obj,style) {
//                循环传入的style样式对象下的所有属性
                for(var str in style){
//                  与该内容相似  obj.style.backgroundColor=style.backgroundColor
                    obj.style[str]=style[str];
                }
            },
            createDiv:function (id,style) {
//                创建一个div
                var div=document.createElement("div");
                if(id.length>0){
                    div.id=id;
                }
                this.changeObjectStyle(div,style);
                return div;
            },
            createImg:function (src,id,style) {
                var img=new Image();
                if(id.length>0){
                    img.id=id;
                }
                img.src=src;
                this.changeObjectStyle(img,style);
                return img;
            },
            createUl:function (list,ulStyle,liStyle) {
                //                创建ul标签
                var ul=document.createElement("ul");
//                给ul标签添加样式
                this.changeObjectStyle(ul,ulStyle);
//                根据传入的列表项创建li
                for(var i=0;i<list.length;i++){
//                    创建li
                    var li=document.createElement("li");
//                    给li添加样式
                    this.changeObjectStyle(li,liStyle);
//                    给li的内容赋值为列表项
                    li.textContent=list[i];
//                    把li添加到ul中
                    ul.appendChild(li);
                }
                return ul;
            },
            createTable:function (row,col,tableStyle,trStyle,tdStyle) {
                var table=document.createElement("table");
                for(var i=0;i<row;i++){
                    var tr=ElementUtil.createTr(col,trStyle,tdStyle)
                    table.appendChild(tr);
                }
                if(tableStyle){
                    ElementUtil.changeObjectStyle(table,tableStyle);
                }
                return table;
            },
            createTr:function (col,trStyle,tdStyle) {
                var tr=document.createElement("tr");
                if(trStyle){
                    ElementUtil.changeObjectStyle(tr,trStyle);
                }
                for(var j=0;j<col;j++){
                    var td=document.createElement("td");
                    if(tdStyle){
                        ElementUtil.changeObjectStyle(td,tdStyle);
                    }
                    tr.appendChild(td);
                }
                return tr;
            },
            clearTable:function (table,index) {
                if(!index){
                    index=0;
                }
                var len=table.children.length;
                for(var i=0;i<len;i++){
                    if(table.children[index]){
                        table.children[index].remove();
                    }
                 
                }
            },
            createCheckBox:function (name,txt) {
                var check=document.createElement("input");
                check.type="checkbox";
                if(name){
                    check.name=name;
                }
                return check;
                if(txt){
                    var div=document.createElement("div");
                    var label=document.createElement("label");
                    label.textContent=txt;
                    div.appendChild(check);
                    div.appendChild(label);
                }
                return div;
            },
            createButton:function (value,buttonStyle) {
                var button=document.createElement("input");
                button.type="button";
                button.value=value;
                if(buttonStyle){
                    ElementUtil.changeObjectStyle(button,buttonStyle)
                }
                return button;
            },
            createInput:function (inputStyle) {
                var inputs=document.createElement("input");
                inputs.type="text";
                if(inputStyle){
                    ElementUtil.changeObjectStyle(inputs,inputStyle);
                }
                return inputs;
            }
        }
    })();
(function StepButton() {
    var _callBack;

    var buttonStyle={
        width: "30px",
      height:"30px"
    };
    var textStyle={
        width: "30px",
        height:"30px",
        textAlign:"center"
    };
    function StepButton(callBack) {
        _callBack=callBack;
        this.buttonDiv;
        this.leftBn;
        this.rightBn;
        this.texts;
        this._step=0;
    }
    StepButton.prototype={
        createButton:function () {
            if(this.buttonDiv) return this.buttonDiv;
            this.buttonDiv=document.createElement("div");
            this.leftBn=ElementUtil.createButton("<",buttonStyle);
            this.buttonDiv.appendChild(this.leftBn);
            this.texts=ElementUtil.createInput(textStyle);
            this.buttonDiv.appendChild(this.texts);
            this.rightBn=ElementUtil.createButton(">",buttonStyle);
            this.buttonDiv.appendChild(this.rightBn);
            this.leftBn.addEventListener("click",this.bnClickHandler.bind(this));
            this.rightBn.addEventListener("click",this.bnClickHandler.bind(this));
            this.texts.addEventListener("input",this.inputHandler.bind(this));
            return this.buttonDiv;
        },
        set step(value){
            if(value<0){
                value=0;
            }
            this._step=value;
            if(!this.texts) return;
            this.texts.value=value;
            _callBack(this);
        },
        get step(){
            return this._step
        },
        bnClickHandler:function (e) {
            if(!e){
                e=window.event;
            }
            if(e.target==this.leftBn){

                this.step--;
            }else if(e.target==this.rightBn){
                this.step++;
            }
        },
        inputHandler:function (e) {
            if(!e){
                e=window.event;
            }
            this._step=parseInt(e.target.value);
        }
    };
    window.StepButton=StepButton;
})();
