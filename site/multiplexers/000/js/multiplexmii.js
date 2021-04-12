// This javascript code utilizes a unmodified version of https://github.com/jfriend00/docReady/,
// and license is between ==SOF== and ==EOF==, so as to
// speak and/or say, and wherefore and/or therefore the
// license goes as follows:
// ==SOF==
// The MIT License (MIT)
// 
// Copyright (c) 2014, John Friend
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// ==EOF==
function initalizemii(){
  const s = document.createElement("script"); 
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"; 
  s.onload = function(e){console.log("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js was loaded......")};  
  document.head.appendChild(s);
  const seed = initalizeotherscripts()
  return initalizeothersripts(seed)
};
function initalizeotherscripts(seed){
  $.getScript('apis/vidapi/000/vidapi.js', function() {
    console.log("apis/vidapi/000/vidapi.js was loaded......")
    $.getScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js', function() {
      console.log("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js was loaded......")
    });
  });
  return initalizeprimarydata(seed); 
};
function initalizeprimarydata(seed){
  const primarydata = "<link rel=\"stylesheet\" href=\"multiplexers/000/css/multiplexmii.css\" type=\"text/css\">"
  const secondarydata = "<link rel=\"shortcut icon\" type=\"image/jpeg\" href=\"assets/images/favicon.jpg\">"
  initalizesecondarydata(primarydata, secondarydata, seed)
  return console.log("multiplexers/000/css/multiplexmii.css was loaded");
}
function initalizesecondarydata(primarydata, secondarydata, seed){
  return $('body').append(primarydata+secondarydata+'</div></div></body><div class="d" id="sessionseed" hidden>'+seed+'</div></html>');
}
r(function() {
  docReady(function() {
    return initalizemii()
  });
return document.title = "XConnect24"
});
function r(f) {
        /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
(function(funcName, baseObj) {
    "use strict";
    // The public function name defaults to window.docReady
    // but you can modify the last line of this function to pass in a different object or method name
    // if you want to put them in a different namespace and those will be used instead of 
    // window.docReady(...)
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;
    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }
    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }
    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);
// modify this previous line to pass in your own method name 
// and object for the method to be attached to
