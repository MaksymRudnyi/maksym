"use client";

import React, { FC } from "react";

import { useSession } from "next-auth/react";

import { Countdown, SignInForm } from "@/components";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

type ModalSignInProps = {
  cta: string;
};

export const ModalSignIn: FC<ModalSignInProps> = ({ cta }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <>
      <Button color={"success"} onPress={onOpen}>
        {cta}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Реєстрація на курс.
              </ModalHeader>
              <ModalBody>
                {status !== "authenticated" ? (
                  <div>
                    <p className={"mb-2 text-xl"}>Крок 1: Авторизація</p>
                    <p className={"mb-4 text-sm"}>
                      Реєстрація дозволить зберігати ваші дані, відстежувати
                      прогрес та надавати довічний доступ до курсу
                    </p>
                    <SignInForm />

                    <p className={"mb-2 mt-4 text-xl"}>Крок 2: Купівля курсу</p>
                    <p className={"mb-4 text-sm"}>
                      Отримайте доступ до курсу за спеціальною ціною прямо зараз
                    </p>
                    <Button
                      isDisabled
                      size={"lg"}
                      color={"success"}
                      className={"w-full"}
                    >
                      Отримати доступ
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div
                      className={"mb-4 flex items-center justify-center gap-2"}
                    >
                      <p className={"text-2xl font-bold"}>360 грн</p>
                      <p className={"old-price text-md"}>1440 грн</p>
                    </div>
                    <p className={"mb-2 text-xl"}>Купівля курсу</p>
                    <p className={"mb-4 text-sm"}>
                      Отримайте доступ до курсу за спеціальною ціною прямо зараз
                    </p>
                    <Button size={"lg"} color={"success"} className={"w-full"}>
                      Отримати доступ
                    </Button>
                  </div>
                )}

                <p className={"text-center font-bold"}>
                  До закінчення акції залишилось:
                </p>

                <div className={"flex justify-center"}>
                  <Countdown isPrimaryText />
                </div>
                <p>
                  P.S. Ви нічим не ризикуєте! Гарантія повернення коштів - 14
                  днів, якщо курс вам не підійде
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Закрити
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
