/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 * */
export type Category = {
  id: string;
  name: string;
  photo?: string;
};

/**
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 **/
export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 **/
export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

/**  Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

// Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
export type Operation = Cost | Profit;

/*                               Test data                                    */

const productNames = [
  'iPhone 15 Pro',
  'MacBook Air M3',
  'Samsung Galaxy S24',
  'Sony WH-1000XM5',
  'iPad Pro 12.9',
  'AirPods Pro',
  'PlayStation 5',
  'Nintendo Switch',
  'Kindle Paperwhite',
  'GoPro Hero 12',
];

const categories: Category[] = [
  { id: '1', name: 'Электроника', photo: 'https://example.com/photo1.jpg' },
  { id: '2', name: 'Смартфоны', photo: 'https://example.com/photo2.jpg' },
  { id: '3', name: 'Ноутбуки' },
  { id: '4', name: 'Аудио' },
  { id: '5', name: 'Игры', photo: 'https://example.com/photo5.jpg' },
];

const photoUrls = [
  'https://example.com/photo1.jpg',
  'https://example.com/photo2.jpg',
  'https://example.com/photo3.jpg',
  'https://example.com/photo4.jpg',
  'https://example.com/photo5.jpg',
];

const productDescriptions = [
  'Высокое качество и надежность для повседневного использования.',
  'Современный дизайн и продуманный функционал.',
  'Отличный выбор по соотношению цены и качества.',
  'Подходит как для работы, так и для развлечений.',
  'Популярная модель с хорошими отзывами пользователей.',
];

const operationNames = [
  'Покупка',
  'Оплата услуги',
  'Подписка',
  'Возврат',
  'Пополнение баланса',
  'Перевод средств',
  'Комиссия',
];

const operationDescriptions = [
  'Операция выполнена успешно.',
  'Операция обработана системой.',
  'Транзакция завершена.',
  'Платёж подтверждён.',
  'Финансовая операция зарегистрирована.',
];

/*                               Helpers                                      */

// Генерирует уникальный ID с префиксом
function generateId(prefix: string): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}-${timestamp}-${random}`;
}

// Возвращает случайный элемент из массива
function getRandomElement<T>(array: T[]): T {
  if (array.length === 0) {
    throw new Error('Array is empty');
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Возвращает случайное целое число в заданном диапазоне ([min, max])
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*                               Factories                                    */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const id = generateId('prod');
  const name = getRandomElement(productNames);
  const photo = getRandomElement(photoUrls);

  const price = getRandomNumber(5000, 100000);
  const oldPrice = price + getRandomNumber(1000, 20000);

  const desc = getRandomElement(productDescriptions);
  const category = getRandomElement(categories);

  const product: Product = {
    id,
    name,
    photo,
    desc,
    createdAt,
    oldPrice,
    price,
    category,
  };

  return product;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

export const createRandomOperation = (createdAt: string): Operation => {
  const id = generateId('op');
  const name = getRandomElement(operationNames);
  const desc = getRandomElement(operationDescriptions);
  const amount = getRandomNumber(100, 10000);
  const category = getRandomElement(categories);

  const baseOperation = {
    id,
    name,
    desc,
    createdAt,
    amount,
    category,
  };

  const type: 'Cost' | 'Profit' = Math.random() < 0.5 ? 'Cost' : 'Profit';

  if (type === 'Cost') {
    return { ...baseOperation, type: 'Cost' };
  } else {
    return { ...baseOperation, type: 'Profit' };
  }
};
