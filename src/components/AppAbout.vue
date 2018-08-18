<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <header class='masthead'>
  <p class='masthead-intro'>Hi I'm</p>
  <h1 class='masthead-heading'>Garry</h1>
</header>
<section class="introduction-section">
    <h1>Introduction</h1>
    <p>Hello everyone introduce briefly my name is Garry native Surabaya. I am a juninor programmer at an AsiaCommerce company</p>
    <p>I love the internet, technology, and building beautiful things.</p>
</section>
<section class="location-section">
    <h1>Where I'm From</h1>
    <p>I'm originally from Surabaya, Jatim. </p>
</section>
<section class="questions-section">
    <h1>More About Me</h1>
    <h2>What are your favorite hobbies?</h2>
    <p>Love sports and like programmers</p>
    <h2>What's your dream job?</h2>
    <p>His dream job is working in a company engaged in technology and especially as a programmer</p>
    <h2>Where do you live?</h2>
    <p>I live on a rural acreage, but I'm close to Ottawa and Montreal.</p>
    <h2>Why do you want to be a web developer?</h2>
    <p>Because programming is awesome and programming for the internet is even more awesome.</p>
</section>
</body>
</html>
</template>

<style>
body {
    /* Typography Declarations */
    color: #222222;
    font-size: 1em;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  background-size: cover;
  background-repeat: no-repeat;
}

.masthead-intro {
    /* Layout Declarations */
    margin-bottom: 0.1em;
    /* Typography Declarations */
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 2em;
}

.masthead-heading {
    /* Layout Declarations */
    margin-top: -0.2em;
    /* Typography Declarations */
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 6em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}

.introduction-section,
.location-section,
.questions-section {
    max-width: 38em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
}

.introduction-section > p,
.location-section > p,
.questions-section,
.content-footer > p {
    /* Typography Declarations */
    font-weight: 300;
    letter-spacing: 0.05em;
}

.questions-section > h2 {
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 1.2em;
    font-weight: bold;
    /* Layout */
    margin: 2em 0 1em 0;
}

section > h1 {
    margin-top: 2em;
}

.content-footer,
.masthead-heading,
.masthead-intro {
  text-align: center;
}

.masthead {
  padding: 6em 0;
  background-size: cover;
  background-repeat: no-repeat;
 
}

.masthead-intro {
  margin-bottom: 0.1em;
  font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 2em;
}

.masthead-heading {
  margin-top: -0.2em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 6em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.introduction > p,
.location > p,
.content-footer > p {
    /* Typography Declarations */
    font-weight: 300;
    letter-spacing: 0.05em;
}
h2 {
    /* Typography Declarations */
    font-family: "Gentium Book Basic", Georgia, serif;
    font-size: 1.2em;
    font-weight: bold;
}

.introduction-section,
.location-section,
.questions-section {
    max-width: 38em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
}
.content-footer {
  margin: 50px 0;
  padding: 20px 0;
  text-align: center;
  background-color: #73A8C2;
  text-decoration: none;
}
.social > li {
  display: inline-block;
  margin: 0 5px;
}
.content-footer > p {
  color: #F7EDE1;
}
a {
    font-weight: bold;
    text-decoration: none;
    color: #F1C863;
}
  
@media only screen and (max-width: 500px) {
    .masthead {
        padding: 3em 0;
    }
    .masthead-heading {
        font-size: 3em;
    }
    .content-footer {
        padding: 2em 2.5em;
  }
}
</style>

