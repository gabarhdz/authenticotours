export async function profilepic(file) {
    const formData = new FormData();
    formData.append("profile_pic", file);
  
    const response = await fetch("http://127.0.0.1:8000/api/profile/create/", {
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
  