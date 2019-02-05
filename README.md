<!-- This is an h1 element used for the main heading -->
reveal
======

<!-- Whoa a sneaky h2 element appears! -->
What it does:
------
Reveal is a tool for web developers that need a faster way to track down backend files and includes from the browser.

By placing a comment before an element on your site, you can document the name of an include, a content asset, or just leave a note or reminder. When you hover over an element the associated comment is revealed in a tooltip.

<!-- I can throw an image in a comment <a href="//unsplash.imgix.net/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?auto=format&dpr=2&fit=crop&fm=jpg&h=220&q=50&w=330" width="330"/> -->
How it works:
------
Reveal is a bookmarklet that only runs when clicked. Once clicked it injects reveal.js and reveal.css (very small files) onto the page. 
It will run immediately, traversing the DOM and associating comments with DOM elements. 

<!-- the associated comment -->
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
javascript:(function(){var e=document.createElement("script");e.setAttribute("src","https://raw.githubusercontent.com/dmeola/reveal/master/reveal.js");document.body.appendChild(e);var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("href","https://raw.githubusercontent.com/dmeola/reveal/master/reveal.css");t.setAttribute("type","text/css");document.body.appendChild(t)})()
```
2) Navigate to your site and click the bookmarklet. Hover over an element that has a preceding HTML comment. 
Example:
```html
<!-- Begin Nav.php include -->
<nav> ... </nav>
```
3) Profit.

<!-- Oh noes -->
Caveats:
------
1. This probably won't work in IE8
2. Some sites (such as github) block cross site scripting for security reasons. Such sites block the necessary reveal JS and CSS from loading. 
3. Requires jQuery (TODO: inject jQuery when necessary, or rewrite in vanilla js)
