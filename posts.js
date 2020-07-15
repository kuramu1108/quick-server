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
    new Post(2, "WEB版九州がっ祭　配信動画一覧　＆　スケジュール", "https://www.kyusyugassai.com/26032305282477322577/web9990114", "2020-03-27")
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