import { FaArrowLeft } from "react-icons/fa";

import { Link } from "@nextui-org/react";

const VIDEOS = {
  intro: {
    id: "OBaeIZvq6Ng",
    title:
      "Повний курс по React. Частина 1 - вступ, теорія, компоненти React, JSX, state, props, Storybook.",
  },
  second: {
    id: "M4-rYXyFreI",
    title: "Повний курс по React. Частина 2 - React Hooks",
  },
  third: {
    id: "C-8E8sr0IAo",
    title:
      "Advanced React. Повний курс по React з прикладами. React Context, Suspense, Performance. Частина 3",
  },
};
type VideoKey = keyof typeof VIDEOS;

const Page = ({ params }: { params: { slug: string } }) => {
  const videoKey = params.slug as VideoKey;
  const video = VIDEOS[videoKey];
  if (!video) {
    return <p>Video not found</p>; // Fallback if the video is not found
  }
  return (
    <section>
      <div className={"h-screen"}>
        <div
          className={
            "border-red bold flex h-16 flex-row items-center gap-2 border-1 pr-4 md:pl-4"
          }
        >
          <Link href={"/courses"} className={"p-4 md:hidden"}>
            <FaArrowLeft />
          </Link>
          <p>Чистий Код: Професійні Підходи та Практики</p>
        </div>
        <div className={"flex flex-col gap-4"}>
          <div className={"mt-4 w-full px-4"}>
            <iframe
              className={"aspect-video w-full"}
              id="ytplayer"
              src={`https://www.youtube.com/embed/${video.id}?controls=1&wmode=transparent&rel=0&showinfo=0&enablejsapi=1&modestbranding=1`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className={"mt-4"}>
              <p>{video.title}</p>
            </div>
          </div>
          <div className={"flex flex-col gap-2 border-t-1 px-4 pt-4"}>
            <Link href={"/courses/code-quality/intro"}>Частина 1</Link>
            <Link href={"/courses/code-quality/second"}>Частина 2</Link>
            <Link href={"/courses/code-quality/third"}>Частина 3</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
