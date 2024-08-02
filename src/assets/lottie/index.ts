export const lotties = {
  done: require('./source/done.json'),
  loading: require('./source/loading.json'),
  failed: require('./source/failed.json'),
};

export type LottieTypes = keyof typeof lotties;
