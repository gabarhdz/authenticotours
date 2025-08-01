export async function comment(title, comment, calification,tour, characteristics) {
    const response = await fetch('https://authenticotours-backend-853118647724.us-central1.run.app/api/comments/post/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            title: title,
            text: comment,
            tour_name: tour,
            calification: calification,
            characteristics: characteristics,
        }),
    })

}