//////////     CHOOSE YOUR OWN ADVENTURE GAME     //////////
function start(){
    let firstAnswer = window.prompt('Do you go left, right, or leave the cave alone?')

    if(firstAnswer == 'left'){
        goLeft()
    }else if(firstAnswer == 'go left'){
        goLeft()
    }else if(firstAnswer == 'right'){
        goRight()
    }else if(firstAnswer == 'go right'){
        goRight()
    }else if(firstAnswer == 'leave'){
        window.alert('Chicken')
    }else if(firstAnswer == 'leave cave'){
        window.alert('Chicken')
    }else if(firstAnswer == 'leave cave alone'){
        window.alert('Chicken')
    }else if(firstAnswer == 'leave the cave alone'){
        window.alert('Chicken')
    }
}
//////////     SECOND SECTION     //////////
function goLeft(){
    let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, continue on your path, or got back?')
    
    if (secondAnswer == 'follow it'){
        followIt()
    }else if(secondAnswer == 'follow'){
        followIt()
    }else if(secondAnswer == 'follow the cat'){
        followIt()
    }else if(secondAnswer == 'follow cat'){
        followIt()
    }else if(secondAnswer == 'cat'){
        followIt()
    }else if(secondAnswer == 'continue on your path'){
        continueDown()
    }else if(secondAnswer == 'continue on path'){
        continueDown()
    }else if(secondAnswer == 'continue path'){
        continueDown()
    }else if(secondAnswer == 'continue down path'){
        continueDown()
    }else if(secondAnswer == 'continue'){
        continueDown()
    }else if(secondAnswer == 'path'){
        continueDown()
    }else if(secondAnswer == 'take path'){
        continueDown()
    }else if(secondAnswer == 'take the path'){
        continueDown()
    }else if(secondAnswer == 'back'){
        start()
    }else if(secondAnswer == 'go back'){
        start()
    }
}

function goRight(){
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon all together. Or do you go back? Which do you take?')
    
    if(secondAnswer == 'treasure'){
        treasurePath()
    }else if(secondAnswer == 'treasure path'){
        treasurePath()
    }else if(secondAnswer == 'go for the treasure'){
        treasurePath()
    }else if(secondAnswer == 'towards the treasure'){
        treasurePath()
    }else if(secondAnswer == 'chest'){
        treasurePath()
    }else if(secondAnswer == 'treasure chest'){
        treasurePath()
    }else if(secondAnswer == 'towards the treasure chest'){
        treasurePath()
    }else if(secondAnswer == 'the chest'){
        treasurePath()
    }else if(secondAnswer == 'the treasure chest'){
        treasurePath()
    }else if(secondAnswer == 'other path'){
        otherPath()
    }else if(secondAnswer == 'take other path'){
        otherPath()
    }else if(secondAnswer == 'continue'){
        otherPath()
    }else if(secondAnswer == 'other'){
        otherPath()
    }else if(secondAnswer == 'path'){
        otherPath()
    }else if(secondAnswer == 'back'){
        start()
    }else if(secondAnswer == 'go back'){
        start()
    }
}
//////////     THIRD SECTION     //////////
//////////     GO LEFT     //////////
function followIt(){
    thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Stay, tell the world, or go back?')

    if (thirdAnswer =='stay'){
        stay1()
    }else if(thirdAnswer == 'stay there'){
        stay1()
    }else if(thirdAnswer == 'stay with the cats'){
        stay1()
    }else if(thirdAnswer == 'alert world'){
        tell()
    }else if(thirdAnswer == 'alert the world'){
        tell()
    }else if(thirdAnswer == 'tell world'){
        tell()
    }else if(thirdAnswer == 'tell the world'){
        tell()
    }else if(thirdAnswer == 'tell'){
        tell()
    }else if(thirdAnswer == 'tell everyone'){
        tell()
    }else if(thirdAnswer == 'share'){
        tell()
    }else if(thirdAnswer == 'share to the world'){
        tell()
    }else if(thirdAnswer == 'tell people'){
        tell()
    }else if(thirdAnswer == 'share with everyone'){
        tell()
    }else if(thirdAnswer == 'alert'){
        tell()
    }else if(thirdAnswer == 'back'){
        goLeft()
    }else if(thirdAnswer == 'go back'){
        goLeft()
    }
}
function continueDown(){
    thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that leads up towards the light. Do you go up the staircase, climb up the ladder, or go back?')

    if(thirdAnswer == 'climb up the ladder'){
        ladder()
    }else if(thirdAnswer == 'climb the ladder'){
        ladder()
    }else if(thirdAnswer == 'climb ladder'){
        ladder()
    }else if(thirdAnswer == 'ladder'){
        ladder()
    }else if(thirdAnswer == 'up the ladder'){
        ladder()
    }else if(thirdAnswer == 'up ladder'){
        ladder()
    }else if(thirdAnswer == 'go up the stairs'){
        staircase()
    }else if(thirdAnswer == 'up the stairs'){
        staircase()
    }else if(thirdAnswer == 'stairs'){
        staircase()
    }else if(thirdAnswer == 'go up the staircase'){
        staircase()
    }else if(thirdAnswer == 'up the staircase'){
        staircase()
    }else if(thirdAnswer == 'staircase'){
        staircase()
    }else if(thirdAnswer == 'back'){
        goLeft()
    }else if(thirdAnswer == 'go back'){
        goLeft()
    }
}
//////////     GO RIGHT     //////////
function treasurePath(){
    thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:')

    if(thirdAnswer == 'stay'){
        stay2()
    }else if(thirdAnswer == 'stay there'){
        stay2()
    }else if(thirdAnswer == 'run'){
        run()
    }else if(thirdAnswer == 'run away'){
        run()
    }
}

function otherPath(){
    thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw a picture of it or pluck it. Which do you do? Or do you go back?')
//either draw a picture of it or pluck it
    if (thirdAnswer == 'draw a picture of it'){
        draw()
    }else if(thirdAnswer == 'draw it'){
        draw()
    }else if(thirdAnswer == 'draw'){
        draw()
    }else if(thirdAnswer == 'draw a picture of the shiny blue flower'){
        draw()
    }else if(thirdAnswer == 'draw a picture of the blue flower'){
        draw()
    }else if(thirdAnswer == 'draw a picture of the flower'){
        draw()
    }else if(thirdAnswer == 'draw a flower'){
        draw()
    }else if(thirdAnswer == 'draw blue flower'){
        draw()
    }else if(thirdAnswer == 'draw shiny blue flower'){
        draw()
    }else if(thirdAnswer == 'draw flower'){
        draw()
    }else if(thirdAnswer == 'pluck the shiny blue flower'){
        pluck()
    }else if(thirdAnswer == 'pluck the blue flower'){
        pluck()
    }else if(thirdAnswer == 'pluck the flower'){
        pluck()
    }else if(thirdAnswer == 'pluck flower'){
        pluck()
    }else if(thirdAnswer == 'pluck'){
        pluck()
    }else if(thirdAnswer == 'pluck it'){
        pluck()
    }else if(thirdAnswer == 'back'){
        goRight()
    }else if(thirdAnswer == 'go back'){
        goRight()
    }
}
//////////     FOURTH SECTION     //////////
//////////     LEFT --> STAY     ///////////
function stay1(){
    fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.')
}
 /////////     LEFT --> TELL THE WORLD     //////////
 function tell(){
    fourthAnswer = window.alert('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
 }
 /////////     LEFT --> CHAMBER     //////////
function ladder(){
    fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
}
/////////     LEFT --> STAIRCASE     //////////
function staircase(){
    fourthAnswer = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
}
//////////     RIGHT --> STAY     //////////
function stay2(){
    fourthAnswer = window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
}
//////////     RIGHT --> RUN     //////////
function run(){
    fourthAnswer = window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
}
//////////     RIGHT --> DRAW     //////////
function draw(){
    fourthAnswer = window.alert("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.")
}
//////////     RIGHT --> PLUCK     //////////
function pluck(){
    fourthAnswer = window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
}

start()