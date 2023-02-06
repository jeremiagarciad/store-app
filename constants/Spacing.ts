import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const WIDTH_SCREEN = width;
export const HEIGHT_SCREEN = height;

const Spacing: number = 10;

export const isSmall = 375;

export default Spacing;
