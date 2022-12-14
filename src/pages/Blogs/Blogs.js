import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-3 my-3'>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
      <p>The Four Kinds of React State to Manage</p>
      <p>1.Local state.</p>
      <p>2.Global state.</p>
      <p>3.Server state.</p>
      <p>4.URL state.</p>
     </div>
  </div>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">How does prototypical inheritance work?</h2>
      <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
     </div>
  </div>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
      <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
     </div>
  </div>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">React vs. Angular vs. Vue?</h2>
      <p>Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the âJSâ from the original name â AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular..</p>
      <p>Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesnât have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.Further reading: Vue.js Tutorial for Beginner Developers</p>
      <p>React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>
     </div>
  </div>
    </div>

    );
};

export default Blogs;