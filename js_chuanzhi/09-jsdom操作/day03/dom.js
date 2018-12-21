/**
 * Created by Lenovo on 2018/1/11.
 */
/*
* 功能：以id形式来获取标签元素
* @params: 传入一个id值
* @returns: 返回找到的标签元素（object）
* */
function getId( id ){
    return document.getElementById( id );
}
/*
 * 功能：获取第一个子标签元素
 * @params: 传递一个标签元素
 * @returns: 返回找到的第一个元素（object）
 * */
function getFirstChild( element ){
    return element.firstElementChild || element.firstChild;
}
/*
 * 功能：获取最后一个子标签元素
 * @params: 传递一个标签元素
 * @returns: 返回找到的最后一个元素（object）
 * @returntype:object
 * */
function getLastChild( element ){
    return element.lastElementChild || element.lastChild;
}
/*
 * 功能：获取上一个兄弟元素
 * @params: 传递一个标签元素
 * @returns: 返回找到的上一个兄弟元素（object）
 * @returntype:object
 * */
function getPreviousSibling( element ){
    return element.previousElementSibling || element.previousSibling;
}
/*
 * 功能：获取下一个兄弟元素
 * @params: 传递一个标签元素
 * @returns: 返回找到的下一个兄弟元素（object）
 * @returntype:object
 * */
function getNextSibling( element ){
    return element.nextElementSibling || element.nextSibling;
}
/*
 * 功能：获取其它的兄弟元素
 * @params: 传递一个标签元素
 * @returns: 返回找到的所有兄弟元素（object）
 * @returntype:array
 * */
function getAllSilings( element ){
    var arr = [];
    var nodes = element.parentNode.children;
    for( var i = 0; i < nodes.length; i++ ){
        if( nodes[i] !== element ){
            arr.push( nodes[i] );
        }
    }
    return arr;
}