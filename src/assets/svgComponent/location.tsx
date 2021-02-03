import React from "react";
import { SvgXml } from "react-native-svg";

export default function Location() {
    const location = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M10.5 2.61332C9.57172 1.68506 8.31273 1.16357 6.99998 1.16357C5.68722 1.16357 4.42824 1.68506 3.49998 2.61332C2.57172 3.54158 2.05023 4.80057 2.05023 6.11332C2.05023 7.42608 2.57172 8.68506 3.49998 9.61332L6.57415 12.6933C6.62837 12.748 6.69289 12.7914 6.76398 12.821C6.83506 12.8506 6.9113 12.8659 6.98831 12.8659C7.06532 12.8659 7.14156 12.8506 7.21265 12.821C7.28373 12.7914 7.34825 12.748 7.40248 12.6933L10.5 9.58416C11.4244 8.65976 11.9437 7.40602 11.9437 6.09874C11.9437 4.79146 11.4244 3.53772 10.5 2.61332ZM9.66581 8.74999L6.99998 11.4275L4.33415 8.74999C3.80748 8.22284 3.44892 7.55138 3.3038 6.82049C3.15868 6.0896 3.23351 5.33209 3.51882 4.64372C3.80414 3.95535 4.28714 3.36702 4.90676 2.9531C5.52639 2.53918 6.25482 2.31826 6.99998 2.31826C7.74514 2.31826 8.47357 2.53918 9.09319 2.9531C9.71282 3.36702 10.1958 3.95535 10.4811 4.64372C10.7665 5.33209 10.8413 6.0896 10.6962 6.82049C10.551 7.55138 10.1925 8.22284 9.66581 8.74999ZM5.24998 4.32249C4.77906 4.79486 4.51463 5.43465 4.51463 6.10166C4.51463 6.76866 4.77906 7.40845 5.24998 7.88082C5.59984 8.23128 6.04541 8.47062 6.53078 8.56881C7.01614 8.667 7.5197 8.61966 7.97827 8.43274C8.43684 8.24583 8.83 7.92765 9.10843 7.51813C9.38685 7.10862 9.53814 6.626 9.54331 6.13082C9.54594 5.80019 9.48225 5.47239 9.35601 5.1668C9.22976 4.86121 9.04353 4.58403 8.80831 4.35166C8.57712 4.11516 8.30144 3.92672 7.99714 3.79718C7.69284 3.66763 7.36593 3.59955 7.03521 3.59684C6.7045 3.59413 6.37651 3.65684 6.07013 3.78138C5.76375 3.90592 5.48502 4.08981 5.24998 4.32249ZM7.98581 7.05249C7.76475 7.27692 7.4726 7.4176 7.1593 7.45047C6.846 7.48334 6.53102 7.40636 6.26819 7.2327C6.00537 7.05903 5.81103 6.79946 5.7184 6.49837C5.62577 6.19728 5.64061 5.87336 5.76037 5.582C5.88013 5.29063 6.09739 5.04991 6.37499 4.901C6.65259 4.75209 6.97329 4.70423 7.28228 4.7656C7.59126 4.82697 7.86933 4.99376 8.06894 5.23746C8.26856 5.48116 8.37733 5.78664 8.37665 6.10166C8.36816 6.46173 8.2171 6.80371 7.95665 7.05249H7.98581Z" fill="white"/>
</g>
</svg>
  `
    const LocationSvg = () => <SvgXml xml={location} />;
    return <LocationSvg />;
}