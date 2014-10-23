reveal
======

What it does:
------
Reveal is a tool for web developers that need a faster way to track down backend files and includes from the browser.

By placing a comment before an element on your site, you can document the name of an include, a content asset, or just leave a note or reminder. When you hover over an element the associated comment is revealed in a tooltip.

How it works:
------
Reveal is a bookmarklet that only runs when clicked. Once clicked it injects reveal.js and reveal.css (very small files) onto the page. 
It will run immediately, traversing the DOM and associating comments with DOM elements. 

When you hover over an element, the associated comment is revealed. 

Why I made it:
------
I got tired of finding UI issues in the browser and wasting time trying to track down the appropriate include, content asset, etc. 

Now I just place a comment at the top of includes and content assets with the name of the file. 
Then I just go into my IDE or editor and open the file. 

No more guesswork, no more hunting down files.

Set up:
------
1) Bookmark this page, then edit the bookmark and replace the URL with the following:
```javascript
javascript:(function(){var e=document.createElement("script");e.setAttribute("src","http://anf.dmeola.com/reveal.js");document.body.appendChild(e);var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("href","http://anf.dmeola.com/reveal.css");t.setAttribute("type","text/css");document.body.appendChild(t)})()"
```
2) Navigate to your site and click the bookmarklet. Hover over an element that has a preceding HTML comment. 
Example:
```html
<!-- Begin Nav.php include -->
<nav> ... </nav>
```
3) Profit.

Caveats:
------
1. This probably won't work in IE8
2. Some sites (such as github) block cross site scripting for security reasons. Such sites block the necessary reveal JS and CSS from loading. 
3. Requires jQuery (TODO: inject jQuery when necessary, or rewrite in vanilla js)
