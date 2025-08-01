export async function specificTour(tour_name) {
const response = await fetch(`https://authenticotours-backend-853118647724.us-central1.run.app/api/tours/${tour_name}/`,{
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