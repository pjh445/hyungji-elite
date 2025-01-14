$(document).ready(()=> {

    //visual부분
    let visual_1;
    let visual_2;
    const v1 = ()=>{
        $( "#visual section" ).eq(0).stop().animate({ opacity:0 }, 1).removeClass('view');
        $( "#visual section" ).eq(1).addClass('view').stop().animate({ opacity:1 }, 1, ()=>{
            visual_1 = setInterval( v2 , 7000 );
            clearInterval( visual_2 );
        });
        clearTimeout( visual );
    }
    const v2 = () =>{    
        $( "#visual section div" ).eq(0).addClass('small');
        $( "#visual section" ).eq(0).stop().animate({opacity:1}, 1).addClass('view');  
        $( "#visual section" ).eq(1).removeClass('view').stop().animate({ opacity:0 }, 1, ()=>{
            visual_2 = setInterval( v1 , 7000 );
            clearInterval(  visual_1 );
        });
    }

    let visual = setTimeout( v1 , 5000 );


});//...........js 끝부분
