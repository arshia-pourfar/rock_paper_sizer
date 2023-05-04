let numberComputer = 0;
let numberPlayer = 0;
$(document).ready(function () {
    if ($(".item-select-right img").attr("src") == "") {
        $(".rock-left").click(function () {
            $(".item-select-right img").attr("src", "images/rock.png");
            computerSelectItem();
        });
        $(".paper-left").click(function () {
            $(".item-select-right img").attr("src", "images/hand.png");
            computerSelectItem();
        });
        $(".scissors-left").click(function () {
            $(".item-select-right img").attr("src", "images/scissors.png");
            computerSelectItem();
        });
    }
});

function computerSelectItem() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            $(".item-select-left img").attr("src", "images/rock.png");
            break;
        case 2:
            $(".item-select-left img").attr("src", "images/hand.png");
            break;
        case 3:
            $(".item-select-left img").attr("src", "images/scissors.png");
            break;
    }
    let interval = setInterval(rematch, 1000);
    function rematch() {
        if ($(".item-select-right img").attr("src") == "images/rock.png" && $(".item-select-left img").attr("src") == "images/scissors.png") {
            numberPlayer++;
        } else if ($(".item-select-left img").attr("src") == "images/rock.png" && $(".item-select-right img").attr("src") == "images/scissors.png") {
            numberComputer++;
        }
        else if ($(".item-select-right img").attr("src") == "images/hand.png" && $(".item-select-left img").attr("src") == "images/rock.png") {
            numberPlayer++;
        } else if ($(".item-select-left img").attr("src") == "images/hand.png" && $(".item-select-right img").attr("src") == "images/rock.png") {
            numberComputer++;
        }
        else if ($(".item-select-right img").attr("src") == "images/scissors.png" && $(".item-select-left img").attr("src") == "images/hand.png") {
            numberPlayer++;
        } else if ($(".item-select-left img").attr("src") == "images/scissors.png" && $(".item-select-right img").attr("src") == "images/hand.png") {
            numberComputer++;
        }
        $(".the-counter-right").text(numberComputer + " Computer");
        $(".the-counter-left").text("Player " + numberPlayer);
        $(".item-select-left img").attr("src", "");
        $(".item-select-right img").attr("src", "");
        clearInterval(interval);
    }
}