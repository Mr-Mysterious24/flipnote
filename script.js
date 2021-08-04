body {
  color: #444;
}
a {
  text-decoration: none;
}
img {
  display: block;
}
footer {
  padding:3%;
}
/* header { border:4px solid yellow; } */
header nav {
  background-color: #000;
  margin-bottom: 1%;
}
/* calling the ul classname .menu */
header .nav .menu {
  margin: 0;
  padding: 1%;
}
header nav .menu li {
  display: inline;
  margin-right: 1em;
}
header nav .menu a {
  color: white;
}
header nav .menu a:hover {
  color: yellow;
}
.hero {
  text-align: center;
  padding: 5% 0; /* top/bottom 5% right/left 0 */
  color: white;
  height: 100vh;
  background-image: url("https://picsum.photos/id/1004/800");
  background-repeat: no-repeat;
  background-size: cover;
  background-positon: center;
}
.deckofCards {
  background-color: #eee;
  padding: 1% 3%;
  color: #444;
}
.deckofCards .cardDIV {
  background-color: #fff;
  border: 1px solid #000;
}
.deckofCards .cardDIV p {
  margin: 0;
  padding: 3% 5%;
}
.deckofCards .cardDIV img {
  width: 100%;
}
/* Flexbox */
/* 
A Complete Guide to Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/     
 */
.deckofCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.deckofCards .cardDIV {
  width: 30%;
  margin-bottom: 1em;
}
/*  Grid */
/* 
Grid by Example
Everything you need to learn CSS Grid Layout
https://gridbyexample.com/
*/
/* .deckofCards {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
}
 */
(edited)
white_check_mark
eyes
raised_hands