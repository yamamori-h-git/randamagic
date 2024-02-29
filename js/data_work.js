// 配列にファイルパスを入れていくイメージ
let dataArray = [];

/**
 * 
 * 選択肢が2つで固定の場合
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
 * ツリーの終端ならば0が入る
 * →スタートに戻る
 * 
 * 画像の名称もaltに入れる事も検討対象に含める
 * 
 */
dataArray = [
    [
        // ["左側画像","右側画像","左選択GIF","右選択GIF","左選択BGM","右選択BGM",左選択nextidx,右選択nextidx]
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 1, 2],
        ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./kihara_1/audio/rain.mp3.mp3", "./kihara_1/audio/rain.mp3.mp3", 3, 4],
        ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 5, 6],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0]
    ],
    [
        ["./img/back.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 1, 2],
        ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./audio/haha.wav", "./kihara_1/audio/rain.mp3.mp3", 3, 4],
        ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 5, 6],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/haha.wav", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0]
    ],
    [
        ["./img/back.png", "./img/back.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 1, 2],
        ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./audio/haha.wav", "./kihara_1/audio/rain.mp3.mp3", 3, 4],
        ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 5, 6],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/haha.wav", "./audio/chord.wav", 7, 8],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 9, 10],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 11, 12],
        ["./img/niwa.png", "./ img / rocket.png", "./ gif / niwa.gif", "./ gif / rocket.gif", "./ kihara_1 / audio / rain.mp3.mp3", "./ audio / chord.wav", 13, 14],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/haha.wav", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/haha.wav", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./kihara_1/audio/rain.mp3.mp3", "./audio/chord.wav", 0, 0]
    ],
];
