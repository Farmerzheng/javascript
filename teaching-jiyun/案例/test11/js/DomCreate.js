
var DomCreate = DomCreate || (function () {
        return{
            createElement:function (htmlName,parent,styleObj,propertyObj,event) {
                var element=document.createElement(htmlName);
                parent.appendChild(element);
                for(var names in propertyObj){
                    if(names=="addEventListener" && event){
                        element.addEventListener(event,propertyObj[names]);
                    }else{
                        element[names]=propertyObj[names];
                    }

                }
                for(var str in styleObj){
                    element.style[str]=styleObj[str];
                }
                return element;
            },
            createRadio:function (parent,labelArr,groupName,radioOrCheck,event,eventHandler) {
                var arr=[];
                for(var i=0;i<labelArr.length;i++){
                    var check;
                    this.createElement("label",parent,{},{textContent:labelArr[i]});
                    if(radioOrCheck){
                        check=this.createElement("input",parent,{},{type:"radio",value:labelArr[i],name:groupName,addEventListener:eventHandler},event);
                    }else {
                        check=this.createElement("input",parent,{},{type:"checkbox",value:labelArr[i],name:groupName,addEventListener:eventHandler},event);
                    }
                    arr.push(check);
                }
                arr[0].checked=true;
                return arr;
            },
            createInput:function (lablename,parent,placeholder) {
                this.createElement("label",parent,{},{textContent:lablename});
                var input=this.createElement("input",parent,{},{type:"text",placeholder:placeholder});
                this.createElement("br",parent);
                return input;
            },
            createTr:function (table,tdContentList,backgroundColor) {
                var tr=this.createElement("tr",table,{backgroundColor:backgroundColor});
                for(var i=0;i<tdContentList.length;i++){
                    this.createElement("td",tr,{border:"1px solid #000000",width:"100px",height:"30px"},{textContent:tdContentList[i]});
                }
                return tr;
            },
            createSelect:function (optionList,parent) {
                var select=this.createElement("select",parent);
                for(var i=0;i<optionList.length;i++){
                    this.createElement("option",select,{},{textContent:optionList[i]});
                }
                return select;
            }
        }
    })();