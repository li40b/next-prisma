export async function postUser() {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 4,
      name: "yasuo",
      email: "yasuo",
    }),
  });

  if (!response.ok) {
    console.error("Failed to create user:", response.status);
    return;
  }

  const jsonData = await response.json();
  console.log("User created:", jsonData.data);
}