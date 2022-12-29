const posts0 = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

function createPost0(post) {
  setTimeout(function () {
    posts0.push(post);
  }, 2000);
}

function getPost0() {
  setTimeout(function () {
    let output = "";
    posts0.forEach(function (post) {
      output += `
                <li>${post.title}</li>
             `;
    });
    document.querySelector("#without-callFunction").innerHTML = output;
  }, 1000);
}

/* In Output we do not have post three because it takes 2s and
the next function that shows posts take only 1 sec */
createPost0({ title: "post three", body: "This is post three" });
getPost0();
console.log(posts0);

// ----------------------------------------------
/*
Callback function is one method for handling asynchronous code.
 With callback function we can turn asynchronous code into synchronous code.
 We control createPost function that must be implemented first, and getPost function 
 has to wait for that. when createPost function loaded or implemented completely,
 after that with callback function
 we call getPost function to implement.
*/

const posts1 = [
  { title: "post one", body: "This is post one" },
  { title: "post two", body: "This is post two" },
];

function createPost(post, callback) {
  setTimeout(function () {
    posts1.push(post);
    callback();
  }, 2000);
}

function getPost() {
  setTimeout(function () {
    let output = "";
    posts1.forEach(function (post) {
      output += `
                <li>${post.title}</li>
             `;
    });
    document.querySelector("#wit-callFunction").innerHTML = output;
  }, 1000);
}

createPost({ title: "post three", body: "This is post three" }, getPost);
console.log(posts1);
