let dataArray = [];
dataArray = [
    [
        // ["左側画像","右側画像","左選択GIF","右選択GIF","左選択BGM","右選択BGM",左選択nextidx,右選択nextidx]
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun_niwa.wav", "./audio/zun2.wav", 1, 2],
        ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./audio/zun3.wav", "./audio/zun1.wav", 3, 4],
        ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun2.wav", 5, 6],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun2.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun2.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun3.wav", "./audio/zun2.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun2.wav", 0, 0]
    ],
    [
        ["./img/back.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun2.wav", 1, 2],
        ["./img/rocket.png", "./img/niwa.png", "./gif/rocket.gif", "./gif/niwa.gif", "./audio/zun1.wav", "./audio/zun1.wav", 3, 4],
        ["./img/rocket.png", "./img/rocket.png", "./gif/rocket.gif", "./gif/rocket.gif", "./audio/zun3.wav", "./audio/zun2.wav", 5, 6],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun_niwa.wav", "./audio/zun2.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun3.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun3.wav", "./audio/zun2.wav", 0, 0],
        ["./img/niwa.png", "./img/rocket.png", "./gif/niwa.gif", "./gif/rocket.gif", "./audio/zun1.wav", "./audio/zun2.wav", 0, 0]
    ],

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
    ]
];
