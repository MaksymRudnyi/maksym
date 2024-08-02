"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPatreon,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { usePathname } from "next/navigation";

import clsx from "clsx";

const socials = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/maxim.rudniy/",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/maksym-rudnyi/",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/@MaksymRudnyi",
  },
  {
    icon: FaTiktok,
    url: "https://www.tiktok.com/@maksymrudnyi",
  },
  {
    icon: FaPatreon,
    url: "https://patreon.com/rudnyi",
  },
];

export const Footer = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);

  const isWithFixedContainer = pathname.indexOf("/courses/") === 0;
  const footerClasses = clsx(isWithFixedContainer && "pb-16");
  return (
    <footer className={footerClasses}>
      <div className={"bg-blue-200 py-4"}>
        <div
          className={
            "container mx-auto flex items-center justify-center gap-6 px-4 sm:px-6"
          }
        >
          {socials.map(({ icon: Icon, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "block flex h-8 w-8 items-center justify-center rounded bg-primary align-middle text-white hover:text-blue-700"
              }
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className={"bg-primary text-secondary"}>
        <div className={"container mx-auto px-4 pt-6 sm:px-6"}>
          <div
            className={
              "flex flex-col gap-6 border-b-1 border-blue-200 pb-6 text-sm"
            }
          >
            <p>
              IMPORTANT: Please do not provide your name and email before
              reading the Legal Disclaimer. We cannot provide any assurances nor
              will we make any guarantees regarding your ability to achieve
              results with our ideas, tools, information, and strategies. It
              should be understood that all our products and services are
              strictly for educational and informational purposes. Nothing on
              this website, or any associated websites, or in our content or
              curriculum, should be taken as a promise or guarantee of results.
              Exercise caution and always seek advice from your accountant,
              lawyer, or professional advisor before acting on this or any
              information regarding changes to your lifestyle, business, or
              finances. You alone are accountable for your decisions, actions,
              and outcomes. By registering on this website, you agree to release
              us from any liability for your decisions, actions, or results, at
              any time and under any circumstances.
            </p>
            <p>
              ВАЖЛИВО: Будь ласка, не вказуйте своє ім'я та електронну адресу до
              прочитання Правової заяви. Ми не можемо надавати гарантій та не
              будемо давати обіцянок щодо вашої здатності досягти результатів з
              нашими ідеями, інструментами, інформацією та стратегіями. Варто
              зазначити, що всі наші продукти та послуги призначені виключно для
              освітніх та інформаційних цілей. Ніщо на цьому сайті, або на
              будь-якому з наших сайтів, або в нашому контенті чи навчальних
              програмах не повинно розглядатися як обіцянка або гарантія
              результатів. Дійте обережно і завжди шукайте поради у свого
              бухгалтера, юриста або професійного радника перед тим, як діяти
              згідно з цією або будь-якою іншою інформацією, пов'язаною зі
              змінами у вашому способі життя, бізнесі або фінансах. Ви самі
              несете відповідальність за свої рішення, дії та наслідки.
              Реєструючись на цьому сайті, ви погоджуєтеся звільнити нас від
              будь-якої відповідальності за ваші рішення, дії або результати в
              будь-який час та за будь-яких обставин.
            </p>
          </div>
        </div>
        <div
          className={"container mx-auto flex justify-between px-4 py-6 sm:px-6"}
        >
          <p>Created by Maksym Rudnyi</p>
          <p>Всі права захищені</p>
        </div>
      </div>
    </footer>
  );
};
