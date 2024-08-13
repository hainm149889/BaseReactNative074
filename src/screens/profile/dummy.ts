/**
 * Chi tiết của sản phẩm mà người mua đã mua
 */
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

/**
 * Chi tiết của 1 đơn vị sản phẩm mà người bán đã mua
 */
export type UnitDetails = {
  key: number;
  number: number;
  cage: number;
  imageUnit: string | null;
  kg: number;
  imageKg: string | null;
};

/**
 * Chi tiết của sản phẩm mà người bán đã mua
 */
export type OrdersBySeller = {
  key: number;
  name: string;
  supplier: string;
  addressSupplier: string;
  phoneSupplier: string;
  numberBuy: number;
  details: UnitDetails[];
  unit: string;
  priceBase: number;
  dateBuy: string;
};

/**
 * Danh sách sản phẩm mà người bán đã mua
 */
export const listOrdersWithRoleSeller = [
  {
    key: 1,
    name: 'Lợn nái',
    supplier: 'Lò Chấn Đông',
    addressSupplier: 'Chấn Đống, Hoàn Long, Yên Mỹ, Hưng Yên',
    phoneSupplier: '0912121209',
    numberBuy: 3,
    dateBuy: '17:36 12/06/2024',
    details: [
      {
        key: 1,
        number: 12,
        cage: 1,
        imageUnit: null,
        kg: 93.5,
        imageKg: null,
      },
      {
        key: 2,
        number: 13,
        cage: 1,
        imageUnit: null,
        kg: 92,
        imageKg: null,
      },
      {
        key: 3,
        number: 12,
        cage: 2,
        imageUnit: null,
        kg: 89,
        imageKg: null,
      },
    ],
    unit: 'con',
    priceBase: 90_000,
  },
  {
    key: 2,
    name: 'Lợn thịt',
    supplier: 'Lò Thái Linh',
    addressSupplier: 'Từ Hồ, Yên Mỹ, Hưng Yên',
    phoneSupplier: '0977445532',
    dateBuy: '08:40 21/06/2024',
    numberBuy: 5,
    details: [
      {
        key: 1,
        number: 10,
        cage: 1,
        imageUnit: null,
        kg: 93.5,
        imageKg: null,
      },
      {
        key: 2,
        number: 12,
        cage: 2,
        imageUnit: null,
        kg: 92,
        imageKg: null,
      },
      {
        key: 3,
        number: 18,
        cage: 3,
        imageUnit: null,
        kg: 89,
        imageKg: null,
      },
      {
        key: 4,
        number: 12,
        cage: 2,
        imageUnit: null,
        kg: 83,
        imageKg: null,
      },
      {
        key: 5,
        number: 12,
        cage: 1,
        imageUnit: null,
        kg: 97,
        imageKg: null,
      },
    ],
    unit: 'con',
    priceBase: 91_000,
  },
];

/**
 * Danh sách sản phẩm mà người mua đã mua
 */
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
