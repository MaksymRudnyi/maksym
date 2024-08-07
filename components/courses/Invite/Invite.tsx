import { Countdown, ModalSignIn } from "@/components";
import { Button } from "@nextui-org/button";

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
              <p className={"old-price text-5xl"}>1440 грн</p>
              <ModalSignIn cta={"Отримати доступ"} />
            </div>
          </div>
          <div className={"flex-1"}>
            <p
              className={"mx-auto max-w-md text-center text-4xl text-secondary"}
            >
              До закінчення акції залишилось:
            </p>
            <div className={"flex justify-center py-10"}>
              <Countdown />
            </div>
            <p className={"font-bold text-secondary"}>
              Ви нічим не ризикуєте - якщо курс вам несподобається я поверну вам
              кошти без зайвих запитань
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
