# Test Completion

I've implemented all 5 items on the ACs plus the stretch item (arc bounce animation).

### Assumptions

In order to keep moving, I've made some assumptions along the way which had some impact on my design choices:

* Didn't pull in any extra dependency and worked with the stack provided: React, SASS, Jest, Enzyme.
* Based on that, the animations and carousel are written on plain JS and CSS.
* The animation needed for the carousel isn't specified so I chose a simple fade-in, scale-up from the bottom right transition animation with a slight parallax effect on the 1st slide where the _new-offers_ component moves slower than the rest of the slide.
* For the arc animation, it's stated that it should happen on load, I wasn't sure if that only refered to the first load or every time you change slides, so I opted for the first option, I think having it on slide fade in would be too distracting.
* I didn't find the artwork for the _transfer-your-balance_ circular card displayed on the mobile version so instead I chose to float down the _new-offers_ card, which carries on the same animation from the slide in and out.
* I decided to leave the dotted navigation of the carousel on top and with a bigger size in order to make it more visible and clickable. I didn't want to spend much time on it since I wasn't sure of all the functionality behind it: should it slide out with the slide and then slide in with the next or should it stay there and just highlight the selected index?.
* For the _long-term-debt_ slide, it wasn't clear how to calculate some of the info based on the api call response, i.e. it seemed like the last line "no change since last month" should change based on some field.
* For the purpose of the test, I focused on writing unit and integration tests, as a rule of thumb, I strive for use-case and fuctionality coverage rather than 100% code coverage which is sometimes difficult to achieve.
* As far as colors, spacing and font-faces; I tried to make an educated guess guided by the starting code base and eye scanning the screen shots.

## Component Hierarchy

* `Dashboard` (carousel)
* `ScoreIndicator`
* `NewOffers`
* `LongTermDebt`

### Dashboard

The parent component, it is in itself the carousel, includes the navigation dots and some common CSS styles for the _frosted glass_ effect and circular card shape of all other 3 components.

It fetches the credit report from the api on `componentDidUpdate` and passes down the response to its children as a prop, thus preventing duplicate calls.

### ScoreIndicator

Arguably the component with more functionality, it includes a counter increment animation for the current score which triggers on `componentWillReceiveProps` and then makes subsequent calls to `setState`.

All _circular cards_ have a _frosted glass_ style, the way it works is by having the same background of the body element on the `::before` pseudo element applying some inset showdows and blur filter.

The arc representing the score is an SVG circle wich is animated using the `stroke-dashoffset` with a custom bounce animation towards the end. With a bit of extra time, the bouncing effect could be refined.

The bouncing is a `@keyframes` animation that's written on the JS side and programmatically appended to the document head.

I've decided to go with this approach rather than doing it on CSS cause the end value of the `stroke-dashoffset` is the remainder of subtracting the score from the maxScore (currently 700) and then mapping that value to the length of the arc (currently 1000). It wasn't a value available on CSS.

There are certainly other ways to accomplish this, like maybe using Styled-Components where your CSS lives on your JSX, but then again, I didn't pull in any extra dependency.

### NewOffers and LongTermDebt

Somewhat simpler components with mostly static text, appart from a small function for comma separating amounts and calculating the total credit limit.

---

![ClearScore](https://raw.githubusercontent.com/ClearScore/FED-home-test/master/docs/clearscore.png?token=ABpdw5m-hB7aVWCKaYGpucwwUt438SHLks5atOQHwA%3D%3D)

# Frontend Test

## Background

A developer is halfway through a `score indicator feature` card and has been called away.

It is now up to you to finish the feature ready to release.

## The Task

Build our circular score indicator, as shown on [clearscore.com/account/](https://www.clearscore.com/account/) and [https://youtu.be/tIjtcL5Z0Wk?t=5](https://youtu.be/tIjtcL5Z0Wk?t=5).

* [Desktop example](/docs/score-indicator-desktop.jpg)
* [Mobile Example](/docs/score-indicator-mobile.jpg)

Send your solution as a link to a public git repository with clear instructions and your thoughts in the README.

## The AC's

1.  Build a carousel containing 2 slides.
2.  Build the first score indicator slide, and animate in a second panel for long term debt.
3.  Show the given score in the middle and with an arc outside that represents the score out of 700
4.  The arc animates on load
5.  The data can be requested from [https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json](https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json)

### Stretch goal

1.  Add a bouncing effect to the end of the animation of the arc

## What we're looking for

* A stylish solution with unit test coverage
* Clean, concise code
* Knowledge of ES6 syntax
* A detailed README
* A live site we can see if possible

## Prerequisites

* Node version >= 9.3.0
* Yarn is used as the package manager

## Getting Started

* Run: `yarn start:webpack`
* Run: `yarn start:dev` _(in a new terminal)_
* Goto: `http://localhost:3000/`
