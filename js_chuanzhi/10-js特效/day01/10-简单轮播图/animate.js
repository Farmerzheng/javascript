function animate ( element,target ) {
    clearInterval( element.timer );
    element.timer = setInterval( function () {
        var step = target > element.offsetLeft ? 10 : -10;
        element.style.left = element.offsetLeft + step + 'px';
        if( Math.abs( target - element.offsetLeft ) < Math.abs(step) ){
            element.style.left = target + 'px';
            clearInterval( element.timer );
        }
    },10 );
}