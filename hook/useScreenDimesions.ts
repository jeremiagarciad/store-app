import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelinesBaseWidth = 375;
const guidelinesBaseHeight = 812;

const horizontalScale = (size: any) => (width / guidelinesBaseWidth) * size;

const verticalScale = (size: any) => (height / guidelinesBaseHeight) * size;

const moderateScale = (size: number, _factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * _factor;

export { horizontalScale, verticalScale, moderateScale };
