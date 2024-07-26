import { Button } from "@nextui-org/button";

import { Countdown } from "@/components/Countdown";

export const Invite = () => {
  return (
    <section className={"bg-primary"}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={"flex flex-col gap-10 py-24 md:flex-row"}>
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-6 text-secondary"}>
              <h3 className={"text-4xl"}>
                Записуйтесь на курс уже зараз за спеціальною пропозицією всього
                за
              </h3>
              <p className={"text-8xl font-bold"}>360 грн</p>
              <p className={"text-5xl line-through"}>1440 грн</p>
              <Button color={"success"}>Отримати доступ</Button>
            </div>
          </div>
          <div className={"flex-1"}>
            <p
              className={"mx-auto max-w-md text-center text-4xl text-secondary"}
            >
              До закінчення акції залишилось:
            </p>
            <div className={"flex justify-center py-10"}>
              <Countdown hours={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
