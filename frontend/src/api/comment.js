export async function comment(title, comment, calification,tour, characteristics) {
    const response = await fetch('http://127.0.0.1:8000/api/comments/post/',{
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