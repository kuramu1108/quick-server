class Post {
    constructor(id, title, url, date) {
        this.id = id
        this.title = title
        this.url = url
        this.date = date
    }
}

var posts = [
    new Post(0, "「九州がっ祭2020」「第14回火の国YOSAKOIまつり」中止のお知らせ", "https://www.kyusyugassai.com/26032305282477322577/202014yosakoi", "2020-02-22"),
    new Post(1, "「WEB版九州がっ祭」開催のご案内", "https://www.kyusyugassai.com/26032305282477322577/web", "2020-03-26"),
    new Post(2, "WEB版九州がっ祭　配信動画一覧　＆　スケジュール", "https://www.kyusyugassai.com/26032305282477322577/web9990114", "2020-03-27"),
    new Post(3, "クラウドファンディング挑戦中！目標金額120万円！ご協力お願いします。", "https://readyfor.jp/projects/31257", "2020-01-15"),
    new Post(4, "第4回九州がっ祭2020参加者募集開始しました。参加申込はコチラ", "https://docs.google.com/forms/d/e/1FAIpQLSd628-cWmBSdog4UXXvdcg6pFdGrWY2UZ9HeHU72gndIPp5kw/viewform", "2019-09-01"),
    new Post(5, "フォトコンテスト受賞者のページを更新しました。", "https://www.kyusyugassai.com/2006124030123641238731085201921463360622031621697.html", "2019-05-31"),
    new Post(6, "受賞チームのページを更新しました。", "受賞チームのページを更新しました。", "2019-04-02"),
    new Post(7, "新着情報を更新しました。", "https://www.kyusyugassai.com/26032305282477322577.html", "2019-03-28"),
    new Post(8, "九州がっ祭2019の目玉を更新しました！", "https://www.kyusyugassai.com/12415123931237112429125393044629577.html", "2019-03-26")
]

module.exports = {
    posts: function() {
        return posts
    },
    version: function() {
        return {
            id: 0,
            table_name: "posts",
            version: 1
        }
    }
}