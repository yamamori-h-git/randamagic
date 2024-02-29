/**
 * category
 * 
 * It's a game.
 * 
 * @author ryunosuke nochikawa
 */

/**
 * データの加工・処理方法
 * <考え方>
 * ・choice_v5, func_gameを基に作成を前提に
 * ・topArrayの考え方を排除
 * ・xxxxxxxNextIndexは現在のindexと異なる2つであれば良いとする(現状)
 * ・ルートの考え方を排除⇒終端という考え方は常 or 無(無を採用)
 * ・イラスト情報について
 * 　・カテゴリ・言語共指定の場合[確定][確定][変動]となることからmidIndexという存在自体が消滅する
 * 　・フルコースの場合は配列を加工して[確定][確定][変動]とする方が容易か？
 * ・状況によって配列をjoinする必要がある事を留意する
 * 　・つまり、リンクによってスポーツや乗り物を一つの配列として再構築する
 * 
 * ※言語はフルコース無し、カテゴリはフルコース対応
 * 
 * <具体例>
 * leftBtn
 * center
 * rightBtn
*/

// 配列関連
const count = categoryAllData.length;
var randIndex = Math.floor((Math.random() * count));

var categoryArrayIdx = getParam("c");
var languageArrayIdx = parseInt(getParam("l")) + 1;

// 深さ
var depth = 0;

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
const first = (imgSrc, bgmSrc) => {
    var useArrayData;
    useArrayData = categoryAllData[categoryArrayIdx];

    $("#center").append(
        '<img src="' + imgSrc + '" alt="中央画像">'
    );

    const centerIMG = $("#center img");
    centerIMG.attr("src", imgSrc);
    const work = useArrayData.length;

    // 次回の配列添え字
    const nextLeftIndex = Math.floor(Math.random() * work);
    var nextRightIndex = Math.floor(Math.random() * work);
    while (nextRightIndex == nextLeftIndex) {
        nextRightIndex = Math.floor(Math.random() * work);
    }

    $("#leftBtn").append(
        '<img src="category/img/' + useArrayData[nextLeftIndex][0] + '" alt="左側画像">'
    );
    $("#rightBtn").append(
        '<img src="category/img/' + useArrayData[nextRightIndex][0] + '" alt="右側画像">'
    );
    $("#hiddenDataBox").append('<audio preload id="nowBGM" src="' + bgmSrc + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftIMG" value="category/img/' + useArrayData[nextLeftIndex][0] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightIMG" value="category/img/' + useArrayData[nextRightIndex][0] + '">');
    $("#hiddenDataBox").append('<audio preload id="leftBGM" src="category/audio/' + useArrayData[nextLeftIndex][languageArrayIdx] + '">');
    $("#hiddenDataBox").append('<audio preload id="rightBGM" src="category/audio/' + useArrayData[nextRightIndex][languageArrayIdx] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + nextLeftIndex + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + nextRightIndex + '">');
} // 初回訪問時の処理

first(firstCenterData, opBGM);

// 2回目以降の処理
const secondTimeData = (bigIndexElement, bgmSrc) => {
    const work = categoryAllData[getParam("c")].length;
    const bigIndex = $(bigIndexElement).val();
    
    var nextLeftIndex = Math.floor(Math.random() * work);
    while (nextLeftIndex == bigIndex) {
        nextRightIndex = Math.floor(Math.random() * work);
    }
    var nextRightIndex = Math.floor(Math.random() * work);
    while (nextRightIndex == bigIndex || nextRightIndex == nextLeftIndex) {
        nextRightIndex = Math.floor(Math.random() * work);
    }
    $("#leftBtn").empty();
    create_img("#leftBtn", "category/img/" + categoryAllData[getParam("c")][nextLeftIndex][0], "左側画像");
    $("#rightBtn").empty();
    create_img("#rightBtn", "category/img/" + categoryAllData[getParam("c")][nextRightIndex][0], "右側画像");
    $("#hiddenDataBox").empty();
    $("#hiddenDataBox").append('<audio preload id="nowBGM" src="' + bgmSrc + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftIMG" value="category/img/' + categoryAllData[getParam("c")][nextLeftIndex][0] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightIMG" value="category/img/' + categoryAllData[getParam("c")][nextRightIndex][0] + '">');
    $("#hiddenDataBox").append('<audio preload id="leftBGM" src="category/audio/' + categoryAllData[getParam("c")][nextLeftIndex][languageArrayIdx] + '">');
    $("#hiddenDataBox").append('<audio preload id="rightBGM" src="category/audio/' + categoryAllData[getParam("c")][nextRightIndex][languageArrayIdx] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + nextLeftIndex + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + nextRightIndex + '">');
}

$(document).on("click", "#left", function () {
    $("#center").empty();
    // IMGの処理
    $("#center").append(
        '<img src="' + $("#leftIMG").val() + "?" + (new Date).getTime() + '" alt="選択結果">'
    );
    // BGMの処理
    bgm_work("#leftBGM", playDuration);
    var bgmSrc = $("#leftBGM").attr("src");
    // 次のデータを格納
    secondTimeData("#leftNextIndex", bgmSrc);
});

$(document).on("click", "#right", function () {
    $("#center").empty();
    // IMGの処理
    $("#center").append(
        '<img src="' + $("#rightIMG").val() + "?" + (new Date).getTime() + '" alt="選択結果">'
    );
    // BGMの処理
    bgm_work("#rightBGM", playDuration);
    var bgmSrc = $("#rightBGM").attr("src");
    // 次のデータを格納
    secondTimeData("#rightNextIndex", bgmSrc);
    depth++;
});

$(document).on("click", "#center", function () {
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
