After delving into Module Federation on WebPack, I aim to expand this knowledge by learning how to build applications that can share modules with each other, state while maintaining developer workflow autonomy.

I find this architecture to be largely inspired by Atomic Design pattern. The concept of breaking down a project into independent, loosely coupled modules applies in this architecture and I think it is an awesome pattern for anyone who wants to build an application with varied functionality, large teams that work on specific features/modules.

So far, I'm loving it and I will document my experience with this any chance I could get.

**Asynchronous Loading in M.F**
Webpack has a shared key that is used to indicate all the libraries that are shared out of the current application. For React, it ensures that there is only one instance of react in a single page since React manages a lot of data on the library level.
M.F ensure that only the code that is needed is what's imported to any application.

**Error-handling**
One of the most common source of errors in an MF app is when an API contract is changed and developers fail to communicate it to the other teams working on other features.
Error boundaries help in mitigating such.
