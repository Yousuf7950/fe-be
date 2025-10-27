export default async function UsersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' });
    const users = await res.json();
  return (
    <div>
      <h1>Users Page</h1>
      <p>This is the users page.</p>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}