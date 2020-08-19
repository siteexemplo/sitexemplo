// Animacao display block e none dropdown
let menurespon = document.getElementById ("menurespon")
let menuresp = document.getElementById ("menuresp")
let section1 = document.getElementById ("section1")
let header = document.getElementById ("header")
let btt5 = document.getElementById ("btt5")
let btt6 = document.getElementById ("btt6")
let btt7 = document.getElementById ("btt7")
let btt8 = document.getElementById ("btt8")

btt5.addEventListener ("click", openclose)
btt6.addEventListener ("click", openclose)
btt7.addEventListener ("click", openclose)
btt8.addEventListener ("click", openclose)

function openclose () {
    menurespon.style.display = "none"
    setTimeout (closeopen, 100)
}
function closeopen () {
    if(menurespon.style.display == "none") 
    {
        menuresp.addEventListener ("click", event)
    }
    else
    {
        menurespon.style.display = "none"
    } 
}
function event () {
    menurespon.style.display = "block"
    section1.addEventListener ("click", eventoff)
    header.addEventListener ("click", eventoff)
}
function eventoff () {
    menurespon.style.display = "none"
}



// Animacao Box Tecnologia
let tec1 = document.getElementById ("tec1")
let tec2 = document.getElementById ("tec2")
let tec3 = document.getElementById ("tec3")
let txttec11 = document.getElementById ("txttec11")
let txttec22 = document.getElementById ("txttec22")
let txttec33 = document.getElementById ("txttec33")

tec1.addEventListener ("click", openbox1)
tec2.addEventListener ("click", openbox2)
tec3.addEventListener ("click", openbox3)


function openbox1 () {
    tec1.style.height = "500px"
    tec1.style.width = "300px"
    tec2.style.height = "200px"
    tec2.style.width = "200px"
    tec3.style.height = "200px"
    tec3.style.width = "200px"
    txttec22.style.display = "none"
    txttec33.style.display = "none"
    setTimeout (openbox1txt, 0500)
}
function openbox1txt () {
    txttec11.style.display = "inline"
}

function openbox2 () {
    tec2.style.height = "500px"
    tec2.style.width = "300px"
    tec1.style.height = "200px"
    tec1.style.width = "200px"
    tec3.style.height = "200px"
    tec3.style.width = "200px"
    txttec11.style.display = "none"
    txttec33.style.display = "none"
    setTimeout (openbox2txt, 0500)
}
function openbox2txt () {
    txttec22.style.display = "inline"
}

function openbox3 () {
    tec3.style.height = "500px"
    tec3.style.width = "300px"
    tec1.style.height = "200px"
    tec1.style.width = "200px"
    tec2.style.height = "200px"
    tec2.style.width = "200px"
    txttec22.style.display = "none"
    txttec11.style.display = "none"
    setTimeout (openbox3txt, 0500)
}
function openbox3txt () {
    txttec33.style.display = "inline"
}

// Animacao scrollSuave
$('ul a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

