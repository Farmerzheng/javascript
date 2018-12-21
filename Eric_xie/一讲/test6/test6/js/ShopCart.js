(function ShopCart() {
    var _data;
    var table;
    var tableStyle={
        width: "300px",
         height: "300px",
        borderCollapse:"collapse"
    };
    var tdStyle={
        border:"1px solid #000000",
        textAlign:"center"
    };
    var _headArr;
    var _sumPrice=0;
    function ShopCart(data,headArr) {
        _data=data;
        _headArr=headArr;
        this.stepList=[];

    }
    ShopCart.prototype={
        set data(value){
            _data=value;

          ElementUtil.clearTable(table,1);
            this.stepList.length=0;
            var col=0;
            for(var str in _data[0]){
                col++;
            }
           for(var j=0;j<_data.length;j++){
                var tr=ElementUtil.createTr(col,null,tdStyle);
               table.appendChild(tr);
           }
            this.setTableData();
        },
        get data(){
            return _data;
        },
        get sumPrice(){
            return _sumPrice;
        },
        set width(value){
            if(!table) return;
            table.style.width=value+"px";
        },
        set height(value){
            if(!table) return;
            table.style.height=value+"px";
        },
        createTabel:function () {
            if(table) return table;
            var row=_data.length+1;
            var col=0;
            for(var str in _data[0]){
                col++;
            }
            table=ElementUtil.createTable(row,col,tableStyle,null,tdStyle);
            var trs=table.getElementsByTagName("tr");
            var tds=trs[0].getElementsByTagName("td");
            for(var i=0;i<tds.length;i++){
                if(_headArr[i]=="check"){
                    var check=ElementUtil.createCheckBox("checkBoxs")
                    tds[i].appendChild(check);
                    check.addEventListener("click",this.clickHandler.bind(this))
                }else{
                    tds[i].textContent=_headArr[i];
                }
            }
            this.setTableData();
            return table;
        },
        setTableData:function () {
            if(!table) return;
            var trs=table.getElementsByTagName("tr");
            console.log(this.data)
            for(var i=1;i<trs.length;i++){
                var tds=trs[i].getElementsByTagName("td");
                 var col=0;
                
                for(var str in this.data[i-1]){
                    if(str=="checked"){
                        var check=ElementUtil.createCheckBox("checkBoxs")
                        tds[col].appendChild(check);
                        check.checked=this.data[i-1].checked;
                        check.addEventListener("click",this.clickHandler.bind(this))
                   
                    }else if(str=="num") {
                        var stepBn=new StepButton(this.callBack.bind(this));
                        tds[col].appendChild(stepBn.createButton());
                        this.stepList.push(stepBn);
                        stepBn.step=parseInt(this.data[i-1][str])
                    }else{
                        tds[col].textContent=this.data[i-1][str];
                    }

                    col++;
                }
            }
        },
        clickHandler:function (e) {
            if(!e){
                e=window.event;
            }
            var checks=document.getElementsByName("checkBoxs");
            if(e.target==checks[0]){
                for(var i=0;i<checks.length;i++){
                    checks[i].checked=e.target.checked;
                    if(this.data[i]){
                        this.data[i].checked=e.target.checked;
                    }
                }
            }else{
                if(!e.target.checked){
                    checks[0].checked=false;
                }
                for(var i=0;i<checks.length;i++){
                    if(checks[i]==e.target){
                        this.data[i-1].checked=e.target.checked;
                    }
                }
            }
            _sumPrice=this.getPriceSum();
        },
        callBack:function (stepBn) {
            if(!this.stepList) return;
            var index=this.stepList.indexOf(stepBn)
            if(index>-1){
                this.data[index].num=stepBn.step;
            }
            _sumPrice=this.getPriceSum()
        },
        getPriceSum:function () {
            var sum=0;
            for(var i=0;i<this.data.length;i++){
                if(this.data[i] && this.data[i].checked){
                    sum+=parseFloat(this.data[i].price)*this.data[i].num;
                }
            }
            return sum;

        }
    };
    window.ShopCart=ShopCart;
})();
