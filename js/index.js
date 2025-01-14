$(document).ready(()=> {

    //visual부분
    const v1 = ()=>{
        $( "#visual section" ).eq(0).stop().animate({ opacity:0 }, 1).removeClass('view');
        $( "#visual section" ).eq(1).stop().addClass('view').animate({ opacity:1 }, 1, ()=>{
            const visual = setInterval( v2 , 5000 );
        });
    }
    const v2 = ()=>{
        $( "#visual section div" ).eq(0).addClass('small');
        $( "#visual section" ).eq(0).stop().animate({opacity:1}, 1).addClass('view');  
        $( "#visual section" ).eq(1).stop().removeClass('view').animate({ opacity:0 }, 1, ()=>{
            const visual = setInterval( v1 , 5000 );
        });
    }

    const visual = setTimeout( v1 , 5000 );


});//...........js 끝부분