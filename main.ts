input.onPinPressed(TouchPin.P0, function () {
    short_people = 0
    medium_height = 0
    tall_people = 0
    height_sum = 0
    for (let index = 0; index < 2; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("Short person")
            short_people += 1
            height_sum += height
        } else if (height >= 151 && height <= 170) {
            basic.showNumber(height)
            basic.showString("Medium heigh")
            medium_height += 1
            height_sum += height
        } else if (height >= 171) {
            basic.showNumber(height)
            basic.showString("Tall person")
            tall_people += 1
            height_sum += height
        }
        basic.showString("Short person")
        basic.showNumber(short_people)
        basic.showString("Medium heigh")
        basic.showNumber(medium_height)
        basic.showString("Tall person")
        basic.showNumber(tall_people)
        basic.showString("Average=")
        basic.showNumber(height_sum / 2)
    }
})
input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    if (dice == 1 || dice == 3) {
        basic.showNumber(dice)
        basic.showString("Team green")
        team_green += 1
    } else if (dice == 2 || dice == 5) {
        basic.showNumber(dice)
        basic.showString("Team blue")
        team_blue += 1
    } else {
        basic.showNumber(dice)
        basic.showString("Team red")
        team_red += 1
    }
    basic.showString("Team green")
    basic.showNumber(team_green)
    basic.showString("Team blue")
    basic.showNumber(team_blue)
    basic.showString("Team red")
    basic.showNumber(team_red)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    random_number = randint(1, 100)
    for (let index = 0; index < 10; index++) {
        if (random_number % 2 == 0) {
            basic.showNumber(random_number)
            basic.showString("Even")
            even += 1
        } else {
            basic.showNumber(random_number)
            basic.showString("Odd")
            odd += 1
        }
        basic.showNumber(even)
        basic.showNumber(odd)
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    Obtuse_angle_sum = 0
    for (let index = 0; index <= 9; index++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showNumber(angle)
            basic.showString("Acute")
        } else if (angle == 90) {
            basic.showNumber(angle)
            basic.showString("Straight")
        } else if (angle == 90) {
            basic.showNumber(angle)
            basic.showString("Obtuse")
            Obtuse_angle_sum += 1
        }
    }
    basic.showString("Obtuse angles=")
    basic.showNumber(Obtuse_angle_sum)
})
let y = 0
let x = 0
let angle = 0
let Obtuse_angle_sum = 0
let random_number = 0
let team_red = 0
let team_blue = 0
let team_green = 0
let dice = 0
let height = 0
let height_sum = 0
let tall_people = 0
let medium_height = 0
let short_people = 0
let odd = 0
let even = 0
even = 0
odd = 0
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x = randint(0, 5)
        y = randint(0, 5)
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("G A G F F E E E ", 120)
        } else if (x != y) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        led.unplot(x, y)
    }
})
