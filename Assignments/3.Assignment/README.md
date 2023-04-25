# Chapter 02 - Assignment - Igniting our App

- What is `NPM`?
```
- NPM is a package manager where all versions, dependencies and configuration is managed of packages.
- It also takes care of the future updation of packages.
- And yes it does not have any full form.
```
#
- What is `Parcel/Webpack`? Why do we need it?
```
- Parcel is a Beast.
- Parcel is nothing but a piecs of code which help our project in lot of things to get better and fast.
- It is a Bundler which helps our project in Creating Server, Bundeling, MINIFYING code, Cleaning code , Hot module replacement, Caching in development, Faster execution, Zero config, Create a production build on own and many more things.
- And without parcel or any bundler it is very difficult to create react application. 
```
- What is `.parcel-cache`
```
- .parcel-cache is a folder created when we execute parcel command in our project and it stores the information in that folder like a cache which is required frequently in execution.
- Because of this parcel gets faster it executes in bare minimum time and it depends on machine you are using.
```
- What is `npx` ?
```
 - `npx` is a command used when you we want to execute our project.
 - like `npx parcel index.html` executing through parcel.
```
- What is difference between `dependencies` vs `devDependencies`
```
- `dependencies` is a dependencies of project application which is used react application. e.g node the packages which will be requird in production is in dependencies.
- `devDependencies` is a dependencies which is used for developent enviroment and not for poduction the packages which will be not requird in production is in devDependencies. 
```
- What is Tree Shaking?
```
- Tree Shaking is used for removing dead code which means eliminating unused code in production.
- It is done by specifying import and export to every module so then bundler(Parcel) can analyz the dependecie tree and eleminate dead code in production which is Tree Shaking.
- This help in reducing the size of production bulid which further help in increasing speed of website.
```
- What is Hot Module Replacement?
```
- When anything changes or edited in your project it the HMR automatically modify the build without reloading the atual page it just changes it on runtime. So, It get faster because it doesn't need to reload the bulid for small changes.

```

- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
```
- Minifying. - It reduces the size of atual code files by removing unwanted lines and spaces. also by replacing variables name to short letters. Cleaning ur code by using Tree Shaking 🌳.
- Caching in development. - caching executable files which is required frequently in execution.
- Hot Module Reload. - HMR automatically modify the build without reloading the atual page it just changes it on runtime
- Optimization.
- Bundeling

```
- What is `.gitignore`? What should we add and not add into it?
```
- .gitignore is file where we config what file/folder from our project we don't need in our git repository.
- We should add the auto generative parts of our project like node_module, .parcel-cache.
- We should not add our config files and code file which written by us mean files which are require for production bulid.
```
- What is the difference between `package.json` and `package-lock.json`
```
- `package.json` is a config file between npm and developer and it contains configuration which we have installed.
- `package-lock.json` is a config between packages and their transitive dependecies and it we should never modify `package-lock.json` on our own.
```
- Why should I not modify `package-lock.json`?
```
- Because every package mentioned in `package-lock.json` has a uniqe id(hash) which is auto generated and it confirms that it is same package is their in production also in development.
- if we modify it will break our production build because every package is have transitive dependencie.
```
- What is `node_modules` ? Is it a good idea to push that on git?
```
- node_module in most haviest thing on earth😜.
- Because it contain all the package we install and all the packages which packages requierd.
- It is not a good idea to put these heavy thing on git because out `package-lock.json` contain the same thing which we can use in production to install all required packages.
```
- What is the `dist` folder?
```
- When we perform production build of project dist contains the minified, optimized code in a compressed manner so it can load faster live.
```
- What is `browserlists`
```
- Here we can specify which browser and it's version our application should be compatible with.
```

Read about dif bundlers: vite, webpack, parcel
Read about: ^ - caret and ~ - tilda 
Read about Script types in html (MDN Docs)
