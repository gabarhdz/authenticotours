export async function login(username, password) {
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({  username, password }),
    });
    
    if (!response.ok) {
        throw new Error("Login failed");
    }
    
    const data = await response.json();
    console.log(data.access)
    localStorage.setItem("token", data.access);
    return data;
}