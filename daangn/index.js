const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip');

var i = 0;
var message = "동네 이름, 물품명 등을 검색해보세요!";
var typeSpeed = 100;

searchBtn.addEventListener('click', () => {
    search.style.width = '80%';
    search.style.paddingLeft = '60px';
    search.style.cursor = 'text';
    search.focus();

    typeWriter();
});

search.addEventListener('keydown', () => {
    tip.style.visibility = "visible";
    tip.style.opacity = 1;
});

function typeWriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typeWriter, typeSpeed);
    }
}

/* contents slide */
let mnBox = jQuery(".cont_main .main_box");
let mnList = jQuery(".cont_main .main_box .main_item");
let mnList1 = jQuery(".cont_main .main_box .main_item.main_01");
let mnList2 = jQuery(".cont_main .main_box .main_item.main_02");
let mnList3 = jQuery(".cont_main .main_box .main_item.main_03");
let mnList4 = jQuery(".cont_main .main_box .main_item.main_04");
let mnList5 = jQuery(".cont_main .main_box .main_item.main_05");
let mnList6 = jQuery(".cont_main .main_box .main_item.main_06");

function parentHandler(ele) {
    return jQuery(ele).parent(mnBox);
}

mnList1.on({
    mouseenter: function () {
        mnList2.css("left", "33.3333%");
        mnList3.css("left", "46.6666%");
        mnList4.css("left", "59.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList2.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "46.6666%");
        mnList4.css("left", "59.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList3.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "59.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList4.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "39.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList5.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "39.9999%");
        mnList5.css("left", "53.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList6.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "39.9999%");
        mnList5.css("left", "53.3332%");
        mnList6.css("left", "66.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

$(document).ready(function () {
    /* 다운로드 */
    $(".contents .cont_box section.link_baro ul>li:first-child").click(function () {
        $(this).toggleClass("active");
    });
});