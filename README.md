# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jimmy Trinh**

Time spent: **4** hours spent in total

Link to project: (https://memorize-game.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Add mistake counter alert to let user know how many wrong guesses they still have before losing.
- [x] Add on screen display of the # of mistakes left under the game buttons. Make it red. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![GIF](https://i.imgur.com/WnQ7mN1.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API

-Read these two pages to figure out why sound was only playing in Glitch but not in Chrome or Firefox.

https://www.w3schools.com/

-Read on general syntax for html, css, and javascript since I am beginner.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- Reference for how Math.random works

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

The first major bug or issue I came across was when I started to record my project in a browser, the audio clues would no longer work. When checking back on Glitch, it was working fine which made it very confusing. After searching on the internet for a while, I came across many StackOverflow questions that were similar but none of them did anything. I then decided to google more specifically about Google Chrome and found an Google developer page relating to AudioContext() that was used in this project. I also found a Firefox dev page that was quite similar. It appears to have something to do with creating the AudioContext before the site has processed any user gesture. This results in a suspended state and the AudioContext will stop. To fix this, I added a check to see if user interacts, and if so, the AudioContext will resume from suspended state. After testing out the Google Chrome fix, it appears to work perfectly now. 

Another major challenge I had was trying to speed through learning the basics of HTML, CSS, and Javascript. Even though following along Codepath's tutorial helped a lot, when trying to create my additional mistakes counter, I had to do a lot of Googling and reading on w3schools.com to figure out syntax. I wanted to have the text display based on a variable within my script.js. Eventually, I figured it out, just required some time to read and understand the syntax.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, the first question that comes to mind is which tools are necessary to creating a fully fledged web application? From working with this project, I noticed that there were many different things a developer would have to juggle. There is a combination of HTML, CSS, and Javascript, as well as backend work if you didn't use Glitch. I have also heard about using React, and am wondering how do you decide what is suited for your specific needs. I am also not too familiar with backend, so another question I would have is how would you connect your app to the backend? I assume that Glitch takes care of it as it is a hosting service as well, but if you were to create an app on your own, how much work goes into the backend when compared to frontend?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would love to update the UI with images and a better layout. For example, I would want the page to start off with an intro, and clicking "Start" would then take you to the actual game page, rather than everything being on one page. I think UI design can be super fun, and I've had experience with editing UI of Android apps. However, this isn't quite the same, so I would need to learn and that would take some time. I also really wanted to figure out how to get animations to work. If I could, one thing I would definitely add is confetti when the user beats the game. If I had more time, I would also like to implement an animated timer, or just a clock to give pressure to the user. It would make the game more challenging and fun. The major thing I would do with more time though, is slow down and go over the code to make sure I fully understand what is going on. I am a full beginner in terms of HTML, CSS, and Javascript so I didn't get a chance to fully understand everything in the interest of time.



## License

    Copyright [Jimmy Trinh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
