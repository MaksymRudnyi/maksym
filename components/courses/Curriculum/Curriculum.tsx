export const Curriculum = () => {
  return (
    <section>
      <div className={"container mx-auto px-4 sm:px-6"}>
        <div className={"flex flex-row gap-6 py-24"}>
          <div className={"flex-1 text-center"}>
            <h2 className={"h2"}>Програма курсу</h2>

            <div className={"mx-auto max-w-lg text-left"}>
              <ol className={"list-inside list-decimal"}>
                <li>Вступ до якості коду</li>
                <li>Статичний аналіз коду</li>
                <li>Автоматичне форматування коду</li>
                <li>Контроль якості через тестування</li>
                <li>Безперервна інтеграція та перевірка коду</li>
                <li>Використання Git Hooks для забезпечення якості коду</li>
                <li>Аналіз та моніторинг якості коду</li>
                <li>Документування та обговорення результатів</li>
              </ol>
              <p className={"font-bold"}>Практичні приклади та кейси</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
