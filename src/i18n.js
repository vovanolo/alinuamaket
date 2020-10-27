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
