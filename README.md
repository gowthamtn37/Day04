# Day04

WINDOW in Javascript

The Window interface represents a window containing a DOM document; the document property points to the DOM document 
loaded in that window.

A window for a given document can be obtained using the document.defaultView property.

A global variable, window, representing the window in which the script is running, is exposed to JavaScript code.

The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily
directly associated with the concept of a user interface window. However, the Window interface is a suitable place to include
these items that need to be globally available. Many of these are documented in the JavaScript Reference and the DOM Reference.

SCREEEN in Javascript

The Window property screen returns a reference to the screen object associated with the window. The screen object, 
implementing the Screen interface, is a special object for inspecting properties of the screen on
which the current window is being rendered.

DOCUMENTS in Javascript

The Document interface represents any web page loaded in the browser and serves as an entry point into
the web page's content, which is the DOM tree.

The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally
to the document, like how to obtain the page's URL and create new elements in the document.

EventTarget
Node
Document
The Document interface describes the common properties and methods for any kind of document. 
Depending on the document's type (e.g. HTML, XML, SVG, …), a larger API is available: HTML documents,
served with the "text/html" content type, also implement the HTMLDocument interface, whereas XML and SVG documents
implement the XMLDocument interface.
