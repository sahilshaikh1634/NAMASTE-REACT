#   1. Assignment

1.  What is Emmet?
 
    - Emmet is a plugin in for many text editors which greatly improve HTML and CSS workflow.
    - Allows you to type shortcuts that are then automatically expaned into full pieces code.
    - Type less, save both key strokes and time. 
    - Auto completion means fewer missing tags and leading to more robust valid files. 
#

2. Difference between a Library and Framework?

    - Essentially, Both libraries and Framework are reuseable code written by developers to solve complicated problems.
    - There is only one answer to this question, and that is to reuse the code that has already been written by someone else (or another developer). Developers can avoid writing code for functionality that is already written in the library by using it. The result is more efficiency and less time spent on coding. Since it’s more likely that other people are using it too, you’ll benefit from them finding and fixing any bugs. This is one of the reasons libraries are useful. 
    - Software development is a complex process. This involves a lot of phrases like coding, designing, testing, etc. When it comes to coding, developers must worry about syntax, declarations, garbage collection, statements, exceptions, and more. Software frameworks make development easier by providing a common platform from which developers can control all or most of the software development process.
#
3.  What is CDN? Why do we use it?
    - A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are
    - While a CDN does not host content and can’t replace the need for proper web hosting, it does help cache content at the network edge, which improves website performance.
    - CDNs can reduce the amount of data that’s transferred by reducing file sizes using tactics such as minification and file compression. Smaller file sizes mean quicker load times.
#
4. Why is React known as React?
    - It’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.

    - React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.

    - React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components. These components are built using a declarative syntax that allows developers to describe what the interface should look like at any given moment, and React takes care of efficiently updating the DOM (Document Object Model) as needed when the data changes.
#
5. What is crossorigin in script tag?
    - The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.
#
6. What is diference between React and ReactDOM?
    - React: React is a javascript library, designed for building better user interfaces.
    - React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM
    - In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.
    - React-DOM binds the idea of React to a web browser. And ideally, React has nothing to do with a browser or web for that matter.
#
7. What is difference between react.development.js and react.production.js files via CDN?
    - The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
    - The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.
    - The very basic difference is that Production Build has ugly, minified(compressed) version of your javascript code, so this makes rendering of file on end user's browser very quick and performance enhancing.
#   
8. What is async and defer?
    - This attribute is used for to how script should be loaded and executed in the browser.
    ```js
    <script src=" " >  
    // normal script execution. Here while html parsing is going on if we encountered any script then html parsing is stopped and script is fetched from network and executed and then html parsing will start again
    .
    .

    <script async src=" "> 
    //script execution using async. Here while html parsing is going on script will be fetched from network and executed by stoping html parsing but order is not guaranteed in async
    .
    .

    <script defer src=" "> 
    //script execution using defer. Here while html parsing is going on script will be fetched from network but it will at the end when html parsing is done and here order of execution is guaranteed.
    ```    