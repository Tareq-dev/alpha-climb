import React from "react";

const Blog = () => {
  return (
    <div className="px-10 py-14">
      <div>
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Q.A - 1 : How will you improve the performance of a React
            Application?
          </h2>
          <ul>
            <li>
              * Detecting wasted Renders in a React 18 using React performance
              optimization tools
            </li>
            <li>
              * Detecting unnecessary rendering of components by using “Why did
              you update” library
            </li>
            <li>
              * React performance tuning by fixing unnecessary rendering of
              components in React
            </li>
            <li>
              * Implementing shouldComponentUpdate for preventing unnecessary
              renders
            </li>
            <li>
              * Improving performance due to unnecessary renders using
              PureComponent
            </li>
            <li>
              * Optimizing the app loading time further with Code splitting
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 mt-3">
            Q.A - 2 : What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            <span className="font-bold">Local state :</span> Data that we handle
            in one or more components is referred to as local state.The useState
            hook is most commonly used in React to manage local state.Local
            state would be required, for example, to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled, and the values of a form's
            inputs when the form is disabled.
          </p>
          <p>
            <span className="font-bold">Global state :</span> Data that we
            handle across several components is referred to as global state.
            When we wish to acquire and change data everywhere in our app, or at
            least across several components, we need global state. Authenticated
            user state is a frequent example of global state. It is important to
            obtain and alter a user's data across our program if the user is
            signed in. Sometimes what we consider to be a local condition
            becomes global.
          </p>
          <p>
            <span className="font-bold">Server state :</span> The idea of server
            state is simple and clear, but it may be difficult to maintain with
            all of our local and global UI data. Every time you download or
            change data from an external server, you must handle numerous bits
            of state, including loading and error state.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 mt-3">
            Q.A - 3 : How does prototypical inheritance work?
          </h2>
          <p>
            Prototype-based programming is an object-oriented programming
            technique in which behavior reuse (also known as inheritance) is
            accomplished by reusing existing prototype objects. Prototypal,
            prototype-oriented, classless, or instance-based programming are all
            terms used to describe this programming approach.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 mt-3">
            Q.A - 4 : Why you do not set the state directly in React ?
          </h2>
          <p>
            If I update it directly, call0ing the setState() afterward may just
            replace the update i made. When i directly update the state, it does
            not change this.state immediately. Instead, it creates a pending
            state transition, and accessing it after calling this method will
            only return the present value. I will lose control of the state
            across all components. If I try to update state directly then it
            won't re-render the component. Instead use setState() method. It
            schedules an update to a component's state object. When state
            changes, the component responds by re-rendering.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 mt-3">
            Q.A - 5 : You have an array of products. Each product has a name,
            price, description, etc. How will you implement a search to find
            products by name?
          </h2>
          <p>
            At first I am find the array of products to find the single product
            object. Then get a product name. For searching I will use the
            product name and find method of javascript. The input field value
            will search a product by find method.
          </p>
          <img
            className="mt-2"
            src="https://i.ibb.co/XSfZTHW/Code.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 mt-3">
            Q.A - 6 : What is a unit test? Why should write unit tests? ?
          </h2>
          <p>
            Unit tests are automated tests implemented by software developers to
            confirm that a piece of an application (referred to as a "unit")
            matches its design and operates as expected. A unit in structured
            programming can be a whole module, although it's more likely to be a
            single function or process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
