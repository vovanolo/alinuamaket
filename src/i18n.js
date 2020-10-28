import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ua: {
    translation: {
      Прокат: 'Прокат',
      Трансфери: 'Трансфери',
      Асистенс: 'Асистенс',
      Контакти: 'Контакти',
      Бронювати: 'Бронювати',
      Новини: 'Новини',
      Загальні: 'Загальні',
      "Зв'язок": "Зв'язок",
      Послуги: 'Послуги',
      Автовикуп: 'Автовикуп',
      'Про компанію': 'Про компанію',
      'Програма лояльності': 'Програма лояльності',
      'Про нас': 'Про нас',
      'Прокат авто Львів': 'Прокат авто Львів',
      'Прокат авто Київ': 'Прокат авто Київ',
      'Прокат авто Харків': 'Прокат авто Харків',
      'Прокат авто Івано-Франківськ': 'Прокат авто Івано-Франківськ',
      'Умови оренди': 'Умови оренди',
      'Часті запитання': 'Часті запитання',
      'Політика конфіденційності': 'Політика конфіденційності',
      'Додаткові опції': 'Додаткові опції',
      Блог: 'Блог',
      'Заповніть форму': 'Заповніть форму',
      'Вкажіть імя': 'Вкажіть імя',
      'Вкажіть email': 'Вкажіть email',
      'Вкажіть телефон': 'Вкажіть телефон',
      Відправити: 'Відправити',
      Відправлено: 'Відправлено',
      'Оренда авто в Україні': 'Оренда авто в Україні',
      Львів: 'Львів',
      Тернопіль: 'Тернопіль',
      'Івано-Франківськ': 'Івано-Франківськ',
      Харків: 'Харків',
      Київ: 'Київ',
      від: 'від',
      до: 'до',
      'Вкажіть локацію': 'Вкажіть локацію',
      'місто, область, країна': 'місто, область, країна',
      Отримання: 'Отримання',
      Повернення: 'Повернення',
      'Як це працює?': 'Як це працює?',
      'Бронювати авто легше ніж ви думаєте':
        'Бронювати авто легше ніж ви думаєте',
      'Оберіть локацію': 'Оберіть локацію',
      'Оберіть дату': 'Оберіть дату',
      'Бронюйте своє авто': 'Бронюйте своє авто',
      'Вкажіть зручне для вас місце розташування':
        'Вкажіть зручне для вас місце розташування',
      'Визначіть зручний для вас час отримання авто':
        'Визначіть зручний для вас час отримання авто',
      'Залишилось обрати автомобіль який ви отримаєте':
        'Залишилось обрати автомобіль який ви отримаєте',
      'Орендуй на довгий термін, та отримуй за кожні 10 днів прокату по 5% знижки на наступну оренду ( *знижка накопичувальна)':
        'Орендуй на довгий термін, та отримуй за кожні 10 днів прокату по 5% знижки на наступну оренду ( *знижка накопичувальна)',
      'Залиш відгук з фотографією про компанію ALIN на нашій сторінці в Instagram або на Google Maps та отримай додатково 5% знижки на наступну оренду':
        'Залиш відгук з фотографією про компанію ALIN на нашій сторінці в Instagram або на Google Maps та отримай додатково 5% знижки на наступну оренду',
      'Приведи друга та отримай додаткову знижку 5% для себе та 5% для товариша':
        'Приведи друга та отримай додаткову знижку 5% для себе та 5% для товариша',
      'Для постійних клієнтів компанї ALIN діють спеціальні умови лояльності по франшизі.':
        'Для постійних клієнтів компанї ALIN діють спеціальні умови лояльності по франшизі.',
      'При оренді автомобіля, клієнти компанї отримають знижки на проживання в ряді готелей (перелік готелів-партнерів уточнюйте в менеджера)':
        'При оренді автомобіля, клієнти компанї отримають знижки на проживання в ряді готелей (перелік готелів-партнерів уточнюйте в менеджера)',
      'Максимально сумарна знижка 30%': 'Максимально сумарна знижка 30%',
      'Партнери компанії': 'Партнери компанії',
      Вибір: 'Вибір',
      Бронювання: 'Бронювання',
      'Сортувати за': 'Сортувати за',
      'За зростанням ціни': 'За зростанням ціни',
      'За спаданням ціни': 'За спаданням ціни',
      'Бронювання автомобіля': 'Бронювання автомобіля',
      'Налаштування бронювання': 'Налаштування бронювання',
      'Зарядне/тримач для тел': 'Зарядне/тримач для тел',
      Доба: 'Доба',
      'Додатковий водій': 'Додатковий водій',
      Одноразово: 'Одноразово',
      Завдаток: 'Завдаток',
      'Без завдатку': 'Без завдатку',
      'З завдатком': 'З завдатком',
      'Особисті дані': 'Особисті дані',
      Коментар: 'Коментар',
      'В вартість оренди включено': 'В вартість оренди включено',
      'Ціна оренди': 'Ціна оренди',
      'Я погоджуюсь з умовами прокату': 'Я погоджуюсь з умовами прокату',
      'Заявка успішно відправлена': 'Заявка успішно відправлена',
      'Дякуємо за замовлення': 'Дякуємо за замовлення',
      'Інформація про замовлення': 'Інформація про замовлення',
      'Автомобіль:': 'Автомобіль:',
      'додаткові опції': 'додаткові опції',
      місто: 'місто',
      Замовник: 'Замовник',
      'Імя та прізвище': 'Імя та прізвище',
      Телефон: 'Телефон',
      'На головну': 'На головну',
      'Послуга «Alin Assistance»': 'Послуга «Alin Assistance»',
      'Багато справ, безліч дзвінків, важливі зустрічі, серйозні переговори? У величезному списку буденних справ, зовсім нема часу для свого чотирьох колісного залізного друга? Адже теж потребує уваги. Ми прагнемо аби ваше життя було комфортним, аби ви мали можливість займатись улюбленими справами, саме тому ми розробили унікальну програму з обслуговування клієнтів - персональний сервіс консультант Alin Assistance.':
        'Багато справ, безліч дзвінків, важливі зустрічі, серйозні переговори? У величезному списку буденних справ, зовсім нема часу для свого чотирьох колісного залізного друга? Адже теж потребує уваги. Ми прагнемо аби ваше життя було комфортним, аби ви мали можливість займатись улюбленими справами, саме тому ми розробили унікальну програму з обслуговування клієнтів - персональний сервіс консультант Alin Assistance.',
      'Що входить?': 'Що входить?',
      'Особливі послуги': 'Особливі послуги',
      'Запис авто на ремонт чи проведення техобслуговування':
        'Запис авто на ремонт чи проведення техобслуговування',
      'Підбір автозапчастин відповідно до Ваших побажань (б/в, нові)':
        'Підбір автозапчастин відповідно до Ваших побажань (б/в, нові)',
      'Страхування авто': 'Страхування авто',
      'Оформлення полісу цивільної відповідальності':
        'Оформлення полісу цивільної відповідальності',
      'Замовлення евакуатора': 'Замовлення евакуатора',
      'Продаж автомобіля': 'Продаж автомобіля',
      'Основний принцип роботи компанії – не просто обслуговування автомобілів, а результат та вдячні постійні клієнти! Саме завдяки їй ви зможете зекономити свій час та нерви. Забудьте про безмежні черги та століття втраченого часу.':
        'Основний принцип роботи компанії – не просто обслуговування автомобілів, а результат та вдячні постійні клієнти! Саме завдяки їй ви зможете зекономити свій час та нерви. Забудьте про безмежні черги та століття втраченого часу.',
      'Програма надає вам можливість вирішити всі технічні питання не виходячи з дому чи офісу. Лише один дзвінок і ось персональний сервіс консультант вирушає вам на допомогу.':
        'Програма надає вам можливість вирішити всі технічні питання не виходячи з дому чи офісу. Лише один дзвінок і ось персональний сервіс консультант вирушає вам на допомогу.',
      'Оренда машини з водієм': 'Оренда машини з водієм',
      'Виберіть трансфер або погодинну поїздку':
        'Виберіть трансфер або погодинну поїздку',
      'Виберіть дату та час': 'Виберіть дату та час',
      'Виберіть клас автомобіля': 'Виберіть клас автомобіля',
      Трансфер: 'Трансфер',
      Погодинно: 'Погодинно',
      Дата: 'Дата',
      Час: 'Час',
      Далі: 'Далі',
      'Є запитання?': 'Є запитання?',
      "Зв'язатись з нами": "Зв'язатись з нами",
      Надіслати: 'Надіслати',
      'Автопрокат у Львові від компанії ALIN':
        'Автопрокат у Львові від компанії ALIN',
      'Компанія з 2016 року надає послуги з прокату автомобілів без водія. Автопарк компанії у Львові – це сучасні автомобілі, оснащення яких, задовольнить смаки і переваги клієнта. Щоб показати серйозність намірів в бізнесі, часто необхідно підкреслити високий статус перед партнерами. У цьому допоможе оренда у Львові авто преміум або бізнес-класу. Для клієнтів, які не готові платити за статусні автомобілі, компанія надасть автотранспорт середнього або економ-класу. У компанії Alin є раннє бронювання автомобілів марок- VW, Mitsubishi, Subaru, Suzuki, Ford, Peugeot, Renault, Dacia. Транспорт пройшов техогляд, згідно з вимогами українського законодавства. Орендовані машини застраховані від поломки, нещасних випадків водія та пасажирів.':
        'Компанія з 2016 року надає послуги з прокату автомобілів без водія. Автопарк компанії у Львові – це сучасні автомобілі, оснащення яких, задовольнить смаки і переваги клієнта. Щоб показати серйозність намірів в бізнесі, часто необхідно підкреслити високий статус перед партнерами. У цьому допоможе оренда у Львові авто преміум або бізнес-класу. Для клієнтів, які не готові платити за статусні автомобілі, компанія надасть автотранспорт середнього або економ-класу. У компанії Alin є раннє бронювання автомобілів марок: VW, Mitsubishi, Subaru, Suzuki, Ford, Peugeot, Renault, Dacia. Транспорт пройшов техогляд, згідно з вимогами українського законодавства. Орендовані машини застраховані від поломки, нещасних випадків водія та пасажирів.',
      'При оренді автомобілів в ALIN кожен клієнт оцінить переваги':
        'При оренді автомобілів в ALIN кожен клієнт оцінить переваги:',
      'в оренду здаються лише нові автомобілі, рік випуску яких не пізніше 2016 року':
        'в оренду здаються лише нові автомобілі, рік випуску яких не пізніше 2016 року',
      'вартість прокату автомобіля без водія від $19':
        'вартість прокату автомобіля без водія від $19',
      'взяти машину на прокат у Львові можна протягом 6-12 годин, телефонуйте за номером +38 098 777 1600 і оформляйте заявку':
        'взяти машину на прокат у Львові можна протягом 6-12 годин, телефонуйте за номером +38 098 777 1600 і оформляйте заявку',
      'форма оплати на вибір - готівкою, через банк або через платіжні термінал кредитними картами':
        'форма оплати на вибір - готівкою, через банк або через платіжні термінал кредитними картами',
      'франшиза при оренді становить від $350 до $1200, в залежності від класу авто':
        'франшиза при оренді становить від $350 до $1200, в залежності від класу авто',
      'мінімальний пакет документів для оформлення авто на прокат - паспорт (цивільний або закордонний) і водійське посвідчення':
        'мінімальний пакет документів для оформлення авто на прокат - паспорт (цивільний або закордонний) і водійське посвідчення',
      'при необхідності автотранспорт комплектується додатковими обладнанням (GPS-навігатор, зарядне-тримач для телефона, дитяче крісло)':
        'при необхідності автотранспорт комплектується додатковими обладнанням (GPS-навігатор, зарядне-тримач для телефона, дитяче крісло)',
      'Бути на висоті і вільно пересуватися по місту допоможе компанія Alin – прокат авто у Львові.':
        'Бути на висоті і вільно пересуватися по місту допоможе компанія Alin – прокат авто у Львові.',
      Телефонуйте: 'Телефонуйте',
      'і дізнайтеся деталі!': 'і дізнайтеся деталі!',
      'Для замовлення автовикупу звяжіться з нами за телефоном':
        'Для замовлення автовикупу звяжіться з нами за телефоном',
    },
  },
  ru: {
    translation: {
      Прокат: 'Прокат',
      Трансфери: 'Трансферы',
      Асистенс: 'Асистенс',
      Контакти: 'Контакты',
      Бронювати: 'Бронировать',
      Новини: 'Новости',
      Загальні: 'Общие',
      "Зв'язок": 'Связь',
      Послуги: 'Услуги',
      Автовикуп: 'Автовыкуп',
      'Про компанію': 'О компании',
      'Програма лояльності': 'Программа лояльности',
      'Про нас': 'О нас',
      'Прокат авто Львів': 'Прокат авто Львов',
      'Прокат авто Київ': 'Прокат авто Киев',
      'Прокат авто Харків': 'Прокат авто Харьков',
      'Прокат авто Івано-Франківськ': 'Прокат авто Івано-Франковск',
      'Умови оренди': 'Условия аренды',
      'Часті запитання': 'Часто задаваемые вопросы',
      'Політика конфіденційності': 'Политика конфиденциальности',
      'Додаткові опції': 'Дополнительные опции',
      Блог: 'Блог',
      'Заповніть форму': 'Заполните форму',
      'Вкажіть імя': 'Укажите имя',
      'Вкажіть email': 'Укажите email',
      'Вкажіть телефон': 'Укажите телефон',
      Відправити: 'Отправить',
      Відправлено: 'Отправлено',
      'Оренда авто в Україні': 'Оренда авто в Украине',
      Львів: 'Львов',
      Тернопіль: 'Тернополь',
      'Івано-Франківськ': 'Ивано-Франковск',
      Харків: 'Харьков',
      Київ: 'Киeв',
      від: 'от',
      до: 'до',
      'Вкажіть локацію': 'Укажите локацію',
      'місто, область, країна': 'город, область, страна',
      Отримання: 'Получение',
      Повернення: 'Возвращение',
      'Як це працює?': 'Как ето работает?',
      'Бронювати авто легше ніж ви думаєте':
        'Бронировать авто легче чем вы думаете',
      'Оберіть локацію': 'Выберите локацию',
      'Оберіть дату': 'Выберите дату',
      'Бронюйте своє авто': 'Заказывайте автомобиль',
      'Вкажіть зручне для вас місце розташування':
        'Укажите удобное для вас место расположения',
      'Визначіть зручний для вас час отримання авто':
        'Определите удобное для вас время получения авто',
      'Залишилось обрати автомобіль який ви отримаєте':
        'Осталось выбрать автомобиль который вы получите',
      'Орендуй на довгий термін, та отримуй за кожні 10 днів прокату по 5% знижки на наступну оренду ( *знижка накопичувальна)':
        'Арендуй на долгий срок, и получай за каждые 10 дней проката по 5% скидки на следующую аренду (* скидка накопительная)',
      'Залиш відгук з фотографією про компанію ALIN на нашій сторінці в Instagram або на Google Maps та отримай додатково 5% знижки на наступну оренду':
        'Оставь отзыв с фотографией о компании ALIN на нашей странице в Instagram или на Google Maps и получи дополнительно 5% скидки на следующую аренду',
      'Приведи друга та отримай додаткову знижку 5% для себе та 5% для товариша':
        'Приведи друга и получи дополнительную скидку 5% для себя и 5% для друга',
      'Для постійних клієнтів компанї ALIN діють спеціальні умови лояльності по франшизі.':
        'Для постоянных клиентов компаний ALIN действуют специальные условия лояльности по франшизе.',
      'При оренді автомобіля, клієнти компанї отримають знижки на проживання в ряді готелей (перелік готелів-партнерів уточнюйте в менеджера)':
        'При аренде автомобиля, клиенты компаний получат скидки на проживание в ряде отелей (перечень отелей-партнеров уточняйте у менеджера) ',
      'Максимально сумарна знижка 30%': 'Максимально суммарная скидка 30%',
      'Партнери компанії': 'Партнеры компании',
      Вибір: 'Выбор',
      Бронювання: 'Бронтрование',
      'Сортувати за': 'Сортировать по',
      'За зростанням ціни': 'За ростом цены',
      'За спаданням ціни': 'По убыванию цены',
      'Бронювання автомобіля': 'Бронирование автомобиля',
      'Налаштування бронювання': 'Настройка бронирования',
      'Зарядне/тримач для тел': 'Зарядное / держатель для тел',
      Доба: 'Сутки',
      'Додатковий водій': 'Дополнительный водитель',
      Одноразово: 'Единовременно',
      Завдаток: 'Задаток',
      'Без завдатку': 'Без задатка',
      'З завдатком': 'С задатком',
      'Особисті дані': 'Личные данные',
      Коментар: 'Комментарий',
      'В вартість оренди включено': 'В стоимость аренды включено',
      'Ціна оренди': 'Цена аренды',
      'Я погоджуюсь з умовами прокату': 'Я согласен с условиями проката',
      'Заявка успішно відправлена': 'Заявка успешно отправлена',
      'Дякуємо за замовлення': 'Спасибо за заказ',
      'Інформація про замовлення': 'Информация о заказе',
      'Автомобіль:': 'Автомобиль:',
      'додаткові опції': 'дополнительные опции',
      місто: 'город',
      Замовник: 'Заказчик',
      'Імя та прізвище': 'Имя и фамилия',
      Телефон: 'Телефон',
      'На головну': 'На главную',
      'Послуга «Alin Assistance»': 'Услуга «Alin Assistance»',
      'Багато справ, безліч дзвінків, важливі зустрічі, серйозні переговори? У величезному списку буденних справ, зовсім нема часу для свого чотирьох колісного залізного друга? Адже теж потребує уваги. Ми прагнемо аби ваше життя було комфортним, аби ви мали можливість займатись улюбленими справами, саме тому ми розробили унікальну програму з обслуговування клієнтів - персональний сервіс консультант Alin Assistance.':
        'Многие дел, множество звонков, важные встречи, серьезные переговоры? В огромном списке будничных дел, совсем нет времени для своего четырех колесного железного друга? Ведь тоже требует внимания. Мы стремимся, чтобы ваша жизнь была комфортной, чтобы вы имели возможность заниматься любимыми делами, поэтому мы разработали уникальную программу по обслуживанию клиентов - персональный сервис консультант Alin Assistance. ',
      'Що входить?': 'Что входит?',
      'Особливі послуги': 'Особые услуги',
      'Запис авто на ремонт чи проведення техобслуговування':
        'Запись авто на ремонт или проведения техобслуживания',
      'Підбір автозапчастин відповідно до Ваших побажань (б/в, нові)':
        'Подбор автозапчастей соответствии с Вашими пожеланиями (б / у, новые)',
      'Страхування авто': 'Страхование авто',
      'Оформлення полісу цивільної відповідальності':
        'Оформление полиса гражданской ответственности',
      'Замовлення евакуатора': 'Заказ эвакуатора',
      'Продаж автомобіля': 'Продажа автомобиля',
      'Основний принцип роботи компанії – не просто обслуговування автомобілів, а результат та вдячні постійні клієнти! Саме завдяки їй ви зможете зекономити свій час та нерви. Забудьте про безмежні черги та століття втраченого часу.':
        'Основной принцип работы компании - не просто обслуживание автомобилей, а результат и благодарны постоянные клиенты! Именно благодаря ей вы сможете сэкономить свое время и нервы. Забудьте о безграничных очереди и века потерянного времени. ',
      'Програма надає вам можливість вирішити всі технічні питання не виходячи з дому чи офісу. Лише один дзвінок і ось персональний сервіс консультант вирушає вам на допомогу.':
        'Программа предоставляет вам возможность решить все технические вопросы не выходя из дома или офиса. Лишь один звонок и вот персональный сервис консультант отправляется вам на помощь. ',
      'Оренда машини з водієм': 'Аренда машины с водителем',
      'Виберіть трансфер або погодинну поїздку':
        'Выберите трансфер или почасовую поездку',
      'Виберіть дату та час': 'Выберите дату и время',
      'Виберіть клас автомобіля': 'Выберите класс автомобиля',
      Трансфер: 'Трансфер',
      Погодинно: 'Почасово',
      Дата: 'Дата',
      Час: 'Время',
      Далі: 'Дальше',
      'Є запитання?': 'Есть вопросы?',
      "Зв'язатись з нами": 'Свяжитесь с нами',
      Надіслати: 'Отправить',
      'Автопрокат у Львові від компанії ALIN':
        'Автопрокат во Львове от компании ALIN',
      'Компанія з 2016 року надає послуги з прокату автомобілів без водія. Автопарк компанії у Львові – це сучасні автомобілі, оснащення яких, задовольнить смаки і переваги клієнта. Щоб показати серйозність намірів в бізнесі, часто необхідно підкреслити високий статус перед партнерами. У цьому допоможе оренда у Львові авто преміум або бізнес-класу. Для клієнтів, які не готові платити за статусні автомобілі, компанія надасть автотранспорт середнього або економ-класу. У компанії Alin є раннє бронювання автомобілів марок- VW, Mitsubishi, Subaru, Suzuki, Ford, Peugeot, Renault, Dacia. Транспорт пройшов техогляд, згідно з вимогами українського законодавства. Орендовані машини застраховані від поломки, нещасних випадків водія та пасажирів.':
        'Компания с 2016 года предоставляет услуги по прокату автомобилей без водителя. Автопарк компании во Львове - это современные автомобили, оснащение которых удовлетворит вкусы и предпочтения клиента. Чтобы показать серьезность намерений в бизнесе, часто необходимо подчеркнуть высокий статус перед партнерами. В этом поможет аренда во Львове авто премиум или бизнес-класса. Для клиентов, которые не готовы платить за статусные автомобили, компания предоставит автотранспорт среднего или эконом-класса. В компании Alin является раннее бронирование автомобилей марок: VW, Mitsubishi, Subaru, Suzuki, Ford, Peugeot, Renault, Dacia. Транспорт прошел техосмотр, согласно требованиям украинского законодательства. Арендованные машины застрахованы от поломки, несчастных случаев водителя и пассажиров. ',
      'При оренді автомобілів в ALIN кожен клієнт оцінить переваги':
        'При аренде автомобилей в ALIN каждый клиент оценит преимущества:',
      'в оренду здаються лише нові автомобілі, рік випуску яких не пізніше 2016 року':
        'В аренду сдаются только новые автомобили, год выпуска которых не позднее 2016 ',
      'вартість прокату автомобіля без водія від $19':
        'Стоимость проката автомобиля без водителя от $19',
      'взяти машину на прокат у Львові можна протягом 6-12 годин, телефонуйте за номером +38 098 777 1600 і оформляйте заявку':
        'Взять машину на прокат во Львове можно в течение 6-12 часов, звоните по телефону +38 098 777 1600 и оформляйте заявку',
      'форма оплати на вибір - готівкою, через банк або через платіжні термінал кредитними картами':
        'Форма оплаты на выбор - наличными, через банк или через платежные терминал кредитными картами',
      'франшиза при оренді становить від $350 до $1200, в залежності від класу авто':
        'Франшиза при аренде составляет от $ 350 до $ 1200, в зависимости от класса авто',
      'мінімальний пакет документів для оформлення авто на прокат - паспорт (цивільний або закордонний) і водійське посвідчення':
        'Минимальный пакет документов для оформления авто на прокат - паспорт (гражданский или заграничный) и водительское удостоверение',
      'при необхідності автотранспорт комплектується додатковими обладнанням (GPS-навігатор, зарядне-тримач для телефона, дитяче крісло)':
        'При необходимости автотранспорт комплектуется дополнительными оборудованием (GPS-навигатор, зарядное держатель для телефона, детское кресло)',
      'Бути на висоті і вільно пересуватися по місту допоможе компанія Alin – прокат авто у Львові.':
        'Быть на высоте и свободно передвигаться по городу поможет компания Alin - прокат авто в Львове.',
      Телефонуйте: 'Звоните',
      'і дізнайтеся деталі!': 'И узнайте детали!',
      'Для замовлення автовикупу звяжіться з нами за телефоном':
        'Для заказа Автовыкуп свяжитесь с нами по телефону',
    },
  },
  en: {
    translation: {
      Прокат: 'Rent',
      Трансфери: 'Transfers',
      Асистенс: 'Assistance',
      Контакти: 'Сontacts',
      Бронювати: 'Rent',
      Новини: 'News',
      Загальні: 'General',
      "Зв'язок": 'Connection',
      Послуги: 'Services',
      Автовикуп: 'Auto Buy',
      'Про компанію': 'About Company',
      'Програма лояльності': 'Loyalty program',
      'Про нас': 'About us',
      'Прокат авто Львів': 'Rent cars Lviv',
      'Прокат авто Київ': 'Rent cars Kyiw',
      'Прокат авто Харків': 'Rent cars Kharkiv',
      'Прокат авто Івано-Франківськ': 'Rent cars Ivano-Frankivsk',
      'Умови оренди': 'Lease terms',
      'Часті запитання': 'Frequently asked questions',
      'Політика конфіденційності': 'Privacy policy',
      'Додаткові опції': 'Additional options',
      Блог: 'Blog',
      'Заповніть форму': 'Fill in the form',
      'Вкажіть імя': 'Your name',
      'Вкажіть email': 'Your email',
      'Вкажіть телефон': 'Your mobile number',
      Відправити: 'Send',
      Відправлено: 'Sended',
      'Оренда авто в Україні': 'Rent cars in Ukraine',
      Львів: 'Lviv',
      Тернопіль: 'Ternopil',
      'Івано-Франківськ': 'Ivano-Frankivsk',
      Харків: 'Kharkiv',
      Київ: 'Kyiw',
      від: 'from',
      до: 'to',
      'Вкажіть локацію': 'Enter location',
      'місто, область, країна': 'city, region, country',
      Отримання: 'Receipt',
      Повернення: 'Return',
      'Як це працює?': 'How it works?',
      'Бронювати авто легше ніж ви думаєте':
        'Booking a car is easier than you think',
      'Оберіть локацію': 'Choose location',
      'Оберіть дату': 'Choose date',
      'Бронюйте своє авто': 'Book your car',
      'Вкажіть зручне для вас місце розташування':
        'Specify a convenient location for you',
      'Визначіть зручний для вас час отримання авто':
        'Determine the time convenient for you to receive the car',
      'Залишилось обрати автомобіль який ви отримаєте':
        'It remains to choose the car you get',
      'Орендуй на довгий термін, та отримуй за кожні 10 днів прокату по 5% знижки на наступну оренду ( *знижка накопичувальна)':
        'Rent for a long term, and get a 5% discount on the next rent (* cumulative discount) for every 10 days of rental',
      'Залиш відгук з фотографією про компанію ALIN на нашій сторінці в Instagram або на Google Maps та отримай додатково 5% знижки на наступну оренду':
        'Leave a review with a photo of ALIN on our Instagram page or on Google Maps and get an additional 5% discount on the next rental',
      'Приведи друга та отримай додаткову знижку 5% для себе та 5% для товариша':
        'Bring a friend and get an additional 5% discount for yourself and 5% for a friend',
      'Для постійних клієнтів компанї ALIN діють спеціальні умови лояльності по франшизі.':
        'ALIN regular loyalty terms are valid for regular customers.',
      'При оренді автомобіля, клієнти компанї отримають знижки на проживання в ряді готелей (перелік готелів-партнерів уточнюйте в менеджера)':
        'When renting a car, the company customers will receive discounts on accommodation in a number of hotels (check the list of partner hotels with the manager)',
      'Максимально сумарна знижка 30%': 'Maximum total discount 30%',
      'Партнери компанії': 'Company Partners',
      Вибір: 'Choose',
      Бронювання: 'Rent',
      'Сортувати за': 'Sort by',
      'За зростанням ціни': 'Ascending price',
      'За спаданням ціни': 'In descending order of price',
      'Бронювання автомобіля': 'Car booking',
      'Налаштування бронювання': 'Booking settings',
      'Зарядне/тримач для тел': 'Body charger / holder',
      Доба: 'Days',
      'Додатковий водій': 'Additional driver',
      Одноразово: 'One time',
      Завдаток: 'Deposit',
      'Без завдатку': 'No deposit',
      'З завдатком': 'With deposit',
      'Особисті дані': 'Personal data',
      Коментар: 'Comment',
      'В вартість оренди включено': 'Included in the rental price',
      'Ціна оренди': 'Rental price',
      'Я погоджуюсь з умовами прокату': 'I agree to the terms of the rental',
      'Заявка успішно відправлена': 'Application successfully submitted',
      'Дякуємо за замовлення': 'Thank you for your order',
      'Інформація про замовлення': 'Order information',
      'Автомобіль:': 'Car:',
      'додаткові опції': 'additional options',
      місто: 'city',
      Замовник: 'Customer',
      'Імя та прізвище': 'Name and surname',
      Телефон: 'Phone',
      'На головну': 'Back home',
      'Послуга «Alin Assistance»': 'Serice Assistance Service',
      'Багато справ, безліч дзвінків, важливі зустрічі, серйозні переговори? У величезному списку буденних справ, зовсім нема часу для свого чотирьох колісного залізного друга? Адже теж потребує уваги. Ми прагнемо аби ваше життя було комфортним, аби ви мали можливість займатись улюбленими справами, саме тому ми розробили унікальну програму з обслуговування клієнтів - персональний сервіс консультант Alin Assistance.':
        'Many cases, many calls, important meetings, serious negotiations? In a huge to-do list, no time at all for your four-wheeled iron friend? After all, it also needs attention. We want your life to be comfortable, so that you have the opportunity to do your favorite things, which is why we have developed a unique customer service program - a personal service consultant Alin Assistance. ',
      'Що входить?': "What's in?",
      'Особливі послуги': 'Special services',
      'Запис авто на ремонт чи проведення техобслуговування':
        'Recording a car for repair or maintenance',
      'Підбір автозапчастин відповідно до Ваших побажань (б/в, нові)':
        'Selection of auto parts according to your wishes (used, new)',
      'Страхування авто': 'Car insurance',
      'Оформлення полісу цивільної відповідальності':
        'Registration of a civil liability policy',
      'Замовлення евакуатора': 'Tow truck order',
      'Продаж автомобіля': 'Car sale',
      'Основний принцип роботи компанії – не просто обслуговування автомобілів, а результат та вдячні постійні клієнти! Саме завдяки їй ви зможете зекономити свій час та нерви. Забудьте про безмежні черги та століття втраченого часу.':
        "The main principle of the company's work is not just car service, but the result and grateful regular customers! Thanks to it you will be able to save your time and nerves. Forget about endless queues and centuries of lost time. ",
      'Програма надає вам можливість вирішити всі технічні питання не виходячи з дому чи офісу. Лише один дзвінок і ось персональний сервіс консультант вирушає вам на допомогу.':
        'The program gives you the opportunity to solve all technical issues without leaving home or office. Just one call and here is a personal service consultant coming to your aid. ',
      'Оренда машини з водієм': 'Rent a car with a driver',
      'Виберіть трансфер або погодинну поїздку':
        'Select transfer or hourly trip',
      'Виберіть дату та час': 'Select date and time',
      'Виберіть клас автомобіля': 'Select car class',
      Трансфер: 'Transfer',
      Погодинно: 'Hourly',
      Дата: 'Date',
      Час: 'Time',
      Далі: 'Next',
      'Є запитання?': 'Any questions?',
      "Зв'язатись з нами": 'Contact us',
      Надіслати: 'Send',
      'Автопрокат у Львові від компанії ALIN': 'Car rental in Lviv from ALIN',
      'Компанія з 2016 року надає послуги з прокату автомобілів без водія. Автопарк компанії у Львові – це сучасні автомобілі, оснащення яких, задовольнить смаки і переваги клієнта. Щоб показати серйозність намірів в бізнесі, часто необхідно підкреслити високий статус перед партнерами. У цьому допоможе оренда у Львові авто преміум або бізнес-класу. Для клієнтів, які не готові платити за статусні автомобілі, компанія надасть автотранспорт середнього або економ-класу. У компанії Alin є раннє бронювання автомобілів марок- VW, Mitsubishi, Subaru, Suzuki, Ford, Peugeot, Renault, Dacia. Транспорт пройшов техогляд, згідно з вимогами українського законодавства. Орендовані машини застраховані від поломки, нещасних випадків водія та пасажирів.':
        "Since 2016, the company has been providing car rental services without a driver. The company's fleet in Lviv is modern cars, the equipment of which will satisfy the tastes and preferences of the client. To show the seriousness of intentions in business, it is often necessary to emphasize the high status of partners. Renting a premium or business class car in Lviv will help. For customers who are not willing to pay for status cars, the company will provide middle or economy class vehicles. Alin has early booking of cars of brands: VW, Mitsubishi, Subaru, Suzuki, Ford, Peugeot, Renault, Dacia. The vehicle was inspected in accordance with the requirements of Ukrainian legislation. Leased cars are insured against breakdowns, accidents of the driver and passengers. ",
      'При оренді автомобілів в ALIN кожен клієнт оцінить переваги':
        'When renting a car in ALIN, each customer will appreciate the benefits:',
      'в оренду здаються лише нові автомобілі, рік випуску яких не пізніше 2016 року':
        'only new cars are leased, the year of production of which is not later than 2016',
      'вартість прокату автомобіля без водія від $19':
        'car rental price without driver from $ 19',
      'взяти машину на прокат у Львові можна протягом 6-12 годин, телефонуйте за номером +38 098 777 1600 і оформляйте заявку':
        'you can rent a car in Lviv for 6-12 hours, call +38 098 777 1600 and make an application',
      'форма оплати на вибір - готівкою, через банк або через платіжні термінал кредитними картами':
        'form of payment of your choice - cash, through a bank or through a credit card payment terminal',
      'франшиза при оренді становить від $350 до $1200, в залежності від класу авто':
        'deductible when renting is from $ 350 to $ 1200, depending on the class of car',
      'мінімальний пакет документів для оформлення авто на прокат - паспорт (цивільний або закордонний) і водійське посвідчення':
        "minimum package of documents for car rental - passport (civil or foreign) and driver's license",
      'при необхідності автотранспорт комплектується додатковими обладнанням (GPS-навігатор, зарядне-тримач для телефона, дитяче крісло)':
        'if necessary, the vehicle is equipped with additional equipment (GPS-navigator, phone charger-holder, child seat)',
      'Бути на висоті і вільно пересуватися по місту допоможе компанія Alin – прокат авто у Львові.':
        'Being at a height and moving freely around the city will help the company Alin - car rental in Lviv.',
      Телефонуйте: 'Call',
      'і дізнайтеся деталі!': 'And find out the details!',
      'Для замовлення автовикупу звяжіться з нами за телефоном':
        'To order a car purchase, contact us by phone',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
