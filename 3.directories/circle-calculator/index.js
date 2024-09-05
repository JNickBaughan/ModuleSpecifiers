import { pi } from "../calculator/constants/pi";
import { multiply } from "../calculator/operations/multiply";

export const getAreaCircle = (radius) =>  multiply(pi, multiply(radius, radius));