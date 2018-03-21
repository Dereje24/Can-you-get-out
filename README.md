# Can-you-get-out?

## Overview
- In this morning's session, we'll explore the different technologies used, process/approach, unsolved problems and some wins and challenges that went along in creating a map based trivia game.

## Directions

- The game will be played at different locations. 
- After answering three questions correctly, user will be able to move on to the next location.
- The questions will be about different programming languages. 
- At the end winner will be initiated to join WAKANDA!!

<a name="jquery"></a>
## Technologies and tools utilized:

#### Bootstrap
Utilized mainly the bootstrap.min.css file to apply responsive styling all over the website :

- Nav Bar on the landing page collapses into a hamburger
	- Classes
		- `.collapse` ( actual data-toggle)
		- `.navbar-toggler `( applies styling ( adds the hamburger icon))
		- `.nav-link` (applied to every link or nav item)
    
    

#### Mapbox
- Delegated our main view to Mapbox
- Queried questions from the database and populated them on the pop up windows :

	- Functions
		- `flyTo` ( how to fly to a new location/question)
		- `setDomContent `( creates a question using a from tag and places the form on the popup window )

#### JavaScript/jQuery
- 75% of the code is written in JavasSctipt/jQuery.
- JS and jQuery were necessary to manipulate the DOM, make AJAX calls and implement Mapbox.


#### HTML/css
- Necessary Components in every website

	Design principles
	- Bright baby blue roads in the final question to represent vibranium form Wakanda
	- Royal gold 3D buildings to mach the gold royalty
	- 1 main css file to reduce file dependency on the overall site
	- Overall, a minimalstic design with all the important content in the center
  
 #### Node.js / Express / MongoDB / Heroku
- Back end stack of our trivia game.

  - Data type/models.
     - 2 Tables
     - A question has 1 quiz
     - A quiz has many questions



## Unsolved Problems:		
    - Making our code DRY

    - Displaying questions on the Mapbox pop up windows

    - Validating quiz answers




## Biggest Wins/Challenges

#### 75% of our code is in Javascript/jQuery
			https://github.com/xingzo/xingzo.github.io/blob/master/assets/videos/logotrial.gif
		


## Snippets:
    How to fly aorund the map

`$("#wakanda").on("click", function(){

	   map.flyTo({
			 center: cords3,
			 pitch: 45,
			 hash: true,
			 bearing: -17.6,
			 zoom: 15.5
	    });
   }) `
   
## link to our presentation

## https://docs.google.com/presentation/d/1x2j0btZs62ya1KQNtiFMheYvSO3yO7uCqi-Ei71cEeM/edit?usp=sharing
