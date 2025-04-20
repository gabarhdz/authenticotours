export async function profilepic(file) {
    const formData = new FormData();
    formData.append("profile_pic", file);
  
    const response = await fetch("https://backend-django-n4l6.onrender.com/api/profile/create/", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error("Upload failed");
    }
  
    const data = await response.json();
    return data;
  }
  