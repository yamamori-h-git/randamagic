/**
 * v1
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
let bgm;
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

/**
 * 初回訪問時
 * 1. 中央にGIFが入る
 * 2. 左右にデータが入る(src,data-nextIdx)
 */

let firstGIF = "gif/rocket.gif";
$("#center").append('<img src="' + firstGIF + '" alt="">');
$("#leftBtn").append('<img src="' + dataArray[0][0] + '" alt="左側画像">');
$("#rightBtn").append('<img src="' + dataArray[0][1] + '" alt="右側画像">');
$("#leftBtn").attr('data-gif', dataArray[0][2]);
$("#rightBtn").attr('data-gif', dataArray[0][3]);
$("#leftBtn").attr('data-bgm', dataArray[0][4]);
$("#rightBtn").attr('data-bgm', dataArray[0][5]);
$("#leftBtn").attr("data-nextidx", dataArray[0][6]);
$("#rightBtn").attr("data-nextidx", dataArray[0][7]);

/**
 * ファイル名(拡張子抜き)を取り出し
 * 左ボタンのvalueに格納する
*/
let workValL = $("#leftBtn img").attr("src").split("/");
$("#leftBtn").val(workValL[workValL.length - 1].split(".")[0]);

$("#leftBtn").click(function (e) {
    $("#center").empty();
    $("#center").append('<img src="" alt="">');
    let fileName = $(this).val();
    let filePath = "./gif/" + fileName + ".gif";
    console.log(fileName);
    // centerのGIF
    $("#center").find("img").attr("src", filePath);
    let nextIdx = $(this).data("nextidx");
    let bgmSrc = $(this).data("bgm");
    delete bgm;
    let bgm = new Audio();
    bgm.src = bgmSrc;
    bgm.load();
    bgm.play();
    // 音声を再生する
    // 上記のidxを基に次の配列の情報を取る
    $("#leftBtn img").empty();
    $("#rightBtn img").empty();
    $("#leftBtn img").attr("src", dataArray[nextIdx][0]);
    $("#rightBtn img").attr("src", dataArray[nextIdx][1]);
    $("#leftBtn").attr('data-gif', dataArray[nextIdx][2]);
    $("#rightBtn").attr('data-gif', dataArray[nextIdx][3]);
    $("#leftBtn").attr('data-bgm', dataArray[nextIdx][4]);
    $("#rightBtn").attr('data-bgm', dataArray[nextIdx][5]);
    $("#leftBtn").attr("data-nextidx", dataArray[nextIdx][6]);
    $("#rightBtn").attr("data-nextidx", dataArray[nextIdx][7]);
    set_val();
});

/**
 * ファイル名(拡張子抜き)を取り出し
 * 右ボタンのvalueに格納する
*/
let workValR = $("#rightBtn img").attr("src").split("/");
$("#rightBtn").val(workValR[workValR.length - 1].split(".")[0]);

$("#rightBtn").click(function (e) {
    console.log(dataArray[$(this).data("nextidx")]);
    $("#center").empty();
    $("#center").append('<img src="" alt="">');
    let fileName = $(this).val();
    let filePath = "./gif/" + fileName + ".gif";
    console.log(fileName);
    // centerのGIF
    $("#center").find("img").attr("src", filePath);
    let nextIdx = $(this).data("nextidx");
    let bgmSrc = $(this).data("bgm");
    delete bgm;
    let bgm = new Audio();
    bgm.src = bgmSrc;
    bgm.load();
    bgm.play();
    
    $("#leftBtn img").empty();
    $("#rightBtn img").empty();
    $("#leftBtn img").attr("src", dataArray[nextIdx][0]);
    $("#rightBtn img").attr("src", dataArray[nextIdx][1]);
    $("#leftBtn").attr('data-gif', dataArray[nextIdx][2]);
    $("#rightBtn").attr('data-gif', dataArray[nextIdx][3]);
    $("#leftBtn").attr('data-bgm', dataArray[nextIdx][4]);
    $("#rightBtn").attr('data-bgm', dataArray[nextIdx][5]);
    $("#leftBtn").attr("data-nextidx", dataArray[nextIdx][6]);
    $("#rightBtn").attr("data-nextidx", dataArray[nextIdx][7]);
    set_val();
});


// 中心のGIFについて
let centerGIF = $("#center img").attr("src");

/**
 * 終端処理
 * 
 * 尚、現在左右で深さが均一なコンテンツツリーであることを想定している
 */


/**
 * その他
 * 
 * ・DB若しくはJSONファイルに二分木等で画像ファイルパスを登録しておくと良いかもしれない
 * ・上記で配列にすると配列内indexを数式で正確かつ簡素に表現できるというメリットがある
 * ・各√を確立し、DBorJSONファイル化することで簡易的なコードを作成
 * 
 */


/**
 * 終端に辿り着くとカウントする
 * ・あくまでどれを制したかは不要
 * 　→数をカウントするだけ
 * ・分子にカウント/分母はルート分岐数
 */
