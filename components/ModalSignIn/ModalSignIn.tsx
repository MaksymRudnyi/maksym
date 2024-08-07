"use client";

import React, { FC } from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import { Countdown } from "@/components/Countdown";

type ModalSignInProps = {
  cta: string;
};

export const ModalSignIn: FC<ModalSignInProps> = ({ cta }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const user = {};
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
                {!user ? (
                  <ul>
                    <li>
                      Крок 1 - авторизуватися{" "}
                      <a href={"/api/auth/login"}>Увійти</a>
                    </li>
                    <li>Крок 2 - купити курс</li>
                  </ul>
                ) : (
                  <>Купити курс</>
                )}

                <p className={"text-center font-bold"}>
                  До закінчення акції залишилось:
                </p>

                <div className={"flex justify-center"}>
                  <Countdown hours={3} isPrimaryText />
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
