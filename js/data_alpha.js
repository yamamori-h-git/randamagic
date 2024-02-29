/**
 * サポート終了
 */
var dataArray = [];
dataArray = [
    [
        // kihara_1とkihara_3のドッキング
        ["./kihara_1/img/1.png", "./kihara_3/img/1.png", "./kihara_1/gif/1.gif", "./kihara_3/gif/1.gif", "./kihara_1/audio/1.mp3", "./kihara_3/audio/1.mp3", 1, 2], // 0
        ["./kihara_1/img/2.png", "./kihara_1/img/3.png", "./kihara_1/gif/2.gif", "./kihara_1/gif/3.gif", "./kihara_1/audio/2.mp3", "./kihara_1/audio/3.mp3", 3, 4], // 1(左)
        ["./kihara_3/img/2.png", "./kihara_3/img/3.png", "./kihara_3/gif/2.gif", "./kihara_3/gif/3.gif", "./kihara_3/audio/2.mp3", "./kihara_3/audio/3.mp3", 5, 6], // 2(右)
        ["./kihara_1/img/4.png", "./kihara_1/img/5.png", "./kihara_1/gif/4.gif", "./kihara_1/gif/5.gif", "./kihara_1/audio/4.mp3", "./kihara_1/audio/5.mp3", 7, 8], // 3(左左)
        ["./kihara_1/img/6.png", "./kihara_1/img/7.png", "./kihara_1/gif/6.gif", "./kihara_1/gif/7.gif", "./kihara_1/audio/6.mp3", "./kihara_1/audio/7.mp3", 9, 10], // 4(左右)
        ["./kihara_3/img/4.png", "./kihara_3/img/5.png", "./kihara_3/gif/4.gif", "./kihara_3/gif/5.gif", "./kihara_3/audio/4.mp3", "./kihara_3/audio/5.mp3", 11, 12], // 5(右左)
        ["./kihara_3/img/6.png", "./kihara_3/img/7.png", "./kihara_3/gif/6.gif", "./kihara_3/gif/7.gif", "./kihara_3/audio/6.mp3", "./kihara_3/audio/7.mp3", 13, 14], // 6(右右)
        ["", "", "", "", "", "", 0, 0], // 7(左左左)
        ["", "", "", "", "", "", 0, 0], // 8(左左右)
        ["", "", "", "", "", "", 0, 0], // 9(左右左)
        ["", "", "", "", "", "", 0, 0], // 10(左右右)
        ["", "", "", "", "", "", 0, 0], // 11(右左左)
        ["", "", "", "", "", "", 0, 0], // 12(右左右)
        ["", "", "", "", "", "", 0, 0], // 13(右右左)
        ["", "", "", "", "", "", 0, 0] // 14(右右右)
    ],
    // kihara_2とkihara_4のドッキング
    [
        ["./kihara_2/img/1.png", "./kihara_4/img/1.png", "./kihara_2/gif/1.gif", "./kihara_4/gif/1.gif", "./kihara_2/audio/1.mp3", "./kihara_4/audio/1.mp3", 1, 2], // 0
        ["./kihara_2/img/2.png", "./kihara_2/img/3.png", "./kihara_2/gif/2.gif", "./kihara_2/gif/3.gif", "./kihara_2/audio/2.mp3", "./kihara_2/audio/3.mp3", 3, 4], // 1(左)
        ["./kihara_4/img/2.png", "./kihara_4/img/3.png", "./kihara_4/gif/2.gif", "./kihara_4/gif/3.gif", "./kihara_4/audio/2.mp3", "./kihara_4/audio/3.mp3", 5, 6], // 2(右)
        ["./kihara_2/img/4.png", "./kihara_2/img/5.png", "./kihara_2/gif/4.gif", "./kihara_2/gif/5.gif", "./kihara_2/audio/4.mp3", "./kihara_2/audio/5.mp3", 7, 8], // 3(左左)
        ["./kihara_2/img/6.png", "./kihara_2/img/7.png", "./kihara_2/gif/6.gif", "./kihara_2/gif/7.gif", "./kihara_2/audio/6.mp3", "./kihara_2/audio/7.mp3", 9, 10], // 4(左右)
        ["./kihara_4/img/4.png", "./kihara_4/img/5.png", "./kihara_4/gif/4.gif", "./kihara_4/gif/5.gif", "./kihara_4/audio/4.mp3", "./kihara_4/audio/5.mp3", 11, 12], // 5(右左)
        ["./kihara_4/img/6.png", "./kihara_4/img/7.png", "./kihara_4/gif/6.gif", "./kihara_4/gif/7.gif", "./kihara_4/audio/6.mp3", "./kihara_4/audio/7.mp3", 13, 14], // 6(右右)
        ["", "", "", "", "", "", 0, 0], // 7(左左左)
        ["", "", "", "", "", "", 0, 0], // 8(左左右)
        ["", "", "", "", "", "", 0, 0], // 9(左右左)
        ["", "", "", "", "", "", 0, 0], // 10(左右右)
        ["", "", "", "", "", "", 0, 0], // 11(右左左)
        ["", "", "", "", "", "", 0, 0], // 12(右左右)
        ["", "", "", "", "", "", 0, 0], // 13(右右左)
        ["", "", "", "", "", "", 0, 0] // 14(右右右)
    ],
    [
        // hattori_1とhattori_2のドッキング
        ["./hattori_1/img/snake.png", "./hattori_2/img/shoe.png", "./hattori_1/gif/snake.gif", "./hattori_2/gif/shoe.gif", "./hattori_1/audio/", "./hattori_2/audio/", 1, 2], // 0(1蛇と2靴)
        ["./hattori_1/img/pencil.png", "./hattori_1/img/cabbage.png", "./hattori_1/gif/pencil.gif", "./hattori_1/gif/cabbage.gif", "./hattori_1/audio/", "./hattori_1/audio/", 3, 4], // 1(1鉛筆と1キャベツ)
        ["./hattori_2/img/water.png", "./hattori_2/img/river.png", "./hattori_2/gif/puddle.gif", "./hattori_2/gif/river.gif", "./hattori_2/audio/", "./hattori_2/audio/", 5, 6], // 2(2水と2川)
        ["./hattori_1/img/ground.png", "./hattori_1/img/magic.png", "./hattori_1/gif/ground.gif", "./hattori_1/gif/magic.gif", "./hattori_1/audio/", "./hattori_1/audio/", 7, 8], // 3(1土と1魔法陣)
        ["./hattori_1/img/home.png", "./hattori_1/img/foot.png", "./hattori_1/gif/home.gif", "./hattori_1/gif/foot.gif", "./hattori_1/audio/", "./hattori_1/audio/", 9, 10], // 4(1家と足)
        ["./hattori_2/img/ripple.png", "./hattori_2/img/jump.png", "./hattori_2/gif/ripple.gif", "./hattori_2/gif/jump.gif", "./hattori_2/audio/", "./hattori_2/audio/", 11, 12], // 5(2波紋と2ジャンプ)
        ["./hattori_2/img/fishing.png", "./hattori_2/img/island.png", "./hattori_2/gif/fishing.gif", "./hattori_2/gif/island.gif", "./hattori_2/audio/", "./hattori_2/audio/", 13, 14], // 6(2釣りと2島)
        ["", "", "", "", "", "", 0, 0], // 7(左左左)
        ["", "", "", "", "", "", 0, 0], // 8(左左右)
        ["", "", "", "", "", "", 0, 0], // 9(左右左)
        ["", "", "", "", "", "", 0, 0], // 10(左右右)
        ["", "", "", "", "", "", 0, 0], // 11(右左左)
        ["", "", "", "", "", "", 0, 0], // 12(右左右)
        ["", "", "", "", "", "", 0, 0], // 13(右右左)
        ["", "", "", "", "", "", 0, 0] // 14(右右右)
    ]
];
