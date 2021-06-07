var body = document.querySelector('body');
var header = document.querySelector('header');
var main = document.querySelector('main');
var cat = document.querySelector('.cat');
var footer = document.querySelector('footer');

function bw(){
    body.style.backgroundImage= "none";
    header.setAttribute('id','bw');
    main.setAttribute('id','bw');
    cat.setAttribute('id','bw');
    main.style.backgroundImage = "none";
    cat.style.color="#202020";
    cat.innerHTML="h i j";
    footer.setAttribute('id','bw');
}
function glass(){
    body.style.backgroundImage= "url('assets/imgs/glass.png')";
    header.setAttribute('id','glass');
    main.setAttribute('id','glass');
    cat.setAttribute('id','glass');
    main.style.backgroundImage = "url('assets/imgs/tmglass.png')";
    cat.style.color="#4863ff";
    cat.style.backgroundColor="none";
    cat.innerHTML="l m n";
    footer.setAttribute('id','glass');
}
function dark(){
    body.style.backgroundImage ="url('assets/imgs/dark.png')";
    header.setAttribute('id','dark');
    main.setAttribute('id','dark');
    main.style.backgroundImage="url('assets/imgs/tmdark.png')";
    cat.setAttribute('id','dark');
    cat.style.color="#ffffff";
    cat.style.backgroundColor="none";
    cat.innerHTML="v w x";
    footer.setAttribute('id','dark');
}
function bauhaus(){
    body.style.backgroundImage= "url('assets/imgs/tmbauhaus.png')";
    header.setAttribute('id','bauhaus');
    main.setAttribute('id','bauhaus');
    cat.setAttribute('id','bauhaus');
    main.style.backgroundImage = "url('assets/imgs/bauhaus.png')";
    cat.style.color="#39db44";
    cat.innerHTML="b c d";
    footer.setAttribute('id','bauhaus');
}
function neon(){
    body.style.backgroundImage= "url('assets/imgs/dark.png')";
    header.setAttribute('id','neon');
    main.setAttribute('id','neon_btn');
    cat.setAttribute('id','neon_btn');
    main.style.backgroundImage = "url('assets/imgs/tmdark.png')";
    cat.style.color="#f130d1";
    cat.innerHTML="p q r";
    footer.setAttribute('id','neon');
}