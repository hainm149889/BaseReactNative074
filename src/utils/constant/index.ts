import {scale} from '@utils/scale';
import {StyleSheet} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';

export const HairlineWidth = Math.min(StyleSheet.hairlineWidth, 0.333);
export const ActiveOpacity = 0.8;
export const HitSlop = {
  Large: 16,
  LargeInset: {top: 16, bottom: 16, left: 16, right: 16},
  Medium: 8,
  MediumInset: {top: 8, bottom: 8, left: 8, right: 8},
  Small: 4,
  SmallInset: {top: 4, bottom: 4, left: 4, right: 4},
};

export const ModalWidth = UnistylesRuntime.screen.width - scale(48);

/**
 * @seller: Người bán thịt
 * @buyer: Người mua hàng
 * @supplier: Các lò mổ
 */

export enum RoleAccount {
  seller = 'Seller',
  buyer = 'Buyer',
  supplier = 'Supplier',
}

export type RoleDetail = {
  text: string;
  key: RoleAccount;
};

export const RoleDetails: Record<RoleAccount, RoleDetail> = {
  [RoleAccount.seller]: {
    key: RoleAccount.seller,
    text: 'Bán hàng',
  },
  [RoleAccount.buyer]: {
    key: RoleAccount.buyer,
    text: 'Mua hàng',
  },
  [RoleAccount.supplier]: {
    key: RoleAccount.supplier,
    text: 'Cung cấp hàng',
  },
};
