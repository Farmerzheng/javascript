//单个购物车对象

//什么时候需要使用构造函数的形式进行编程？
//当需要批量的生产一些相同的对象的时候
function SingleCar(obj) {
    this.name = obj.name;
    this.price = obj.price;
    this.num = obj.num;
    this.render = function (obj) {
        var str = "";
        str += '<p>'+
                  '<span class="name">'+this.name+'</span>'+
                  '<span class="minus">-</span>'+
                  '<span class="num">'+this.num+'</span>'+
                  '<span class="plus">+</span>'+
                  '单价<span class="price">'+this.price+'</span>元'+
               '</p>';
               return str;

    }
}
