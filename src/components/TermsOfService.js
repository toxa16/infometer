import React from 'react';

export default function TermsOfService() {
  return (
    <div>
      <h2 className="text-info mb-3">Terms of Service</h2>
      <div className="text-justify">
        <h5 className="mt-4">1. English version</h5>
        <p>
          The InfoMeter Website (in further reading - "Website") is a service which 
          represents percentage values of probability of information entered by end user. 
          These probability values are <b>pseudo-randomly generated numbers</b>, 
          thus they cannot be considered as any kind of real-world estimation 
          of any information, including the one entered by the end user, under 
          any circumstances. Due to the above, the Website can be used for 
          enternainment purposes only.
        </p>
        <p>
          THE OWNER OF THE WEBSITE IS NOT LIABLE FOR ANY DAMAGES, LOSSES, 
          INJURIES OR OTHER NEGATIVE CONSEQUENCES THAT HAVE OCCURRED DUE TO OR 
          AS A RESULT OF DECISIONS TAKEN BASED ON PROBABILITY VALUES OR OTHER 
          INFORMATION REPRESENTED BY THE WEBSITE.
        </p>
        <p>
          The Terms of Service text is provided in English and Ukrainian languages. 
          In case of any differences the version in <b>Ukrainian</b> has the priority.
        </p>

        <h5 className="mt-4">2. Ukrainian version</h5>
        <p>
          Веб-сайт "InfoMeter" (далі - "Веб-сайт") є сервісом, який відображає у відсотках 
          значення імовірності інформації, введеної кінцевим користувачем. Дані значення 
          імовірності є <b>згенерованими псевдо-випадковими числами</b>, тому вони за жодних 
          обставин не можуть сприйматись як будь-яка реальна оцінка будь-якої інформації, 
          в тому числі введеної кінцевим користувачем. З вищезазначених причин, Веб-сайт 
          може використовуватись виключно у розважальних цілях.
        </p>
        <p>
          ВЛАСНИК ВЕБ-САЙТУ НЕ НЕСЕ ВІДПОВІДАЛЬНОСТІ ЗА БУДЬ-ЯКІ ВТРАТИ, ПОШКОДЖЕННЯ, 
          ПОРАНЕННЯ ЧИ ІНШІ НЕГАТИВНІ НАСЛІДКИ, ЩО ВИНИКЛИ В РЕЗУЛЬТАТІ АБО ВНАСЛІДОК РІШЕНЬ, 
          ПРИЙНЯТИХ НА ОСНОВІ ЗНАЧЕНЬ ІМОВІРНОСТЕЙ АБО ІНШОЇ ІНФОРМАЦІЇ, 
          ВІДОБРАЖЕНОЇ НА ВЕБ-САЙТІ.
        </p>
        <p>
          Текст Правил сервісу надається англійською та українською мовами. 
          У разі наявності будь-яких відмінностей перевагу має текст <b>українською</b> мовою.
        </p>
      </div>
    </div>
  );
}
