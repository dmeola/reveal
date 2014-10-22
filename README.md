reveal
======

What it does:
Reveal is a tool for web developers that need a faster way to track down appropriate files and includes from the browser.

By placing a comment before an element, you can document the name of an include, a content asset, or just leave a note or reminder.

How it works:
Reveal is a bookmarklet that only runs when clicked. Once clicked it injects reveal.js and reveal.css (very small files) onto the page. 
It will run immediately, traversing the DOM and associating comments with DOM elements. 

When you hover over an element, the associated comment is revealed. 

Why I made it:
I got tired of finding UI issues in the browser and wasting time trying to track down the appropriate include, content asset, etc. 

Now I just place a comment at the top of includes and content assets with the name of the file. 
Then I just go into my IDE or editor and open the file. 

No more guesswork, no more hunting down files.

Set up: 
1. Drag the following into your bookmarks bar: 
    <a href = "javascript:(function(){var e=document.createElement("script");e.setAttribute("src","http://anf.dmeola.com/reveal.js");document.body.appendChild(e);var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("href","http://anf.dmeola.com/reveal.css");t.setAttribute("type","text/css");document.body.appendChild(t)})()">reveal</a>
2. ???
3. Profit.