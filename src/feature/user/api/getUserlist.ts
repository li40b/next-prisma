export default async function getUserList() {
  const response = await fetch(`http://localhost:3000/api/user`);
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData
  } else {
    console.error("Failed to fetch data:", response.status);
  }
} 