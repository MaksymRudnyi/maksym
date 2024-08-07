export default async function ProfileServer() {
  const user = {};

  return (
    user && (
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )
  );
}
