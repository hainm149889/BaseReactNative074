export type OrderByBuyer = {
  key: number;
  name: string;
  date: string;
  weight: string;
  seller: string;
  money: number;
  pricePerOunceOfMeat: number;
  image: string | null;
  sellerPhone: string;
};

export const listOrdersWithRoleBuyer: Array<OrderByBuyer> = [
  {
    key: 1,
    name: 'Thịt ba chỉ',
    date: '09:17 12/07/2024',
    weight: '7 lạng',
    seller: 'Nhà hàng 1',
    money: 210_000,
    pricePerOunceOfMeat: 30_000,
    image: null,
    sellerPhone: '0988547623',
  },
  {
    key: 2,
    name: 'Chân giò',
    date: '05:17 13/07/2024',
    weight: '1 cân',
    seller: 'Nhà hàng 1',
    money: 220_000,
    pricePerOunceOfMeat: 22_000,
    image: null,
    sellerPhone: '0988547623',
  },
  {
    key: 3,
    name: 'Thịt mông',
    date: '11:10 15/07/2024',
    weight: '1,5 cân',
    seller: 'Nhà hàng 2',
    money: 375_000,
    pricePerOunceOfMeat: 25_000,
    image: null,
    sellerPhone: '0988547623',
  },
  {
    key: 4,
    name: 'Thịt má cổ',
    date: '13:17 18/07/2024',
    weight: '1 cân',
    seller: 'Nhà hàng 3',
    money: 160_000,
    pricePerOunceOfMeat: 16_000,
    image: null,
    sellerPhone: '0988547623',
  },
  {
    key: 5,
    name: 'Thịt thăn',
    date: '05:36 20/07/2024',
    weight: '1 cân',
    seller: 'Nhà hàng 2',
    money: 210_000,
    pricePerOunceOfMeat: 21_000,
    image: null,
    sellerPhone: '0988547623',
  },
  {
    key: 6,
    name: 'Chân giò',
    date: '17:03 22/07/2024',
    weight: '1,7 cân',
    seller: 'Nhà hàng 1',
    money: 595_000,
    pricePerOunceOfMeat: 35_000,
    image: null,
    sellerPhone: '0988547623',
  },
  {
    key: 7,
    name: 'Thịt thăn',
    date: '10:00 26/07/2024',
    weight: '5 lạng',
    seller: 'Nhà hàng 1',
    money: 210_000,
    pricePerOunceOfMeat: 30_000,
    image: null,
    sellerPhone: '0988547623',
  },
];
