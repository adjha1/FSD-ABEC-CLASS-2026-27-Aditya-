async function fetchDemo() {
    const url = "https://dummyjson.com/products?limit=5";
    try {
        const res = await fetch(url);
        const data = await res.json()
        console.log("res=", res);
        console.log("data=", data.products);
    }
    catch (err) {
        console.log("not fount data", err);
    }
}

fetchDemo();