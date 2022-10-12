import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div div className='Questions' >
            <h1 className='title'>Some Quetions answer:</h1>
            <div className='question'>
                <h1>What is the purpose of react routes</h1>
                <p>Ans:
                    React router is a tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.
                </p>
            </div>
            <div className='question'>
                <h1>How does context API works?</h1>
                <p>Ans:
                    Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.
                </p>
            </div>
            <div className='question'>
                <h1>Explain UseRef?</h1>
                <p>Ans: useRef is a hook which returns an object with a current property set to the value passed to the hook.This object is mutable so the current property can be changed. Importantly this object exists outside of React’s render cycle, so the value persists throughout a components lifecycle.

                    It also provides a way for developers to interact directly with DOM nodes, outside of React’s management of the Virtual DOM. </p>
            </div>
        </div >
    );
};

export default Blog;