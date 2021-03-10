## Time tracker

start time for the required tasks: 5:18 P.M. EST Mar. 9th, 2021

stop for break: 7:09 P.M. EST Mar. 9th, 2021

back from break: 7:30 P.M. EST Mar. 9th 2021

end time for the required tasks : 8:50 P.M. EST Mar. 9th, 2021



start time for the optional tasks: 9:10 P.M. EST Mar 9th, 2021

end time for optional tasks: 10:58 P.M. EST Mar. 9th 2021



# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Elvira Rui Xiong**

Time spent: \*_4.98_ hours spent in total

Link to project: https://codepath-prework-site.glitch.me/

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Add game rules

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src ="http://g.recordit.co/hQJf7E6hGK.gif" width = 200> <br>

[x](https://codepath-prework-site.glitch.me/)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   [https://htmlcolorcodes.com/
   https://www.w3schools.com/css//css_font_websafe.asp
   https://freesound.org/
   https://stackoverflow.com/questions/1175448/best-way-to-play-wav-files-in-the-browser
   https://www.w3schools.com/html/html5_audio.asp
   https://www.codegrepper.com/code-examples/html/how+play+audio+js
   http://www.learningaboutelectronics.com/Articles/How-to-play-an-audio-file-using-HTML.php
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   [I was having a hard time distinguishing the two variables: progress and guessCounter.
   I knew that "progress" was used to keep track of the pattern,
   whereas the "guessCounter" is for keeping track of the player's choices.
   When I tried to implement the "guess" function, whihc was the game logic,
   I found myself mixing them up and thought they would be the same number. However, after
   I went back to the previous steps looking through their definition, wrote down my notes in order
   to memorize their function, and used an example to simulate how the codes would play their roles,
   I finally clarified my conflict. I have spent around 1.5 hrs on this problem. //
   Another challenge was from the optional tasks, and it was how to put the audio file into the buttons.
   I have read the website given by the pre-work instructions, and I also have tried them. Unfortunately,
   they did not work. Then I searched for more ways to connect the .wav files to the buttons and
   some possible mistakes that I might have made when I try to implement.
   However, I had failed in trying to implement it on the HTML side solely, on the Javascript side solely,
   and on both sides. As the time limits came closer, I had to stop and move on to implement another feature.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   [Is this how front-end web developers like? If so, what would be the back-end like?
   Is this how front-end web developers like? If so, what would be the back-end like?
   I have heard about the issue of front-end vs. back-end. As a web developer, do I need to know how both work in order to be a web developer?
   During the time of learning and completing the pre-work, I found making my very own website is giving a sense of fulfillment. 
   And I had some questions about the data:
   If I want to save the gaming data, such as the ranking for the highest 10 people that was just randomly come in and play, do I save it on my laptop or on Glitch's server?
   If want to let people be able to search my website, how can I make it be searchable by Google or other searching engines?
   If I would like to ask the players to create an account, would it be secure since this website was built on another website?
   What is the best way or where are some excellent resources that I can use for learning web development?
   ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   [First of all, I will definitely try to reduce the complexity of the running times of the function to let the program run faster.
   This is because when I tested the Sound&Memory game, it stuck and did not show any pattern that the player can follow.
   I also asked other friends to try on the game, and I got two feedbacks saying the pattern did not shows up.
   Secondly, I will try to add some features to it because all games are good games, it is just haven't been discover
   the most addicted rules of playing, such as the Subway Surfers.
   For instance, adding some game sounds, increase the speed of pattern-changing, and changethe shape of the buttons to crowded the players' minds.
   ALso, new rules can be applied to the new-shapes stage, such as following the shape pattern, instead of the color. 
   Furthermore, I also can show which round the player is completing, the larger the number is, the higher the sense of achievement is.]

## License

    Copyright [Elvira Rui Xiong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
