import {RoleAccount} from '@utils/constant';

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

/**
 * Người bán nhìn thấy danh sách này (chi tiết sản phẩm đã bán ra)
 */
export type OrdersByBuyer = {
  key: number;
  name: string;
  date: string;
  weight: string;
  avatarBuyer: null;
  money: number;
  pricePerOunceOfMeat: number;
  unit: string;
  cap: null;
  ProductOfseller: null;
};

/**
 * Danh sách chi tiết khách bán buôn - role seller
 */
export type Customers = {
  key: number;
  name: string;
  address: string;
  role: RoleAccount;
  phone: string;
  orders: OrdersByBuyer[];
};

/**
 * Danh sách sản phẩm mà người bán đã bán
 */
export const listSellWithRoleSeller: Array<Customers> = [
  {
    key: 1,
    name: 'Ngô Văn Hoàng',
    address: 'Làng Hoà Mục, Hoàn Long, Yên Mỹ, Hưng Yên',
    role: RoleAccount.buyer,
    phone: '0912756473',
    orders: [
      {
        key: 1,
        name: 'Thịt ba chỉ',
        date: '09:17 12/07/2024',
        weight: '7 lạng',
        money: 210000,
        pricePerOunceOfMeat: 30000,
        cap: null,
        ProductOfseller: null,
        unit: 'lạng',
        avatarBuyer: null,
      },
      {
        key: 2,
        name: 'Chân giò',
        date: '05:17 13/07/2024',
        weight: '1 cân',
        money: 220000,
        pricePerOunceOfMeat: 22000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 3,
        name: 'Thịt mông',
        date: '11:10 15/07/2024',
        weight: '1,5 cân',
        money: 375000,
        pricePerOunceOfMeat: 25000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 4,
        name: 'Thịt má cổ',
        date: '13:17 18/07/2024',
        weight: '1 cân',
        money: 160000,
        pricePerOunceOfMeat: 16000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 5,
        name: 'Thịt thăn',
        date: '05:36 20/07/2024',
        weight: '1 cân',
        money: 210000,
        pricePerOunceOfMeat: 21000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 6,
        name: 'Chân giò',
        date: '17:03 22/07/2024',
        weight: '1,7 cân',
        money: 595000,
        pricePerOunceOfMeat: 35000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 7,
        name: 'Thịt thăn',
        date: '10:00 26/07/2024',
        weight: '5 lạng',
        money: 210000,
        pricePerOunceOfMeat: 30000,
        cap: null,
        unit: 'lạng',
        ProductOfseller: null,
        avatarBuyer: null,
      },
    ],
  },
  {
    key: 2,
    name: 'Nguyễn Thị Minh Nhi',
    address: 'Làng Đại Hạnh, Hoàn Long, Yên Mỹ, Hưng Yên',
    role: RoleAccount.buyer,
    phone: '0912751233',
    orders: [
      {
        key: 1,
        name: 'Thịt ba chỉ',
        date: '09:17 12/07/2024',
        weight: '7 lạng',
        money: 210000,
        pricePerOunceOfMeat: 30000,
        cap: null,
        unit: 'lạng',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 2,
        name: 'Chân giò',
        date: '05:17 13/07/2024',
        weight: '1 cân',
        money: 220000,
        pricePerOunceOfMeat: 22000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 3,
        name: 'Thịt mông',
        date: '11:10 15/07/2024',
        weight: '1,5 cân',
        money: 375000,
        pricePerOunceOfMeat: 25000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 4,
        name: 'Thịt má cổ',
        date: '13:17 18/07/2024',
        weight: '1 cân',
        money: 160000,
        pricePerOunceOfMeat: 16000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 5,
        name: 'Thịt thăn',
        date: '05:36 20/07/2024',
        weight: '1 cân',
        money: 210000,
        pricePerOunceOfMeat: 21000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 6,
        name: 'Chân giò',
        date: '17:03 22/07/2024',
        weight: '1,7 cân',
        money: 595000,
        pricePerOunceOfMeat: 35000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 7,
        name: 'Thịt thăn',
        date: '10:00 26/07/2024',
        weight: '5 lạng',
        money: 210000,
        pricePerOunceOfMeat: 30000,
        cap: null,
        unit: 'lạng',
        ProductOfseller: null,
        avatarBuyer: null,
      },
    ],
  },
  {
    key: 4,
    name: 'Nguyễn Thanh Hồng',
    address: 'Làng Đại Hạnh, Hoàn Long, Yên Mỹ, Hưng Yên',
    role: RoleAccount.buyer,
    phone: '09127574554',
    orders: [
      {
        key: 1,
        name: 'Thịt ba chỉ',
        date: '09:17 12/07/2024',
        weight: '7 lạng',
        money: 210000,
        pricePerOunceOfMeat: 30000,
        cap: null,
        unit: 'lạng',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 2,
        name: 'Chân giò',
        date: '05:17 13/07/2024',
        weight: '1 cân',
        money: 220000,
        pricePerOunceOfMeat: 22000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 3,
        name: 'Thịt mông',
        date: '11:10 15/07/2024',
        weight: '1,5 cân',
        money: 375000,
        pricePerOunceOfMeat: 25000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 4,
        name: 'Thịt má cổ',
        date: '13:17 18/07/2024',
        weight: '1 cân',
        money: 160000,
        pricePerOunceOfMeat: 16000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 5,
        name: 'Thịt thăn',
        date: '05:36 20/07/2024',
        weight: '1 cân',
        money: 210000,
        pricePerOunceOfMeat: 21000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 6,
        name: 'Chân giò',
        date: '17:03 22/07/2024',
        weight: '1,7 cân',
        money: 595000,
        pricePerOunceOfMeat: 35000,
        cap: null,
        unit: 'cân',
        ProductOfseller: null,
        avatarBuyer: null,
      },
      {
        key: 7,
        name: 'Thịt thăn',
        date: '10:00 26/07/2024',
        weight: '5 lạng',
        money: 210000,
        pricePerOunceOfMeat: 30000,
        cap: null,
        unit: 'lạng',
        ProductOfseller: null,
        avatarBuyer: null,
      },
    ],
  },
  {
    key: 5,
    name: 'Ngô Tiến Nam',
    address: 'Làng Đồng Than, Đồng Than, Yên Mỹ, Hưng Yên',
    role: RoleAccount.seller,
    phone: '0988676545',
    orders: [
      {
        key: 1,
        name: 'Thịt ba chỉ',
        date: '09:17 12/07/2024',
        weight: '40 kg',
        avatarBuyer: null,
        money: 9_160_000,
        pricePerOunceOfMeat: 229_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
      {
        key: 2,
        name: 'Thịt nạc vai',
        date: '09:00 12/07/2024',
        weight: '40 kg',
        avatarBuyer: null,
        money: 4_600_000,
        pricePerOunceOfMeat: 115_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
      {
        key: 3,
        name: 'Thịt đuôi heo',
        date: '09:00 12/07/2024',
        weight: '20 kg',
        avatarBuyer: null,
        money: 6_280_000,
        pricePerOunceOfMeat: 157_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
    ],
  },
  {
    key: 6,
    name: 'Trần Mỹ Linh',
    address: 'Làng Ngân Hạnh, Hoàn Long, Yên Mỹ, Hưng Yên',
    role: RoleAccount.seller,
    phone: '01637867647',
    orders: [
      {
        key: 1,
        name: 'Sườn non',
        date: '09:17 15/07/2024',
        weight: '20 kg',
        avatarBuyer: null,
        money: 3_480_000,
        pricePerOunceOfMeat: 174_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
      {
        key: 2,
        name: 'Giò heo',
        date: '09:00 15/07/2024',
        weight: '30 kg',
        avatarBuyer: null,
        money: 4_020_000,
        pricePerOunceOfMeat: 134_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
      {
        key: 3,
        name: 'Thịt nạc dăm heo',
        date: '09:46 15/07/2024',
        weight: '10 kg',
        avatarBuyer: null,
        money: 1_250_000,
        pricePerOunceOfMeat: 125_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
      {
        key: 4,
        name: 'Móng giò',
        date: '11:20 15/07/2024',
        weight: '4,7 kg',
        avatarBuyer: null,
        money: 846_000,
        pricePerOunceOfMeat: 180_000,
        unit: 'kg',
        cap: null,
        ProductOfseller: null,
      },
    ],
  },
];
