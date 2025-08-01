export async function tours() {
    const response = await fetch("https://authenticotours-backend-853118647724.us-central1.run.app/api/tours/", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    
    if (!response.ok) {
        throw new Error("Login failed");
    }
    
    const data = await response.json();
    return data;
}