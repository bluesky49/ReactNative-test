
import React from "react";
import { SvgXml } from "react-native-svg";

export default function Edit() {
    const edit = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
    <path d="M0.888889 7.10973H1.51733L5.65689 2.96344L5.02844 2.33398L0.888889 6.48026V7.10973ZM8 8.00006H0V6.11122L5.97111 0.1304C6.05446 0.046944 6.16748 6.10352e-05 6.28533 6.10352e-05C6.40318 6.10352e-05 6.51621 0.046944 6.59956 0.1304L7.85689 1.38978C7.94021 1.47326 7.98702 1.58647 7.98702 1.70451C7.98702 1.82255 7.94021 1.93576 7.85689 2.01924L2.77467 7.10973H8V8.00006ZM5.65689 1.70451L6.28533 2.33398L6.91378 1.70451L6.28533 1.07504L5.65689 1.70451Z" fill="#EEEEEE"/>
    </g>
    </svg>
    `
    const EditSvg = () => <SvgXml xml={edit} />;
    return <EditSvg />;
}
