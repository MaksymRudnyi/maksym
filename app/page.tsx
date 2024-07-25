import { Button } from "@nextui-org/button";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button color={"primary"}>click</Button>
    </h1>
  );
}
