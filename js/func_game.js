/**
 * If the document is not in fullscreen mode, then request fullscreen mode
 */
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

/**
 * If the user agent string contains the word "iPhone" or the word "Android" followed by the word
 * "Mobile", then return true, otherwise return false
 * @returns true or false
 */
function isSmartPhone_Tablet() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
    } else {
        return false;
    }
}

/**
 * If the user agent string contains the word iPhone, iPad, Macintosh, or Mac OS, then return true,
 * otherwise return false.
 * @returns true or false
 */
function isApple() {
    if (navigator.userAgent.match(/iPhone|iPad|Macintosh|Mac OS/)) {
        return true;
    } else {
        return false;
    }
}

/**
 * It takes the image source of the left and right buttons, splits the string at the "/" character,
 * takes the last element of the resulting array, splits that string at the "." character, and takes
 * the first element of the resulting array
 */
function set_val() {
    var workValL = $("#leftBtn img").attr("src").split("/");
    $("#leftBtn").val(workValL[workValL.length - 1].split(".")[0]);
    var workValR = $("#rightBtn img").attr("src").split("/");
    $("#rightBtn").val(workValR[workValR.length - 1].split(".")[0]);
}

/**
 * It takes in three parameters, an element, a source, and an alt, and then appends an image to the
 * element with the source and alt
 * @param element - The element you want to append the image to.
 * @param src - the source of the image
 * @param alt - The alt text for the image.
 */
function create_img(element, src, alt) {
    $(element).append(
        '<img class="enterAnimation" src="' + src + '" alt="' + alt + '">'
    );
}


/**
 * Play the audio file at the given source element for the given duration.
 * @param srcElement - The element that contains the audio file.
 * @param playDuration - The duration of the sound effect.
 */
function bgm_work(srcElement, playDuration) {
    const bgm = new Audio();
    bgm.src = $(srcElement).attr("src");
    bgm.load();
    bgm.play();
    setTimeout(() => {
        bgm.pause();
        delete bgm;
    }, playDuration);
}

/**
 * Play a sound file.
 * @param src - The path to the audio file.
 */
function bgm_oped(src) {
    const bgm = new Audio();
    bgm.src = src;
    bgm.load();
    bgm.play();
}

/**
 * It takes the next index element and the bgm source as parameters, and then it creates the left and
 * right buttons, and then it creates the hidden data box
 * @param nextIndexElement - The element that contains the index of the next data.
 * @param bgmSrc - The BGM that will play when the page loads.
 */
function next_data(nextIndexElement, bgmSrc) {
    const bigIndex = $("#nowBigIndex").val();
    const midIndex = $(nextIndexElement).val();
    $("#leftBtn").empty();
    create_img("#leftBtn", dataArray[bigIndex][midIndex][0], "左側画像");
    $("#rightBtn").empty();
    create_img("#rightBtn", dataArray[bigIndex][midIndex][1], "右側画像");
    $("#hiddenDataBox").empty();
    $("#hiddenDataBox").append('<input type="hidden" id="nowBigIndex" value="' + bigIndex + '">')
    $("#hiddenDataBox").append('<input type="hidden" id="nowMidIndex" value="' + midIndex + '">');
    $("#hiddenDataBox").append('<audio preload id="nowBGM" src="' + bgmSrc + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftGIF" value="' + dataArray[bigIndex][midIndex][2] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightGIF" value="' + dataArray[bigIndex][midIndex][3] + '">');
    $("#hiddenDataBox").append('<audio preload id="leftBGM" src="' + dataArray[bigIndex][midIndex][4] + '">');
    $("#hiddenDataBox").append('<audio preload id="rightBGM" src="' + dataArray[bigIndex][midIndex][5] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + dataArray[bigIndex][midIndex][6] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + dataArray[bigIndex][midIndex][7] + '">');
}

/**
 * It appends a div with an id of "portrait" to the body of the page, and then sets the background
 * image of that div to a random image from the "bg" folder
 */
function portrait_append() {
    const bgNumber = Math.floor(Math.random() * portBgCount);
    $("body").append('<div id="portrait"><img src="./img/pl.png"></div>');
    $("#portrait").css("background-image", "url(./img/port_bg/" + bgNumber + ".jpg)");
    portraitCount++;
}

/**
 * The function `getParam` is used to retrieve the value of a specified parameter from a URL.
 * @param name - The name parameter is the name of the query parameter you want to retrieve from the
 * URL.
 * @param url - The `url` parameter is optional and represents the URL from which you want to extract
 * the parameter value. If no `url` is provided, it defaults to the current window's location
 * (`window.location.href`).
 * @returns the value of the parameter specified by the "name" argument in the URL.
 */
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
