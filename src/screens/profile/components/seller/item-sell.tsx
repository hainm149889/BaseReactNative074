import {OrdersByBuyer} from '@screens/profile/dummy';
import {createStyleSheet, useStyles} from '@theme';
import {ms} from '@theme/my-style';
import {scale} from '@utils/scale';
import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  item: OrdersByBuyer;
};
export const ItemSell = ({item}: Props) => {
  const {styles} = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={ms.flex1}>
          <Text>{`Người mua: ${item.owner}`}</Text>
          <Text>{item.weight}</Text>
          <Text>{item.name}</Text>
        </View>
        <View style={ms.flex1}>
          <Text>{'Ngày mua: ' + item.date}</Text>
          <Text>{'Số tiền: ' + item.money.currencyFormat()}</Text>
        </View>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({spacings}) => ({
  container: {
    flex: 1,
    marginTop: spacings[8],
    rowGap: spacings[8],
  },
  img: {
    width: scale(30),
    height: scale(30),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
