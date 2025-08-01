export async function signup(username, password) {
    const response = await fetch("https://authenticotours-backend-853118647724.us-central1.run.app/api/user/create/", {
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
    localStorage.setItem("token", data.token);
    return data;
}