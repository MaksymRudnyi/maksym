const items = [
  {
    title: "Новачки в Front-End Розробці",
    description:
      "Не впевнені у якості свого коду? Навчіться базовим принципам чистого коду та впровадження стандартів якості.",
  },
  {
    title: "Досвідчені Front-End Розробники",
    description:
      "Хочете оптимізувати робочий процес та підвищити продуктивність? Використовуйте інструменти для автоматизації форматування коду і статичного аналізу.",
  },
  {
    title: "Робите тестове завдання?",
    description:
      "Потрібно демонструвати високий рівень якості коду? Освойте інструменти і методики для чистого та ефективного коду.",
  },
  {
    title: "Команди Розробників",
    description:
      "Необхідно підтримувати консистентність коду у великих проектах? Інтегруйте інструменти контролю якості і безперервної інтеграції для підтримки високих стандартів.",
  },
];
export const ForWho = () => {
  return (
    <section>
      <div className={"container mx-auto px-4 sm:px-6"}>
        <div className={"pb-12 pt-24"}>
          <div className={"flex-1 text-center"}>
            <h2 className={"h2 mb-6"}>Для кого цей курс?</h2>
            <p className={"mb-4"}>Цей курс розроблено спеціально для:</p>
          </div>

          <div className={""}>
            <div
              className={
                "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:flex-row lg:grid-cols-4"
              }
            >
              {items.map((item, index) => (
                <div key={index} className={"text-left"}>
                  <p className={"mb-2 text-lg font-bold md:mb-4"}>
                    {item.title}
                  </p>
                  <p className={""}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
