import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const designWidth = 375;
const designHeight = 775;

const normalizeWidth = (num) => {
   return (num * width) / designWidth;
};
const normalizeHeight = (num) => {
   return (num * height) / designHeight;
};

export { normalizeWidth, normalizeHeight };
