export async function login(username, password) {
    const response = await fetch("https://backend-django-n4l6.onrender.com/api/token/", {
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