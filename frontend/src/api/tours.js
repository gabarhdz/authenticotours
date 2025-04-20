export async function tours() {
    const response = await fetch("https://backend-django-n4l6.onrender.com/api/tours/", {
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