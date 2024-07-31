import ButtonComponent from "../../components/button";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <a href="/api/auth/login">Login</a>
      <ButtonComponent />
    </h1>
  );
}
