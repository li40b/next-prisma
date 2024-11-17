interface User {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/user");
  if (!data.ok) {
    console.error("Failed to fetch data:", data.status);
    return;
  }
  const jsonData = await data.json();
  console.log(jsonData);
  return (
    <>
      <h1>User List</h1>
      {jsonData.data.map((user: User) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}
