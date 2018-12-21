var MainModes=MainModes || (function () {
        return {
            instance:null,
            getInstance:function () {
                if(!this.instance) this.instance=new MainMode();
                return this.instance;
            }
        }
    })();
function MainMode() {
        this.dataArr=[];
        this.xmlList={};
}
MainMode.prototype={

};
