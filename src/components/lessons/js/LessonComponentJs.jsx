import React, { useState } from "react";
import "../../lessons/lesson.css";
import JS from "../../../assets/icons8-javascript (3).svg";
import LessonAccord from "../accordLess/LessonAccord";
const LessonComponentJs = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  const faglist = [
    {
      q: "HTML/CSS",
      a: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML. Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства. Во всемирной паутине HTML-страницы, как правило, передаются браузерам от сервера по протоколам HTTP или HTTPS, в виде простого текста или с использованием шифрования. В HTML можно встроить программый код на языке программирования JavaScript, для управления поведением и содержанием веб-страниц. Также включение CSS в HTML описывает внешний вид и макет страницы.",
    },
    {
      q: "Основы JS",
      a: "Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми».Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.",
    },
    {
      q: `Native JS
      `,
      a: "Нативным JavaScript называют «чистый» язык без фреймворков. А React Native для JS — название фреймворка. Его называют «нейтивом», потому что он позволяет писать приложения, умеющие пользоваться компонентами операционной системы.",
    },
    {
      q: "React JS",
      a: "React — это JavaScript-библиотека для создания пользовательских интерфейсов. Обратите внимание, что это именно библиотека, а не фреймворк. React часто называют фреймворком, но это ошибка. Во-первых, его использование ни к чему вас не обязывает, не формирует «фрейм» проекта. Во-вторых, React выполняет единственную задачу: показывает на странице компонент интерфейса, синхронизируя его с данными приложения, и только этой библиотеки в общем случае недостаточно для того, чтобы полностью реализовать проект.",
    },
  ];
  return (
    <div className="container_lesson">
      <div className="algoritm">
        <div className="algoritm__text">
          Алгоритмы JavaScript и <br />
          структуры данных (бета- <br />
          версия)
        </div>
        <img className="lesson_icon" src={JS} alt="" />
      </div>
      <div className="text">
        <div className="text__descrip">
          Разработчики используют HTML и CSS для управления содержимым и<br />
          стилем страницы. <br /> И они используют JavaScript, чтобы сделать эту
          страницу интерактивной.
        </div>
        <div className="text__descrip">
          В рамках сертификации по алгоритмам JavaScript и структурам данных вы{" "}
          <br />
          изучите основы JavaScript, такие как переменные, массивы, объекты,
          циклы, <br /> функции, DOM и многое другое.
        </div>
        <div className="text__descrip">
          Вы также узнаете об объектно-ориентированном программировании (ООП),
          <br />
          функциональном программировании, алгоритмическом мышлении, о том, как{" "}
          <br />
          работать с локальным хранилищем и о том, как получать данные с помощью{" "}
          <br />
          API.
        </div>
        <div className="block1">
          Примечание. Некоторые расширения браузера, такие как блокировщики
          рекламы и скриптов, могут мешать тестам. Если вы столкнулись с
          проблемами, мы рекомендуем отключить расширения, которые изменяют или
          блокируют содержимое страниц во время прохождения курса.
        </div>
        <div className="block2">
          <p className="block2__text">
            Эта сертификация в настоящее время находится на стадии
            бета-тестирования. Пожалуйста, рассмотрите возможность пожертвования
            для поддержки завершения его разработки.
          </p>

          <button
            className="button_lesson2"
            style={{
              backgroundColor: buttonHovered ? "#2d6786" : "",
              color: buttonHovered ? "#d9edf7" : "",
            }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Пожертвовать сейчас
          </button>
        </div>
      </div>
      <h1 className="h1__lesson">Курсы</h1>
      <LessonAccord faglist={faglist} />
    </div>
  );
};

export default LessonComponentJs;
