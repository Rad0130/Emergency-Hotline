1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById helps to get an specific element by it's ID. getElementsByClassname helps to get a list of all class elements. By using querySelector/querySelectorAll we can get nodelist and cann acces an specific tag element.

2.How do you create and insert a new element into the DOM?
Ans:get parent element first.
const new=document.createElement('div').
parent.appendChild(new)

3.What is Event Bubbling and how does it work?
Ans:Event bubbling is a method to propagate from child Nodes to Parent Nodes. Using Event bubbling we can propagate parent of a child. It works by using ".parentElement()" method.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of multiple child elements. It’s useful because it improves performance, especially when dealing with dynamically added elements, as you only need to listen for events on the parent.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() Prevents the default action associated with an event from occurring.stopPropagation() Stops the event from propagating up or down the DOM tree, stopping other event listeners from being triggered on parent or child elements.