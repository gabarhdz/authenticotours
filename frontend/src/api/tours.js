export async function tours() {
    const response = await fetch("http://127.0.0.1:8000/api/tours/", {
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