function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        console.log("Data fetched:", data);
        callback(data);
    }, 2000);
}

function handleData(data) {
    console.log("Handling data:", data);
}

fetchData(handleData);