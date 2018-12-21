/**
 * Created by 王争 on 2016/4/28.
 */
$( function() {
    // Swipe
    (function() {
        new Hammer( $( ".swipe" )[ 0 ], {
            domEvents: true
        } );
        var current = 0;
        var imgs = $( ".basicDemo-box.swipe img" );
        var pages = $( ".swipe .page-num span" );
        $( ".swipe" ).on( "swipeleft", function( e ) {
            if ( imgs[ current + 1 ] ) {
                imgs.removeClass( "active" );
                imgs.eq( ++current ).addClass( "active" );
                pages.removeClass( "active" );
                pages.eq( current ).addClass( "active" );
            }
        } );
        $( ".swipe" ).on( "swiperight", function( e ) {
            if ( imgs[ current - 1 ] ) {
                imgs.removeClass( "active" );
                imgs.eq( --current ).addClass( "active" );
                pages.removeClass( "active" );
                pages.eq( current ).addClass( "active" );
            }
        } );
    } )();

    // Pan
    (function() {
        var img, margin;
        new Hammer( $( ".pan" )[ 0 ], {
            domEvents: true
        } );
        $( ".pan" ).on( "panstart", function( e ) {
            img = $( ".pan img" );
            margin = parseInt( img.css( "margin-left" ), 10 );
        } );
        $( ".pan" ).on( "pan", function( e ) {
            console.log( "pan" );
            var delta = margin + e.originalEvent.gesture.deltaX;
            console.log( delta );
            if ( delta >= -1750 && delta <= -150 ) {
                img.css( {
                    "margin-left": margin + e.originalEvent.gesture.deltaX
                } );
            }
        } );
    })();

    // tap
    (function() {
        new Hammer( $( ".tap" )[ 0 ], {
            domEvents: true
        } );
        var current = 0;
        var imgs = $( ".basicDemo-box.tap img" );
        var pages = $( ".tap .page-num span" );
        $( ".tap" ).on( "tap", function( e ) {
            console.log( "tap" );
            if ( imgs[ current + 1 ] ) {
                current++;
            } else {
                current = 0;
            }
            console.log( current );
            imgs.removeClass( "active" );
            imgs.eq( current ).addClass( "active" );
            pages.removeClass( "active" );
            pages.eq( current ).addClass( "active" );
        } );
    } )();

    // press
    (function() {
        new Hammer( $( ".press" )[ 0 ], {
            domEvents: true
        } );
        $( ".press" ).on( "press", function( e ) {
            $( ".basicDemo-overlay" ).toggle();
        } );
    } )();

    // pinch
    (function() {
        var ham = new Hammer( $( ".pinch" )[ 0 ], {
            domEvents: true
        } );
        var width = 1900;
        var height = 400;
        var left = 950;
        var top = 220;
        ham.get('pinch').set({ enable: true });

        $( ".pinch" ).on( "pinch", function( e ) {
            console.log( "pinch" );
            if ( width * e.originalEvent.gesture.scale >= 300 ) {
                $( this ).find( "img" ).css({
                    width: width * e.originalEvent.gesture.scale,
                    "margin-left": -left * e.originalEvent.gesture.scale,
                    height: height * e.originalEvent.gesture.scale,
                    "margin-top": -top * e.originalEvent.gesture.scale
                });
            }
            console.log( e.originalEvent.gesture.scale );
        } );
        $( ".pinch" ).on( "pinchend", function( e ) {
            width = width * e.originalEvent.gesture.scale;
            height = height * e.originalEvent.gesture.scale;
            left = left * e.originalEvent.gesture.scale;
            top = top * e.originalEvent.gesture.scale;
            console.log( width );
        } );
    } )();

    // rotate
    (function() {
        var ham = new Hammer( $( ".rotate" )[ 0 ], {
            domEvents: true
        } );
        var liveScale = 1;
        var currentRotation = 0;

        ham.get('rotate').set({ enable: true });
        $( ".rotate" ).on( "rotate", function( e ) {
            var rotation = currentRotation + Math.round(liveScale * e.originalEvent.gesture.rotation);
            $( this ).find( "img" ).css( "transform", "rotate( " + rotation + "deg)" );
        } );
        $( ".rotate" ).on( "rotateend", function( e ) {
            currentRotation += Math.round( e.originalEvent.gesture.rotation );
        } );
    } )();

    // Hammer Time
    $(function(){
        var upEvent = window.PointerEvent ? "pointerup" : ( ( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch ) ? "touchend" : "mouseup";
        $( ".target" ).on( upEvent, function( e ) {
            this.startTime = Date.now();
            $( this ).find( ".output" ).html( e.type + ": " + this.startTime + "<br>");
        } );
        $( ".target" ).on( "click", function( e ) {
            var now = Date.now();
            var clickTime = now - this.startTime;
            var target = $( this );
            var status = clickTime < 100 ? "" : clickTime < 300 ? "warning" : "failure"
            target.find( ".click-gauge" )
                .attr( "value", clickTime )
                .removeClass( "failure success" )
                .addClass( status );
            target.find( ".click-time-output" ).text( clickTime + "ms" );
            target.find( ".output" ).append( "click: " + now + "<br>");
            $( this ).addClass( "clicked" );
            setTimeout( function() {
                $( this ).removeClass( "clicked" );
            }.bind( this ), 1000 )
        } );
    });
} );