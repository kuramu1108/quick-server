class Team {
    constructor(id, name, from ,participation, description) {
        this.id = id
        this.name = name
        this.from = from
        this.participation = participation
        this.description = description
    }
}

var teams = [
    new Team(0, "abc", "JAP", 5, "longtexxt"),
    new Team(1, "s", "JAP", 5, "longtexxt"),
    new Team(2, "abcsd", "JAP", 5, "longtexxt"),
    new Team(3, "abcddd", "JAP", 5, "l"),
    new Team(4, "cc_c", "JAP", 5, "longtexsfdgsdfgsdfgxtasdfa"),
    new Team(5, "abcddd", "JAP", 5, "l"),
    new Team(6, "abcddd", "JAP", 5, "l"),
    new Team(7, "abcddd", "JAP", 5, "l"),
    new Team(8, "abcddd", "JAP", 5, "l"),
    new Team(9, "abcddd", "JAP", 5, "l")
]

module.exports = {
    teams: function() {
        return teams
    }
}