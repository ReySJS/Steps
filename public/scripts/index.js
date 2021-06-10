//------------------Classe Instances--------------------------------------------//
const timer = new Timer();
const score = new Score();
const sound = new Sound();
const rank = new Rank();
const gameRoom = new Games();
//------------------Global Variables--------------------------------------------//
let gameCounter = 0;
let inGame = false;
let playerName;
let songStatus = true;
let soundStatus = true;
//------------------Initial Functions-------------------------------------------//
introScreen();
rank.getUsers();


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////Screen Functions/////////////////////////////////////////

//------------------First Tutorial Screen---------------------------------------//
$(document).on("click", ".first-tutorial-frame", function() {
    $("#modal")
        .fadeIn()
        .html(`
        <div id="first-tutorial-screen">
            <img src="images/read_help_bg_default.svg" class="read-help-buttons hover sound" hover="read_help" id="first-read-help-button1" sound-name="help1" />
            <img src="images/read_help_bg_default.svg" class="read-help-buttons hover sound" hover="read_help" id="first-read-help-button2" sound-name="help2" />
            <img src="images/read_help_bg_default.svg" class="read-help-buttons hover sound" hover="read_help" id="first-read-help-button3" sound-name="help3" />
            <div id="player-name-field">
                <input type="text" id="player-name" placeholder="Jogador 1"/>
            </div>
            <img src="images/play_bg_default.svg" class="sound hover" hover="play" sound-name="click" id="play-button" />
        </div>
    `);
});
//------------------Tutorial Screen--------------------------------------------//
$(document).on("click", ".tutorial-frame", function() {
    $("#modal")
        .fadeIn()
        .html(`
        <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
        <div id="tutorial-screen">
            <img src="images/read_help_bg_default.svg" class="read-help-buttons hover sound" hover="read_help" id="read-help-button1" sound-name="help1" />
            <img src="images/read_help_bg_default.svg" class="read-help-buttons hover sound" hover="read_help" id="read-help-button2" sound-name="help2" />
            <img src="images/read_help_bg_default.svg" class="read-help-buttons hover sound" hover="read_help" id="read-help-button3" hover="read_help_bg_default_hover" sound-name="help3" />
        </div>
    `);
});
//------------------Ranking Screen---------------------------------------------//
$("#score-ruler").on("click", function() {
    $("#modal")
        .fadeIn()
        .html(`
    <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
    <div id="ranking-field">
    <h2>Classificação</h2>
        <table border="1" cellspacing="0" rules="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Pontos</th>
                </tr>
            </thead>
            <tbody id="ranking-table">
            </tbody>
        </table>
    </div>`);
    rank.getRank();
});


//------------------Sound Setting Screen---------------------------------------//
$(document).on("click", "#speaker", function() {
    // playGameRoom()
    $("#modal")
        .fadeIn()
        .html(`
        <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
        <div id="sounds-settings">
            <h2>Configurações</h2>
            <p>
                <span>Músicas</span>
                <img src="images/song-on_bg_active.svg" id="song-on" class="music-icon" />
                <img src="images/song-off_bg_inactive.svg" id="song-off" class="music-icon" />
                </p>
            <p>
                <span>Efeitos</span>
                <img src="images/fx-on_bg_active.svg" id="fx-on" class="music-icon" />
                <img src="images/fx-off_bg_inactive.svg" id="fx-off" class="music-icon" />
            </p>
        </div>
    `);
});
//------------------Intro Screen-----------------------------------------------//
function introScreen() {
    $("#modal")
        .fadeIn()
        .html(`
        <div id="welcome-screen">
            <img src="images/start_bg_default.svg" class="sound hover first-tutorial-frame" hover="start" sound-name="click" id="start-button" />
        </div>
    `);
}
//------------------Victory Screen---------------------------------------------//
function winGame(_game) {
    $("#modal")
        .fadeIn()
        .html(`
            <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
            <div id="victory-screen">
            </div>
        `);
    let pointRuler = gameRoom.getPointRuler();
    if ((pointRuler == 3 && _game == 1 && gameCounter == 0) || (pointRuler == 8 && _game == 2 && gameCounter == 1) || (pointRuler == 14 && _game == 3 && gameCounter == 2)) {
        playGameRoom();
        gameCounter += 1;
        if (gameCounter == 3) {
            rank.setRank(playerName, score.getScorePoints());
        }
    }
}
/////////////////////////Screen Functions////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
/////////////////////Sound Functions/////////////////////////////////////////////

//------------------Function for game tutorial audio-----------------------------------//
function readTutorial(page) {
    //    $(document).on("click", `#read-help${page}`, () => {
    //        sound.playSong(`${help}page`);

    $(document).on("click", first - read - help - button1, () => {
        sound.playSong(help1);

    });
}

//------------------Function for fx's------------------------------------------//

//------------------Functions for game songs-----------------------------------//
function startGameSong() {
    sound.playSong("room");
}
//------------------Function for fx's------------------------------------------//
$(document).on("mousedown", ".sound", function() {
    sound.playFX($(this).attr("sound-name"))
});
$(document).on("click", ".dino", function() {
    sound.playFX($(this).attr("name"))
});
//------------------------Function to set music option-------------------------//
$("#modal").on("click", "#song-on", function() {
    $("#song-on").attr("src", "images/song-on_bg_active.svg");
    $("#song-off").attr("src", "images/song-off_bg_inactive.svg");
    sound.unmute("song");
});

$("#modal").on("click", "#song-off", function() {
    $("#song-off").attr("src", "images/song-off_bg_active.svg");
    $("#song-on").attr("src", "images/song-on_bg_inactive.svg");
    sound.mute("song");
});

$("#modal").on("click", "#fx-on", function() {
    $("#fx-on").attr("src", "images/fx-on_bg_active.svg");
    $("#fx-off").attr("src", "images/fx-off_bg_inactive.svg");
    sound.unmute("fx");
});

$("#modal").on("click", "#fx-off", function() {
    $("#fx-off").attr("src", "images/fx-off_bg_active.svg");
    $("#fx-on").attr("src", "images/fx-on_bg_inactive.svg");
    sound.mute("fx");
});

$(document).on("click", ".fixed-song-icon", function() {
    $(".fixed-song-icon").toggleClass("song-off");
    if (songStatus) {
        sound.mute("song");
        songStatus = false;
    } else {
        sound.unmute("song");
        songStatus = true;
    }
});
$(document).on("click", ".fixed-fx-icon", function() {
    $(".fixed-fx-icon").toggleClass("fx-off");
    if (soundStatus) {
        sound.mute("fx");
        soundStatus = false;
    } else {
        sound.unmute("fx");
        soundStatus = true;
    }
});

/////////////////////Sound Functions/////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
////////////////////////////Event Functions//////////////////////////////////////

//------------------------Start Game Room--------------------------------------//
$(document).on("click", "#play-button", () => {
    inGame = true;
    setNamePlayer();
    closeModal();
    playGameRoom();
});
//------------------------Set platyer's name------------------------------------//
function setNamePlayer() {
    if ($("#player-name").val() == "") {
        playerName = $("#player-name").attr("placeholder");
    } else {
        playerName = $("#player-name").val();
    }
    $("#name").html(playerName);
}
//------------------------Back button behavior---------------------------------//
$("#modal").on("click", ".back-button", () => inGame ? closeModal() : introScreen());
//------------------------Hover fx's--------------------------------------------//
$(document).on("mouseover", ".hover", function() {
    $(this).attr("src", `images/${$(this).attr("hover")}_bg_hover.svg`);
});
$(document).on("mouseleave", ".hover", function() {
    $(this).attr("src", `images/${$(this).attr("hover")}_bg_default.svg`);
});
//------------------------Close modal------------------------------------------//
function closeModal() {
    $("#modal").fadeOut();
    startGameSong();
    finalScore();
    //reativar o droppable
    //$("#chest").droppable("enabled");
    $("#chest").droppable({
        disabled: false
    });

}
//------------------------Change color on Rule Marker---------------------------//
function ruleMarkerColor() {
    let paths = $('.marker');
    for (let i = 0; i < gameRoom.getPointRuler(); i++) {
        $(paths[i]).addClass("marker-fill");
    }
    gameRoom.marker();
}
//------------------------Show new game on bookcase----------------------------//
function showNewGame(_points) {
    switch (_points) {
        case 3:
            $("#bookcase-field1").show();
            break;
        case 8:
            $("#bookcase-field2").show();
            break;
        case 14:
            $("#bookcase-field3").show();
            break;
    }
}
//------------------------Shuffle function-------------------------------------//
function raffle(_arr) {
    return _arr.sort(() => Math.random() - 0.5);
}
////////////////////////////Event Functions//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////Score Functions/////////////////////////////////////

//------------------------Score fx's-------------------------------------------//
function flipScore() {
    return $(".score").html(`Score: ${parseInt(score.getCurrentTime()) / 10 + score.getScorePointsOld()}`);
}
//------------------------Show score on screens--------------------------------//
function finalScore() {
    score.stopTimer();
    return $(".score").html(`Score: ${score.getScorePoints()}`);
}
//------------------------Sum points to score----------------------------------//
function addPoints() {
    score.startScore(100);
    score.setTimer(1000);
    score.setTimerInterval(100);
    score.setCallbackTimeInterval(flipScore);
    score.setCallbackTimeout(finalScore);
    score.startTimer();
    return true;
}
/////////////////////////////Score Functions/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
////////////////////////////Functions Game Room//////////////////////////////////
function playGameRoom() {

    openChest();
    gameRoom.startGameRoom();
    const amountToys = gameRoom.getGameRoomAmountToys();
    const toysArr = gameRoom.getToys();
    const sortedToys = gameRoom.raffle([...toysArr]);
    const contents = $(".floor-content");
    const sortedContents = gameRoom.raffle([...contents]);

    for (let i = 0; i < amountToys; i++) {
        $(sortedContents[i]).append(`
      <img src="images/${sortedToys[i]}_bg_default.svg" hover="${sortedToys[i]}" sound-name="${sortedToys[i]}" class="sound hover room-toys" />`)
    }

    $(function() {
        $(".room-toys").draggable({
            containment: "#room",
            scroll: false,
            revert: "invalid"
        });
        $("#chest").droppable({
            accept: function(_drop) {
                return true
            },

            drop: function(_drop) {
                sound.playFX("item_in_the_chest");
                gameRoom.setToysInChest();
                gameRoom.setPointRuler();
                ruleMarkerColor();
                if (gameRoom.getToysInChest() == gameRoom.getGameRoomAmountToys()) {
                    gameRoom.finishRoomGame();
                    closeChest();
                    $(".room-toys").remove();
                }
                _drop.draggable("disable");
            }
        });
    });
}

function openChest() {
    setTimeout(() => {
        $("#chest")
            .attr("src", "images/open-chest_bg_default.svg")
            .attr("hover", "open-chest")
        sound.playSound("chest_opening")
    }, 1000);
}

function closeChest() {
    setTimeout(() => {
        $("#chest")
            .attr("src", "images/closed-chest_bg_default.svg")
            .attr("hover", "closed-chest")
        sound.playSound("chest_closing")
    }, 1000);
}
////////////////////////////Functions Game Room//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
///////////////////////////Functions Game One////////////////////////////////////   
$(document).on("click", "#bookcase-field1", function() {
    //$("#chest").droppable("disable");
    $("#chest").droppable({
        disabled: true
    });

    sound.playSong("game_one");
    let dinos = 4;
    let drags = 0;
    startGame1();

    function startGame1() {
        let dinoList = ["brontosaurus", "pteranodon", "spinosaurus", "stegosaurus", "t-rex", "triceratops", "velociraptor"];
        dinoList = raffle(dinoList);
        let dino = dinoList.slice(0, dinos);
        let skel = [...dino];
        skel = raffle(skel);
        let skeletonTable = "";
        let dinoTable = "";

        for (let i = 0; i < dinos; i++) {
            skeletonTable += `<div class="space skeleton" id="skeleton${i}" name=${skel[i]}><img class="img-game1" hover=${skel[i]} src="images/${skel[i]}-bones-default.svg" /></div>`;
        }
        for (let i = 0; i < dinos; i++) {
            dinoTable += `<div class="space dino" id="dino${i}" name=${dino[i]}><img class="hover img-game1" hover=${dino[i]} src="images/${dino[i]}_bg_default.svg" /></div>`;
        }
        $(function() {
            $(".dino").draggable({
                containment: "#game-one-screen",
                scroll: false,
                revert: "invalid"
            });
            $(".skeleton").droppable({
                accept: function(_drop) {
                    if (_drop.attr("name") == $(this).attr("name")) {
                        return true
                    }
                },
                drop: function() {
                        addPoints();
                        sound.playFX("success");
                        drags += 1;
                        if (drags == dinos) {
                            dinos += 1;
                            drags = 0;
                            dinos < 7 ? startGame1() : winGame(1);
                        }
                        _drop.draggable("disable");
                    }
                    // let drop;
                    // drop = _drop;
                    // drop.draggable("disable"); 
            });
        });
        $("#modal")
            .fadeIn()
            .html(`
            <div id="sound-menu">
                <div class="fixed-song-icon sound-icon"></div>
                <div class="fixed-fx-icon sound-icon"></div>
            </div>
            <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
            <div id="game-one-screen">
                <div class="score score-game1"></div>
                <div class="section" id="skeleton">${skeletonTable}</div>
                <div class="section" id="dino">${dinoTable}</div>
            </div>`);
        finalScore();
    }
});
///////////////////////////Functions Game One////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////
///////////////////////////Functions Game Two////////////////////////////////////
$(document).on("click", "#bookcase-field2", function() {
    $("#chest").droppable({
        disabled: true
    });
    sound.playSong("game_two");
    let turn = 0;
    let drags = 0;
    let toysList = ["ball", "bear", "dinotoy", "drum", "duck", "plane", "robot", "slipper"];
    toysList = raffle(toysList);
    startGame2();

    function startGame2() {
        let toysListShuffled = [...toysList];
        toysListShuffled = raffle(toysListShuffled);
        let nameToy = toysList[turn];
        let toysTable = "";

        for (let i = 0; i < 8; i++) {
            toysTable += `<div class="space shelf-toys" id="shelf-toy${i}" name=${toysListShuffled[i]}><img class="hover img-game2" hover=${toysListShuffled[i]} src="images/${toysListShuffled[i]}_bg_default.svg" alt="" /></div>`;
        }
        $(function() {
            $(".shelf-toys").draggable({
                containment: "#game-two-screen",
                scroll: false,
                revert: "invalid"
            });
            $(".shelf-name").droppable({
                accept: function(_drop) {
                    if (_drop.attr("name") == $(this).attr("name")) {
                        return true
                    }
                },
                drop: function() {
                    addPoints();
                    sound.playFX("success");
                    drags += 1;
                    if (drags == 1) {
                        turn += 1;
                        drags = 0;
                        turn < 5 ? startGame2() : winGame(2);
                    }
                }
            });
        });
        $("#modal")
            .fadeIn()
            .html(`
            <div id="sound-menu">
                <div class="fixed-song-icon sound-icon"></div>
                <div class="fixed-fx-icon sound-icon"></div>
            </div>
            <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
            </div>
            <div id="game-two-screen">
                <div class="score score-game2"></div>
                <div class="section" id="name-table"><div class="space shelf-name" id="show-name1" name=${nameToy}><img class="img-game2" hover=${nameToy} src="images/${nameToy}_name_bg_default.svg" alt="" /></div></div>
                <div class="section" id="toys-table">${toysTable}</div>
            </div>`);
        finalScore();
        $(".shelf-toys").on("click", function() {
            sound.playFX($(this).attr("name"))
        });
    }
});
///////////////////////////Functions Game Two////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////   


//////////////////////////Functions Game Three///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////   
$(document).on("click", "#bookcase-field3", function() {
    sound.playSong("game_three");
    let objectsList = ["ball", "bear", "dinotoy", "drum", "duck", "plane", "robot", "slipper", "trophy", "cubes", "speaker", "brontosaurus", "pteranodon", "spinosaurus", "stegosaurus", "t-rex", "triceratops", "velociraptor"];
    let cards = [];
    let numCards = 6; // 6(3x4), 10(5x4), 18(6x6),
    startGame3();

    function startGame3() {
        let cardTable = "";
        let firstCardName = "";
        let firstCardId = "";
        let pairsFound = 0;

        for (let i = 1; i <= numCards; i++) {
            cards[i - 1] = i;
        }
        cards.splice(0, 0, ...cards);
        cards = raffle(cards);
        objectsList = raffle(objectsList);

        for (let i = 0; i < cards.length; i++) {
            cardTable += `
                <div class="card" id="card${i}" name=${objectsList[cards[i]]}>
                    <div class="space front"></div>
                    <div class="space back">
                        <img class="img-game3" src="images/${objectsList[cards[i]]}_bg_default.svg" />
                    </div>
                </div>`;
        }
        $("#modal")
            .fadeIn()
            .html(`
            <div id="sound-menu">
                <div class="fixed-song-icon sound-icon"></div>
                <div class="fixed-fx-icon sound-icon"></div>
            </div>
            <img src="images/back_bg_default.svg" class="hover back-button sound" hover="back" sound-name="click" />
            <div id="game-three-screen">
                <div class="score score-game3"></div>
                <div id="cardDeck">${cardTable}</div>
            </div>`);

        $(".card").on("click", function(_card) {
            $(this).toggleClass("flip");
            if (firstCardName == "") {
                firstCardName = $(this).attr("name");
                firstCardId = $(this).attr("id");
            } else {
                $(".card").css("pointerEvents", "none");
                if (firstCardName != $(this).attr("name") && firstCardId != $(this).attr("id")) {
                    let CardId = $(this).attr("id");
                    setTimeout(function() {
                        $("#" + firstCardId).toggleClass("flip");
                        $("#" + CardId).toggleClass("flip");
                        firstCardName = "";
                        firstCardId = "";
                        $(".card").css("pointerEvents", "auto");
                    }, 800);
                } else if (firstCardName == $(this).attr("name") && firstCardId != $(this).attr("id")) {
                    $(this).css("visibility", "hidden");
                    $("#" + firstCardId).css("visibility", "hidden");
                    $(".card").css("pointerEvents", "auto");
                    addPoints();
                    sound.playFX("success");
                    pairsFound++;
                    firstCardName = "";
                    firstCardId = "";
                    setTimeout(function() {
                        if (pairsFound == numCards) {
                            winGame(3);
                        }
                    }, 1500);
                } else if (firstCardId == $(this).attr("id")) {
                    firstCardName = "";
                    firstCardId = "";
                    $(".card").css("pointerEvents", "auto");
                }
            }
        });
        finalScore();
    }
});
//////////////////////////Functions Game Three///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////