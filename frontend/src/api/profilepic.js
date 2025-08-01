export async function profilepic(file) {
    const formData = new FormData();
    formData.append("profile_pic", file);
  
    const response = await fetch("https://authenticotours-backend-853118647724.us-central1.run.app/api/profile/create/", {
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
  