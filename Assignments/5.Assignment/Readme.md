- Is JSX mandatory for React?
    - No...
    - JSX is not madatory in React. We can build react app without JSX but for the developer experience JSX is recommended.

- Is ES6 mandatory for React?
    - No..
    - ES6 is not mandatory for react. React can understand  ES6 and also lesser versions of JS.

- `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX`
    - There is no diffrence here all given statements are doing same thing and we can use any of them.

- How can I write comments in JSX?
    - /* Write your comment here */ This is the only way you can write a comment in JSX.
    - This will be used for both single line and multiple line.

- What is <React.Fragment></React.Fragment> and <></> ?
    - When you want two or more tags at parent/root level without specifying it in div then it will throw an error.
    - But to solve this problem we use React.Fragment component or <></> it is a shorthand for same.

- What is Virtual DOM?
    - Virtual DOM is a reprentation of UI and it is stored in memory and synced with real DOM by reactDOM.
    - Its is stored as a component tree.

- What is Reconciliation in React?
    - Reconciliation is a algorithm which uses diff one tree with an other tree to change to determine which parts need to be changed.
    - changing of component happens with out re-rendering of the app in direclty appers using virtual DOM by reconciliation algo.
    - It improves performance drastically.

- What is React Fiber?
    - React Fiber algo to improve reconciliation diff algo.
    - When there is a change is a specefic component it will not re-render whole component but only the changed specific file.

