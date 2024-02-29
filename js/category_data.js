/**
 * 情報配列のカタチを整理
 * 
 * 大分類 => イラストの種類
 * 
 * 中分類 => 
 * 　　[0] => 大分類のイラスト情報(箱)
 * 　以降 => 言語の種類
 * 
 * 小分類 => 各末端要素
 * 
 * 大分類
 * [0] => 動物
 * [1] => 乗り物
 * [2] => スポーツ
 * 
 * 中分類・小分類
 * [0] => 大分類のイラスト情報
 * [1] => 日本語
 * [2] => 英語
 * [3] => 中国語
 * [4] => 韓国語
 * 
 * 以下例示
 * [0][0][0] => 動物のイラスト(1個目)
 * [0][0][1] => 動物のイラスト(1個目)に対応した日本語音声
 * => イラスト情報の[a][b][c]と対応する音声ファイルは[a][b][x]
 * 
 * パス情報
 * イラストは"./category/img/"に文字列連結するカタチで
 * 音声ファイルは"./category/audio/"に文字列連結するカタチで
 */

const categoryAllData = [
    // [0] => 動物
    [
        // [0][0] => 動物のイラスト
        [
            "animal/0.png", "animal/ja/0.mp3", "animal/en/0.mp3", "animal/zh/0.mp3", "animal/ko/0.mp3"
        ],
        [
            "animal/1.png", "animal/ja/1.mp3", "animal/en/1.mp3", "animal/zh/1.mp3", "animal/ko/1.mp3"
        ],
        [
            "animal/2.png", "animal/ja/2.mp3", "animal/en/2.mp3", "animal/zh/2.mp3", "animal/ko/2.mp3"
        ],
        [
            "animal/3.png", "animal/ja/3.mp3", "animal/en/3.mp3", "animal/zh/3.mp3", "animal/ko/3.mp3"
        ],
        [
            "animal/4.png", "animal/ja/4.mp3", "animal/en/4.mp3", "animal/zh/4.mp3", "animal/ko/4.mp3"
        ],
        [
            "animal/5.png", "animal/ja/5.mp3", "animal/en/5.mp3", "animal/zh/5.mp3", "animal/ko/5.mp3"
        ],
        [
            "animal/6.png", "animal/ja/6.mp3", "animal/en/6.mp3", "animal/zh/6.mp3", "animal/ko/6.mp3"
        ],
        [
            "animal/7.png", "animal/ja/7.mp3", "animal/en/7.mp3", "animal/zh/7.mp3", "animal/ko/7.mp3"
        ],
        [
            "animal/8.png", "animal/ja/8.mp3", "animal/en/8.mp3", "animal/zh/8.mp3", "animal/ko/8.mp3"
        ],
        [
            "animal/9.png", "animal/ja/9.mp3", "animal/en/9.mp3", "animal/zh/9.mp3", "animal/ko/9.mp3"
        ],
        [
            "animal/10.png", "animal/ja/10.mp3", "animal/en/10.mp3", "animal/zh/10.mp3", "animal/ko/10.mp3"
        ],
        [
            "animal/11.png", "animal/ja/11.mp3", "animal/en/11.mp3", "animal/zh/11.mp3", "animal/ko/11.mp3"
        ],
        [
            "animal/12.png", "animal/ja/12.mp3", "animal/en/12.mp3", "animal/zh/12.mp3", "animal/ko/12.mp3"
        ],
        [
            "animal/13.png", "animal/ja/13.mp3", "animal/en/13.mp3", "animal/zh/13.mp3", "animal/ko/13.mp3"
        ],
        [
            "animal/14.png", "animal/ja/14.mp3", "animal/en/14.mp3", "animal/zh/14.mp3", "animal/ko/14.mp3"
        ],
        [
            "animal/15.png", "animal/ja/15.mp3", "animal/en/15.mp3", "animal/zh/15.mp3", "animal/ko/15.mp3"
        ],
        [
            "animal/16.png", "animal/ja/16.mp3", "animal/en/16.mp3", "animal/zh/16.mp3", "animal/ko/16.mp3"
        ],
        [
            "animal/17.png", "animal/ja/17.mp3", "animal/en/17.mp3", "animal/zh/17.mp3", "animal/ko/17.mp3"
        ],
        [
            "animal/18.png",
            "animal/ja/18.mp3",
            "animal/en/18.mp3",
            "animal/zh/18.mp3",
            "animal/ko/18.mp3"
        ],
        [
            "animal/19.png",
            "animal/ja/19.mp3",
            "animal/en/19.mp3",
            "animal/zh/19.mp3",
            "animal/ko/19.mp3"
        ],
        [
            "animal/20.png",
            "animal/ja/20.mp3",
            "animal/en/20.mp3",
            "animal/zh/20.mp3",
            "animal/ko/20.mp3"
        ],
        [
            "animal/21.png",
            "animal/ja/21.mp3",
            "animal/en/21.mp3",
            "animal/zh/21.mp3",
            "animal/ko/21.mp3"
        ],
        [
            "animal/22.png",
            "animal/ja/22.mp3",
            "animal/en/22.mp3",
            "animal/zh/22.mp3",
            "animal/ko/22.mp3"
        ],
        [
            "animal/23.png",
            "animal/ja/23.mp3",
            "animal/en/23.mp3",
            "animal/zh/23.mp3",
            "animal/ko/23.mp3"
        ],
        [
            "animal/24.png",
            "animal/ja/24.mp3",
            "animal/en/24.mp3",
            "animal/zh/24.mp3",
            "animal/ko/24.mp3"
        ],
        [
            "animal/25.png",
            "animal/ja/25.mp3",
            "animal/en/25.mp3",
            "animal/zh/25.mp3",
            "animal/ko/25.mp3"
        ]
    ],
    // [1] => 乗り物
    [
        [
            "vehicle/0.png",
            "vehicle/ja/0.mp3",
            "vehicle/en/0.mp3",
            "vehicle/zh/0.mp3",
            "vehicle/ko/0.mp3"
        ],
        [
            "vehicle/1.png",
            "vehicle/ja/1.mp3",
            "vehicle/en/1.mp3",
            "vehicle/zh/1.mp3",
            "vehicle/ko/1.mp3"
        ],
        [
            "vehicle/2.png",
            "vehicle/ja/2.mp3",
            "vehicle/en/2.mp3",
            "vehicle/zh/2.mp3",
            "vehicle/ko/2.mp3"
        ],
        [
            "vehicle/3.png",
            "vehicle/ja/3.mp3",
            "vehicle/en/3.mp3",
            "vehicle/zh/3.mp3",
            "vehicle/ko/3.mp3"
        ],
        [
            "vehicle/4.png",
            "vehicle/ja/4.mp3",
            "vehicle/en/4.mp3",
            "vehicle/zh/4.mp3",
            "vehicle/ko/4.mp3"
        ],
        [
            "vehicle/5.png",
            "vehicle/ja/5.mp3",
            "vehicle/en/5.mp3",
            "vehicle/zh/5.mp3",
            "vehicle/ko/5.mp3"
        ],
        [
            "vehicle/6.png",
            "vehicle/ja/6.mp3",
            "vehicle/en/6.mp3",
            "vehicle/zh/6.mp3",
            "vehicle/ko/6.mp3"
        ],
        [
            "vehicle/7.png",
            "vehicle/ja/7.mp3",
            "vehicle/en/7.mp3",
            "vehicle/zh/7.mp3",
            "vehicle/ko/7.mp3"
        ],
        [
            "vehicle/8.png",
            "vehicle/ja/8.mp3",
            "vehicle/en/8.mp3",
            "vehicle/zh/8.mp3",
            "vehicle/ko/8.mp3"
        ],
        [
            "vehicle/9.png",
            "vehicle/ja/9.mp3",
            "vehicle/en/9.mp3",
            "vehicle/zh/9.mp3",
            "vehicle/ko/9.mp3"
        ],
        [
            "vehicle/10.png",
            "vehicle/ja/10.mp3",
            "vehicle/en/10.mp3",
            "vehicle/zh/10.mp3",
            "vehicle/ko/10.mp3"
        ],
        [
            "vehicle/11.png",
            "vehicle/ja/11.mp3",
            "vehicle/en/11.mp3",
            "vehicle/zh/11.mp3",
            "vehicle/ko/11.mp3"
        ]
    ],
    // [2] => スポーツ
    [
        [
            "sports/0.png",
            "sports/ja/0.mp3",
            "sports/en/0.mp3",
            "sports/zh/0.mp3",
            "sports/ko/0.mp3"
        ],
        [
            "sports/1.png",
            "sports/ja/1.mp3",
            "sports/en/1.mp3",
            "sports/zh/1.mp3",
            "sports/ko/1.mp3"
        ],
        [
            "sports/2.png",
            "sports/ja/2.mp3",
            "sports/en/2.mp3",
            "sports/zh/2.mp3",
            "sports/ko/2.mp3"
        ],
        [
            "sports/3.png",
            "sports/ja/3.mp3",
            "sports/en/3.mp3",
            "sports/zh/3.mp3",
            "sports/ko/3.mp3"
        ],
        [
            "sports/4.png",
            "sports/ja/4.mp3",
            "sports/en/4.mp3",
            "sports/zh/4.mp3",
            "sports/ko/4.mp3"
        ],
        [
            "sports/5.png",
            "sports/ja/5.mp3",
            "sports/en/5.mp3",
            "sports/zh/5.mp3",
            "sports/ko/5.mp3"
        ],
        [
            "sports/6.png",
            "sports/ja/6.mp3",
            "sports/en/6.mp3",
            "sports/zh/6.mp3",
            "sports/ko/6.mp3"
        ],
        [
            "sports/7.png",
            "sports/ja/7.mp3",
            "sports/en/7.mp3",
            "sports/zh/7.mp3",
            "sports/ko/7.mp3"
        ],
        [
            "sports/8.png",
            "sports/ja/8.mp3",
            "sports/en/8.mp3",
            "sports/zh/8.mp3",
            "sports/ko/8.mp3"
        ],
        [
            "sports/9.png",
            "sports/ja/9.mp3",
            "sports/en/9.mp3",
            "sports/zh/9.mp3",
            "sports/ko/9.mp3"
        ],
        [
            "sports/10.png",
            "sports/ja/10.mp3",
            "sports/en/10.mp3",
            "sports/zh/10.mp3",
            "sports/ko/10.mp3"
        ]
    ]
];


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
 * 
 * <具体例>
 * leftBtn
 * center
 * rightBtn
 */
