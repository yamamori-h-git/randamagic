/**
 * v4
 * 
 * 2つのトップ無しコンテンツツリーをドッキングしたタイプ
 * 
 * サポート終了
 * 
 *・Apple以外で全画面処理を採用
 *
 * @author nochikawa ryunosuke
 */

// 配列関連
const count = dataArray.length;
var randIndex = Math.floor((Math.random() * count));

// 周回数(使途未定)
var roopCount = 0;

// 縦画面回数(使途未定)
var portraitCount = 0;

if (isSmartPhone_Tablet()) {
    if (window.orientation === 0) {
        portrait_append();
    }
}
$(window).on("orientationchange", function () {
    if (isSmartPhone_Tablet()) {
        if (window.orientation === 0) {
            portrait_append();
        }
        if (window.orientation !== 0) {
            $("#portrait").remove();
        }
    }
});

// 初回訪問時の処理
const first = (bigIndex, gifSrc, bgmSrc) => {
    $("#center").append(
        '<img class="enterAnimationQuick" src="' + gifSrc + '" alt="中央アニメーション">'
    );
    const centerGIF = $("#center img");
    centerGIF.attr("src", gifSrc + "?" + (new Date).getTime());
    $("#leftBtn").append(
        '<img src="' + dataArray[bigIndex][0][0] + '" alt="左側画像">'
    );
    $("#rightBtn").append(
        '<img src="' + dataArray[bigIndex][0][1] + '" alt="右側画像">'
    );
    $("#hiddenDataBox").append('<input type="hidden" id="nowBigIndex" value="' + bigIndex + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="nowMidIndex" value="0">');
    $("#hiddenDataBox").append('<audio preload id="nowBGM" src="' + bgmSrc + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftGIF" value="' + dataArray[bigIndex][0][2] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightGIF" value="' + dataArray[bigIndex][0][3] + '">');
    $("#hiddenDataBox").append('<audio preload id="leftBGM" src="' + dataArray[bigIndex][0][4] + '">');
    $("#hiddenDataBox").append('<audio preload id="rightBGM" src="' + dataArray[bigIndex][0][5] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + dataArray[bigIndex][0][6] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + dataArray[bigIndex][0][7] + '">');
} // 初回訪問時の処理

first(randIndex, firstCenterData, opBGM);

// 終端処理
const afterFinish = (bigIndex, gifSrc, bgmSrc) => {
    $("#center").empty();
    $("#anime").remove();
    $("#left").append('<button id="leftBtn" class="btn enterAnimation"></button>');
    $("#right").append('<button id="rightBtn" class="btn enterAnimation"></button>');
    $("#hiddenDataBox").empty();
    roopCount++;
    first(bigIndex, gifSrc, bgmSrc);
}

$(document).on("click", "#leftBtn", function () {
    if (!isApple()) {
        toggleFullScreen();
    }
    $("#center").empty();
    // GIFの処理
    $("#center").append(
        '<img src="' + $("#leftGIF").val() + "?" + (new Date).getTime() + '" alt="選択結果">'
    );
    // BGMの処理
    bgm_work("#leftBGM", playDuration);
    const bgmSrc = $("#leftBGM").attr("src");
    // 次のデータを格納
    next_data("#leftNextIndex", bgmSrc);
    // 終端地点で行う処理
    if ($("#leftNextIndex").val() == 0 && $("#rightNextIndex").val() == 0) {
        $("#leftBtn").remove();
        $("#rightBtn").remove();
        setTimeout(() => {
            $("body").append('<div id="anime"></div>');
            bgm_oped(edBGM);
        }, waitTime + cssTimeout);
        setTimeout(() => {
            afterFinish(Math.floor(Math.random() * count), firstCenterData, opBGM);
            bgm_oped(opBGM);
        }, waitTime + cssTimeout * 2);
    }
});

$(document).on("click", "#rightBtn", function () {
    if (!isApple()) {
        toggleFullScreen();
    }
    $("#center").empty();
    // GIFの処理
    $("#center").append(
        '<img src="' + $("#rightGIF").val() + "?" + (new Date).getTime() + '" alt="選択結果">'
    );
    // BGMの処理
    bgm_work("#rightBGM", playDuration);
    var bgmSrc = $("#rightBGM").attr("src");
    // 次のデータを格納
    next_data("#rightNextIndex", bgmSrc);
    // 終端地点で行う処理
    if ($("#leftNextIndex").val() == 0 && $("#rightNextIndex").val() == 0) {
        $("#leftBtn").remove();
        $("#rightBtn").remove();
        setTimeout(() => {
            $("body").append('<div id="anime"></div>');
            bgm_oped(edBGM);
        }, waitTime + cssTimeout);
        setTimeout(() => {
            afterFinish(Math.floor(Math.random() * count), firstCenterData, opBGM);
            bgm_oped(opBGM);
        }, waitTime + cssTimeout * 2);
    }
});

$(document).on("click", "#center", function () {
    if (!isApple()) {
        toggleFullScreen();
    }
    bgm_work("#nowBGM", playDuration);
    if (!$("#center img").hasClass("earth")) {
        $("#center img").removeClass('enterAnimationQuick');
        $("#center img").addClass("earth");
    } else {
        var nowDuration = $("#center img").css("animation-duration").slice(0, -1);
        // アニメーションを倍速に
        $("#center img").css("animation-duration", nowDuration / 2 + "s");
    }
});

