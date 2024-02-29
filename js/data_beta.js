/**
 * 先頭の情報配列
 * 
 * 各ルートの先頭情報が格納されている。
 */
var topArray = [];
topArray = [
    [
        // kihara_1
        "./kihara_1/img/1.png", "./kihara_1/gif/1.gif", "./kihara_1/audio/1.mp3"
    ],
    [
        // kihara_2
        "./kihara_2/img/1.png", "./kihara_2/gif/1.gif", "./kihara_2/audio/1.mp3"
    ],
    [
        // kihara_3
        "./kihara_3/img/1.png", "./kihara_3/gif/1.gif", "./kihara_3/audio/1.mp3"
    ],
    [
        // kihara_4
        "./kihara_4/img/1.png", "./kihara_4/gif/1.gif", "./kihara_4/audio/1.mp3"
    ],
    [
        // kihara_5
        "./kihara_5/img/1.png", "./kihara_5/gif/1.gif", "./kihara_5/audio/1.mp3"
    ],
    [
        // hattori_1
        "./hattori_1/img/snake.png", "./hattori_1/gif/snake.gif", "./hattori_1/audio/1.mp3"
    ],
    [
        // hattori_2
        "./hattori_2/img/shoe.png", "./hattori_2/gif/shoe.gif", "./hattori_2/audio/1.mp3"
    ],
    [
        // yamamori_1
        "./yamamori_1/img/1.png", "./yamamori_1/gif/1.gif", "./yamamori_1/audio/1.mp3"
    ],
    [
        // yamamori_2
        "./yamamori_2/img/1.png", "./yamamori_2/gif/1.gif", "./yamamori_2/audio/1.mp3"
    ],
    [
        // yamamori_3
        "./yamamori_3/img/1.png", "./yamamori_3/gif/1.gif", "./yamamori_3/audio/1.mp3"
    ]
];

/**
 * 情報配列
 * 
 * 各ルートの先頭を除く情報が格納されている。
 */
var dataArray = [];
dataArray = [
    [
        // kihara_1
        ["./kihara_1/img/2.png", "./kihara_1/img/3.png", "./kihara_1/gif/2.gif", "./kihara_1/gif/3.gif", "./kihara_1/audio/2.mp3", "./kihara_1/audio/3.mp3", 1, 2],
        ["./kihara_1/img/4.png", "./kihara_1/img/5.png", "./kihara_1/gif/4.gif", "./kihara_1/gif/5.gif", "./kihara_1/audio/4.mp3", "./kihara_1/audio/5.mp3", 3, 4],
        ["./kihara_1/img/6.png", "./kihara_1/img/7.png", "./kihara_1/gif/6.gif", "./kihara_1/gif/7.gif", "./kihara_1/audio/6.mp3", "./kihara_1/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // kihara_2
        ["./kihara_2/img/2.png", "./kihara_2/img/3.png", "./kihara_2/gif/2.gif", "./kihara_2/gif/3.gif", "./kihara_2/audio/2.mp3", "./kihara_2/audio/3.mp3", 1, 2],
        ["./kihara_2/img/4.png", "./kihara_2/img/5.png", "./kihara_2/gif/4.gif", "./kihara_2/gif/5.gif", "./kihara_2/audio/4.mp3", "./kihara_2/audio/5.mp3", 3, 4],
        ["./kihara_2/img/6.png", "./kihara_2/img/7.png", "./kihara_2/gif/6.gif", "./kihara_2/gif/7.gif", "./kihara_2/audio/6.mp3", "./kihara_2/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // kihara_3
        ["./kihara_3/img/2.png", "./kihara_3/img/3.png", "./kihara_3/gif/2.gif", "./kihara_3/gif/3.gif", "./kihara_3/audio/2.mp3", "./kihara_3/audio/3.mp3", 1, 2],
        ["./kihara_3/img/4.png", "./kihara_3/img/5.png", "./kihara_3/gif/4.gif", "./kihara_3/gif/5.gif", "./kihara_3/audio/4.mp3", "./kihara_3/audio/5.mp3", 3, 4],
        ["./kihara_3/img/6.png", "./kihara_3/img/7.png", "./kihara_3/gif/6.gif", "./kihara_3/gif/7.gif", "./kihara_3/audio/6.mp3", "./kihara_3/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // kihara_4
        ["./kihara_4/img/2.png", "./kihara_4/img/3.png", "./kihara_4/gif/2.gif", "./kihara_4/gif/3.gif", "./kihara_4/audio/2.mp3", "./kihara_4/audio/3.mp3", 1, 2],
        ["./kihara_4/img/4.png", "./kihara_4/img/5.png", "./kihara_4/gif/4.gif", "./kihara_4/gif/5.gif", "./kihara_4/audio/4.mp3", "./kihara_4/audio/5.mp3", 3, 4],
        ["./kihara_4/img/6.png", "./kihara_4/img/7.png", "./kihara_4/gif/6.gif", "./kihara_4/gif/7.gif", "./kihara_4/audio/6.mp3", "./kihara_4/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // kihara_5
        ["./kihara_5/img/2.png", "./kihara_5/img/3.png", "./kihara_5/gif/2.gif", "./kihara_5/gif/3.gif", "./kihara_5/audio/2.mp3", "./kihara_5/audio/3.mp3", 1, 2],
        ["./kihara_5/img/4.png", "./kihara_5/img/5.png", "./kihara_5/gif/4.gif", "./kihara_5/gif/5.gif", "./kihara_5/audio/4.mp3", "./kihara_5/audio/5.mp3", 3, 4],
        ["./kihara_5/img/6.png", "./kihara_5/img/7.png", "./kihara_5/gif/6.gif", "./kihara_5/gif/7.gif", "./kihara_5/audio/6.mp3", "./kihara_5/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // hattori_1
        ["./hattori_1/img/pencil.png", "./hattori_1/img/cabbage.png", "./hattori_1/gif/pencil.gif", "./hattori_1/gif/cabbage.gif", "./hattori_1/audio/2.mp3", "./hattori_1/audio/3.mp3", 1, 2],
        ["./hattori_1/img/ground.png", "./hattori_1/img/magic.png", "./hattori_1/gif/ground.gif", "./hattori_1/gif/magic.gif", "./hattori_1/audio/4.mp3", "./hattori_1/audio/5.mp3", 3, 4],
        ["./hattori_1/img/home.png", "./hattori_1/img/foot.png", "./hattori_1/gif/home.gif", "./hattori_1/gif/foot.gif", "./hattori_1/audio/6.mp3", "./hattori_1/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // hattori_2
        ["./hattori_2/img/water.png", "./hattori_2/img/river.png", "./hattori_2/gif/puddle.gif", "./hattori_2/gif/river.gif", "./hattori_2/audio/2.mp3", "./hattori_2/audio/3.mp3", 1, 2],
        ["./hattori_2/img/ripple.png", "./hattori_2/img/jump.png", "./hattori_2/gif/ripple.gif", "./hattori_2/gif/jump.gif", "./hattori_2/audio/4.mp3", "./hattori_2/audio/5.mp3", 3, 4],
        ["./hattori_2/img/fishing.png", "./hattori_2/img/island.png", "./hattori_2/gif/fishing.gif", "./hattori_2/gif/island.gif", "./hattori_2/audio/6.mp3", "./hattori_2/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // yamamori_1
        ["./yamamori_1/img/2.png", "./yamamori_1/img/3.png", "./yamamori_1/gif/2.gif", "./yamamori_1/gif/3.gif", "./yamamori_1/audio/2.mp3", "./yamamori_1/audio/3.mp3", 1, 2],
        ["./yamamori_1/img/4.png", "./yamamori_1/img/5.png", "./yamamori_1/gif/4.gif", "./yamamori_1/gif/5.gif", "./yamamori_1/audio/4.mp3", "./yamamori_1/audio/5.mp3", 3, 4],
        ["./yamamori_1/img/6.png", "./yamamori_1/img/7.png", "./yamamori_1/gif/6.gif", "./yamamori_1/gif/7.gif", "./yamamori_1/audio/6.mp3", "./yamamori_1/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // yamamori_2
        ["./yamamori_2/img/2.png", "./yamamori_2/img/3.png", "./yamamori_2/gif/2.gif", "./yamamori_2/gif/3.gif", "./yamamori_2/audio/2.mp3", "./yamamori_2/audio/3.mp3", 1, 2],
        ["./yamamori_2/img/4.png", "./yamamori_2/img/5.png", "./yamamori_2/gif/4.gif", "./yamamori_2/gif/5.gif", "./yamamori_2/audio/4.mp3", "./yamamori_2/audio/5.mp3", 3, 4],
        ["./yamamori_2/img/6.png", "./yamamori_2/img/7.png", "./yamamori_2/gif/6.gif", "./yamamori_2/gif/7.gif", "./yamamori_2/audio/6.mp3", "./yamamori_2/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ],
    [
        // yamamori_3
        ["./yamamori_3/img/2.png", "./yamamori_3/img/3.png", "./yamamori_3/gif/2.gif", "./yamamori_3/gif/3.gif", "./yamamori_3/audio/2.mp3", "./yamamori_3/audio/3.mp3", 1, 2],
        ["./yamamori_3/img/4.png", "./yamamori_3/img/5.png", "./yamamori_3/gif/4.gif", "./yamamori_3/gif/5.gif", "./yamamori_3/audio/4.mp3", "./yamamori_3/audio/5.mp3", 3, 4],
        ["./yamamori_3/img/6.png", "./yamamori_3/img/7.png", "./yamamori_3/gif/6.gif", "./yamamori_3/gif/7.gif", "./yamamori_3/audio/6.mp3", "./yamamori_3/audio/7.mp3", 5, 6],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0],
        ["", "", "", "", "", "", 0, 0]
    ]
];
