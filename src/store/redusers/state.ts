export const ServiceCategories = [
    {
        id: 0,
        name: 'Все услуги',
        image: 'https://my-fit.ru/userfls/clauses/large/785_polza-gruppovykh-zanyatiy-i-.jpg',
        services: 0,
    },
    {
        id: 1,
        name: 'Групповые занятия',
        image: 'https://my-fit.ru/userfls/clauses/large/785_polza-gruppovykh-zanyatiy-i-.jpg',
        services: 1,
    },
    {
        id: 2,
        name: 'Тренажерный зал',
        image: 'https://tulsu.ru/storage/app/uploads/public/630/7b4/3b0/6307b43b03b7b844244730.jpg',
        services: 2,
    },
];


const serviceListState = [
    {
        id: 1,
        name: 'Йога',
        description: 'Подходит для всех уровней подготовки.',
        duration: '60 мин',
        price: '500 руб.',
    },
    {
        id: 2,
        name: 'Персональная тренировка',
        description:
            'Персональные занятия с нашими лучшими тренерами и индивидуальным подходом к каждому клиенту!',
        duration: '45 мин',
        price: '700 руб.',
    },
    {
        id: 3,
        name: 'Танцевальная аэробика',
        description:
            'Зажигательные занятия с использованием различных танцевальных стилей.',
        duration: '60 мин',
        price: '600 руб.',
    },
    {
        id: 4,
        name: 'Пилатес',
        description:
            'Пилатес - это система упражнений для тела, направленных на укрепление мышц, улучшение гибкости и повышение осведомленности о своем теле. Пилатес помогает улучшить осанку, выровнять мышечный баланс и предотвратить травмы.',
        duration: '1 час',
        price: '800 руб.',
    },
    {
        id: 5,
        name: 'Функциональный тренинг',
        description:
            'Функциональный тренинг - это система упражнений, которые моделируют ежедневные движения человека и улучшают его функциональные способности. Этот тип тренировок помогает развивать силу, выносливость, координацию и гибкость.',
        duration: '1 час',
        price: '900 руб.',
    },
];

const GymServices = [
    {
        id: 6,
        name: 'Общая тренировка',
        description: 'Подходит для всех уровней подготовки.',
        duration: '60 мин',
        price: '500 руб.',
    },
    {
        id: 7,
        name: 'Персональная тренировка',
        description:
            'Персональные занятия с нашими лучшими тренерами и индивидуальным подходом к каждому клиенту!',
        duration: '45 мин',
        price: '700 руб.',
    },
];

export const CategoiesServiceList = [
    {
        id: 1,
        services: serviceListState,
    },
    {
        id: 2,
        services: GymServices,
    },
];