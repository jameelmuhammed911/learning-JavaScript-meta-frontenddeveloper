// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (i of dairy) {
        console.log(i);
    }
}

logDairy();


// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for (var i of Object.keys(bird)) {
        console.log(`${i}: ${bird[i]}`);
    }
}

birdCan();

// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}

animalCan();