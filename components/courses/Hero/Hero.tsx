import Image from "next/image";

import { ModalSignIn } from "@/components";
import me from "@/public/png/me.png";
import myPhoto from "@/public/png/my_photo.png";
import { Button } from "@nextui-org/button";

export const Hero = () => {
  return (
    <section className={"bg-primary"}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={"flex flex-col gap-10 py-24 md:flex-row"}>
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-6"}>
              <h1 className={"h1 text-secondary"}>
                Курс "Чистий Код: Професійні Підходи та Практики"
              </h1>
              <h2 className={"text-secondary"}>
                Оптимізуйте свій код без зайвих зусиль та підвищуйте
                продуктивність з допомогою найкращих практик та інструментів
                автоматизації.
              </h2>
              <ModalSignIn cta={"Отримати зі знижкою 75%"} />
            </div>
          </div>
          <div
            className={
              "hidden h-[400px] w-[400px] flex-1 bg-cover bg-top bg-no-repeat md:block"
            }
            style={{ backgroundImage: `url(${me.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
