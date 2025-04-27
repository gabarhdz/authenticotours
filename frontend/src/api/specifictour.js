export async function specificTour(tour_name) {
const response = await fetch(`http://127.0.0.1:8000/api/tours/${tour_name}/`,{
    method:"GET",
    headers: {
    "Content-Type": "application/json",
    },
});
if(!response.ok){
    throw new Error("failed");
}


    const data = await response.json();
    return data;
}