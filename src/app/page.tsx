import { TableUsers } from "./components/TableUsers";

export default async function Home() {

  const response = await fetch('https://randomuser.me/api?results=100&noinfo');
  const data = await response.json()
  const users = await data.results
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-center ">
      {users !== undefined && <TableUsers datos={users}/>}
    </main>
  );
}
