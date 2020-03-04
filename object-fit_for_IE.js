
//this function can be used when object-fit css does not work in IE, the function take the img url 
//and fit it as background img
function resize(){
    var userAgent = window.navigator.userAgent.toLowerCase();

　　 if(userAgent.indexOf('msie') != -1 ||userAgent.indexOf('trident') != -1) 
    {//if the user browser is IE

        //1.get img url and cancell HTML <img> for each
        $('.list-item .item-image').each(function(){
            var img_src = $( this ).find( 'img' ).attr("src");
            $( this ).find( 'img' ).remove();

            //2.insert background img on .item-image
            //3.apply new css for .item-image(background image)
            $( this ).css({
                "background-image":"url("+img_src+")",
                "width":"100%",
                "height":"230px",
                "background-size":"cover",
                "background-repeat":"no-repeat",
                "background-position":"50% 50%",
            })
        });
    }
}

var userAgent = window.navigator.userAgent.toLowerCase();
　　 
    if(userAgent.indexOf('msie') != -1) {
        console.log('お使いのブラウザはInternet Explorerですね！');
    }