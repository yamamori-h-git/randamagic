/**
 * v2
 * 
 * 注意
 * 
 * サポート終了
 * 
 * img/*.pngとgif/*.gifの*部については一致している事
 * 上記は現状から開発が進むうえで改善される可能性有り
 * 
 * @author ryunosuke nochikawa
*/
// 配列にファイルパスを入れていくイメージ
let dataArray = [];

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
 * 
 * [6],[7]について
 * ツリーの終端ならば-1が入る
 * →スタートに戻る
 * 
 * 画像の名称もaltに入れる事も検討対象に含める
 * 
 */

// 当ファイルの外から出してくる予定
dataArray = [
    // ["左側画像","右側画像","左選択GIF","右選択GIF","左選択BGM","右選択BGM",左選択nextidx,右選択nextidx]
    ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 1, 2],
    ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./audio/push.wav", "./audio/push.wav", 2, 1],
    ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./audio/push.wav", "./audio/chord.wav", 1, 0],
];
let gif = "";
// 初回訪問時の処理
$("#leftBtn").val(0);
$("#rightBtn").val(0);
let firstGIF = "./gif/lavender.gif";
$("#center").append(
    '<img src="' + firstGIF + '" alt="中央アニメーション">'
);
$("#leftBtn").append(
    '<img src="' + dataArray[0][0] + '" alt="左側画像">'
);
$("#rightBtn").append(
    '<img src="' + dataArray[0][1] + '" alt="右側画像">'
);
$("#leftBtn").attr("data-gif", dataArray[0][2]);
$("#rightBtn").attr("data-gif", dataArray[0][3]);
$("#leftBtn").attr("data-bgm", dataArray[0][4]);
$("#rightBtn").attr("data-bgm", dataArray[0][5]);
$("#leftBtn").attr("data-nextidx", dataArray[0][6]);
$("#rightBtn").attr("data-nextidx", dataArray[0][7]);

$(document).on("click change","#leftBtn",function () {
    $("#center").empty();
    // GIFの処理
    $("#center").append('<img src="' + dataArray[$("#leftBtn").val()][2] + '" alt="選択結果">');
    // BGMの処理
    let bgmSrc = $("#leftBtn").data("bgm");
    let bgm = new Audio();
    bgm.load();
    bgm.src = bgmSrc;
    bgm.volume = 0.5;
    bgm.play();
    // 次のデータ配列を使用する為のindex
    const nextidx = $("#leftBtn").data("nextidx");
    console.log(nextidx);
    $("#leftBtn").removeAttr("data-nextidx");
    $("#leftBtn").val(nextidx);
    $("#rightBtn").val(nextidx);
    // 左ボタン画像の処理
    $("#leftBtn").empty();
    create_img("#leftBtn", dataArray[nextidx][0], "左側画像");
    // 右ボタン画像の処理
    $("#rightBtn").empty();
    create_img("#rightBtn", dataArray[nextidx][1], "右側画像");
    // 左ボタンGIF情報の処理
    $("#leftBtn").removeAttr("data-gif");
    $("#leftBtn").attr("data-gif", dataArray[nextidx][2]);
    // 右ボタンGIF情報の処理
    $("#rightBtn").removeAttr("data-gif");
    $("#rightBtn").attr("data-gif", dataArray[nextidx][3]);
    // 左ボタンBGM情報の処理
    $("#leftBtn").attr("data-bgm", dataArray[nextidx][4]);
    // 右ボタンBGM情報の処理
    $("#rightBtn").attr("data-bgm", dataArray[nextidx][5]);
    // 左ボタンnextidxの処理
    $("#leftBtn").attr("data-nextidx", dataArray[nextidx][6]);
    // 右ボタンnextidxの処理
    $("#rightBtn").attr("data-nextidx", dataArray[nextidx][7]);
});

$(document).on("click change", "#rightBtn", function () {
    $("#center").empty();
    // GIFの処理
    $("#center").append('<img src="' + dataArray[$("#rightBtn").val()][3] + '" alt="選択結果">');
    // BGMの処理
    let bgmSrc = $("#rightBtn").data("bgm");
    let bgm = new Audio();
    bgm.load();
    bgm.src = bgmSrc;
    bgm.volume = 0.5;
    bgm.play();
    // 次のデータ配列を使用する為のindex
    nextidx = $("#rightBtn").data("nextidx");
    console.log(nextidx);
    // 左ボタン画像の処理
    $("#leftBtn").empty();
    create_img("#leftBtn", dataArray[nextidx][0], "左側画像");
    // 右ボタン画像の処理
    $("#rightBtn").empty();
    create_img("#rightBtn", dataArray[nextidx][1], "右側画像");
    // 左ボタンGIF情報の処理
    $("#leftBtn").attr("data-gif", dataArray[nextidx][2]);
    // 右ボタンGIF情報の処理
    $("#rightBtn").attr("data-gif", dataArray[nextidx][3]);
    // 左ボタンBGM情報の処理
    $("#leftBtn").attr("data-bgm", dataArray[nextidx][4]);
    // 右ボタンBGM情報の処理
    $("#rightBtn").attr("data-bgm", dataArray[nextidx][5]);
    // 左ボタンnextidxの処理
    $("#leftBtn").attr("data-nextidx", dataArray[nextidx][6]);
    // 右ボタンnextidxの処理
    $("#rightBtn").attr("data-nextidx", dataArray[nextidx][7]);
    $("#leftBtn").val(nextidx);
    $("#rightBtn").val(nextidx);
});
