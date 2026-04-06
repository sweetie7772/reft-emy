// // Данные игр
// const gamesData = [
//   {
//     name: "FUGU",
//     stars: 4.9,
//     bonus: "700 FS + 250% БОНУС",
//     placesText: "ОСТАЛОСЬ МЕСТ: 8 ИЗ 100",
//     isHot: true,
//     features: ["Безумный на вывод", "Высокий RTP", "Ежедневный рейкбок"],
//     link: "https://example.com/fugu",
//   },
//   {
//     name: "BEEF",
//     stars: 4.7,
//     bonus: "600 FS + 250% БОНУС",
//     placesText: "ОСТАЛОСЬ МЕСТ: 14",
//     isHot: false,
//     features: ["Безумный на вывод", "Высокий RTP", "Быстрая регистрация"],
//     link: "https://example.com/beef",
//   },
//   {
//     name: "MARTIN",
//     stars: 4.8,
//     bonus: "600 FS + 250% БОНУС",
//     placesText: "ОСТАЛОСЬ МЕСТ: 21",
//     isHot: false,
//     features: ["Безумный на вывод", "Крупные турниры", "Ежедневный рейкбок"],
//     link: "https://example.com/martin",
//   },
//   {
//     name: "IRWIN",
//     stars: 4.6,
//     bonus: "500 FS + 250% БОНУС",
//     placesText: "ОСТАЛОСЬ МЕСТ: 34",
//     isHot: false,
//     features: ["Моментальные выплаты", "VIP кэшбэк", "Турниры каждую неделю"],
//     link: "https://example.com/irwin",
//   },
//   {
//     name: "FLAGMAN",
//     stars: 4.9,
//     bonus: "500 FS + 250% БОНУС",
//     placesText: "ОСТАЛОСЬ МЕСТ: 12",
//     isHot: true,
//     features: ["Эксклюзивный фриспины", "RTP 97%", "Киберспорт"],
//     link: "https://example.com/flagman",
//   },
//   {
//     name: "WOLF GOLD",
//     stars: 4.8,
//     bonus: "650 FS + 250% БОНУС",
//     placesText: "ОСТАЛОСЬ МЕСТ: 6 ИЗ 100",
//     isHot: true,
//     features: ["Безумный на вывод", "Мега джекпот", "Рейкбек 15%"],
//     link: "https://example.com/wolf",
//   },
// ];

// // Класс для счётчика онлайна
// class OnlineCounter {
//   constructor(element, initialValue) {
//     this.element = element;
//     this.currentValue = initialValue;
//     this.element.innerText = this.currentValue;
//     this.interval = null;
//   }
//   startFluctuation() {
//     this.interval = setInterval(
//       () => {
//         let delta =
//           (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 3) + 1);
//         let newVal = this.currentValue + delta;
//         if (newVal < 500) newVal = 500;
//         if (newVal > 3000) newVal = 3000;
//         this.currentValue = newVal;
//         this.element.innerText = this.currentValue;
//       },
//       Math.random() * 3000 + 2500,
//     );
//   }
//   stopFluctuation() {
//     if (this.interval) clearInterval(this.interval);
//   }
// }

// // Генерация карточек
// const container = document.getElementById("gamesGrid");
// const counters = [];

// gamesData.forEach((game) => {
//   const card = document.createElement("div");
//   card.className = "game-card";

//   // Имя + HOT
//   const nameDiv = document.createElement("div");
//   nameDiv.style.display = "flex";
//   nameDiv.style.justifyContent = "space-between";
//   nameDiv.style.alignItems = "center";
//   nameDiv.style.flexWrap = "wrap";
//   const gameNameSpan = document.createElement("span");
//   gameNameSpan.className = "game-name";
//   gameNameSpan.innerText = game.name;
//   nameDiv.appendChild(gameNameSpan);
//   if (game.isHot) {
//     const hotSpan = document.createElement("span");
//     hotSpan.className = "hot-badge";
//     hotSpan.innerText = "ГОРЯЧО!";
//     nameDiv.appendChild(hotSpan);
//   }
//   card.appendChild(nameDiv);

//   // Рейтинг
//   const ratingDiv = document.createElement("div");
//   ratingDiv.className = "rating";
//   let starString = "★".repeat(Math.floor(game.stars));
//   if (game.stars - Math.floor(game.stars) >= 0.5) starString += "½";
//   starString = starString.padEnd(5, "☆");
//   const starsSpan = document.createElement("span");
//   starsSpan.className = "stars";
//   starsSpan.innerText = starString;
//   const scoreSpan = document.createElement("span");
//   scoreSpan.className = "score";
//   scoreSpan.innerText = `★ ${game.stars}`;
//   ratingDiv.appendChild(starsSpan);
//   ratingDiv.appendChild(scoreSpan);
//   card.appendChild(ratingDiv);

//   // Онлайн
//   const onlineDiv = document.createElement("div");
//   onlineDiv.className = "online-block";
//   onlineDiv.innerHTML = `<span class="online-icon">📈</span><span class="online-count">0</span><span>онлайн</span>`;
//   const onlineSpan = onlineDiv.querySelector(".online-count");
//   const initOnline = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
//   onlineSpan.innerText = initOnline;
//   card.appendChild(onlineDiv);

//   // Бонус
//   const bonusDiv = document.createElement("div");
//   bonusDiv.className = "bonus";
//   bonusDiv.innerText = game.bonus;
//   card.appendChild(bonusDiv);

//   // Места
//   const placesDiv = document.createElement("div");
//   placesDiv.className = "places-left";
//   placesDiv.innerHTML = `🎲 ${game.placesText}`;
//   card.appendChild(placesDiv);

//   // Фичи
//   const featuresUl = document.createElement("ul");
//   featuresUl.className = "features";
//   game.features.forEach((f) => {
//     const li = document.createElement("li");
//     li.innerText = f;
//     featuresUl.appendChild(li);
//   });
//   card.appendChild(featuresUl);

//   // Кнопка
//   const btn = document.createElement("button");
//   btn.className = "game-btn";
//   btn.innerText = game.name === "BEEF" ? "ИГРАТЬ" : "ПОЛУЧИТЬ";
//   const link = document.createElement("a");
//   link.href = game.link;
//   link.target = "_blank";
//   link.rel = "noopener noreferrer";
//   link.appendChild(btn);
//   card.appendChild(link);

//   container.appendChild(card);
//   const counter = new OnlineCounter(onlineSpan, initOnline);
//   counter.startFluctuation();
//   counters.push(counter);
// });

// // Остановка счётчиков при закрытии страницы
// window.addEventListener("beforeunload", () =>
//   counters.forEach((c) => c.stopFluctuation()),
// );

// // ========= МОДАЛЬНЫЕ ОКНА =========
// const modal = document.getElementById("legalModal");
// const modalTextDiv = document.getElementById("modalText");
// const closeBtn = document.getElementById("closeModalBtn");

// function openModal(contentHTML) {
//   modalTextDiv.innerHTML = contentHTML;
//   modal.style.display = "flex";
//   document.body.style.overflow = "hidden";
// }

// function closeModalFunc() {
//   modal.style.display = "none";
//   document.body.style.overflow = "";
// }

// closeBtn.addEventListener("click", closeModalFunc);
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) closeModalFunc();
// });

// // Тексты для модалок
// const privacyHTML = `
//     <h1>🔒 КОНФИДЕНЦИАЛЬНОСТЬ</h1>
//     <p>Ваша конфиденциальность крайне важна для нас. Настоящая Политика описывает, как наш информационный агрегатор обрабатывает данные при посещении вами данного ресурса.</p>
//     <h2>1. ОТСУТСТВИЕ СБОРА ФИНАНСОВЫХ ДАННЫХ</h2>
//     <p>Поскольку наш сайт является платформой исключительно для социальных игр и информационного ознакомления с демо-версиями, мы <strong>физически не запрашиваем</strong>, не собираем и не храним ваши финансовые данные.</p>
//     <h2>2. СБОР ТЕХНИЧЕСКОЙ ИНФОРМАЦИИ</h2>
//     <p>Мы автоматически собираем только обезличенную информацию о вашем визите: IP-адрес, тип устройства, ОС, версия браузера и время пребывания.</p>
//     <h2>3. ФАЙЛЫ COOKIE И АНАЛИТИКА</h2>
//     <p>Сайт использует технические файлы cookie для сохранения ваших предпочтений в демо-режиме.</p>
//     <h2>4. ССЫЛКИ НА СТОРОННИЕ РЕСУРСЫ</h2>
//     <p>При переходе по внешним ссылкам вы покидаете наш сайт. Мы не несем ответственности за политику конфиденциальности сторонних ресурсов.</p>
// `;

// const termsHTML = `
//     <h1>📜 УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</h1>
//     <p><strong>Используя данный веб-сайт, вы подтверждаете свое полное и безоговорочное согласие с настоящими Условиями.</strong></p>
//     <h2>1. СТАТУС ПЛАТФОРМЫ (SOCIAL CASINO)</h2>
//     <p>Настоящий ресурс является агрегатором <strong>бесплатных социальных игр.</strong> Мы не являемся оператором азартных игр, не проводим азартные игры на реальные деньги.</p>
//     <h2>2. ОТСУТСТВИЕ ДЕПОЗИТОВ И ВЫПЛАТ</h2>
//     <p>Мы <strong>не принимаем денежные депозиты</strong>, не открываем игровые счета и не осуществляем выплаты. Внутриигровые кредиты являются виртуальными.</p>
//     <h2>3. ПРЕДУПРЕЖДЕНИЕ О РИСКАХ</h2>
//     <p>Успех в бесплатных социальных играх <strong>не гарантирует</strong> успеха в азартных играх на реальные деньги.</p>
//     <h2>4. ВОЗРАСТНЫЕ ОГРАНИЧЕНИЯ (18+)</h2>
//     <p>Доступ разрешен только лицам, достигшим 18 лет.</p>
// `;

// const cookiesHTML = `
//     <h1>🍪 ПОЛИТИКА COOKIES</h1>
//     <p>На этой странице описано, как наш информационный агрегатор использует файлы cookie.</p>
//     <h2>1. ЧТО ТАКОЕ ФАЙЛЫ COOKIE?</h2>
//     <p>Небольшие текстовые файлы, сохраняемые на вашем устройстве.</p>
//     <h2>2. КАК МЫ ИСПОЛЬЗУЕМ COOKIE</h2>
//     <ul>
//         <li><strong>Технические:</strong> для навигации и отображения карточек.</li>
//         <li><strong>Реферальные:</strong> для фиксации перехода по ссылкам.</li>
//         <li><strong>Аналитические:</strong> анонимная статистика.</li>
//     </ul>
//     <h2>3. БЕЗОПАСНОСТЬ</h2>
//     <p>НАШИ COOKIE НЕ ИМЕЮТ ДОСТУПА К ЛИЧНЫМ ФАЙЛАМ, ПАРОЛЯМ ИЛИ ФИНАНСОВОЙ ИНФОРМАЦИИ.</p>
//     <h2>4. УПРАВЛЕНИЕ ФАЙЛАМИ COOKIE</h2>
//     <p>Вы можете заблокировать cookie в настройках браузера.</p>
//     <h2>5. ВАШЕ СОГЛАСИЕ</h2>
//     <p>Продолжая пользоваться ресурсом, вы подтверждаете согласие на обработку данных.</p>
// `;

// document
//   .getElementById("openPrivacyBtn")
//   .addEventListener("click", () => openModal(privacyHTML));
// document
//   .getElementById("openTermsBtn")
//   .addEventListener("click", () => openModal(termsHTML));
// document
//   .getElementById("openCookiesBtn")
//   .addEventListener("click", () => openModal(cookiesHTML));

// // Анимация появления карточек
// const cards = document.querySelectorAll(".game-card");
// cards.forEach((card, i) => {
//   card.style.opacity = "0";
//   card.style.transform = "translateY(20px)";
//   setTimeout(() => {
//     card.style.transition = "all 0.3s ease-out";
//     card.style.opacity = "1";
//     card.style.transform = "translateY(0)";
//   }, i * 80);
// });
