import {
  AiOutlineLineChart,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";

import { Card } from "./components/Card";

const results = [
  {
    icon: AiOutlineTrophy,
    title: "Висока якість коду",
    description:
      "Освоїте застосування передових інструментів статичного аналізу та автоматичного форматування коду, що забезпечить чистоту та легкість підтримки ваших проєктів. Ваші навички допоможуть зробити ваш код взірцем для наслідування.",
  },
  {
    icon: AiOutlineThunderbolt,
    title: "Ефективність і продуктивність",
    description:
      "Виявлятимете та виправлятимете помилки з неймовірною швидкістю, оптимізуєте процеси розробки. Це дозволить швидше реалізовувати нові функції, зменшуючи час на розробку та підвищуючи ефективність.",
  },
  {
    icon: AiOutlineLineChart,
    title: "Конкурентна перевага на ринку",
    description:
      "Набуті навички зроблять вас бажаним кандидатом для провідних технологічних компаній. Ви станете розробником, котрий може гарантувати високу якість коду та ефективність розробки, що є ключовими вимогами на сучасному ринку.",
  },
];
export const YourResults = () => {
  return (
    <section>
      <div className={"container mx-auto px-4 pt-24 sm:px-6"}>
        <h2 className={"h2 mb-20 text-center"}>Ваші результати після курсу</h2>

        <div className={"flex flex-col gap-20 lg:flex-row lg:gap-10 xl:gap-20"}>
          {results.map((result, index) => (
            <Card key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};
