/**
 * v3
 * 
 * サポート終了
 */


// cssアニメーションの待ち時間
const cssTimeout = 2000;
// 配列にファイルパスを入れていくイメージ
let dataArray = [];

// 当ファイルの外から出してくる予定
/**
 * 仮に
 * 
 * [0] => 左側の画像ファイルパス
 * [1] => 右側の画像ファイルパス
 * [2] => 左側選択時のGIFファイルパス
 * [3] => 右側選択時のGIFファイルパス
 * [4] => 左側選択時の音声ファイルパス
 * [5] => 右側選択時の音声ファイルパス
 * [6] => 左側選択時の次参照するidx
 * [7] => 右側選択時の次参照するidx
 * [8] => 戻る
 * 
 * [6],[7]について
 * ツリーの終端ならば-1が入る
 * →スタートに戻る
 * 
 * 画像の名称もaltに入れる事も検討対象に含める
 * 
 */

dataArray = [
    // ["左側画像","右側画像","左選択GIF","右選択GIF","左選択BGM","右選択BGM",左選択nextidx,右選択nextidx]
    ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 1, 2],
    ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./audio/push.wav", "./audio/push.wav", 3, 4],
    ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 5, 6],
    ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 0, 0],
    ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 0, 0],
    ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 0, 0],
    ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 0, 0]
];

// 初回訪問時の処理
const first = (gifSrc) => {
    $("#center").append(
        '<img src="' + gifSrc + '" alt="中央アニメーション">'
    );
    $("#leftBtn").append(
        '<img src="' + dataArray[0][0] + '" alt="左側画像">'
    );
    $("#rightBtn").append(
        '<img src="' + dataArray[0][1] + '" alt="右側画像">'
    );
    $("#hiddenDataBox").append('<input type="hidden" id="nowIndex" value="0">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftGIF" value="' + dataArray[0][2] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightGIF" value="' + dataArray[0][3] + '">');
    $("#hiddenDataBox").append('<audio preload id="leftBGM" src="' + dataArray[0][4] + '">');
    $("#hiddenDataBox").append('<audio preload id="rightBGM" src="' + dataArray[0][5] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + dataArray[0][6] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + dataArray[0][7] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="back" value="' + dataArray[0][8] + '">');
    const centerGIF = $("#center img");
    centerGIF.attr("src", gifSrc + "?" + (new Date).getTime());
} // 初回訪問時の処理

let firstGIF = "./gif/lavender.gif";
first(firstGIF);

// 終端処理
const afterFinish = (gifSrc) => {
    $("#anime").remove();
    $("#center").empty();
    $("#left").append('<button id="leftBtn" class="btn"></button>');
    $("#right").append('<button id="rightBtn" class="btn"></button>');
    $("#hiddenDataBox").empty();
    first(gifSrc);
}


$(document).on("click change", "#leftBtn", function () {
    $("#center").empty();
    // GIFの処理
    $("#center").append(
        '<img src="' + $("#leftGIF").val() + "?" + (new Date).getTime() + '" alt="選択結果">'
    );
    // BGMの処理
    const bgm = new Audio;
    bgm.src = $("#leftBGM").attr("src");
    bgm.load();
    bgm.play();
    // 次のデータを格納
    const index = $("#leftNextIndex").val();
    $("#leftBtn").empty();
    create_img("#leftBtn", dataArray[index][0], "左側画像");
    $("#rightBtn").empty();
    create_img("#rightBtn", dataArray[index][1], "右側画像");
    $("#hiddenDataBox").empty();
    $("#hiddenDataBox").append('<input type="hidden" id="nowIndex" value="' + index + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftGIF" value="' + dataArray[index][2] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightGIF" value="' + dataArray[index][3] + '">');
    $("#hiddenDataBox").append('<audio preload id="leftBGM" src="' + dataArray[index][4] + '">');
    $("#hiddenDataBox").append('<audio preload id="rightBGM" src="' + dataArray[index][5] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + dataArray[index][6] + '">');
    $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + dataArray[index][7] + '">');
    if ($("#leftNextIndex").val() == 0 && $("#rightNextIndex").val() == 0) {
        // 終端地点で行う処理
        $("#leftBtn").remove();
        $("#rightBtn").remove();
        setTimeout(() => {
            $("body").append('<div id="anime"></div>');
            const bgm = new Audio();
            bgm.src = "./audio/haha.wav";
            bgm.load();
            bgm.play();
        }, cssTimeout);
        setTimeout(() => {
            afterFinish(firstGIF);
            const bgm = new Audio();
            bgm.src = "./audio/haha.wav";
            bgm.load();
            bgm.play();
        }, cssTimeout * 2);
    }
});


$(document).on("click change", "#rightBtn", function () {
    $("#center").empty();
    // GIFの処理
    $("#center").append(
        '<img src="' + $("#rightGIF").val() + "?" + (new Date).getTime() + '" alt="選択結果">'
        );
        // BGMの処理
        const bgm = new Audio;
        bgm.src = $("#rightBGM").attr("src");
        bgm.load();
        bgm.play();
        // 次のデータを格納
        const index = $("#rightNextIndex").val();
        $("#leftBtn").empty();
        create_img("#leftBtn", dataArray[index][0], "左側画像");
        $("#rightBtn").empty();
        create_img("#rightBtn", dataArray[index][1], "右側画像");
        $("#hiddenDataBox").empty();
        $("#hiddenDataBox").append('<input type="hidden" id="nowIndex" value="' + index + '">');
        $("#hiddenDataBox").append('<input type="hidden" id="leftGIF" value="' + dataArray[index][2] + '">');
        $("#hiddenDataBox").append('<input type="hidden" id="rightGIF" value="' + dataArray[index][3] + '">');
        $("#hiddenDataBox").append('<audio preload id="leftBGM" src="' + dataArray[index][4] + '">');
        $("#hiddenDataBox").append('<audio preload id="rightBGM" src="' + dataArray[index][5] + '">');
        $("#hiddenDataBox").append('<input type="hidden" id="leftNextIndex" value="' + dataArray[index][6] + '">');
        $("#hiddenDataBox").append('<input type="hidden" id="rightNextIndex" value="' + dataArray[index][7] + '">');
        if ($("#leftNextIndex").val() == 0 && $("#rightNextIndex").val() == 0) {
            // 終端地点で行う処理
            $("#leftBtn").remove();
            $("#rightBtn").remove();
            setTimeout(() => {
                $("body").append('<div id="anime"></div>');
                const bgm = new Audio();
                bgm.src = "./audio/haha.wav";
                bgm.load();
                bgm.play();
            }, cssTimeout);
        setTimeout(() => {
            afterFinish(firstGIF);
            const bgm = new Audio();
            bgm.src = "./audio/haha.wav";
            bgm.load();
            bgm.play();
        }, cssTimeout * 2);
    }
});
