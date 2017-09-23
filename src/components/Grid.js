const xxsMin = 0, xsMin = 300, sMin = 600, mMin = 900, lMin = 1200, xlMin = 1500, xxlMin = 1800;
const xxsMax = xsMin-1, xsMax = sMin-1, sMax = mMin-1, mMax = lMin-1, lMax = xlMin-1, xlMax = xxlMin-1;

const xxs = `@media(min-width: ${xxsMin})px and @media(max-width: ${xxsMax})px`;
const xs = `@media(min-width: ${xsMin})px and @media(max-width: ${xsMax})px`;
const s = `@media(min-width: ${sMin})px and @media(max-width: ${sMax})px`;
const m = `@media(min-width: ${mMin})px and @media(max-width: ${mMax})px`;
const l = `@media(min-width: ${lMin})px and @media(max-width: ${lMax})px`;
const xl = `@media(min-width: ${xlMin})px and @media(max-width: ${xlMax})px`;
const xxl = `@media(min-width: ${xxlMin})px`;

const xsUp = `@media(min-width: ${xsMin})px`;
const sUp = `@media(min-width: ${sMin})px`;
const mUp = `@media(min-width: ${mMin})px`;
const lUp = `@media(min-width: ${lMin})px`;
const xlUp = `@media(min-width: ${xlMin})px`;

const xsDown = `@media(max-width: ${xsMax})px`;
const sDown = `@media(max-width: ${sMax})px`;
const mDown = `@media(max-width: ${mMax})px`;
const lDown = `@media(max-width: ${lMax})px`;
const xlDown = `@media(max-width: ${xlMax})px`;



export default { xxs, xs, s, m, l, xl, xxl, xsUp, sUp, mUp, lUp, xlUp, xsDown, sDown, mDown, lDown, xlDown};
