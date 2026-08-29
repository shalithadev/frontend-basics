// Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout(() => resolve("Promise resolved!"), 3000);
  } else {
    reject("Promise rejected!");
  }
});

async function initializeApp() {
    try {
        const message = await myPromise;
        console.log("Message from promise:", message);

        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userData = await userResponse.json();

        if(userData?.id) {
            console.log("(1) User : ", userData);
            const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
            const postsData = await postsResponse.json();
            console.log("(2) Posts : ", postsData);
        }

    } catch (error) {
        console.log("Error fetching data : ", error);
    }
}

// Call the async function
// long running task
initializeApp();

// short running task
console.log("I'm here after the async function!");
