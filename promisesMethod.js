/*const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "resolved");
}); //will be resolved after 300ms

const promise2 = 93; //non-promise always marked as resolved

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "resolved2");
}); // will be resolved after 100ms

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((err) => {
        console.log(err);
    });*/

/*Promise.all Behavior:
-Promise.all will wait for promise1, promise2, and promise3 to resolve.
-The then handler of Promise.all will be called when all promises have resolved.*/






/*const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000,"one");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000,"two");
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000,"rejected");
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });*/

/*
Promise.all Behavior:
-It takes an iterable of promises and returns a single promise that resolves when all of the promises in the iterable have resolved or rejects if any of the promises rejects.
-In this case, Promise.all will wait for all three promises to settle.
-Fail fast- If any promise in the iterable rejects, Promise.all will immediately reject with the reason of the first promise that rejects.*/







/*const SlowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Done slowly");
}); //resolves after 500ms

const QuicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Done quickly");
}); //resolves after 100ms

const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "Rejected"); //always rejected
});

Promise.any([SlowlyDone, QuicklyDone, Rejection])
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });*/

/*
Promise.any Behavior:
- Unlike Promise.all(), this method is used to return the first promise that fulfills.
- It is short-circuited right after a promise is completed, so as soon as a promise is fulfilled, it will not wait for other promises to complete.
- Note that, Promise.any() was supported in node.js 15.0.0.*/


const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 100);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 500);
});

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 100);
});

const pro4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 400);
});

Promise.race([pro1, pro2, pro3, pro4])
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });




