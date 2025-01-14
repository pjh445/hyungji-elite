$(document).ready(()=> {

    //visual부분
    const v1 = ()=>{
        $( "#visual section" ).eq(0).stop().animate({ opacity:0 }, 1).removeClass('view');
        $( "#visual section" ).eq(1).stop().addClass('view').animate({ opacity:1 }, 1, ()=>{
            let visual_1 = setInterval( v2 , 5000 );
            clearInterval( visual_2 );            
        });
        clearTimeout( visual );
    }
    const v2 = ()=>{
        $( "#visual section div" ).eq(0).addClass('small');
        $( "#visual section" ).eq(0).stop().animate({opacity:1}, 1).addClass('view');  
        $( "#visual section" ).eq(1).stop().removeClass('view').animate({ opacity:0 }, 1, ()=>{
            let visual_2 = setInterval( v1 , 5000 );
            clearInterval(  visual_1 );
        });
    }

    let visual = setTimeout( v1 , 5000 );


});//...........js 끝부분
