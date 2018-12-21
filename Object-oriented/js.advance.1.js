/**
 * this的多种用法
 * Created by lianjun on 2016-04-19.
 */


// 第一种调用方式：作为普通函数, this == window(全局对象）
var mesg = "hello,window!" ;
function foo(){
    console.log(this.mesg) ;
}
console.log("第一种情况") ;
foo() ;
window.foo() ;

// 第二种调用方式：作为对象的方法, this == 对象本身
console.log("第二种情况") ;
var bar = {
    mesg: "hello,Bar!"
}
bar.g = foo ;
bar.g() ;
bar.g2 = function(){
    console.log(this.mesg,(this === bar)) ;
}
bar.g2() ;


// 第三种调用方式：与new一起配合,作为对象构造器使用, this == 新构造出来的空对象。
console.log("第三种情况") ;
foo = function(){
    this.mesg = "abc" ;
}
var bar2 = new foo() ;
console.log(bar2.mesg) ;

foo = function(){
    // new 操作符，相当于在第一行位置添加了这样一行代码：
    // this = {} ;
    // 同时将函数（foo）的prototype值作为新建对象的父亲。
    // this.__proto__ = foo.prototype ;
    this.mesg = "abc" ;
    console.log(this.mesg) ;
    //return {abc:123};
    // new 操作符，相当于当函数没有使用return的时候，在最末尾添加了一行这样的代码：
    // return this ;
}
foo.prototype = {
    car: 100,
    speak: function(){
        alert("lalalalala... 我们家有 "+this.car+" 辆汽车.") ;
    }
}
var bar2 = new foo() ;
console.log(bar2.mesg) ;
bar2.speak() ;

foo() ; // window.foo() ;
console.log(mesg) ;

// 第四种调用方式：使用函数对象自身的call方法,this == call方法的第一个实参。
console.log("第四种情况") ;
function foo2(a,b){
    console.log(this.mesg,a+b) ;
}

mesg = "hello,windows!" ;
foo2(1,2) ;
foo2.call(window,1,2) ;
foo2.call(bar2,2,2) ;

var numbers = [{
    name: 'Mark'
},{
    name: 'Tom'
},{
    name: 'Travis'
}];
for (var i = 0; i < numbers.length; i++) {
    (function () {
        console.log(this.name); // Mark, Tom, Travis
    }).call(numbers[i]);
}

// 第五种调用方式：使用函数对象自身的apply方法,this == apply方法的第一个实参。
console.log("第五种情况") ;
foo2.apply(window,[1,2]) ;
foo2.apply(bar2,[2,2]) ;
// 通过apply，可以动态传递若干组实参表进行函数调用，执行函数的求值运算。
var arr = [
    [1,2],[2,3],[3,4]
] ;
for (var i=0;i<arr.length;i++ ){
    var p = arr[i] ;
    console.log(foo2.apply(bar2,p)) ;
}


console.log("第六种情况") ;
var obj = {};
var element = document.querySelector('.elem');
var someMethod = function () {
    console.log(this);
};
var someMethod2 = someMethod.bind(obj) ; // someMethod2()调用时，this为obj . ES5版本引入。
element.addEventListener('click', someMethod2, false); // bind


console.log("第七种情况") ;
var obj = {};
obj.myMethod = function () {
    console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // window object :O!!!
    }, 100);
};
obj.myMethod();

//修正
var obj = {};
obj.myMethod = function () {
    var that = this;
    console.log(this); // this = obj
    setTimeout(function () {
        console.log(that); // that (this) = obj
    }, 100);
};
obj.myMethod();


console.log("第八种情况") ;
// jQuery对象事件处理器
$('.elem').on('click', function () {
    $(this).addClass('active'); // this为DOM对象
});

// DOM对象事件处理器
var link = document.getElementById("myId");
link.addEventListener("click", function() {
    console.log(this); // this为DOM对象
}, false);



console.log("第九种情况") ;
var numbers = [{
    name: 'Mark'
},{
    name: 'Tom'
},{
    name: 'Travis'
}];
numbers.forEach(function () {
    console.log(this); // window
});

// 改进
numbers.forEach(function () {
    console.log(this); // this = Array [{ name: 'Mark' },{ name: 'Tom' },{ name: 'Travis' }]
}, numbers); // BOOM, scope change!




var mesg = "gobal message!" ;
function outer(){
    this.mesg = "bar2 message!" ;
    var me = this ; // 该函数作为对象的方法使用。 this指的是对象。
    var mesg = "outer message!" ;
    // showMesg 是局部函数
    function showMesg(){
        alert(mesg) ;
        //alert(this.mesg) ; // this: window, this.mesg=="global message!"
        alert(me.mesg) ; // this: window, this.mesg=="global message!"
        console.log(this.mesg,window.mesg) ;
    }
    showMesg() ; // showMesg函数在这里运行的时候，函数体中的this指window全局对象。
    console.log(window.showMesg)  ;//undefined!
}
bar2.outer = outer ;
bar2.outer() ;

var f1 = function () {alert("welcome F1") ;} ;
var f2 = function () {alert("welcome F2") ;} ;
/**
 * 将函数对象作为一个函数参数
 * @param fn  要调用的函数
 */
function callF(fn){
    fn() ;
}
callF(f1) ;
callF(f2) ;







