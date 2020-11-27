let days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty first", "twenty second", "twenty third", "last"];
let day = document.querySelector(".day");

function changeDay() {
  day.textContent = days.shift();
}

let movies = ["3 Godfathers (1948)",
  "8 Femmes (2002)",
"Anna and the Apocalypse (2017)",
"Arthur Christmas (2011)",
"Babes in Toyland (1986)",
"Better Watch Out (2016)",
"Black Christmas (1974)",
"Elf (2003)",
"Fatman (2020)",
"Home Alone 2: Lost in New York (1992)",
"Jingle All the Way (1996)",
"Jingle Jangle: A Christmas Journey (2020)",
"Klaus (2019)",
"Last Christmas (2019)",
"Love Actually (2003)",
"The Man Who Invented Christmas (2017)",
"National Lampoon's Christmas Vacation (1989)",
"The Night Before (2015)",
"Noelle (2019)",
"Rare Exports: A Christmas Tale (2010)",
"The Santa Clause (1994)",
"Scrooged (1988)",
"Tokyo Godfathers (2003)",
"A Very Harold & Kumar Christmas (2011)"];

let chosen = document.querySelector(".chosen");
let enjoy = document.querySelector(".enjoy");
let check = document.querySelector(".check");

function pickAMovie() {
  let random = Math.floor(Math.random() * movies.length);
  chosen.textContent = movies.splice([random],1)
}

function makeASchedule() {
  
let next = document.createElement("li");                
let movie = document.createTextNode(chosen.textContent);       
next.appendChild(movie);     
document.getElementById("schedule").appendChild(next);  
  if (movies.length === 0) {
    enjoy.textContent = "Dec 25~ Watch your favorite classic! Enjoy!";
    check.textContent = "Check below for your movie schedule!";
 document.getElementById("choose").removeEventListener("click", pickAMovie);
    document.getElementById("choose").removeEventListener("click", changeDay);
    document.getElementById("choose").removeEventListener("click", makeASchedule);
} }

document.getElementById("choose").addEventListener("click", pickAMovie);
document.getElementById("choose").addEventListener("click", changeDay);
document.getElementById("choose").addEventListener("click", makeASchedule);

//Lets the user see what movies are in by default

let placeholders = document.querySelectorAll("input");

for (let i = 0; i < placeholders.length; i++) {
  placeholders[i].placeholder = movies[i];
}

//Lets the user change any movie they'd like before using the tool

document.getElementById("swap").addEventListener("click", function() {
   let inputs = document.querySelectorAll("input");
  let values = Array.from(inputs).map(input => input.value);
  
  for (let i = 0; i < placeholders.length; i++) {
   movies[i] = (values[i] || movies[i]);
  }
});
