import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

const Courses = () => {
  return (
    <>
      <div className={"container mx-auto min-h-screen px-4 sm:px-6"}>
        <p className={"my-6 text-xl"}>Курси</p>

        <Link href={"/courses/code-quality"}>
          <Card
            isFooterBlurred
            className="col-span-12 h-[300px] max-w-md sm:col-span-4"
          >
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">
                Курс "Чистий Код":
              </p>
              <h4 className="text-large font-medium text-white">
                Професійні Підходи та Практики
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
              <div>
                <p className="text-tiny text-black">Available soon.</p>
                <p className="text-tiny text-black">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Courses;
