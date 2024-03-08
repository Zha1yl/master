import React from "react";
import "./homePage.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="main">
        <h1 className="main__title">
          Добро пожаловать в учебную программу
          <span> CodeCrafters.</span>
        </h1>
        <h3 className="main__subtitle">
          Пожалуйста, замедлите шаг и прочитайте это.
        </h3>
        <p className="main__text">
          CodeCrafters — это проверенный путь к вашей первой работе разработчика
          программного обеспечения.
        </p>
        <p className="main__text">
          После завершения проекта более 40 000 человек получили работу
          разработчиков, в том числе в таких крупных компаниях, как Google и
          Microsoft.
        </p>
        <p className="main__text">
          Если вы новичок в программировании, мы рекомендуем вам начать с самого
          начала и получать эти сертификаты по порядку.
        </p>
        <p className="main__text">
          Чтобы получить каждый сертификат, создайте 5 необходимых проектов и
          пройдите все их тесты.
        </p>
        <p className="main__text">
          Вы можете добавить эти сертификаты в свое резюме или в LinkedIn. Но
          более важным, чем сертификаты, является практика, которую вы получаете
          на этом пути.
        </p>
        <p className="main__text">
          Если вы чувствуете себя подавленным, это нормально. Программировать
          сложно.
        </p>
        <p className="main__text">
          Практика – это ключ. Практика, практика, практика.
        </p>
        <p className="main__text">
          Эта учебная программа даст вам тысячи часов практической практики
          программирования.
        </p>
        <p className="main__text">
          А если вы хотите узнать больше о математике и теории информатики, у
          нас также есть тысячи часов видеокурсов на
          <Link className="main__link"> YouTube-канале CodeCrafters.</Link>
        </p>
        <p className="main__text">
          Если вы хотите получить работу разработчика или клиентов-фрилансеров,
          навыки программирования будут лишь частью головоломки. Вам также
          необходимо построить свою личную сеть и свою репутацию как
          разработчика.
        </p>
        <p className="main__text">
          Сделать это можно на LinkedIn и GitHub, а также
          <Link className="main__link"> на форуме CodeCrafters.</Link>
        </p>
        <p className="main__text">Приятного кодирования!</p>
        <div className="main__btn">
          <button className="main__button" onClick={() => navigate("/login")}>Войдите чтобы начать</button>
        </div>

        <div className="section">
          <h2 className="section__title">
            Получите бесплатные проверенные сертификаты по основной учебной
            программе CodeCrafters:
          </h2>
          <div className="section__block">
            <div className="section__pic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
                class="svg-icon"
              >
                <path d="M43.335938 4L6.667969 4C5.195313 4 4 5.195313 4 6.667969L4 43.332031C4 44.804688 5.195313 46 6.667969 46L43.332031 46C44.804688 46 46 44.804688 46 43.335938L46 6.667969C46 5.195313 44.804688 4 43.335938 4ZM27 36.183594C27 40.179688 24.65625 42 21.234375 42C18.140625 42 15.910156 39.925781 15 38L18.144531 36.097656C18.75 37.171875 19.671875 38 21 38C22.269531 38 23 37.503906 23 35.574219L23 23L27 23ZM35.675781 42C32.132813 42 30.121094 40.214844 29 38L32 36C32.816406 37.335938 33.707031 38.613281 35.589844 38.613281C37.171875 38.613281 38 37.824219 38 36.730469C38 35.425781 37.140625 34.960938 35.402344 34.199219L34.449219 33.789063C31.695313 32.617188 29.863281 31.148438 29.863281 28.039063C29.863281 25.179688 32.046875 23 35.453125 23C37.878906 23 39.621094 23.84375 40.878906 26.054688L37.910156 27.964844C37.253906 26.789063 36.550781 26.328125 35.453125 26.328125C34.335938 26.328125 33.628906 27.039063 33.628906 27.964844C33.628906 29.109375 34.335938 29.570313 35.972656 30.28125L36.925781 30.691406C40.171875 32.078125 42 33.496094 42 36.683594C42 40.117188 39.300781 42 35.675781 42Z" />
              </svg>
            </div>
            <p className="section__desc" onClick={() => navigate("/js")}>
              Cертификация алгоритмов JavaScript и структур данных(бета)
            </p>
          </div>
          <div className="section__block">
            <div className="section__pic">
              <svg
                class="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z" />
              </svg>
            </div>
            <p className="section__desc" onClick={() => navigate("/py")}>
              Сертификация научных вычислений с использованием Python (бета
              версия)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
