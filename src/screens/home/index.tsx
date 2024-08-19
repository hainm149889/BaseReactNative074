import Model from '@assets/3d-models/components/RangeRoverSports2018';
import {Header} from '@components/header';
import {Canvas} from '@react-three/fiber/native';
import {createStyleSheet, useStyles} from '@theme';
import {ms} from '@theme/my-style';
import {ActiveOpacity, HairlineWidth} from '@utils/constant';
import {logout} from '@utils/method';
import useControls from 'r3f-native-orbitcontrols';
import React, {Suspense} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const HomeScreen = () => {
  const {styles} = useStyles(styleSheet);

  const [OrderbitControls, events] = useControls();

  return (
    <View style={styles.container}>
      <Header
        centerContent={<Text style={styles.titleScreen}>Trang chủ</Text>}
        style={styles.header}
      />
      <View style={[ms.flex1]}>
        <TouchableOpacity activeOpacity={ActiveOpacity} onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <View style={ms.flex1} {...events}>
          <Canvas
            onCreated={state => {
              const _gl = state.gl.getContext();
              const pixelStorei = _gl.pixelStorei.bind(_gl);
              _gl.pixelStorei = function (...args) {
                const [parameter] = args;
                switch (parameter) {
                  case _gl.UNPACK_FLIP_Y_WEBGL:
                    return pixelStorei(...args);
                }
              };
            }}>
            <OrderbitControls enablePan={false} />
            <directionalLight position={[1, 0, 0]} args={['white', 5]} />
            <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
            <directionalLight position={[0, 1, 0]} args={['white', 5]} />
            <directionalLight position={[0, -1, 0]} args={['white', 5]} />
            <directionalLight position={[0, 0, 1]} args={['white', 5]} />
            <directionalLight position={[0, 0, -1]} args={['white', 5]} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </View>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({textPresets, colors, shadows}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  header: {
    backgroundColor: colors.White,
    borderBottomWidth: HairlineWidth,
    borderBottomColor: colors.LightGray,
    ...shadows['.3'],
  },
  titleScreen: {
    color: colors.Black,
    ...textPresets.Font20Bold,
  },
  title: {
    color: 'red',
    ...textPresets.Font32Reg,
  },
  title2: {
    color: 'red',
    ...textPresets.Font24Reg,
  },
}));
