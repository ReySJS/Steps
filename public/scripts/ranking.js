class Rank {
    constructor() {
        this.player = {};
        this.url = "http://45.63.1.205:80";
    }

    getUsers() {

        fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    setRank(_namePlayer, _totalScore) {

        this.player.name = _namePlayer;
        this.player.score = _totalScore;

        fetch(`${this.url}/ranking`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.player)
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    };

    getRank() {
        fetch(`${this.url}/ranking`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(res => {
                for (let i = 0; i < res.length; i++) {

                    $("#ranking-table").append(`
                <tr>
                    <td>${i + 1}</td>
                    <td>${res[i].name}</td>
                    <td>${res[i].score}</td>
                </tr>`)
                }
            })
            .catch(error => console.log(error));
    };
}