import { FaCircleCheck } from "react-icons/fa6";

const items = [
  "Кількість модулів: Вісім ключових модулів, кожен з яких зосереджений на певній темі.",
  "Кількість відеоуроків: Десять відео, кожне тривалістю 15-20 хвилин, які прямо передають важливу інформацію.",
  "Загальна тривалість: Весь курс триває близько 3 годин, щоб ви могли швидко перейти від навчання до практики.",
  "Додаткові матеріали: Кожен модуль супроводжується короткими PDF та чеклистами для зручного закріплення матеріалу.",
  "Практичні завдання: З кожним модулем йдуть практичні завдання, щоб ви могли одразу застосувати нові знання.",
  "Доступ до спільноти: Ви отримаєте доступ до закритої спільноти, де можна обговорювати ідеї та отримувати поради від інших учасників курсу.",
];
export const CourseStructure = () => {
  return (
    <section
      className={"overflow-hidden bg-mobile-course-program bg-cover bg-center"}
    >
      <div className={"bg-gray-900 bg-opacity-90"}>
        <div className={"container mx-auto px-4 text-secondary sm:px-6"}>
          <div className={"flex flex-row gap-6 py-24"}>
            <div className={"flex-1 text-center"}>
              <h2 className={"h2 mb-6"}>З чого складається курс</h2>
              <p className={"mb-4 text-xl"}>
                Цей курс — ваш шлях до майстерності у написанні якісного коду,
                прямо і до суті. Ось що ви отримаєте:
              </p>
              <div className={"mx-auto max-w-3xl text-left"}>
                {items.map((item, index) => (
                  <div key={index} className={"flex items-center gap-4 py-2"}>
                    <FaCircleCheck className={"min-h-5 min-w-5 text-lg"} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
