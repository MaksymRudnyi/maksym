import Image from "next/image";

import myPhoto from "@/public/png/my_photo.png";
import { Button } from "@nextui-org/button";

export const Hero = () => {
  return (
    <section className={"bg-primary"}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={"flex flex-row gap-10 py-24"}>
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-6"}>
              <h1 className={"h1 text-secondary"}>
                Чистий Код: Професійні Підходи та Практики
              </h1>
              <h2 className={"text-secondary"}>
                Оптимізуйте свій код без зайвих зусиль та підвищуйте
                продуктивність з допомогою найкращих практик та інструментів
                автоматизації.
              </h2>
              <Button color={"success"}>Отримати зі знижкою 75%</Button>
            </div>
          </div>
          <div className={"flex-1"}>
            <Image src={myPhoto} alt="My photo" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};
