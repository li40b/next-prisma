import CreateUser from "@/feature/user/components/CreateUser"

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
  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium">Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium">Address</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {jsonData.data.map((user: User) => (
                    // <div key={user.id}>
                    //   <h2>{user.name}</h2>
                    //   <p>{user.email}</p>
                    // </div>
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CreateUser />
    </>
  );
}
