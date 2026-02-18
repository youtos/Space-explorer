import React from 'react';

interface MapSVGProps {
  theme: 'light' | 'dark';
}

export function MapSVG({ theme }: MapSVGProps) {
  const cssStyles = `
    .st0 {
        letter-spacing: 1em;
      }

      .st0, .st1, .st2, .st3, .st4, .st5, .st6, .st7, .st8, .st9, .st10, .st11, .st12, .st13, .st14, .st15, .st16, .st17, .st18, .st19, .st20 {
        font-size: 5px;
      }

      .st0, .st3, .st4, .st21, .st7, .st8, .st22, .st9, .st23, .st14, .st15, .st17, .st18, .st20 {
        fill: #fff;
      }

      .st0, .st4, .st7, .st9, .st14, .st17, .st18 {
        font-family: P152SemiBold, P152;
      }

      .st24, .st10, .st13 {
        fill: #e5d922;
      }

      .st25 {
        stroke: #e5d922;
      }

      .st25, .st26, .st27, .st28, .st29, .st30, .st31, .st32, .st33, .st34, .st35 {
        fill: none;
      }

      .st25, .st26, .st27, .st28, .st29, .st30, .st31, .st32, .st33, .st35 {
        stroke-miterlimit: 10;
      }

      .st25, .st29, .st30, .st32, .st33, .st35 {
        stroke-width: .43px;
      }

      .st36 {
        letter-spacing: .21em;
      }

      .st36, .st37, .st38, .st39, .st40, .st41, .st42 {
        font-family: P112Semibold, P112;
      }

      .st36, .st41 {
        font-size: 8px;
      }

      .st1, .st3 {
        letter-spacing: .2em;
      }

      .st1, .st3, .st10, .st15 {
        font-family: MyriadPro-Regular, 'Myriad Pro';
      }

      .st1, .st6, .st43 {
        fill: #cdeaf2;
      }

      .st44, .st16 {
        fill: #89c6ec;
      }

      .st2, .st5, .st6, .st8, .st10, .st12, .st13, .st15, .st16, .st19 {
        letter-spacing: .2em;
      }

      .st2, .st5, .st6, .st8, .st12, .st13, .st16, .st20 {
        font-family: Bm431Italic, Bm431;
      }

      .st2, .st45 {
        fill: #d6872a;
      }

      .st46 {
        opacity: .3;
      }

      .st46, .st47, .st48, .st49 {
        fill: #c6c6c6;
      }

      .st47 {
        opacity: .4;
      }

      .st50, .st42 {
        letter-spacing: 0em;
      }

      .st26 {
        stroke-width: .14px;
      }

      .st26, .st30, .st31, .st23 {
        stroke: #fff;
      }

      .st4 {
        letter-spacing: .2em;
      }

      .st48 {
        opacity: .2;
      }

      .st5, .st51 {
        fill: #da4b34;
      }

      .st27 {
        stroke-width: .85px;
      }

      .st27, .st28, .st34 {
        stroke: #1d1d1b;
      }

      .st28, .st34 {
        stroke-width: .57px;
      }

      .st29 {
        stroke: #cdeaf2;
      }

      .st49 {
        opacity: .1;
      }

      .st7 {
        letter-spacing: .4em;
      }

      .st37, .st38 {
        font-size: 18px;
        letter-spacing: 0em;
      }

      .st22, .st38, .st52, .st53 {
        display: none;
      }

      .st9 {
        letter-spacing: .9em;
      }

      .st31 {
        stroke-width: .28px;
      }

      .st32 {
        stroke: #cee9f2;
      }

      .st11, .st19 {
        font-family: ArialMT, Arial;
      }

      .st33 {
        stroke: #89c6ec;
      }

      .st54, .st39 {
        letter-spacing: 0em;
      }

      .st39, .st40, .st42 {
        font-size: 12px;
      }

      .st12, .st55 {
        fill: #f2f4a3;
      }

      .st52, .st56, .st57, .st58 {
        fill: #1d1d1b;
      }

      .st17 {
        letter-spacing: 2em;
      }

      .st41 {
        letter-spacing: .21em;
      }

      .st59 {
        fill: #fdf5c0;
      }

      .st18 {
        letter-spacing: .3em;
      }

      .st57 {
        letter-spacing: .01em;
      }

      .st57, .st58 {
        font-family: P151, P151;
        font-size: 6px;
      }

      .st20 {
        letter-spacing: .2em;
      }

      .st58 {
        letter-spacing: 0em;
      }

      .st35 {
        stroke: #d6872a;
      }
    `;

  return (
    <svg width="100%" height="auto" viewBox="0 0 551 534" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{cssStyles}</style>
      </defs>
  <g id="_Основа" data-name="Основа">
    <circle class="st28" cx="275.1" cy="266.86" r="221.16"/>
    <circle class="st34" cx="274.98" cy="266.86" r="231.99"/>
    <circle class="st56" cx="275.63" cy="266" r="213.08"/>
    <text class="st19" transform="translate(62.49 191.33) rotate(-66.58)"><tspan x="0" y="0">ЯНВАРЬ</tspan></text>
    <text class="st19" transform="translate(131.73 91.9) rotate(-35.05)"><tspan x="0" y="0">ФЕВРАЛЬ</tspan></text>
    <text class="st19" transform="translate(237.68 44.47) rotate(-7.4)"><tspan x="0" y="0">МАРТ</tspan></text>
    <text class="st19" transform="translate(351.13 54.37) rotate(22.97)"><tspan x="0" y="0">АПРЕЛЬ</tspan></text>
    <text class="st19" transform="translate(448.65 123.5) rotate(52.64)"><tspan x="0" y="0">МАЙ</tspan></text>
    <text class="st19" transform="translate(485.88 355.78) rotate(-67.2)"><tspan x="0" y="0">ИЮЛЬ</tspan></text>
    <text class="st19" transform="translate(486.67 188.61) rotate(71.6)"><tspan x="0" y="0">ИЮНЬ</tspan></text>
    <text class="st19" transform="translate(412.17 449.54) rotate(-38.3)"><tspan x="0" y="0">АВГУСТ</tspan></text>
    <text class="st19" transform="translate(291.15 495.18) rotate(-8.25)"><tspan x="0" y="0">СЕНТЯБРЬ</tspan></text>
    <text class="st19" transform="translate(179.55 475.35) rotate(21.01)"><tspan x="0" y="0">ОКТЯБРЬ</tspan></text>
    <text class="st19" transform="translate(88.12 398.2) rotate(52.07)"><tspan x="0" y="0">НОЯБРЬ</tspan></text>
    <text class="st19" transform="translate(47.09 284.79) rotate(82.96)"><tspan x="0" y="0">ДЕКАБРЬ</tspan></text>
    <line class="st28" x1="97.96" y1="116.9" x2="106.37" y2="123.91"/>
    <line class="st28" x1="194.23" y1="60.95" x2="189.87" y2="50.97"/>
    <line class="st28" x1="311.23" y1="48.63" x2="312.56" y2="37.62"/>
    <line class="st28" x1="412.07" y1="93.19" x2="419" y2="84.69"/>
    <line class="st28" x1="480.31" y1="183.99" x2="490.5" y2="180.6"/>
    <line class="st28" x1="494.49" y1="293.89" x2="505.08" y2="295.51"/>
    <line class="st28" x1="451.58" y1="400.17" x2="459.03" y2="406.29"/>
    <line class="st28" x1="361.55" y1="470.48" x2="365.54" y2="479.34"/>
    <line class="st28" x1="249.61" y1="486.66" x2="248.73" y2="497.22"/>
    <line class="st28" x1="138.99" y1="441.11" x2="132.09" y2="449.27"/>
    <line class="st28" x1="69.71" y1="348.69" x2="59.29" y2="353.09"/>
    <line class="st28" x1="56.71" y1="231.63" x2="45.71" y2="230.14"/>
    <line class="st27" x1="211.73" y1="52.14" x2="212.5" y2="54.54"/>
    <line class="st27" x1="251.01" y1="44.45" x2="251.33" y2="46.95"/>
    <line class="st27" x1="270.35" y1="43.21" x2="270.35" y2="45.73"/>
    <line class="st27" x1="288.82" y1="43.51" x2="288.72" y2="46.02"/>
    <line class="st27" x1="307.96" y1="45.28" x2="307.66" y2="47.78"/>
    <line class="st27" x1="330.21" y1="49.73" x2="329.57" y2="52.16"/>
    <line class="st27" x1="348.17" y1="55.12" x2="347.3" y2="57.48"/>
    <line class="st27" x1="365.64" y1="62.23" x2="364.78" y2="64.59"/>
    <line class="st27" x1="382.53" y1="70.54" x2="381.47" y2="72.82"/>
    <line class="st27" x1="398.78" y1="80.15" x2="397.44" y2="82.28"/>
    <line class="st27" x1="428.76" y1="104.42" x2="427.08" y2="106.29"/>
    <line class="st27" x1="441.16" y1="116.57" x2="439.39" y2="118.35"/>
    <line class="st27" x1="453.19" y1="131.24" x2="451.2" y2="132.77"/>
    <line class="st27" x1="463.72" y1="146.5" x2="461.66" y2="147.93"/>
    <line class="st27" x1="473.35" y1="162.6" x2="471.18" y2="163.85"/>
    <line class="st27" x1="481.67" y1="181.38" x2="479.34" y2="182.3"/>
    <line class="st27" x1="489.03" y1="201.43" x2="486.6" y2="202.09"/>
    <line class="st27" x1="493.67" y1="219.19" x2="491.18" y2="219.55"/>
    <line class="st27" x1="497.03" y1="238.18" x2="494.54" y2="238.53"/>
    <line class="st27" x1="498.77" y1="256.56" x2="496.26" y2="256.56"/>
    <line class="st27" x1="498.91" y1="275.49" x2="496.4" y2="275.49"/>
    <line class="st27" x1="494.28" y1="312.42" x2="491.82" y2="311.92"/>
    <line class="st27" x1="489.79" y1="330.67" x2="487.42" y2="329.82"/>
    <line class="st27" x1="483.76" y1="348.24" x2="481.53" y2="347.1"/>
    <line class="st27" x1="475.57" y1="366.46" x2="473.4" y2="365.2"/>
    <line class="st27" x1="466.87" y1="381.98" x2="464.76" y2="380.61"/>
    <line class="st27" x1="456.43" y1="398.2" x2="454.49" y2="396.6"/>
    <line class="st27" x1="442.13" y1="415.76" x2="440.26" y2="414.09"/>
    <line class="st27" x1="429.1" y1="429.42" x2="427.44" y2="427.53"/>
    <line class="st27" x1="414.58" y1="441.75" x2="413.02" y2="439.78"/>
    <line class="st27" x1="399.61" y1="452.94" x2="398.15" y2="450.9"/>
    <line class="st27" x1="383.31" y1="462.88" x2="382.06" y2="460.71"/>
    <line class="st27" x1="366.09" y1="471.57" x2="365.05" y2="469.28"/>
    <line class="st27" x1="344.68" y1="479.37" x2="343.87" y2="477"/>
    <line class="st27" x1="326.69" y1="484.82" x2="326.02" y2="482.4"/>
    <line class="st27" x1="307.43" y1="488.1" x2="307.07" y2="485.61"/>
    <line class="st27" x1="288.77" y1="490.07" x2="288.56" y2="487.57"/>
    <line class="st27" x1="269.38" y1="490.42" x2="269.38" y2="487.91"/>
    <line class="st27" x1="210.74" y1="481.3" x2="211.42" y2="478.88"/>
    <line class="st27" x1="229.75" y1="486.06" x2="230.28" y2="483.6"/>
    <line class="st27" x1="192.16" y1="474.79" x2="193.01" y2="472.42"/>
    <line class="st27" x1="174.03" y1="466.7" x2="175.08" y2="464.41"/>
    <line class="st27" x1="156.91" y1="456.87" x2="158.17" y2="454.69"/>
    <line class="st27" x1="140.39" y1="445.6" x2="141.84" y2="443.55"/>
    <line class="st27" x1="122.39" y1="430.6" x2="124.08" y2="428.74"/>
    <line class="st27" x1="109.94" y1="417.99" x2="111.8" y2="416.3"/>
    <line class="st27" x1="96.53" y1="401.44" x2="98.51" y2="399.9"/>
    <line class="st27" x1="60.81" y1="331.59" x2="63.22" y2="330.87"/>
    <line class="st27" x1="56.24" y1="314.04" x2="58.72" y2="313.63"/>
    <line class="st27" x1="52.79" y1="293.73" x2="55.3" y2="293.59"/>
    <line class="st27" x1="51.4" y1="275.91" x2="53.91" y2="275.91"/>
    <line class="st27" x1="51.52" y1="254.72" x2="54.03" y2="254.81"/>
    <line class="st27" x1="53.48" y1="235.25" x2="55.97" y2="235.59"/>
    <line class="st27" x1="57.79" y1="212.48" x2="60.22" y2="213.11"/>
    <line class="st27" x1="63.51" y1="193.44" x2="65.91" y2="194.19"/>
    <line class="st27" x1="70.82" y1="175.03" x2="73.08" y2="176.12"/>
    <line class="st27" x1="79.75" y1="157.44" x2="81.92" y2="158.7"/>
    <line class="st27" x1="90.03" y1="140.83" x2="92.06" y2="142.31"/>
    <line class="st27" x1="102.18" y1="125.3" x2="104.14" y2="126.87"/>
    <line class="st27" x1="117.36" y1="107.9" x2="119.14" y2="109.67"/>
    <line class="st27" x1="131.94" y1="94.71" x2="133.55" y2="96.65"/>
    <line class="st27" x1="147.82" y1="82.94" x2="149.26" y2="85"/>
    <line class="st27" x1="164.52" y1="72.33" x2="165.78" y2="74.51"/>
    <line class="st27" x1="182.07" y1="63.44" x2="183.21" y2="65.69"/>
    <line class="st27" x1="75.28" y1="367.92" x2="77.45" y2="366.66"/>
    <line class="st27" x1="85.08" y1="385.3" x2="87.2" y2="383.95"/>
    <line class="st27" x1="231.27" y1="47.71" x2="231.7" y2="49.98"/>
    <text class="st58" transform="translate(225.23 48.85) rotate(-10.7)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(262.45 43.93) rotate(-3.74)"><tspan x="0" y="0">20</tspan></text>
    <text class="st58" transform="translate(271.09 51.41)"><tspan x="0" y="0">0ч</tspan></text>
    <text class="st57" transform="translate(214.36 60.25) rotate(-15.5)"><tspan x="0" y="0">23ч</tspan></text>
    <text class="st57" transform="translate(162.69 83.32) rotate(-30)"><tspan x="0" y="0">22ч</tspan></text>
    <text class="st57" transform="translate(120.02 118.18) rotate(-45.51)"><tspan x="0" y="0">21ч</tspan></text>
    <text class="st57" transform="translate(86.43 164.57) rotate(-60.37)"><tspan x="0" y="0">20ч</tspan></text>
    <text class="st58" transform="translate(66.79 216.14) rotate(-75.39)"><tspan x="0" y="0">19ч</tspan></text>
    <text class="st58" transform="translate(60.91 271.63) rotate(-90)"><tspan x="0" y="0">18ч</tspan></text>
    <text class="st58" transform="translate(328.5 57.74) rotate(14.73)"><tspan x="0" y="0">1ч</tspan></text>
    <text class="st57" transform="translate(380.21 78.53) rotate(29.81)"><tspan x="0" y="0">2ч</tspan></text>
    <text class="st57" transform="translate(424.67 111.52) rotate(44.53)"><tspan x="0" y="0">3ч</tspan></text>
    <text class="st58" transform="translate(459.45 155.1) rotate(59.69)"><tspan x="0" y="0">4ч</tspan></text>
    <text class="st57" transform="translate(482.07 206.79) rotate(74.84)"><tspan x="0" y="0">5ч</tspan></text>
    <text class="st58" transform="translate(490.48 262.47) rotate(90)"><tspan x="0" y="0">6ч</tspan></text>
    <text class="st58" transform="translate(486.66 324.52) rotate(-75.37)"><tspan x="0" y="0">7ч</tspan></text>
    <text class="st58" transform="translate(463.78 377.99) rotate(-60.84)"><tspan x="0" y="0">8ч</tspan></text>
    <text class="st57" transform="translate(428.79 422.68) rotate(-45.51)"><tspan x="0" y="0">9ч</tspan></text>
    <text class="st58" transform="translate(383.63 456.92) rotate(-30.51)"><tspan x="0" y="0">10ч</tspan></text>
    <text class="st58" transform="translate(331.37 478.08) rotate(-15.62)"><tspan x="0" y="0">11ч</tspan></text>
    <text class="st58" transform="translate(272.57 485.28)"><tspan x="0" y="0">12ч</tspan></text>
    <text class="st58" transform="translate(216.28 477.01) rotate(14.95)"><tspan x="0" y="0">13ч</tspan></text>
    <text class="st58" transform="translate(163.67 454.52) rotate(29.78)"><tspan x="0" y="0">14ч</tspan></text>
    <text class="st58" transform="translate(118.97 419.52) rotate(44.91)"><tspan x="0" y="0">15ч</tspan></text>
    <text class="st58" transform="translate(84.34 373.79) rotate(58.89)"><tspan x="0" y="0">16ч</tspan></text>
    <text class="st58" transform="translate(63.61 321.31) rotate(73.43)"><tspan x="0" y="0">17ч</tspan></text>
    <text class="st58" transform="translate(126.54 99.18) rotate(-39.66)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(165.63 71.56) rotate(-30)"><tspan x="0" y="0">20</tspan></text>
    <text class="st58" transform="translate(342.22 53.2) rotate(18.28)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(375.83 66.81) rotate(28.98)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(300.18 44.47) rotate(6.87)"><tspan x="0" y="0">30</tspan></text>
    <text class="st58" transform="translate(436.6 112.06) rotate(46.86)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(459.39 140.16) rotate(55.3)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(478.4 174.19) rotate(65.52)"><tspan x="0" y="0">30</tspan></text>
    <text class="st58" transform="translate(61.9 199.82) rotate(-69.91)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(75.93 164.61) rotate(-60)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(97.22 131.85) rotate(-53.87)"><tspan x="0" y="0">30</tspan></text>
    <text class="st58" transform="translate(329.06 488.04) rotate(-14.19)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(280.77 494.75) rotate(-2.82)"><tspan x="0" y="0">20</tspan></text>
    <text class="st58" transform="translate(432.21 431.39) rotate(-40.48)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(402.38 455.78) rotate(-35.46)"><tspan x="0" y="0">20</tspan></text>
    <text class="st58" transform="translate(492.05 212.62) rotate(77.33)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(498.3 248.44) rotate(86.7)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(368.53 474.21) rotate(-26.29)"><tspan x="0" y="0">30</tspan></text>
    <text class="st58" transform="translate(210.77 484.83) rotate(14.95)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(173 470.72) rotate(24.73)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(138.65 449.01) rotate(35.35)"><tspan x="0" y="0">30</tspan></text>
    <text class="st58" transform="translate(107.65 421.47) rotate(47.61)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(82.67 387.94) rotate(57.47)"><tspan x="0" y="0">20</tspan></text>
    <text class="st58" transform="translate(52.69 316.06) rotate(78.24)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(47.09 268.23) rotate(86.92)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(49.6 236.09) rotate(97.69)"><tspan x="0" y="0">30</tspan></text>
    <text class="st58" transform="translate(494.56 330.25) rotate(-75.37)"><tspan x="0" y="0">10</tspan></text>
    <text class="st57" transform="translate(479.81 367.4) rotate(-60.84)"><tspan x="0" y="0">20</tspan></text>
    <text class="st57" transform="translate(460.66 399.65) rotate(-54.6)"><tspan x="0" y="0">30</tspan></text>
    <g id="_Сетка" data-name="Сетка">
      <line class="st26" x1="273.66" y1="52.92" x2="276.3" y2="479.08"/>
      <path class="st26" d="M488.41,263.04"/>
      <path class="st26" d="M62.24,264.66"/>
      <line class="st26" x1="62.55" y1="267.75" x2="488.71" y2="266.13"/>
      <circle class="st26" cx="275.34" cy="267.25" r="36.88"/>
      <circle class="st26" cx="275.34" cy="266.74" r="71.79"/>
      <circle class="st26" cx="275.34" cy="266.71" r="107.4"/>
      <circle class="st26" cx="275.34" cy="266.99" r="142.59"/>
      <circle class="st26" cx="275.34" cy="266.76" r="177.82"/>
      <line class="st26" x1="310.78" y1="257.03" x2="481.49" y2="210.76"/>
      <line class="st26" x1="307.15" y1="248.58" x2="460.06" y2="159.2"/>
      <line class="st26" x1="301.31" y1="241.07" x2="425.64" y2="114.66"/>
      <line class="st26" x1="293.49" y1="235.15" x2="381.72" y2="81.16"/>
      <line class="st26" x1="284.51" y1="231.52" x2="329.64" y2="59.82"/>
      <line class="st26" x1="265.85" y1="231.65" x2="218.42" y2="60.68"/>
      <line class="st26" x1="167.02" y1="82.63" x2="256.88" y2="235.32"/>
      <line class="st26" x1="249.41" y1="241.03" x2="123.24" y2="117.06"/>
      <line class="st26" x1="243.41" y1="248.8" x2="89.89" y2="161.49"/>
      <line class="st26" x1="239.76" y1="257.49" x2="69.18" y2="213.02"/>
      <line class="st26" x1="239.67" y1="276.67" x2="70.12" y2="322.53"/>
      <line class="st26" x1="243.28" y1="285.49" x2="91.53" y2="373.36"/>
      <line class="st26" x1="125.56" y1="417.27" x2="249.17" y2="293.25"/>
      <line class="st26" x1="169.98" y1="451.09" x2="256.9" y2="299.2"/>
      <line class="st26" x1="221.4" y1="472.12" x2="266.04" y2="302.96"/>
      <line class="st26" x1="285.3" y1="302.7" x2="332.47" y2="471.42"/>
      <line class="st26" x1="294.26" y1="298.92" x2="383.27" y2="449.93"/>
      <line class="st26" x1="301.81" y1="292.93" x2="427" y2="415.9"/>
      <line class="st26" x1="460.41" y1="372.18" x2="307.65" y2="285.05"/>
      <line class="st26" x1="481.59" y1="320.85" x2="311.09" y2="276.35"/>
    </g>
  </g>
  <g id="_Млечный_путь" data-name="Млечный_путь">
    <path class="st48" d="M76.66,192.95c3.28-5.35,7.46-8.05,14.9-12.84,2.52-1.62,8.52-5.29,17.43-8.48,10.32-3.7,18.29-4.52,32.33-5.96,8.32-.86,13.85-1.04,24.08-1.38,23.84-.79,27.61.79,29.81,2.29,1,.69,3.52,2.63,6.88,2.52,2.56-.08,3.58-1.29,6.42-2.06,3.2-.87,5.79-.39,9.17.23,5.47,1.01,6.16,2.45,14.22,5.27,5.11,1.79,7.73,2.69,10.78,2.52,4.06-.22,7.14-1.81,9.86-3.21,6.66-3.43,7.3-6.27,11.01-6.42,2.2-.09,4.48,1.47,8.94,4.59,6,4.19,7.36,6.23,12.15,9.63,3.75,2.66,6.56,4.65,10.55,5.96,8.9,2.93,11.87-1.41,20.41,1.38,6.02,1.97,5.44,4.42,11.92,6.19,5.95,1.63,6.74-.35,13.99.92,6.19,1.09,11.05,3.49,15.59,5.73,5.85,2.89,5.45,3.57,9.17,4.82,6.72,2.25,9.15.42,12.61,2.98,3.2,2.37,2.08,4.65,5.5,9.86,3.2,4.87,7.19,7.46,11.24,10.09,2.24,1.45,2.91,1.64,14.9,7.11,10.58,4.82,11.47,5.32,12.84,6.65,5.21,5.08,4.76,10.12,8.03,10.55,1.88.25,4.56-2.35,9.86-7.57,4.63-4.55,5.51-6.05,8.03-6.65,4.27-1.02,8.26,1.74,8.71,2.06,4.49,3.2,3.39,7.19,7.8,17.2.23.52,0-.04,7.57,13.3,3.95,6.96,6.34,9.3,8.71,11.46,2.53,2.3,4.95,3.85,6.65,4.82-.12,3.27-.37,7.49-.92,12.38-.78,6.98-2.12,15.07-4.59,24.54-4.18,16.01-10.94,33.52-12.84,33.02-1.29-.34,1.53-8.44-.46-21.32-.77-4.97-1.79-11.54-5.96-17.89-3.07-4.66-8.2-7.99-18.34-14.45-14.91-9.5-18.8-9.64-23.39-16.28-2.63-3.8-2.87-5.93-6.19-8.48-5.77-4.43-9.82-1.64-15.36-5.5-4.85-3.38-2.59-6.09-9.17-14.22-5.39-6.66-8.04-6.23-10.32-11.46-2.52-5.8,0-8.04-2.75-11.92-2.9-4.1-6.24-2.39-13.3-7.11-3.01-2.01-5.45-4.63-10.32-9.86-6.17-6.63-5.79-7.46-8.48-8.94-3.46-1.9-7.27-1.88-14.9-1.83-5.05.03-10.93.06-11.24,1.61-.35,1.78,7.17,2.97,11.92,10.09.68,1.02,3.32,4.97,2.06,6.65-1.7,2.28-9.55-.91-12.38-2.06-9.93-4.04-11.46-7.39-19.95-12.15-11.47-6.44-23.19-8.48-26.14-8.94-7.75-1.22-10.17-.32-16.05-2.75-4.83-2-7.75-4.49-10.78-3.21-2.26.95-4.11,3.8-3.9,6.42.35,4.41,6.29,5.04,7.11,9.86.45,2.66-.73,6.1-2.98,7.34-2.18,1.2-5.62.47-18.57-8.71-12.59-8.93-17.29-13.88-19.72-12.38-1.75,1.08-1.53,5.02-1.15,11.69.36,6.28,1.4,7.7.23,9.63-1.06,1.74-3.23,2.76-13.07,3.44-11.78.81-12.48-.39-18.57.69-4.87.86-4.19,1.59-15.13,4.82-4.94,1.45-8.53,2.51-13.3,3.44-9.47,1.84-10.22.56-18.8,2.29-9.42,1.9-9.65,3.67-14.45,3.21-7.31-.71-9.34-5.07-13.53-3.67-3.56,1.19-3.3,4.74-8.48,11.01-4.04,4.88-5.22,3.97-9.17,8.25-8.4,9.09-7.09,17.56-12.38,19.03-1.85.51-5.37.15-10.31-4.26-.48-2.84-.45-7.29.68-12.71.57-2.74,2.11-10.16,8.03-15.82,1.96-1.87,1.77-1.04,11.46-7.11,5.78-3.61,8.67-5.42,10.32-6.88,6.04-5.33,6.2-8.74,9.86-9.17,3.88-.46,7.96,2.87,8.94,3.67,2.73,2.23,2.52,3.5,4.36,4.13,3.4,1.16,8.59-1.69,11.01-5.73,2.68-4.48.61-8.2,3.67-10.55,1.78-1.37,2.83-.37,5.5-1.83,3.35-1.83,3.41-4.34,5.73-6.65,2.39-2.38,6.6-2.69,14.9-3.21,8.27-.52,12.41-.78,15.36.23,7.79,2.66,10.06,8.78,13.53,7.57,2.82-.99,3.46-5.8,3.67-7.34.37-2.8.24-8.37-2.98-10.32-2.68-1.62-5.12.69-12.15,2.29-7.52,1.71-7.8-.24-17.43,1.15-9.51,1.37-8.96,3.23-15.82,3.44-8.14.24-10.21-2.34-14.9-.23-4.32,1.94-4.39,4.96-9.17,6.65-3.83,1.35-5.93.17-9.63.23-7.34.12-11.25,4.96-20.18,11.46-4.4,3.2-11.67,7.46-20.63,11.63.65-2.36,1.47-6.98,2.16-9.5,4.79-17.43,6.2-18.49,7.7-20.93Z"/>
    <path class="st47" d="M75.43,202.33c1.18-1.91,3.6-5.76,8.25-8.94,5.36-3.67,6.68-1.67,14.22-5.5,5.98-3.04,7.6-5.56,12.61-5.96,1.33-.11,5.46-.44,6.65,1.61,1.48,2.55-2.04,8.09-6.42,11.24-6.11,4.38-9.54.98-16.97,5.04-4.72,2.58-4.05,4.35-11.92,9.86-4.25,2.97-8.6,6.02-10.09,4.82-1.79-1.44,1.31-8.32,3.67-12.15Z"/>
    <path class="st46" d="M126.03,184.29c1.27-1.65,3.36-.43,9.17-1.53,3.37-.63,4.2-1.33,6.88-1.22,2.08.08,5.24.65,5.35,1.68.06.58-.84,1.3-7.34,3.67-11.52,4.21-12.95,3.5-13.61,2.9-1.39-1.26-1.57-4.06-.46-5.5Z"/>
    <path class="st47" d="M161.8,178.48c-14.65-4.49-19.12-4.42-19.11-5.66.02-2.61,19.85-3.79,30.73-4.43,10.33-.61,14.2-.26,18.04,1.99,3.32,1.94,4.96,4.32,8.87,4.74,4.14.44,4.89-1.95,9.94-2.6,4.95-.64,12.55-.53,16.36,3.82,2.54,2.9,13.03.14,16.2,2.94,2.84,2.5,12.12-3.39,13.55-3.09,5.84,1.22-15.91,9.19-10.19,10.09,2.67.42,10.04,3.8,15.59,6.88,3.78,2.09,4.74,3.01,4.59,3.67-.24,1.04-3.19,1.18-3.97,1.22-7.1.35-9.53-3.74-15.13-3.97-5.04-.21-4.83,3.01-11.01,3.82-6.42.85-11.85-1.95-17.58-4.89-4.99-2.56-4.65-3.32-13.02-8.03-7.22-4.06-10.17-5.03-13.13-4.2-2.86.8-2.91,2.49-6.11,3.36-3.46.95-6.27-.23-10.55-1.68-4.61-1.56-9.41-2.55-14.06-3.97Z"/>
    <path class="st47" d="M77.42,260.72c-.82.53-3.83,2.49-6.42,1.38-2.59-1.12-3.65-4.84-3.36-7.64.4-3.95,3.54-6.48,9.32-11.01,5.58-4.37,5.81-3.29,10.7-7.34,2-1.66,4.28-3.76,9.94-8.56,3.33-2.83,4.56-3.82,6.42-3.82,3.88,0,7.59,4.31,6.88,5.96-.65,1.51-4.4-.63-8.71,1.38-4.02,1.87-3.56,5.05-8.71,10.7-4.35,4.77-5.23,3.13-8.41,7.18-4.14,5.29-3.3,8.95-7.64,11.77Z"/>
    <path class="st47" d="M127.65,228.26c-.53-1.59,3.23-2.74,7.86-8.2,4.84-5.7,3.92-8.19,8.25-12.23,3.94-3.67,8.3-4.95,10.24-5.5,2.54-.72,10.08-2.45,17.73.76,5.49,2.31,6.86,5.4,11.77,5.35,1.15-.01,4.27-.05,6.57-2.14,2.83-2.57,2.35-16.65,5.03-18.63,2.09-1.55,7.24-1.32,9.42-.15,4.72,2.54,1.26,20.7,1.14,21.83-.08.77-.78,6.5-5.66,9.94-2.17,1.53-4.25,1.96-5.96,2.29-1.39.27-5.09.85-11.77-.92-8.25-2.18-8.96-4.74-12.54-3.97-2.19.47-1.88,1.42-8.41,6.27-6.43,4.77-8.03,4.81-8.87,4.74-3.48-.32-4.31-3.66-7.34-3.36-2.39.23-2.7,2.41-5.66,4.13-4.57,2.66-11.18,1.75-11.84-.21Z"/>
    <path class="st49" d="M275.99,198.66c-3.09-1.83-6.14-3.64-5.81-5.2.29-1.39,3.23-2.25,5.66-1.99,2.93.31,3.48,2.06,6.79,3.84,5.77,3.11,10.85,1.41,11.4,3.49.36,1.35-1.57,2.87-1.7,2.97-.65.5-2.04,1.3-6.1.7-2.28-.34-5.78-1.17-10.24-3.82Z"/>
    <path class="st46" d="M315.58,203.25c.31,1.67,8.13,1.45,10.7,1.38,1.31-.04,15.22-.42,15.59-3.52.2-1.66-3.56-3.59-6.27-4.28-3.67-.94-6.72.06-11.01,1.53-1.7.58-9.33,3.2-9.02,4.89Z"/>
    <path class="st47" d="M415.25,273.26c.34-2.24,4.91-3.52,8.71-4.59,5.38-1.51,7.75-1.06,8.26-2.38,1.07-2.8-8.29-8.02-7.34-10,.66-1.38,5.09,1.3,10.09-.61,4.35-1.66,4.03-4.85,9.02-7.18,1.03-.48,6.21-2.9,9.32-.76,1.97,1.35,1.71,3.54,3.21,12.84,1.4,8.71,2.14,10,3.06,11.01,2.96,3.25,5.67,1.31,9.32,4.43,4.64,3.96,2.09,8.66,6.57,12.54,4.26,3.68,8.56,1.16,10.7,4.43,1.76,2.68-.77,4.91-2.29,14.22-1.22,7.48-.13,9.3-2.29,12.99-1.57,2.68-5.1,6.74-8.25,6.11-3.26-.64-2.61-5.59-7.64-12.23-2.6-3.43-5.45-5.5-11.16-9.63-.91-.66-4.96-3.57-11.16-7.03-9.83-5.49-10.68-4.32-14.22-7.64-4.17-3.91-3.15-5.67-8.56-10.7-3.36-3.12-5.6-4.16-5.35-5.81Z"/>
    <path class="st46" d="M376.12,214.1c-2.14,4.12,1.41,9.83,2.29,11.16,2.39,3.6,3.82,3.14,6.11,7.03,1.37,2.33,2.96,5.01,2.14,7.64-.92,2.97-4.09,3.25-4.13,5.66-.03,2.32,2.9,3.96,3.21,4.13,1.65.89,4.4,1.47,5.35.31.86-1.05-.57-2.53-1.07-6.11-.57-4.05.91-4.61.31-7.64-.64-3.23-2.4-3.01-5.04-7.8-1.24-2.25-1.95-4.4-3.36-8.71-1.69-5.14-2.07-7.65-3.36-7.8-1.24-.14-2.37,2-2.45,2.14Z"/>
    <path class="st46" d="M413.27,241.31c-1.11,1.13-.67,3.66.46,5.2,1.8,2.47,5.9,3.16,7.34,1.53.95-1.08.58-2.99,0-4.13-1.51-2.98-6.22-4.2-7.8-2.6Z"/>
  </g>
  <g id="_Звезды" data-name="Звезды">
    <g id="_Прочие" data-name="Прочие">
      <circle class="st21" cx="147.23" cy="165.76" r=".43"/>
      <circle class="st21" cx="167.02" cy="167.82" r=".43"/>
      <circle class="st21" cx="190.12" cy="180.19" r=".43"/>
      <circle class="st21" cx="187.47" cy="169.97" r=".43"/>
      <circle class="st21" cx="205.3" cy="173.85" r=".43"/>
      <circle class="st21" cx="210.32" cy="186.96" r=".43"/>
      <circle class="st21" cx="201.43" cy="198.29" r=".43"/>
      <circle class="st21" cx="222.18" cy="192.61" r=".43"/>
      <circle class="st21" cx="196.76" cy="209.06" r=".43"/>
      <circle class="st21" cx="205.3" cy="195.86" r=".43"/>
      <circle class="st21" cx="216.22" cy="218.37" r=".43"/>
      <circle class="st21" cx="208.58" cy="223.85" r=".43"/>
      <circle class="st21" cx="193.55" cy="218.8" r=".43"/>
      <circle class="st21" cx="209.38" cy="232.35" r=".43"/>
      <circle class="st21" cx="256.79" cy="253.99" r=".43"/>
      <circle class="st21" cx="256.37" cy="250.76" r=".43"/>
      <circle class="st21" cx="260.65" cy="253.99" r=".43"/>
      <circle class="st21" cx="245.34" cy="258.33" r=".43"/>
      <circle class="st21" cx="217.07" cy="262.27" r=".43"/>
      <circle class="st21" cx="217.07" cy="262.06" r=".43"/>
      <circle class="st21" cx="252.53" cy="266.76" r=".43"/>
      <circle class="st21" cx="244.68" cy="269.83" r=".43"/>
      <circle class="st21" cx="250.55" cy="251.19" r=".43"/>
      <circle class="st21" cx="234.24" cy="222.95" r=".43"/>
      <circle class="st21" cx="251.62" cy="209.55" r=".43"/>
      <circle class="st21" cx="264.04" cy="203.48" r=".43"/>
      <circle class="st21" cx="271.43" cy="214.88" r=".43"/>
      <circle class="st21" cx="305.44" cy="215.78" r=".43"/>
      <circle class="st21" cx="307.89" cy="223.46" r=".43"/>
      <circle class="st21" cx="330.93" cy="233.78" r=".43"/>
      <circle class="st21" cx="334.65" cy="230.37" r=".43"/>
      <circle class="st21" cx="338.18" cy="236.98" r=".43"/>
      <circle class="st21" cx="329.13" cy="231.57" r=".43"/>
      <circle class="st21" cx="319.91" cy="229.75" r=".43"/>
      <circle class="st21" cx="303.78" cy="241.78" r=".43"/>
      <circle class="st21" cx="297.06" cy="260.5" r=".43"/>
      <circle class="st21" cx="294.74" cy="218.37" r=".43"/>
      <circle class="st21" cx="284.38" cy="203.94" r=".43"/>
      <circle class="st21" cx="282.72" cy="199.79" r=".43"/>
      <circle class="st21" cx="265.19" cy="216.28" r=".43"/>
      <circle class="st21" cx="249.85" cy="230.37" r=".43"/>
      <circle class="st21" cx="245.77" cy="214.88" r=".43"/>
      <circle class="st21" cx="260.82" cy="231.85" r=".43"/>
      <circle class="st21" cx="253.43" cy="231.85" r=".43"/>
      <circle class="st21" cx="255.47" cy="230.37" r=".43"/>
      <circle class="st21" cx="268.45" cy="233.92" r=".43"/>
      <circle class="st21" cx="243.09" cy="210.38" r=".43"/>
      <circle class="st21" cx="241.28" cy="214.26" r=".43"/>
      <circle class="st21" cx="235.31" cy="214.88" r=".43"/>
      <circle class="st21" cx="244.86" cy="245.23" r=".43"/>
      <circle class="st21" cx="229.61" cy="239.79" r=".43"/>
      <circle class="st21" cx="231.21" cy="248.77" r=".43"/>
      <circle class="st21" cx="238" cy="254.9" r=".43"/>
      <circle class="st21" cx="218.71" cy="284.85" r=".43"/>
      <circle class="st21" cx="233.73" cy="270.09" r=".43"/>
      <circle class="st21" cx="234.71" cy="303.25" r=".43"/>
      <circle class="st21" cx="220.52" cy="304.14" r=".43"/>
      <circle class="st21" cx="221.42" cy="313.4" r=".43"/>
      <circle class="st21" cx="214.95" cy="264.38" r=".43"/>
      <circle class="st21" cx="231.51" cy="257.79" r=".43"/>
      <circle class="st21" cx="230.52" cy="288.13" r=".43"/>
      <circle class="st21" cx="234.42" cy="310.1" r=".43"/>
      <circle class="st21" cx="237.47" cy="307.59" r=".43"/>
      <circle class="st21" cx="227.62" cy="287.23" r=".43"/>
      <circle class="st21" cx="219.61" cy="287.94" r=".43"/>
      <circle class="st21" cx="220.63" cy="247.95" r=".43"/>
      <circle class="st21" cx="205.3" cy="231.42" r=".43"/>
      <circle class="st21" cx="175.93" cy="241.6" r=".43"/>
      <circle class="st21" cx="198.96" cy="244" r=".43"/>
      <circle class="st21" cx="201.49" cy="260.5" r=".43"/>
      <circle class="st21" cx="203.55" cy="252.1" r=".43"/>
      <circle class="st21" cx="196.76" cy="256.81" r=".43"/>
      <circle class="st21" cx="194.85" cy="253.21" r=".43"/>
      <circle class="st21" cx="178.06" cy="259.29" r=".43"/>
      <circle class="st21" cx="183.44" cy="246.86" r=".43"/>
      <circle class="st21" cx="155.59" cy="255.27" r=".43"/>
      <circle class="st21" cx="183.44" cy="243.58" r=".43"/>
      <circle class="st21" cx="196.76" cy="228.05" r=".43"/>
      <circle class="st21" cx="196.3" cy="224.99" r=".43"/>
      <circle class="st21" cx="188.71" cy="228.56" r=".43"/>
      <circle class="st21" cx="191.03" cy="213.08" r=".43"/>
      <circle class="st21" cx="199.86" cy="194.95" r=".43"/>
      <circle class="st21" cx="211.49" cy="182.16" r=".43"/>
      <circle class="st21" cx="197.2" cy="186.1" r=".43"/>
      <circle class="st21" cx="203.12" cy="184.67" r=".43"/>
      <circle class="st21" cx="200.97" cy="170.28" r=".43"/>
      <circle class="st21" cx="208.98" cy="172.64" r=".43"/>
      <circle class="st21" cx="234.07" cy="157.91" r=".43"/>
      <circle class="st21" cx="255.02" cy="150.33" r=".43"/>
      <circle class="st21" cx="287.34" cy="158.98" r=".43"/>
      <circle class="st21" cx="323.55" cy="164.99" r=".43"/>
      <circle class="st21" cx="375.6" cy="180.29" r=".43"/>
      <circle class="st21" cx="340.44" cy="216.69" r=".43"/>
      <circle class="st21" cx="340.44" cy="229.75" r=".43"/>
      <circle class="st21" cx="353.19" cy="228.21" r=".43"/>
      <circle class="st21" cx="352.29" cy="240.87" r=".43"/>
      <circle class="st21" cx="359.64" cy="234.18" r=".43"/>
      <circle class="st21" cx="352.29" cy="251.79" r=".43"/>
      <circle class="st21" cx="295.38" cy="256.81" r=".43"/>
      <circle class="st21" cx="293.11" cy="273.78" r=".43"/>
      <circle class="st21" cx="288.94" cy="283.94" r=".43"/>
      <circle class="st21" cx="293.53" cy="313.4" r=".43"/>
      <circle class="st21" cx="313.39" cy="306.28" r=".43"/>
      <circle class="st21" cx="305.18" cy="305.04" r=".43"/>
      <circle class="st21" cx="300.97" cy="318.68" r=".43"/>
      <circle class="st21" cx="259.75" cy="292.25" r=".43"/>
      <circle class="st21" cx="248.95" cy="332.13" r=".43"/>
      <circle class="st21" cx="247.21" cy="320.38" r=".43"/>
      <circle class="st21" cx="275.34" cy="296.17" r=".43"/>
      <circle class="st21" cx="270.43" cy="315.51" r=".43"/>
      <circle class="st21" cx="281.89" cy="279.36" r=".43"/>
      <circle class="st21" cx="283.7" cy="283.94" r=".43"/>
      <circle class="st21" cx="273.34" cy="281.72" r=".43"/>
      <circle class="st21" cx="289.62" cy="297.88" r=".43"/>
      <circle class="st21" cx="296.08" cy="320.87" r=".43"/>
      <circle class="st21" cx="312.22" cy="304.14" r=".43"/>
      <circle class="st21" cx="325.99" cy="278.24" r=".43"/>
      <circle class="st21" cx="412.12" cy="248.61" r=".43"/>
      <circle class="st21" cx="396.39" cy="258.31" r=".43"/>
      <circle class="st21" cx="396.73" cy="260.5" r=".43"/>
      <circle class="st21" cx="399.49" cy="259.6" r=".43"/>
      <circle class="st21" cx="357.27" cy="263.29" r=".43"/>
      <circle class="st21" cx="383.36" cy="285.37" r=".43"/>
      <circle class="st21" cx="388.8" cy="284.66" r=".43"/>
      <circle class="st21" cx="398.45" cy="284.15" r=".43"/>
      <circle class="st21" cx="372.32" cy="276.17" r=".43"/>
      <circle class="st21" cx="389.7" cy="290.07" r=".43"/>
      <circle class="st21" cx="396.12" cy="320.11" r=".43"/>
      <circle class="st21" cx="391.25" cy="301.55" r=".43"/>
      <circle class="st21" cx="385.15" cy="324.84" r=".43"/>
      <circle class="st21" cx="391.71" cy="346.54" r=".43"/>
      <circle class="st21" cx="391.25" cy="335.47" r=".43"/>
      <circle class="st21" cx="354.09" cy="314.05" r=".43"/>
      <circle class="st21" cx="319.75" cy="312.7" r=".43"/>
      <circle class="st21" cx="357.74" cy="339.74" r=".43"/>
      <circle class="st21" cx="338.41" cy="332.13" r=".43"/>
      <circle class="st21" cx="322.79" cy="337.93" r=".43"/>
      <circle class="st21" cx="309.83" cy="364.61" r=".43"/>
      <circle class="st21" cx="298.84" cy="386.76" r=".43"/>
      <circle class="st21" cx="319.75" cy="374.11" r=".43"/>
      <circle class="st21" cx="325.61" cy="393.97" r=".43"/>
      <circle class="st21" cx="308" cy="340.84" r=".43"/>
      <circle class="st21" cx="350.66" cy="353.81" r=".43"/>
      <circle class="st21" cx="336.78" cy="365.51" r=".43"/>
      <circle class="st21" cx="344.92" cy="362.48" r=".43"/>
      <circle class="st21" cx="348.07" cy="362.48" r=".43"/>
      <circle class="st21" cx="332.84" cy="353.9" r=".43"/>
      <circle class="st21" cx="308" cy="371.97" r=".43"/>
      <circle class="st21" cx="255.47" cy="370.17" r=".43"/>
      <circle class="st21" cx="214.95" cy="363.23" r=".43"/>
      <circle class="st21" cx="237.18" cy="356.21" r=".43"/>
      <circle class="st21" cx="203.55" cy="336.18" r=".43"/>
      <circle class="st21" cx="178.94" cy="327.27" r=".43"/>
      <circle class="st21" cx="182.72" cy="337.73" r=".43"/>
      <circle class="st21" cx="204.45" cy="310.1" r=".43"/>
      <circle class="st21" cx="214.95" cy="325.12" r=".43"/>
      <circle class="st21" cx="226.1" cy="320.87" r=".43"/>
      <circle class="st21" cx="178.94" cy="327.27" r=".43"/>
      <circle class="st21" cx="200.71" cy="292.73" r=".43"/>
      <circle class="st21" cx="164.83" cy="264.77" r=".43"/>
      <circle class="st21" cx="139.71" cy="239.79" r=".43"/>
      <circle class="st21" cx="151.95" cy="218.8" r=".43"/>
      <circle class="st21" cx="166.32" cy="201.56" r=".43"/>
      <circle class="st21" cx="163.98" cy="206.58" r=".43"/>
      <circle class="st21" cx="167.57" cy="210.6" r=".43"/>
      <circle class="st21" cx="155.59" cy="222.89" r=".43"/>
      <circle class="st21" cx="154.02" cy="210.12" r=".43"/>
      <circle class="st21" cx="143.17" cy="229.71" r=".43"/>
      <circle class="st21" cx="152.68" cy="206.47" r=".43"/>
      <circle class="st21" cx="151.95" cy="232.35" r=".43"/>
      <circle class="st21" cx="139.01" cy="233.66" r=".43"/>
      <circle class="st21" cx="134.08" cy="268.98" r=".43"/>
      <circle class="st21" cx="134.08" cy="264.77" r=".43"/>
      <circle class="st21" cx="181.99" cy="273.82" r=".43"/>
      <circle class="st21" cx="136.18" cy="261.78" r=".43"/>
      <circle class="st21" cx="153.61" cy="323.61" r=".43"/>
      <circle class="st21" cx="184.46" cy="301.55" r=".43"/>
      <circle class="st21" cx="192.9" cy="287.94" r=".43"/>
      <circle class="st21" cx="141.72" cy="294.57" r=".43"/>
      <circle class="st21" cx="161.24" cy="293.76" r=".43"/>
      <circle class="st21" cx="156.82" cy="271.95" r=".43"/>
      <circle class="st21" cx="162.08" cy="327.85" r=".43"/>
      <circle class="st21" cx="184.12" cy="317.78" r=".43"/>
      <circle class="st21" cx="241.53" cy="344.63" r=".43"/>
      <circle class="st21" cx="239.82" cy="343.02" r=".43"/>
      <circle class="st21" cx="236.23" cy="343.96" r=".43"/>
      <circle class="st21" cx="214.04" cy="383.36" r=".43"/>
      <circle class="st21" cx="203.55" cy="373.49" r=".43"/>
      <circle class="st21" cx="183.08" cy="337.96" r=".43"/>
      <circle class="st21" cx="147.58" cy="326.02" r=".43"/>
      <circle class="st21" cx="223.77" cy="383.36" r=".43"/>
      <circle class="st21" cx="226.46" cy="381.22" r=".43"/>
      <circle class="st21" cx="294.68" cy="374.42" r=".43"/>
      <circle class="st21" cx="315.2" cy="394.82" r=".43"/>
      <circle class="st21" cx="308.93" cy="382.1" r=".43"/>
      <circle class="st21" cx="289.06" cy="392.98" r=".43"/>
      <circle class="st21" cx="307.39" cy="378.63" r=".43"/>
      <circle class="st21" cx="286.64" cy="375.67" r=".43"/>
      <circle class="st21" cx="240.01" cy="389.54" r=".43"/>
      <circle class="st21" cx="267.74" cy="400.29" r=".43"/>
      <circle class="st21" cx="276.71" cy="376.27" r=".43"/>
      <circle class="st21" cx="267.74" cy="360.85" r=".43"/>
      <circle class="st21" cx="244.1" cy="357.91" r=".43"/>
      <circle class="st21" cx="267.74" cy="357.25" r=".43"/>
      <circle class="st21" cx="241.72" cy="401.93" r=".43"/>
      <circle class="st21" cx="263.41" cy="385.85" r=".43"/>
      <circle class="st21" cx="305.06" cy="338.04" r=".43"/>
      <circle class="st21" cx="356.53" cy="333.31" r=".43"/>
      <circle class="st21" cx="332.84" cy="330.32" r=".43"/>
      <circle class="st21" cx="387.9" cy="289.17" r=".43"/>
      <circle class="st21" cx="380.34" cy="291.8" r=".43"/>
      <circle class="st21" cx="395.82" cy="309.1" r=".43"/>
      <circle class="st21" cx="343.82" cy="297.88" r=".43"/>
      <circle class="st21" cx="353.95" cy="294.05" r=".43"/>
      <circle class="st21" cx="344.73" cy="289.73" r=".43"/>
      <circle class="st21" cx="364.96" cy="244.1" r=".43"/>
      <circle class="st21" cx="348.84" cy="264.19" r=".43"/>
      <circle class="st21" cx="329.13" cy="277.51" r=".43"/>
      <circle class="st21" cx="323.8" cy="304.14" r=".43"/>
      <circle class="st21" cx="388.82" cy="192.79" r=".43"/>
      <circle class="st21" cx="335.09" cy="221.86" r=".43"/>
      <circle class="st21" cx="369.14" cy="223.66" r=".43"/>
      <circle class="st21" cx="394.53" cy="226.88" r=".43"/>
      <circle class="st21" cx="379.86" cy="228.21" r=".43"/>
      <circle class="st21" cx="384.26" cy="224.35" r=".43"/>
      <circle class="st21" cx="394.96" cy="232.33" r=".43"/>
      <circle class="st21" cx="407.98" cy="240.32" r=".43"/>
      <circle class="st21" cx="409.48" cy="237.89" r=".43"/>
      <circle class="st21" cx="392.11" cy="243.87" r=".43"/>
      <circle class="st21" cx="395.43" cy="240.87" r=".43"/>
      <circle class="st21" cx="406.36" cy="242.06" r=".43"/>
      <circle class="st21" cx="397.05" cy="228.42" r=".43"/>
      <circle class="st21" cx="403.88" cy="209.47" r=".43"/>
      <circle class="st21" cx="394.53" cy="209.47" r=".43"/>
      <circle class="st21" cx="381.25" cy="213.62" r=".43"/>
      <circle class="st21" cx="363.28" cy="170.75" r=".43"/>
      <circle class="st21" cx="362.43" cy="167.86" r=".43"/>
      <circle class="st21" cx="311.32" cy="168.62" r=".43"/>
      <circle class="st21" cx="324.55" cy="160.62" r=".43"/>
      <circle class="st21" cx="371.67" cy="167.95" r=".43"/>
      <circle class="st21" cx="348.34" cy="157.21" r=".43"/>
      <circle class="st21" cx="352.62" cy="147.1" r=".43"/>
      <circle class="st21" cx="292.21" cy="193.69" r=".43"/>
      <circle class="st21" cx="320.59" cy="168.62" r=".43"/>
      <circle class="st21" cx="329.13" cy="185.14" r=".43"/>
      <circle class="st21" cx="357.98" cy="179.39" r=".43"/>
      <circle class="st21" cx="334.6" cy="176.11" r=".43"/>
      <circle class="st21" cx="351.71" cy="177.12" r=".43"/>
      <circle class="st21" cx="322.31" cy="201.27" r=".43"/>
      <circle class="st21" cx="332.48" cy="184.19" r=".43"/>
      <circle class="st21" cx="366.2" cy="173.42" r=".43"/>
      <circle class="st21" cx="298.09" cy="196.64" r=".43"/>
      <circle class="st21" cx="316.73" cy="193.33" r=".43"/>
      <circle class="st21" cx="311.32" cy="191.7" r=".43"/>
      <circle class="st21" cx="315.06" cy="168.3" r=".43"/>
      <circle class="st21" cx="299.44" cy="189.54" r=".43"/>
      <circle class="st21" cx="291.21" cy="175.61" r=".43"/>
      <circle class="st21" cx="286.44" cy="184.24" r=".43"/>
      <circle class="st21" cx="288.44" cy="183.33" r=".43"/>
      <circle class="st21" cx="293.84" cy="171.33" r=".43"/>
      <circle class="st21" cx="293.4" cy="167.23" r=".43"/>
      <circle class="st21" cx="313.12" cy="131.79" r=".43"/>
      <circle class="st21" cx="241.28" cy="162.88" r=".43"/>
      <circle class="st21" cx="267.1" cy="165.75" r=".43"/>
      <circle class="st21" cx="279.44" cy="163.7" r=".43"/>
      <circle class="st21" cx="295.21" cy="177.2" r=".43"/>
      <circle class="st21" cx="261.86" cy="180.8" r=".43"/>
      <circle class="st21" cx="258.33" cy="197.08" r=".43"/>
      <circle class="st21" cx="269.76" cy="193.33" r=".43"/>
      <circle class="st21" cx="272.88" cy="178.38" r=".43"/>
      <circle class="st21" cx="238.37" cy="182.22" r=".43"/>
      <circle class="st21" cx="247.81" cy="177.12" r=".43"/>
      <circle class="st21" cx="231.32" cy="154.78" r=".43"/>
      <circle class="st21" cx="249.52" cy="132.72" r=".43"/>
      <circle class="st21" cx="257.43" cy="129.69" r=".43"/>
      <circle class="st21" cx="252.53" cy="149.42" r=".43"/>
      <circle class="st21" cx="283.32" cy="142.01" r=".43"/>
      <circle class="st21" cx="253.16" cy="133.44" r=".43"/>
      <circle class="st21" cx="236.23" cy="160.72" r=".43"/>
      <circle class="st21" cx="246.38" cy="173.85" r=".43"/>
      <circle class="st21" cx="221.57" cy="188.34" r=".43"/>
      <circle class="st21" cx="195.73" cy="170.28" r=".43"/>
      <circle class="st21" cx="177" cy="184.01" r=".43"/>
      <circle class="st21" cx="179.3" cy="184.23" r=".43"/>
      <circle class="st21" cx="166.67" cy="176.82" r=".43"/>
      <circle class="st21" cx="157.64" cy="168.72" r=".43"/>
      <circle class="st21" cx="163.93" cy="168.44" r=".43"/>
      <circle class="st21" cx="163.11" cy="397.54" r=".43"/>
      <circle class="st21" cx="164.78" cy="400.2" r=".43"/>
      <circle class="st21" cx="204.07" cy="396.39" r=".43"/>
      <circle class="st21" cx="196.72" cy="454.04" r=".43"/>
      <circle class="st21" cx="209.42" cy="433.96" r=".43"/>
      <circle class="st21" cx="159.9" cy="429.18" r=".43"/>
      <circle class="st21" cx="151.11" cy="415.38" r=".43"/>
      <circle class="st21" cx="164.4" cy="440.95" r=".43"/>
      <circle class="st21" cx="211.86" cy="455.83" r=".43"/>
      <circle class="st21" cx="234.42" cy="408.74" r=".43"/>
      <circle class="st21" cx="239.35" cy="456.73" r=".43"/>
      <circle class="st21" cx="260.35" cy="469.61" r=".43"/>
      <circle class="st21" cx="243.04" cy="451.59" r=".43"/>
      <circle class="st21" cx="288.44" cy="458" r=".43"/>
      <circle class="st21" cx="290.8" cy="457.67" r=".43"/>
      <circle class="st21" cx="164.78" cy="423.76" r=".43"/>
      <circle class="st21" cx="215.6" cy="447.06" r=".43"/>
      <circle class="st21" cx="286.64" cy="429.74" r=".43"/>
      <circle class="st21" cx="261.86" cy="436.23" r=".43"/>
      <circle class="st21" cx="263.41" cy="416.77" r=".43"/>
      <circle class="st21" cx="261.41" cy="415.97" r=".43"/>
      <circle class="st21" cx="266.2" cy="443.35" r=".43"/>
      <circle class="st21" cx="279.05" cy="470.07" r=".43"/>
      <circle class="st21" cx="278.53" cy="462.19" r=".43"/>
      <circle class="st21" cx="177.4" cy="408.68" r=".43"/>
      <circle class="st21" cx="307.39" cy="469.09" r=".43"/>
      <circle class="st21" cx="240.92" cy="424.27" r=".43"/>
      <circle class="st21" cx="250.77" cy="424.06" r=".43"/>
      <circle class="st21" cx="267.74" cy="421.4" r=".43"/>
      <circle class="st21" cx="324.45" cy="453.79" r=".43"/>
      <circle class="st21" cx="332.17" cy="462.97" r=".43"/>
      <circle class="st21" cx="349.73" cy="447.07" r=".43"/>
      <circle class="st21" cx="202.85" cy="410.65" r=".43"/>
      <circle class="st21" cx="434.74" cy="299.78" r=".43"/>
      <circle class="st21" cx="421.12" cy="319.25" r=".43"/>
      <circle class="st21" cx="463.08" cy="362.11" r=".43"/>
      <circle class="st21" cx="409.27" cy="336.18" r=".43"/>
      <circle class="st21" cx="457.71" cy="368.83" r=".43"/>
      <circle class="st21" cx="398.77" cy="349.55" r=".43"/>
      <circle class="st21" cx="426.32" cy="397.69" r=".43"/>
      <circle class="st21" cx="402.51" cy="387.11" r=".43"/>
      <circle class="st21" cx="389.36" cy="413.02" r=".43"/>
      <circle class="st21" cx="395.78" cy="428.83" r=".43"/>
      <circle class="st21" cx="392.48" cy="424.5" r=".43"/>
      <circle class="st21" cx="379.7" cy="420.44" r=".43"/>
      <circle class="st21" cx="405.12" cy="401.83" r=".43"/>
      <circle class="st21" cx="386.87" cy="383" r=".43"/>
      <circle class="st21" cx="382.15" cy="366.04" r=".43"/>
      <circle class="st21" cx="427.52" cy="305.98" r=".43"/>
      <path class="st21" d="M444.68,295.25c0,.23-.19.43-.43.43s-.43-.19-.43-.43.19-.43.43-.43.43.19.43.43Z"/>
      <circle class="st21" cx="453.74" cy="305.98" r=".43"/>
      <circle class="st21" cx="467.34" cy="303.64" r=".43"/>
      <circle class="st21" cx="457.12" cy="315.99" r=".43"/>
      <circle class="st21" cx="461.96" cy="290.15" r=".43"/>
      <circle class="st21" cx="308" cy="421.34" r=".43"/>
      <circle class="st21" cx="385.13" cy="364.97" r=".43"/>
      <circle class="st21" cx="467.3" cy="243.87" r=".43"/>
      <circle class="st21" cx="428.09" cy="262.69" r=".43"/>
      <circle class="st21" cx="413.16" cy="320.11" r=".43"/>
      <circle class="st21" cx="429.58" cy="339.47" r=".43"/>
      <circle class="st21" cx="406.77" cy="325.21" r=".43"/>
      <circle class="st21" cx="421.12" cy="286.06" r=".43"/>
      <circle class="st21" cx="417.02" cy="281.9" r=".43"/>
      <circle class="st21" cx="420.34" cy="273.08" r=".43"/>
      <circle class="st21" cx="423.55" cy="259.6" r=".43"/>
      <circle class="st21" cx="431.46" cy="256.81" r=".43"/>
      <circle class="st21" cx="436.95" cy="241.55" r=".43"/>
      <circle class="st21" cx="426.15" cy="251.46" r=".43"/>
      <circle class="st21" cx="444.03" cy="243.36" r=".43"/>
      <circle class="st21" cx="445.75" cy="237.17" r=".43"/>
      <circle class="st21" cx="446.65" cy="226.7" r=".43"/>
      <circle class="st21" cx="439.79" cy="225.79" r=".43"/>
      <circle class="st21" cx="445.75" cy="223.07" r=".43"/>
      <circle class="st21" cx="480.83" cy="234.36" r=".43"/>
      <circle class="st21" cx="478.6" cy="244.92" r=".43"/>
      <circle class="st21" cx="486.01" cy="256.56" r=".43"/>
      <circle class="st21" cx="486.01" cy="246.9" r=".43"/>
      <circle class="st21" cx="487.94" cy="261.4" r=".43"/>
      <circle class="st21" cx="478.6" cy="230.29" r=".43"/>
      <circle class="st21" cx="482.72" cy="231.55" r=".43"/>
      <circle class="st21" cx="478.6" cy="222.16" r=".43"/>
      <circle class="st21" cx="432.62" cy="358.36" r=".43"/>
      <circle class="st21" cx="434.74" cy="380.35" r=".43"/>
      <circle class="st21" cx="364.97" cy="314.95" r=".43"/>
      <circle class="st21" cx="434.74" cy="380.35" r=".43"/>
      <circle class="st21" cx="267.41" cy="100.42" r=".43"/>
      <circle class="st21" cx="310.12" cy="99.52" r=".43"/>
      <circle class="st21" cx="283.29" cy="103.48" r=".43"/>
      <circle class="st21" cx="271.25" cy="114.77" r=".43"/>
      <circle class="st21" cx="249.2" cy="113.39" r=".43"/>
      <circle class="st21" cx="237.47" cy="72.28" r=".43"/>
      <circle class="st21" cx="245.92" cy="114.5" r=".43"/>
      <circle class="st21" cx="247.79" cy="88.94" r=".43"/>
      <circle class="st21" cx="435.47" cy="214.69" r=".43"/>
      <circle class="st21" cx="441.11" cy="198.92" r=".43"/>
      <circle class="st21" cx="443.08" cy="194.14" r=".43"/>
      <circle class="st21" cx="409.81" cy="202.8" r=".43"/>
      <circle class="st21" cx="446.41" cy="212.47" r=".43"/>
      <circle class="st21" cx="457.11" cy="211.18" r=".43"/>
      <circle class="st21" cx="434.34" cy="234.99" r=".43"/>
      <circle class="st21" cx="449.38" cy="249.6" r=".43"/>
      <circle class="st21" cx="444.6" cy="180.81" r=".43"/>
      <circle class="st21" cx="446.41" cy="179" r=".43"/>
      <circle class="st21" cx="402.28" cy="162.34" r=".43"/>
      <circle class="st21" cx="386.19" cy="172.98" r=".43"/>
      <circle class="st21" cx="399.66" cy="161.44" r=".43"/>
      <circle class="st21" cx="396.97" cy="158.4" r=".43"/>
      <circle class="st21" cx="431.57" cy="132.95" r=".43"/>
      <circle class="st21" cx="355.06" cy="138.66" r=".43"/>
      <circle class="st21" cx="357.83" cy="117.26" r=".43"/>
      <circle class="st21" cx="378.3" cy="105.22" r=".43"/>
      <circle class="st21" cx="394.87" cy="128.84" r=".43"/>
      <circle class="st21" cx="422.41" cy="153.59" r=".43"/>
      <circle class="st21" cx="431.57" cy="164.09" r=".43"/>
      <circle class="st21" cx="195.73" cy="148.55" r=".43"/>
      <circle class="st21" cx="191.48" cy="148.81" r=".43"/>
      <circle class="st21" cx="193.23" cy="140.64" r=".43"/>
      <circle class="st21" cx="212.15" cy="135.8" r=".43"/>
      <circle class="st21" cx="158.75" cy="142.32" r=".43"/>
      <circle class="st21" cx="238.06" cy="119.79" r=".43"/>
      <circle class="st21" cx="262.76" cy="123.7" r=".43"/>
      <circle class="st21" cx="193.37" cy="83.64" r=".43"/>
      <circle class="st21" cx="298.62" cy="227.78" r=".43"/>
      <circle class="st21" cx="196.02" cy="102.82" r=".43"/>
      <circle class="st21" cx="175.38" cy="92.8" r=".43"/>
      <circle class="st21" cx="236.63" cy="211.81" r=".43"/>
      <circle class="st21" cx="102.89" cy="338.57" r=".43"/>
      <circle class="st21" cx="71" cy="270.5" r=".43"/>
      <circle class="st21" cx="63.23" cy="269.77" r=".43"/>
      <circle class="st21" cx="109.74" cy="266.08" r=".43"/>
      <circle class="st21" cx="114.29" cy="255.27" r=".43"/>
      <circle class="st21" cx="127.18" cy="239.73" r=".43"/>
      <circle class="st21" cx="128.64" cy="255.27" r=".43"/>
      <circle class="st21" cx="123.35" cy="263.17" r=".43"/>
      <circle class="st21" cx="107.53" cy="263.17" r=".43"/>
      <circle class="st21" cx="100.87" cy="269.67" r=".43"/>
      <circle class="st21" cx="69.16" cy="251.19" r=".43"/>
      <circle class="st21" cx="118.69" cy="232.35" r=".43"/>
      <circle class="st21" cx="120.68" cy="216.65" r=".43"/>
      <circle class="st21" cx="132.1" cy="195.39" r=".43"/>
      <circle class="st21" cx="106.88" cy="183.07" r=".43"/>
      <circle class="st21" cx="131.44" cy="216.32" r=".43"/>
      <circle class="st21" cx="145.17" cy="195.39" r=".43"/>
      <circle class="st21" cx="139.01" cy="191.26" r=".43"/>
      <circle class="st21" cx="161.58" cy="184.67" r=".43"/>
      <circle class="st21" cx="152.63" cy="169.06" r=".43"/>
      <circle class="st21" cx="152.68" cy="189.85" r=".43"/>
      <circle class="st21" cx="172.05" cy="188.13" r=".43"/>
      <circle class="st21" cx="162.16" cy="189.55" r=".43"/>
      <circle class="st21" cx="150.7" cy="186.96" r=".43"/>
      <circle class="st21" cx="145.79" cy="184.67" r=".43"/>
      <circle class="st21" cx="142.36" cy="178.65" r=".43"/>
      <circle class="st21" cx="139.91" cy="181.54" r=".43"/>
      <circle class="st21" cx="142.36" cy="181.85" r=".43"/>
      <circle class="st21" cx="125.93" cy="173.45" r=".43"/>
      <circle class="st21" cx="124.26" cy="194.49" r=".43"/>
      <circle class="st21" cx="103.26" cy="177.7" r=".43"/>
      <circle class="st21" cx="139.54" cy="218.23" r=".43"/>
      <circle class="st21" cx="100.71" cy="203.48" r=".43"/>
      <circle class="st21" cx="75.89" cy="204.96" r=".43"/>
      <circle class="st21" cx="147.69" cy="116.88" r=".43"/>
      <circle class="st21" cx="98.78" cy="208" r=".43"/>
      <circle class="st21" cx="94.96" cy="216.65" r=".43"/>
      <circle class="st21" cx="68.26" cy="230" r=".43"/>
      <circle class="st21" cx="126.86" cy="313.95" r=".43"/>
      <circle class="st21" cx="120.06" cy="314.88" r=".43"/>
      <circle class="st21" cx="121.28" cy="295" r=".43"/>
      <circle class="st21" cx="106.92" cy="298.89" r=".43"/>
      <circle class="st21" cx="73.13" cy="299.79" r=".43"/>
      <circle class="st21" cx="111.75" cy="340.43" r=".43"/>
      <circle class="st21" cx="167.93" cy="371.4" r=".43"/>
      <circle class="st21" cx="163.11" cy="373.49" r=".43"/>
      <circle class="st21" cx="110.82" cy="397.92" r=".43"/>
      <circle class="st21" cx="116.63" cy="404.53" r=".43"/>
      <circle class="st21" cx="139.48" cy="186.1" r=".43"/>
      <circle class="st21" cx="132.1" cy="183.32" r=".43"/>
      <circle class="st21" cx="90.48" cy="186.88" r=".43"/>
      <circle class="st21" cx="433.4" cy="321.93" r=".43"/>
      <circle class="st21" cx="454.79" cy="296.98" r=".43"/>
    </g>
    <g id="_Очертания" data-name="Очертания">
      <polyline class="st31" points="222.56 71.28 233.67 67.51 241.85 61.7 255.38 60.8 253.57 69.82 243.67 73.64 233.67 67.51"/>
      <polyline class="st31" points="253.9 69.82 271.41 71.63 314.68 77.28 327.6 80.34 350.31 83.54 359.26 86.23 372.17 85.69 377.75 89.18 358.73 95.37 342.5 104.31 335.01 111.35 324.23 112.25 319.56 112.25 322.85 119.79 319.8 130.41 324.23 127.34 323.11 120.24"/>
      <polyline class="st31" points="343.86 156.04 342.5 140.46 349.31 154.8 343.86 156.04"/>
      <polyline class="st31" points="356.61 132.54 352.6 123.28 351.12 129.14 356.61 132.54 370.77 154.49 370.77 159.3 375.6 156.3 388.24 150.76 399.07 154.49"/>
      <line class="st31" x1="370.77" y1="154.49" x2="375.6" y2="156.3"/>
      <polyline class="st31" points="388.24 150.76 358.35 129.51 353.91 119.32"/>
      <polyline class="st31" points="405.46 179.91 416.16 187.97 421.6 199.1 421.18 201.89 424.88 211.81 420.91 242.46"/>
      <polyline class="st31" points="418.89 154.49 423.55 148.95 423.98 144.07 445.21 141.29"/>
      <polyline class="st31" points="449.92 168.86 423.55 148.95 433.41 173.37 433.66 190.8 449.02 179.91"/>
      <polyline class="st31" points="451.49 196.57 446.13 200.99 439.06 194.38 433.66 190.8 430.03 193.32 430.24 196.88 428.44 200.4 421.18 201.89"/>
      <polyline class="st31" points="433.66 190.8 435.47 196.57 436.64 202.74 438.03 247.53 424.88 211.81"/>
      <polyline class="st31" points="406.77 294.28 411.73 307.52 414.85 318.04 413.53 325.02 417.14 332.43"/>
      <polyline class="st31" points="401 320.11 404.48 316.52 411.73 307.52 427.75 292.7 441.24 284.66"/>
      <polyline class="st31" points="435.2 268.02 437.24 273.98 436.41 280.2 427.75 292.7"/>
      <polyline class="st31" points="408.64 329.88 413.53 325.02 430.21 319.25 440.34 321.93 454.79 300.3"/>
      <path class="st31" d="M430.21,319.25"/>
      <polyline class="st31" points="430.21 319.25 434.97 309.98 448.44 292.7"/>
      <polyline class="st31" points="405.34 228.21 401.61 263.66 383.29 264.56 361.38 264.56 378.68 245.68 382.46 236.98 387.91 236.08"/>
      <polyline class="st31" points="378.68 245.68 389.91 238.95 405.34 228.21"/>
      <polyline class="st31" points="386.46 360.68 400.02 370.05 406.21 376.4 409.27 394.37"/>
      <polyline class="st31" points="400.02 370.05 420.32 358.36 436.93 372.01 406.21 376.4"/>
      <polyline class="st31" points="385.13 419.53 359.64 417.35 364.07 395.46 373.3 391.61"/>
      <polyline class="st31" points="373.3 391.61 372.39 383.62 358.18 392.98 364.07 395.46"/>
      <polyline class="st31" points="377.07 433.06 359.64 417.35 347.91 415.54 346.76 406.46 358.18 392.98"/>
      <polyline class="st31" points="286.19 444.57 310.19 427.08 318.73 425.17 347.91 415.54"/>
      <polyline class="st31" points="312.23 461.19 308 450.33 312.23 436.39 310.19 427.08"/>
      <polyline class="st31" points="349.02 441.54 312.23 436.39 359.64 417.35 362.67 426.77"/>
      <polyline class="st31" points="260.35 410 231.62 406.83 260.65 412.67"/>
      <polyline class="st31" points="259.24 414.21 231.62 406.83 258.12 415.97"/>
      <polyline class="st31" points="225.04 429.84 231.62 406.83 234.17 433.06"/>
      <polyline class="st31" points="200.71 419.54 196.72 422.3 196.21 415.38 183.03 406.61 160.81 405.18 162.56 390.74 175.86 381.47 176.49 378.63 174.37 356.99 177.72 345.97 192 350.2 174.83 356.93"/>
      <polyline class="st31" points="217.98 353.81 226.44 343.02 222.87 340.62 217.98 353.81 200.71 363.81 192 350.2"/>
      <polyline class="st31" points="200.23 364.15 189.55 378.63 186.49 379.91 176.49 378.63 183.03 406.61"/>
      <polyline class="st31" points="150.88 339.93 147.23 345.07 147.58 350.2 150.88 353.81 154.81 357.91 161.95 356.69 166.63 356.21"/>
      <line class="st31" x1="164.32" y1="351.11" x2="161.95" y2="356.69"/>
      <polyline class="st31" points="123.06 349.77 123.06 337.66 125.19 330.82 139.71 305.81 145.29 314.88 160.75 308.46 150.88 294.05 139.71 305.81"/>
      <polyline class="st31" points="100.71 305.26 121.75 299.79 124.65 288.76 126.72 278.31 130.74 270.21 128.64 264.07 111.99 269.67 110.13 263.17 113.42 252.1 111.99 237.57 106.63 234.28"/>
      <line class="st31" x1="126.72" y1="278.31" x2="139.71" y2="305.81"/>
      <polyline class="st31" points="130.74 270.21 151.78 289.17 152.7 291.68 150.88 294.05"/>
      <polyline class="st31" points="151.78 289.17 149.98 271.5 171.28 277.4 176.1 300.65 181.99 312.21 179.84 318.5 170.49 312.21 169.58 309.11 171.28 277.4"/>
      <polyline class="st31" points="152.09 240.7 141.91 235.18 157.07 227.72 158.72 232.06 167.92 242.69 157.82 245.2 154.46 249.83 147.64 258.66 142.55 240.7 141.91 235.58"/>
      <polyline class="st31" points="143.17 240.7 151.78 245.2 154.46 249.83"/>
      <polyline class="st31" points="116.9 197.3 121.92 194.07 126.84 188.13"/>
      <line class="st31" x1="118.28" y1="200" x2="121.92" y2="194.07"/>
      <line class="st31" x1="129.97" y1="211.56" x2="135.51" y2="195.39"/>
      <polyline class="st31" points="137.74 214.26 160.03 205.98 177.17 200.9 173.8 183.07 178.73 163.43 190.12 188.64"/>
      <polyline class="st31" points="190.12 188.64 192.9 200.43 188.38 212.71 190.12 233.74 192.1 239.79 178 222.2 177.17 200.9 192.9 200.43"/>
      <polyline class="st31" points="127.19 154.99 137.4 154.53 142.57 154.53 138.64 157.86 134.3 155.83 129.84 157.86 127.19 154.99"/>
      <polyline class="st31" points="139.48 118.07 147.05 127.47 144.98 130.4"/>
      <polyline class="st31" points="167.02 140.94 177 144.07 187.84 141.85 199.54 134.29 222.12 119.55 225.72 122.34 226.62 133.91 210.32 149.42"/>
      <polyline class="st31" points="176.1 127.47 199.54 134.29 213.93 95.13 209.12 93.29 179.88 93.29"/>
      <line class="st31" x1="167.81" y1="112.36" x2="209.12" y2="93.29"/>
      <polyline class="st31" points="213.93 95.13 228.98 96.35 284.48 89.17 238.06 125.18 228.98 96.35 222.12 119.55"/>
      <polyline class="st31" points="218.5 85.19 228.98 96.35 228.75 83.21"/>
      <line class="st31" x1="232.28" y1="80.74" x2="228.98" y2="96.35"/>
      <polyline class="st31" points="218.71 156.59 219.98 162.53 230.41 165.75 235.88 166.33 235.33 176.91 242.62 184.03 237.69 186.84 234.97 182.22 235.33 176.91 229.98 176.01 230.41 165.75"/>
      <polyline class="st31" points="244.57 158.4 262.76 156.27 263.67 159.71 263.23 165.75 256.37 172.55 251.76 176.91"/>
      <polyline class="st31" points="262.76 156.27 282.41 145.27 285.38 144.36 295.21 136.45 297.64 129.51 278.53 122.27"/>
      <polyline class="st31" points="312.25 113.59 305.74 115.46 298.54 124.61 297.64 129.51 312.22 144.07 322.31 161.9 332.48 170.43"/>
      <polyline class="st31" points="315.25 178.1 305.43 170.43 299.44 153.55 304.53 148.98 312.22 144.07 295.21 136.45"/>
      <polyline class="st31" points="315.25 183.33 338.07 193.69 346.29 200.99 336.26 201.89 330.03 206.95 337.16 207.86 348.84 206.42 358.18 211.14 363.36 218.07 363.81 222.76 360.76 225.26 358.18 220.52"/>
      <polyline class="st31" points="358.18 176.11 361.38 182.43 360.3 187.83 354.73 193.33 346.29 200.99 348.84 206.42 369.14 203.87 376.27 205.45 386.37 200.65 392 193.33 388.82 189.2"/>
      <line class="st31" x1="360.3" y1="187.83" x2="376.27" y2="205.45"/>
      <polyline class="st31" points="349.76 272.26 347.94 279.14 350.29 284.15 367.53 297.33 367.53 300.65 366.63 329.28 358.18 345.64 360.48 354.71 359.64 361.58 362.29 366.94"/>
      <polyline class="st31" points="353.19 367.85 338.41 380.56 330.67 387.11 316.49 392.07 326.51 382.1 338.41 380.56"/>
      <polyline class="st31" points="293.53 330.76 298.84 342.97 278.84 353.12 271.08 343.88 258.34 344.44 246.82 344.63 231.62 353.12 282.18 365.51 299.74 373.31 301.5 398.15 301.5 402.32 324.14 371.17 347.16 338.84 347.61 335.02 331.02 308.95 315.2 317.51 316.49 328.38 330.64 337.93 325.61 366.77"/>
      <polyline class="st31" points="315.2 317.51 293.14 330.15 271.08 343.88"/>
      <path class="st31" d="M246.58,385.18c8.68-3.43,13.17-5.45,13.17-5.45"/>
      <polyline class="st31" points="282.79 314.3 270.53 313.4 242.36 317.78 218.5 314.61 210.27 303.86 214.04 295.62 218.5 280.55 230.12 263.9 234.71 264"/>
      <polyline class="st31" points="196.72 270.73 184.12 269.83 186.58 280.43 192.67 277.98 196.72 270.73 224.3 251.69 232.83 246.14"/>
      <line class="st31" x1="230.12" y1="263.9" x2="224.3" y2="251.69"/>
      <polyline class="st31" points="223.8 229.59 224.17 223.99 231.21 219.05 232.52 206.66 239.07 198.35 239.49 202.37 245.02 198.58 257.43 214.26 272.55 238.39 245.57 230.84 231.21 219.05"/>
      <polyline class="st31" points="271.98 191.52 277.81 194.95 288.29 189.54 291.25 201.56 301.06 201.27"/>
      <polyline class="st31" points="332.84 221.86 324.45 235.08 313.15 243.3 330.03 249.98 306.99 274.68 326.26 270.09"/>
      <polyline class="st31" points="324.45 235.08 342.98 247.23 358.18 240.87"/>
      <line class="st31" x1="330.03" y1="249.98" x2="342.98" y2="247.23"/>
      <polyline class="st31" points="277.56 265.25 268.64 268.98 258.33 273.57 251.03 283.94 250.56 294.85 241.94 295.27 244.74 283.04 251.03 283.94"/>
      <line class="st31" x1="457.12" y1="335.78" x2="460.1" y2="348.35"/>
    </g>
    <g id="_В_созвездии" data-name="В_созвездии">
      <circle class="st21" cx="222.56" cy="71.28" r=".9"/>
      <circle class="st21" cx="233.67" cy="67.51" r=".9"/>
      <circle class="st21" cx="241.85" cy="61.7" r=".9"/>
      <circle class="st21" cx="255.38" cy="60.8" r=".9"/>
      <circle class="st21" cx="253.57" cy="69.82" r=".9"/>
      <circle class="st21" cx="271.41" cy="71.63" r=".9"/>
      <circle class="st21" cx="314.68" cy="77.28" r=".9"/>
      <circle class="st21" cx="327.6" cy="80.34" r=".9"/>
      <circle class="st21" cx="359.26" cy="86.23" r=".9"/>
      <circle class="st21" cx="372.17" cy="85.69" r=".9"/>
      <circle class="st21" cx="377.75" cy="89.18" r=".9"/>
      <circle class="st21" cx="358.73" cy="95.37" r=".9"/>
      <circle class="st21" cx="342.5" cy="104.31" r=".9"/>
      <circle class="st21" cx="423.92" cy="144.36" r=".9"/>
      <circle class="st21" cx="423.55" cy="148.95" r=".9"/>
      <circle class="st21" cx="418.89" cy="154.49" r=".9"/>
      <circle class="st21" cx="445.21" cy="141.29" r=".9"/>
      <circle class="st21" cx="449.92" cy="168.86" r=".9"/>
      <circle class="st21" cx="433.41" cy="173.37" r=".9"/>
      <circle class="st21" cx="433.66" cy="190.8" r=".9"/>
      <circle class="st21" cx="421.6" cy="199.1" r=".9"/>
      <circle class="st21" cx="428.44" cy="200.4" r=".9"/>
      <circle class="st21" cx="424.88" cy="211.81" r=".9"/>
      <circle class="st43" cx="438.03" cy="247.53" r="1.28"/>
      <circle class="st21" cx="430.21" cy="319.25" r=".9"/>
      <circle class="st21" cx="440.34" cy="321.93" r=".9"/>
      <circle class="st21" cx="417.14" cy="332.43" r=".9"/>
      <circle class="st21" cx="420.32" cy="358.36" r=".9"/>
      <circle class="st21" cx="386.46" cy="360.68" r="1.28"/>
      <circle class="st21" cx="400.02" cy="370.05" r=".9"/>
      <circle class="st21" cx="406.21" cy="376.4" r=".9"/>
      <circle class="st21" cx="372.39" cy="383.62" r=".9"/>
      <circle class="st21" cx="358.18" cy="392.98" r=".9"/>
      <circle class="st21" cx="349.02" cy="441.54" r=".9"/>
      <circle class="st21" cx="308" cy="450.33" r=".9"/>
      <circle class="st21" cx="312.23" cy="461.19" r=".9"/>
      <circle class="st21" cx="234.17" cy="433.06" r=".9"/>
      <circle class="st23" cx="225.04" cy="429.84" r=".9"/>
      <circle class="st21" cx="160.81" cy="405.18" r=".9"/>
      <circle class="st21" cx="162.56" cy="390.74" r=".9"/>
      <circle class="st21" cx="189.55" cy="378.63" r=".9"/>
      <circle class="st21" cx="217.98" cy="353.81" r=".9"/>
      <circle class="st21" cx="222.87" cy="340.62" r=".9"/>
      <circle class="st21" cx="210.27" cy="303.86" r=".9"/>
      <circle class="st21" cx="196.72" cy="270.73" r=".9"/>
      <circle class="st21" cx="234.71" cy="264" r=".9"/>
      <circle class="st21" cx="251.03" cy="283.94" r=".9"/>
      <circle class="st21" cx="244.74" cy="283.04" r=".9"/>
      <circle class="st21" cx="241.94" cy="295.27" r="1.7"/>
      <circle class="st21" cx="258.33" cy="273.57" r=".9"/>
      <circle class="st21" cx="268.64" cy="268.98" r=".9"/>
      <circle class="st21" cx="230.12" cy="263.9" r=".9"/>
      <circle class="st43" cx="218.24" cy="280.61" r="1.28"/>
      <circle class="st24" cx="224.3" cy="251.69" r="1.7"/>
      <circle class="st24" cx="179.07" cy="163.43" r="1.7"/>
      <circle class="st21" cx="232.83" cy="246.14" r=".9"/>
      <circle class="st21" cx="257.43" cy="214.26" r=".9"/>
      <circle class="st45" cx="272.44" cy="237.93" r="1.7"/>
      <circle class="st44" cx="245.45" cy="230.94" r="1.7"/>
      <circle class="st21" cx="245.02" cy="198.58" r=".9"/>
      <circle class="st21" cx="239.49" cy="202.37" r=".9"/>
      <circle class="st21" cx="239.07" cy="198.35" r=".9"/>
      <circle class="st21" cx="232.52" cy="206.66" r=".9"/>
      <circle class="st21" cx="224.17" cy="223.99" r=".9"/>
      <circle class="st21" cx="223.8" cy="229.59" r=".9"/>
      <circle class="st21" cx="218.5" cy="314.61" r=".9"/>
      <circle class="st21" cx="192.67" cy="277.98" r=".9"/>
      <circle class="st21" cx="226.44" cy="343.02" r=".9"/>
      <circle class="st21" cx="270.53" cy="313.4" r=".9"/>
      <circle class="st21" cx="282.79" cy="314.3" r=".9"/>
      <circle class="st21" cx="186.49" cy="379.91" r=".9"/>
      <circle class="st21" cx="177.72" cy="345.97" r=".9"/>
      <circle class="st55" cx="174.37" cy="356.69" r="1.7"/>
      <circle class="st21" cx="150.88" cy="339.93" r=".9"/>
      <circle class="st21" cx="160.75" cy="308.46" r=".9"/>
      <circle class="st21" cx="139.71" cy="305.81" r=".9"/>
      <circle class="st21" cx="151.78" cy="289.17" r=".9"/>
      <circle class="st21" cx="152.7" cy="291.68" r=".9"/>
      <circle class="st21" cx="171.28" cy="277.4" r=".9"/>
      <circle class="st21" cx="181.99" cy="312.21" r=".9"/>
      <circle class="st21" cx="176.1" cy="300.65" r=".9"/>
      <circle class="st21" cx="170.49" cy="312.21" r=".9"/>
      <circle class="st21" cx="169.58" cy="309.11" r=".9"/>
      <circle class="st21" cx="179.84" cy="318.5" r=".9"/>
      <circle class="st21" cx="149.98" cy="271.5" r=".9"/>
      <circle class="st21" cx="142.55" cy="240.7" r=".9"/>
      <circle class="st21" cx="157.82" cy="245.2" r=".9"/>
      <circle class="st21" cx="152.09" cy="240.7" r=".9"/>
      <circle class="st21" cx="167.92" cy="242.69" r=".9"/>
      <circle class="st21" cx="192.1" cy="239.79" r=".9"/>
      <circle class="st21" cx="158.72" cy="232.06" r=".9"/>
      <circle class="st43" cx="141.91" cy="235.18" r="1.28"/>
      <circle class="st21" cx="188.38" cy="212.71" r=".9"/>
      <circle class="st21" cx="190.12" cy="233.74" r=".9"/>
      <circle class="st21" cx="160.03" cy="205.98" r=".9"/>
      <circle class="st21" cx="190.12" cy="188.64" r=".9"/>
      <circle class="st21" cx="157.07" cy="227.72" r=".9"/>
      <circle class="st21" cx="147.64" cy="258.66" r=".9"/>
      <circle class="st21" cx="126.72" cy="278.31" r=".9"/>
      <circle class="st21" cx="128.64" cy="264.07" r=".9"/>
      <circle class="st21" cx="111.99" cy="269.67" r=".9"/>
      <circle class="st21" cx="110.13" cy="263.17" r=".9"/>
      <circle class="st21" cx="113.42" cy="252.1" r=".9"/>
      <circle class="st21" cx="111.99" cy="237.57" r=".9"/>
      <circle class="st21" cx="166.11" cy="194.97" r=".9"/>
      <circle class="st21" cx="129.97" cy="211.56" r=".9"/>
      <circle class="st21" cx="121.92" cy="194.07" r="1.7"/>
      <circle class="st21" cx="118.28" cy="200" r="1.28"/>
      <circle class="st21" cx="116.9" cy="197.3" r=".9"/>
      <circle class="st21" cx="126.84" cy="188.13" r="1.7"/>
      <circle class="st21" cx="129.84" cy="157.86" r=".9"/>
      <circle class="st21" cx="127.19" cy="154.99" r=".9"/>
      <circle class="st21" cx="142.57" cy="154.53" r=".9"/>
      <circle class="st21" cx="176.1" cy="127.47" r=".9"/>
      <circle class="st21" cx="147.05" cy="127.3" r=".9"/>
      <circle class="st21" cx="139.46" cy="118.07" r="1.7"/>
      <circle class="st21" cx="145.04" cy="130.58" r="1.28"/>
      <circle class="st21" cx="199.54" cy="134.29" r=".9"/>
      <circle class="st21" cx="187.84" cy="141.85" r=".9"/>
      <circle class="st21" cx="222.12" cy="119.55" r=".9"/>
      <circle class="st21" cx="228.75" cy="83.21" r=".9"/>
      <circle class="st21" cx="225.72" cy="122.34" r=".9"/>
      <circle class="st21" cx="218.5" cy="85.19" r=".9"/>
      <circle class="st21" cx="210.32" cy="149.42" r=".9"/>
      <circle class="st21" cx="177" cy="144.07" r=".9"/>
      <circle class="st21" cx="167.02" cy="140.94" r=".9"/>
      <circle class="st21" cx="213.93" cy="95.13" r=".9"/>
      <circle class="st21" cx="232.28" cy="80.74" r=".9"/>
      <circle class="st21" cx="209.12" cy="93.29" r=".9"/>
      <circle class="st21" cx="179.88" cy="93.29" r=".9"/>
      <circle class="st21" cx="137.74" cy="154.53" r=".9"/>
      <circle class="st21" cx="138.64" cy="157.86" r=".9"/>
      <circle class="st21" cx="106.63" cy="234.28" r=".9"/>
      <circle class="st21" cx="130.74" cy="270.21" r=".9"/>
      <circle class="st21" cx="124.65" cy="288.76" r=".9"/>
      <circle class="st24" cx="121.56" cy="299.51" r="1.7"/>
      <circle class="st21" cx="123.06" cy="337.66" r=".9"/>
      <circle class="st21" cx="123.06" cy="349.55" r=".9"/>
      <circle class="st21" cx="147.23" cy="345.07" r=".9"/>
      <circle class="st21" cx="147.58" cy="350.2" r=".9"/>
      <circle class="st21" cx="150.88" cy="353.81" r=".9"/>
      <circle class="st21" cx="166.63" cy="356.21" r=".9"/>
      <circle class="st21" cx="161.95" cy="356.69" r=".9"/>
      <circle class="st21" cx="164.32" cy="351.11" r=".9"/>
      <circle class="st21" cx="192" cy="350.2" r=".9"/>
      <circle class="st21" cx="200.71" cy="363.81" r="1.7"/>
      <circle class="st21" cx="196.72" cy="422.3" r=".9"/>
      <circle class="st21" cx="200.71" cy="419.54" r=".9"/>
      <circle class="st21" cx="260.65" cy="412.67" r=".9"/>
      <circle class="st21" cx="260.35" cy="410" r=".9"/>
      <circle class="st21" cx="259.24" cy="414.21" r=".9"/>
      <circle class="st21" cx="258.12" cy="415.97" r=".9"/>
      <circle class="st21" cx="318.73" cy="425.17" r=".9"/>
      <circle class="st21" cx="252.53" cy="433.06" r=".43"/>
      <circle class="st21" cx="409.27" cy="394.37" r=".9"/>
      <circle class="st21" cx="373.3" cy="391.61" r=".9"/>
      <circle class="st21" cx="385.13" cy="419.53" r=".9"/>
      <circle class="st21" cx="377.07" cy="433.06" r=".9"/>
      <circle class="st21" cx="414.85" cy="318.04" r=".9"/>
      <circle class="st21" cx="413.53" cy="325.02" r=".9"/>
      <circle class="st21" cx="411.73" cy="307.52" r=".9"/>
      <circle class="st21" cx="441.24" cy="284.66" r=".9"/>
      <circle class="st21" cx="435.37" cy="268.02" r=".9"/>
      <circle class="st21" cx="430.24" cy="196.88" r=".9"/>
      <circle class="st21" cx="439.06" cy="194.38" r=".9"/>
      <circle class="st21" cx="435.47" cy="196.57" r=".9"/>
      <circle class="st21" cx="430.03" cy="193.32" r=".9"/>
      <circle class="st21" cx="446.13" cy="200.99" r=".9"/>
      <circle class="st21" cx="451.49" cy="196.57" r=".9"/>
      <circle class="st21" cx="404.48" cy="316.52" r=".9"/>
      <circle class="st21" cx="435.07" cy="310" r=".9"/>
      <circle class="st21" cx="406.77" cy="294.28" r=".9"/>
      <circle class="st21" cx="421.18" cy="201.89" r=".9"/>
      <circle class="st21" cx="416.16" cy="187.97" r=".9"/>
      <circle class="st21" cx="449.02" cy="179.91" r=".9"/>
      <circle class="st21" cx="335.01" cy="111.35" r=".9"/>
      <circle class="st21" cx="324.23" cy="112.25" r=".9"/>
      <circle class="st21" cx="322.85" cy="119.79" r=".9"/>
      <circle class="st21" cx="324.23" cy="127.34" r=".9"/>
      <circle class="st21" cx="349.31" cy="154.8" r="1.28"/>
      <circle class="st21" cx="375.6" cy="156.3" r=".9"/>
      <circle class="st21" cx="399.07" cy="154.49" r=".9"/>
      <circle class="st21" cx="370.77" cy="159.3" r=".9"/>
      <circle class="st21" cx="370.77" cy="154.49" r=".9"/>
      <circle class="st21" cx="358.35" cy="129.51" r=".9"/>
      <circle class="st43" cx="353.91" cy="119.32" r="2.13"/>
      <circle class="st21" cx="351.12" cy="129.14" r=".9"/>
      <circle class="st21" cx="330.03" cy="206.95" r=".9"/>
      <circle class="st24" cx="337.21" cy="207.73" r="2.13"/>
      <circle class="st21" cx="338.07" cy="193.69" r=".9"/>
      <circle class="st21" cx="354.73" cy="193.33" r=".9"/>
      <circle class="st21" cx="358.18" cy="175.85" r=".9"/>
      <circle class="st21" cx="388.82" cy="189.2" r="2.13"/>
      <circle class="st21" cx="369.14" cy="203.87" r=".9"/>
      <circle class="st43" cx="358.18" cy="211.02" r="1.28"/>
      <circle class="st43" cx="376.27" cy="205.45" r="2.13"/>
      <circle class="st21" cx="363.34" cy="218.08" r=".9"/>
      <circle class="st21" cx="363.8" cy="222.66" r=".9"/>
      <circle class="st21" cx="360.68" cy="224.96" r=".9"/>
      <circle class="st21" cx="358.18" cy="220.75" r=".9"/>
      <circle class="st21" cx="392" cy="193.33" r=".9"/>
      <circle class="st21" cx="386.37" cy="200.65" r=".9"/>
      <circle class="st21" cx="387.91" cy="236.08" r=".9"/>
      <circle class="st21" cx="361.38" cy="264.56" r=".9"/>
      <circle class="st21" cx="349.76" cy="272.26" r=".9"/>
      <circle class="st21" cx="358.18" cy="240.87" r=".9"/>
      <circle class="st21" cx="332.84" cy="221.86" r=".9"/>
      <circle class="st21" cx="313.15" cy="243.3" r=".9"/>
      <circle class="st21" cx="306.99" cy="274.68" r=".9"/>
      <circle class="st21" cx="324.45" cy="235.08" r=".9"/>
      <circle class="st21" cx="330.03" cy="249.98" r="1.42"/>
      <circle class="st21" cx="326.26" cy="270.09" r=".9"/>
      <circle class="st21" cx="350.29" cy="284.15" r=".9"/>
      <circle class="st21" cx="367.53" cy="300.65" r=".9"/>
      <circle class="st21" cx="321.89" cy="316.88" r=".9"/>
      <circle class="st21" cx="347.94" cy="279.14" r=".9"/>
      <circle class="st21" cx="367.53" cy="297.33" r=".9"/>
      <circle class="st21" cx="366.63" cy="329.28" r=".9"/>
      <circle class="st21" cx="360.48" cy="354.71" r=".9"/>
      <circle class="st21" cx="362.29" cy="366.94" r="1.7"/>
      <circle class="st21" cx="353.19" cy="367.85" r=".9"/>
      <circle class="st21" cx="358.18" cy="345.64" r=".9"/>
      <circle class="st21" cx="359.64" cy="361.58" r=".9"/>
      <circle class="st21" cx="330.67" cy="387.11" r=".9"/>
      <circle class="st21" cx="316.49" cy="392.07" r="1.7"/>
      <circle class="st21" cx="301.5" cy="402.32" r=".9"/>
      <circle class="st21" cx="338.41" cy="380.56" r=".9"/>
      <circle class="st21" cx="326.51" cy="382.1" r=".9"/>
      <circle class="st21" cx="316.49" cy="328.38" r=".9"/>
      <circle class="st21" cx="315.2" cy="317.51" r=".9"/>
      <circle class="st21" cx="325.61" cy="366.77" r=".9"/>
      <circle class="st21" cx="347.16" cy="338.84" r=".9"/>
      <circle class="st21" cx="282.18" cy="365.51" r=".9"/>
      <circle class="st21" cx="259.74" cy="379.73" r=".9"/>
      <circle class="st21" cx="248.9" cy="386.76" r=".9"/>
      <circle class="st30" cx="248.9" cy="386.76" r="1.7"/>
      <circle class="st21" cx="301.5" cy="398.15" r=".9"/>
      <circle class="st21" cx="346.29" cy="200.99" r=".9"/>
      <circle class="st21" cx="336.26" cy="201.89" r=".9"/>
      <circle class="st21" cx="315.25" cy="183.33" r=".9"/>
      <circle class="st21" cx="271.98" cy="191.52" r=".9"/>
      <circle class="st21" cx="342.5" cy="140.46" r=".9"/>
      <circle class="st21" cx="388.24" cy="150.76" r=".9"/>
      <circle class="st21" cx="319.8" cy="130.41" r=".9"/>
      <circle class="st21" cx="299.44" cy="153.55" r=".9"/>
      <circle class="st21" cx="315.25" cy="178.1" r=".9"/>
      <circle class="st21" cx="322.31" cy="161.9" r=".9"/>
      <circle class="st21" cx="305.43" cy="170.43" r=".9"/>
      <circle class="st21" cx="304.53" cy="148.98" r=".9"/>
      <circle class="st21" cx="282.41" cy="145.27" r=".9"/>
      <circle class="st21" cx="256.37" cy="172.55" r=".9"/>
      <circle class="st21" cx="251.76" cy="176.91" r=".9"/>
      <circle class="st21" cx="218.71" cy="156.59" r=".9"/>
      <circle class="st21" cx="263.23" cy="165.75" r=".9"/>
      <circle class="st21" cx="263.67" cy="159.71" r=".9"/>
      <circle class="st21" cx="262.76" cy="156.27" r=".9"/>
      <circle class="st21" cx="244.57" cy="158.4" r=".9"/>
      <circle class="st21" cx="242.62" cy="184.03" r=".9"/>
      <circle class="st21" cx="237.69" cy="186.84" r=".9"/>
      <circle class="st21" cx="234.97" cy="182.22" r=".9"/>
      <circle class="st21" cx="235.33" cy="176.91" r=".9"/>
      <circle class="st21" cx="229.98" cy="176.01" r=".9"/>
      <circle class="st21" cx="235.88" cy="166.33" r=".9"/>
      <circle class="st21" cx="230.41" cy="165.75" r=".9"/>
      <circle class="st21" cx="219.98" cy="162.53" r=".9"/>
      <circle class="st21" cx="285.38" cy="144.36" r=".9"/>
      <circle class="st21" cx="295.21" cy="136.45" r=".9"/>
      <circle class="st21" cx="298.54" cy="124.61" r=".9"/>
      <circle class="st21" cx="305.74" cy="115.46" r=".9"/>
      <circle class="st21" cx="312.25" cy="113.59" r=".9"/>
      <circle class="st21" cx="350.31" cy="83.54" r=".9"/>
      <circle class="st21" cx="243.67" cy="73.64" r=".9"/>
    </g>
    <g id="_Главные" data-name="Главные">
      <circle class="st43" cx="278.53" cy="122.27" r="2.13"/>
      <circle class="st43" cx="280.77" cy="123.05" r="2.13"/>
      <circle class="st45" cx="332.48" cy="170.43" r="2.13"/>
      <circle class="st35" cx="332.48" cy="170.45" r="2.98"/>
      <circle class="st45" cx="334.47" cy="167.95" r="2.13"/>
      <circle class="st35" cx="334.47" cy="167.97" r="2.98"/>
      <circle class="st45" cx="312.22" cy="144.07" r="2.13"/>
      <circle class="st21" cx="401" cy="320.11" r="2.55"/>
      <circle class="st21" cx="403.55" cy="322.66" r="2.55"/>
      <circle class="st45" cx="408.64" cy="329.88" r="2.55"/>
      <circle class="st35" cx="408.64" cy="329.88" r="3.4"/>
      <circle class="st21" cx="454.79" cy="300.3" r="1.42"/>
      <circle class="st21" cx="448.44" cy="292.7" r="2.55"/>
      <circle class="st21" cx="450.99" cy="295.25" r="2.55"/>
      <circle class="st51" cx="437.24" cy="273.98" r="1.42"/>
      <circle class="st51" cx="436.41" cy="280.2" r="1.7"/>
      <circle class="st45" cx="427.52" cy="293.41" r="1.7"/>
      <circle class="st21" cx="298.84" cy="342.97" r="2.13"/>
      <circle class="st21" cx="278.84" cy="353.12" r="2.13"/>
      <circle class="st21" cx="271.25" cy="343.88" r="1.7"/>
      <circle class="st21" cx="347.61" cy="335.02" r="1.7" transform="translate(-54.68 68.13) rotate(-10.38)"/>
      <circle class="st45" cx="299.96" cy="373.25" r="1.7"/>
      <circle class="st51" cx="323.91" cy="371.07" r="1.7"/>
      <circle class="st55" cx="330.93" cy="338.29" r="1.7" transform="translate(-16.05 16.48) rotate(-2.79)"/>
      <circle class="st55" cx="346.76" cy="406.24" r="1.7" transform="translate(-19.33 17.33) rotate(-2.79)"/>
      <circle class="st21" cx="359.88" cy="417.35" r="1.7" transform="translate(-19.86 17.98) rotate(-2.79)"/>
      <circle class="st21" cx="312.23" cy="436.11" r="1.7" transform="translate(-20.82 15.69) rotate(-2.79)"/>
      <circle class="st24" cx="364.07" cy="395.46" r="1.7" transform="translate(-18.79 18.16) rotate(-2.79)"/>
      <circle class="st55" cx="331.02" cy="308.95" r="1.7" transform="translate(-14.62 16.45) rotate(-2.79)"/>
      <circle class="st45" cx="293.53" cy="330.76" r="2.55"/>
      <circle class="st21" cx="258.34" cy="344.44" r="2.55"/>
      <circle class="st44" cx="246.82" cy="344.63" r="2.13"/>
      <circle class="st44" cx="248.66" cy="346.76" r="2.13"/>
      <circle class="st55" cx="231.62" cy="353.12" r="2.55"/>
      <circle class="st21" cx="383.29" cy="264.56" r="2.55"/>
      <circle class="st30" cx="383.29" cy="264.57" r="3.4"/>
      <circle class="st45" cx="378.27" cy="245.43" r="2.98"/>
      <circle class="st45" cx="382.46" cy="236.98" r="2.13"/>
      <circle class="st21" cx="405.34" cy="228.21" r="2.13"/>
      <circle class="st43" cx="389.7" cy="239.05" r="1.7"/>
      <circle class="st23" cx="401.61" cy="263.66" r="1.7"/>
      <circle class="st55" cx="196.21" cy="415.38" r="2.13"/>
      <circle class="st55" cx="193.18" cy="416.62" r="2.13"/>
      <circle class="st45" cx="183.03" cy="406.61" r="2.98"/>
      <circle class="st35" cx="183.03" cy="406.61" r="3.83"/>
      <circle class="st45" cx="176.49" cy="378.63" r="2.13"/>
      <circle class="st45" cx="177.7" cy="375.62" r="2.13"/>
      <circle class="st45" cx="180.05" cy="378.63" r="2.13"/>
      <circle class="st23" cx="231.62" cy="406.83" r="1.42"/>
      <circle class="st23" cx="233.04" cy="404.11" r="1.42"/>
      <circle class="st24" cx="125.19" cy="330.82" r="2.13"/>
      <circle class="st25" cx="125.19" cy="330.82" r="2.98"/>
      <circle class="st24" cx="128.63" cy="331.57" r="2.13"/>
      <circle class="st25" cx="128.63" cy="331.57" r="2.98"/>
      <circle class="st51" cx="100.71" cy="305.26" r="1.7"/>
      <circle class="st51" cx="101.63" cy="302.81" r="1.7"/>
      <circle class="st51" cx="103.69" cy="304.58" r="1.7"/>
      <circle class="st24" cx="145.29" cy="314.88" r="2.13"/>
      <circle class="st24" cx="148.75" cy="313.95" r="2.13"/>
      <circle class="st24" cx="146.06" cy="311.79" r="2.13"/>
      <circle class="st21" cx="246.58" cy="385.18" r="2.13"/>
      <circle class="st30" cx="246.58" cy="385.18" r="2.98"/>
      <circle class="st21" cx="134.3" cy="155.83" r="1.7"/>
      <circle class="st30" cx="134.3" cy="155.83" r="2.55"/>
      <circle class="st45" cx="184.12" cy="269.83" r="2.13"/>
      <circle class="st24" cx="186.58" cy="280.43" r="2.13"/>
      <circle class="st24" cx="214.04" cy="295.62" r="2.13"/>
      <circle class="st21" cx="342.98" cy="247.23" r="1.42"/>
      <circle class="st21" cx="343.18" cy="244.98" r="1.42"/>
      <circle class="st21" cx="277.81" cy="194.95" r="2.13"/>
      <circle class="st30" cx="277.81" cy="194.95" r="2.98"/>
      <circle class="st45" cx="288.29" cy="189.54" r="2.13"/>
      <circle class="st44" cx="291.25" cy="201.56" r="2.13"/>
      <circle class="st21" cx="301.06" cy="201.27" r="2.13"/>
      <circle class="st30" cx="301.06" cy="201.27" r="2.98"/>
      <circle class="st21" cx="192.9" cy="200.43" r="2.55"/>
      <circle class="st30" cx="192.9" cy="200.43" r="3.4"/>
      <circle class="st55" cx="177.17" cy="200.9" r="2.13"/>
      <circle class="st43" cx="178" cy="222.2" r="2.55"/>
      <circle class="st32" cx="178" cy="222.2" r="3.4"/>
      <circle class="st43" cx="173.7" cy="222.2" r="2.55"/>
      <circle class="st32" cx="173.7" cy="222.2" r="3.4"/>
      <circle class="st45" cx="173.8" cy="183.07" r="2.13"/>
      <circle class="st21" cx="310.19" cy="427.08" r="2.13"/>
      <circle class="st30" cx="310.19" cy="427.08" r="2.98"/>
      <circle class="st21" cx="286.19" cy="444.57" r="2.13"/>
      <circle class="st30" cx="286.19" cy="444.57" r="2.98"/>
      <circle class="st43" cx="362.67" cy="426.77" r="1.7"/>
      <circle class="st24" cx="347.91" cy="415.54" r="2.13"/>
      <circle class="st24" cx="347.61" cy="412.29" r="2.13"/>
      <circle class="st21" cx="154.46" cy="249.83" r="2.98"/>
      <circle class="st24" cx="277.56" cy="265.25" r="2.13"/>
      <circle class="st25" cx="277.56" cy="265.25" r="2.98"/>
      <circle class="st24" cx="277.2" cy="268.59" r="2.13"/>
      <circle class="st25" cx="277.2" cy="268.59" r="2.98"/>
      <circle class="st45" cx="250.56" cy="294.85" r="2.13"/>
      <circle class="st55" cx="460.1" cy="348.35" r="2.98"/>
      <circle class="st21" cx="352.6" cy="123.28" r="1.7"/>
      <circle class="st21" cx="350.22" cy="124.02" r="1.7"/>
      <circle class="st45" cx="356.61" cy="132.54" r="1.7"/>
      <circle class="st45" cx="167.81" cy="112.36" r="2.13"/>
      <circle class="st35" cx="167.81" cy="112.36" r="2.98"/>
      <circle class="st45" cx="238.06" cy="125.18" r="2.13"/>
      <circle class="st35" cx="238.06" cy="125.18" r="2.98"/>
      <circle class="st43" cx="228.98" cy="96.35" r="2.13"/>
      <circle class="st44" cx="284.51" cy="88.94" r="2.13"/>
      <circle class="st33" cx="284.51" cy="88.94" r="2.98"/>
      <circle class="st45" cx="226.62" cy="133.91" r="2.13"/>
      <circle class="st45" cx="227.14" cy="130.59" r="2.13"/>
      <circle class="st55" cx="348.84" cy="206.42" r="2.55"/>
      <circle class="st43" cx="360.3" cy="187.83" r="2.13"/>
      <circle class="st29" cx="360.3" cy="187.83" r="2.98"/>
      <circle class="st43" cx="360.48" cy="184.14" r="2.13"/>
      <circle class="st29" cx="360.48" cy="184.14" r="2.98"/>
      <circle class="st43" cx="363.17" cy="185.9" r="2.13"/>
      <circle class="st29" cx="363.17" cy="185.9" r="2.98"/>
      <circle class="st45" cx="436.93" cy="372.01" r="1.7"/>
      <circle class="st43" cx="457.12" cy="335.78" r="2.13"/>
      <circle class="st21" cx="154.81" cy="357.91" r="2.13"/>
      <circle class="st24" cx="157.98" cy="357.91" r="2.13"/>
      <circle class="st45" cx="436.64" cy="202.74" r="2.98"/>
      <circle class="st35" cx="436.64" cy="202.74" r="3.83"/>
      <circle class="st43" cx="420.91" cy="242.46" r="2.55"/>
      <circle class="st43" cx="405.46" cy="179.91" r="2.13"/>
      <circle class="st21" cx="343.86" cy="156.04" r="1.7"/>
      <circle class="st21" cx="231.21" cy="219.05" r="2.13"/>
    </g>
  </g>
  <g id="_Названия" data-name="Названия">
    <g id="_Звёзды" data-name="Звёзды">
      <text class="st13" transform="translate(280.77 265.25)"><tspan x="0" y="0">Полярная</tspan></text>
      <text class="st15" transform="translate(403.88 261.48)"><tspan x="0" y="0">θ</tspan></text>
      <text class="st6" transform="translate(416.16 249.6)"><tspan x="0" y="0">Натх</tspan></text>
      <text class="st6" transform="translate(373.22 177.12)"><tspan x="0" y="0">Альцион</tspan></text>
      <text class="st2" transform="translate(439.06 209.06)"><tspan x="0" y="0">Альдебаран</tspan></text>
      <text class="st8" transform="translate(352.28 270.99)"><tspan x="0" y="0">Менкалинан</tspan></text>
      <text class="st2" transform="translate(382 248.65)"><tspan x="0" y="0">Капелла</tspan></text>
      <text class="st8" transform="translate(372.14 225.26)"><tspan x="0" y="0">Хассалех</tspan></text>
      <text class="st2" transform="translate(352.53 234.86)"><tspan x="0" y="0">Аль Анз</tspan></text>
      <text class="st2" transform="translate(337.45 171.74)"><tspan x="0" y="0">Аламак</tspan></text>
      <text class="st8" transform="translate(356.61 125.72)"><tspan x="0" y="0">Шератан</tspan></text>
      <text class="st6" transform="translate(354.64 116.36)"><tspan x="0" y="0">Мезартхим</tspan></text>
      <text class="st2" transform="translate(360.47 134.74)"><tspan x="0" y="0">Хамаль</tspan></text>
      <text class="st6" transform="translate(261.86 118.89)"><tspan x="0" y="0">Альферац</tspan></text>
      <text class="st2" transform="translate(229.26 136.04)"><tspan x="0" y="0">Матар</tspan></text>
      <text class="st2" transform="translate(148.19 109.1)"><tspan x="0" y="0">Эниф</tspan></text>
      <text class="st8" transform="translate(124.77 123.5)"><tspan x="0" y="0">Китальфа</tspan></text>
      <text class="st6" transform="translate(231.51 100.42)"><tspan x="0" y="0">Маркаб</tspan></text>
      <text class="st16" transform="translate(288.49 86.68)"><tspan x="0" y="0">Альгениб</tspan></text>
      <text class="st2" transform="translate(241.72 127.3)"><tspan x="0" y="0" xml:space="preserve">Шеат    </tspan></text>
      <text class="st8" transform="translate(253.43 198.07)"><tspan x="0" y="0">Рукба</tspan></text>
      <text class="st8" transform="translate(247.81 188.61)"><tspan x="0" y="0">Рукбах</tspan></text>
      <text class="st6" transform="translate(332.48 186.27)"><tspan x="0" y="0">Алголь</tspan></text>
      <text class="st12" transform="translate(325.6 213.62)"><tspan x="0" y="0">Мирфак </tspan></text>
      <text class="st2" transform="translate(291.25 187.41)"><tspan x="0" y="0">Нави</tspan></text>
      <text class="st8" transform="translate(234.42 219.92)"><tspan x="0" y="0">Альдерамин</tspan></text>
      <text class="st2" transform="translate(249.85 243.52)"><tspan x="0" y="0">Альраи</tspan></text>
      <text class="st16" transform="translate(214.95 235.25)"><tspan x="0" y="0">Альфирк</tspan></text>
      <text class="st8" transform="translate(305.23 198.35)"><tspan x="0" y="0">Каф</tspan></text>
      <text class="st16" transform="translate(267.1 203.39)"><tspan x="0" y="0">Шедар</tspan></text>
      <text class="st2" transform="translate(315.58 144.07)"><tspan x="0" y="0">Мирах</tspan></text>
      <text class="st2" transform="translate(253.15 296.98)"><tspan x="0" y="0">Кохаб</tspan></text>
      <text class="st2" transform="translate(173.82 266.08)"><tspan x="0" y="0">Этамин</tspan></text>
      <text class="st13" transform="translate(202.16 250.76)"><tspan x="0" y="0">Нодус</tspan></text>
      <text class="st20" transform="translate(157.64 253.46)"><tspan x="0" y="0">Вега</tspan></text>
      <text class="st8" transform="translate(196.82 202.29)"><tspan x="0" y="0">Денеб</tspan></text>
      <text class="st12" transform="translate(157.82 200.9)"><tspan x="0" y="0">Садр</tspan></text>
      <text class="st2" transform="translate(136.37 192.72)"><tspan x="0" y="0">Ансер</tspan></text>
      <text class="st1" transform="translate(181.62 224.89)"><tspan x="0" y="0">δ</tspan></text>
      <text class="st3" transform="translate(123.16 199.01)"><tspan x="0" y="0">δ</tspan></text>
      <text class="st2" transform="translate(143.23 184.23)"><tspan x="0" y="0">Дженах</tspan></text>
      <text class="st13" transform="translate(190.58 302.35)"><tspan x="0" y="0">Альдибаин </tspan></text>
      <text class="st13" transform="translate(176.54 286.06)"><tspan x="0" y="0">Растабан </tspan></text>
      <text class="st2" transform="translate(160.75 414.6)"><tspan x="0" y="0">Арктур</tspan></text>
      <text class="st2" transform="translate(156.93 378.63)"><tspan x="0" y="0">Ицар</tspan></text>
      <text class="st8" transform="translate(143.94 364.06)"><tspan x="0" y="0">Гемма</tspan></text>
      <text class="st5" transform="translate(70.59 311.79)"><tspan x="0" y="0">Рас Альгети</tspan></text>
      <text class="st13" transform="translate(85.94 326.02)"><tspan x="0" y="0">Корнефорос</tspan></text>
      <text class="st13" transform="translate(99.01 297.87)"><tspan x="0" y="0">Сарин</tspan></text>
      <text class="st10" transform="translate(147.23 320.87)"><tspan x="0" y="0">ζ</tspan></text>
      <text class="st12" transform="translate(198.96 415.97)"><tspan x="0" y="0">Муфрид</tspan></text>
      <text class="st15" transform="translate(132.6 162.8)"><tspan x="0" y="0">β</tspan></text>
      <text class="st12" transform="translate(235.22 353.81)"><tspan x="0" y="0">Банетнаш</tspan></text>
      <text class="st2" transform="translate(269.76 329.87)"><tspan x="0" y="0">Дубхе</tspan></text>
      <text class="st8" transform="translate(252.53 340.76)"><tspan x="0" y="0">Алиот</tspan></text>
      <text class="st16" transform="translate(225.27 340.76)"><tspan x="0" y="0">Мицар</tspan></text>
      <text class="st8" transform="translate(300.97 345.64)"><tspan x="0" y="0">Мерак</tspan></text>
      <text class="st6" transform="translate(352.29 433.06)"><tspan x="0" y="0">Регул</tspan></text>
      <text class="st13" transform="translate(312.24 415.54)"><tspan x="0" y="0">Альгеиба</tspan></text>
      <text class="st8" transform="translate(315.2 398.71)"><tspan x="0" y="0">Переципуа</tspan></text>
      <text class="st8" transform="translate(272.35 451.59)"><tspan x="0" y="0">Денебола</tspan></text>
      <text class="st8" transform="translate(284.99 425.49)"><tspan x="0" y="0">Зосма</tspan></text>
      <text class="st20" transform="translate(268.64 359.06)"><tspan x="0" y="0">Фегда</tspan></text>
      <text class="st8" transform="translate(250.6 390.74)"><tspan x="0" y="0">Сердце Карла</tspan></text>
      <text class="st8" transform="translate(448.32 289.17)"><tspan x="0" y="0">Альхена</tspan></text>
      <text class="st2" transform="translate(380.34 334.49)"><tspan x="0" y="0">Полукс</tspan></text>
      <text class="st8" transform="translate(374.37 317.56)"><tspan x="0" y="0">Кастор</tspan></text>
      <text class="st2" transform="translate(397.22 290.63)"><tspan x="0" y="0">Мебсута</tspan></text>
      <text class="st5" transform="translate(439.3 281.15)"><tspan x="0" y="0">Теят</tspan></text>
      <text class="st12" transform="translate(426.15 348.35)"><tspan x="0" y="0">Процион</tspan></text>
      <text class="st2" transform="translate(420.34 379)"><tspan x="0" y="0">Альтарф</tspan></text>
      <text class="st8" transform="translate(375.69 377.52)"><tspan x="0" y="0">Азеллюс</tspan></text>
      <text class="st8" transform="translate(387.05 358.36)"><tspan x="0" y="0">Презепа</tspan></text>
      <text class="st6" transform="translate(423.55 337.09)"><tspan x="0" y="0">Гомейса</tspan></text>
      <text class="st15" transform="translate(338.97 154.49)"><tspan x="0" y="0">β</tspan></text>
      <text class="st3" transform="translate(351.13 153.89)"><tspan x="0" y="0">γ</tspan></text>
      <text class="st15" transform="translate(342.16 253.46)"><tspan x="0" y="0">β</tspan></text>
      <text class="st15" transform="translate(226.1 405.53)"><tspan x="0" y="0">β</tspan></text>
      <text class="st15" transform="translate(261.86 380.64)"><tspan x="0" y="0">β</tspan></text>
      <text class="st8" transform="translate(196.82 434.63)"><tspan x="0" y="0">Диадема</tspan></text>
      <text class="st15" transform="translate(329.06 247.61)"><tspan x="0" y="0">α</tspan></text>
      <text class="st15" transform="translate(364.41 370.39)"><tspan x="0" y="0">α</tspan></text>
      <text class="st15" transform="translate(114.29 204.11)"><tspan x="0" y="0">α</tspan></text>
      <text class="st3" transform="translate(129.16 191.57)"><tspan x="0" y="0">γ</tspan></text>
    </g>
    <g id="_Созвездия" data-name="Созвездия">
      <text class="st14" transform="translate(236.63 422.86)"><tspan x="0" y="0">ВОЛОСЫ</tspan><tspan x="0" y="6">ВЕРОНИКИ</tspan></text>
      <text class="st17" transform="translate(321.95 428.83)"><tspan x="0" y="0">ЛЕВ</tspan></text>
      <text class="st9" transform="translate(407.75 371.07)"><tspan x="0" y="0">РАК</tspan></text>
      <text class="st0" transform="translate(405.12 308.23)"><tspan x="0" y="0">БЛИЗНЕЦЫ</tspan></text>
      <text class="st0" transform="translate(418.89 187.83)"><tspan x="0" y="0">ТЕЛЕЦ</tspan></text>
      <text class="st14" transform="translate(365.86 147.65)"><tspan x="0" y="0">ОВЕН</tspan></text>
      <text class="st0" transform="translate(288.44 72.53)"><tspan x="0" y="0">РЫБЫ</tspan></text>
      <text class="st17" transform="translate(196.02 111.35)"><tspan x="0" y="0">ПЕГАС</tspan></text>
      <text class="st14" transform="translate(124.25 136.04)"><tspan x="0" y="0">МАЛЫЙ КОНЬ</tspan></text>
      <text class="st14" transform="translate(123.49 151.76)"><tspan x="0" y="0">ДЕЛЬФИН</tspan></text>
      <text class="st14" transform="translate(103.26 191.12)"><tspan x="0" y="0">СТРЕЛА</tspan></text>
      <text class="st14" transform="translate(121.92 205)"><tspan x="0" y="0">ЛИСИЧКА</tspan></text>
      <text class="st0" transform="translate(104.32 282.82)"><tspan x="0" y="0">ГЕРКУЛЕС</tspan></text>
      <text class="st14" transform="translate(152.68 341.64)"><tspan x="0" y="0">СЕВЕРНАЯ</tspan><tspan x="0" y="6">КОРОНА</tspan></text>
      <text class="st18" transform="translate(157.11 396.39)"><tspan x="0" y="0">ВОЛОПАС</tspan></text>
      <text class="st14" transform="translate(212.4 379.65)"><tspan x="0" y="0">ГОНЧИЕ ПСЫ</tspan></text>
      <text class="st14" transform="translate(294.74 354.85)"><tspan x="0" y="0">БОЛЬШАЯ </tspan><tspan x="0" y="6">МЕДВЕДИЦА</tspan></text>
      <text class="st14" transform="translate(327.79 375.32)"><tspan x="0" y="0">МАЛЫЙ ЛЕВ</tspan></text>
      <text class="st14" transform="translate(353.19 306.28)"><tspan x="0" y="0">РЫСЬ</tspan></text>
      <text class="st14" transform="translate(375.7 256.81)"><tspan x="0" y="0">ВОЗНИЧИЙ</tspan></text>
      <text class="st14" transform="translate(350.66 201.56)"><tspan x="0" y="0">ПЕРСЕЙ</tspan></text>
      <text class="st14" transform="translate(330.93 162.88)"><tspan x="0" y="0">ТРЕУГОЛЬНИК</tspan></text>
      <text class="st0" transform="translate(252.53 155.37)"><tspan x="0" y="0">АНДРОМЕДА</tspan></text>
      <text class="st14" transform="translate(218.71 172.98)"><tspan x="0" y="0">ЯЩЕРИЦА</tspan></text>
      <text class="st17" transform="translate(143.17 216.32)"><tspan x="0" y="0">ЛЕБЕДЬ</tspan></text>
      <text class="st14" transform="translate(148.19 239.05)"><tspan x="0" y="0">ЛИРА</tspan></text>
      <text class="st7" transform="translate(197.9 275.99)"><tspan x="0" y="0">ДРАКОН</tspan></text>
      <text class="st14" transform="translate(255.78 282.66)"><tspan x="0" y="0">МАЛАЯ</tspan><tspan x="0" y="6">МЕДВЕДИЦА</tspan></text>
      <text class="st4" transform="translate(323.55 260.5)"><tspan x="0" y="0">ЖИРАФ</tspan></text>
      <text class="st14" transform="translate(267.21 210.11)"><tspan x="0" y="0">КАССИОПЕЯ</tspan></text>
      <text class="st18" transform="translate(240.92 226.88)"><tspan x="0" y="0">ЦЕФЕЙ</tspan></text>
      <text class="st14" transform="translate(446.41 357.01)"><tspan x="0" y="0">МАЛЫЙ</tspan><tspan x="0" y="6">ПЕС</tspan></text>
    </g>
  </g>
  <g id="_Легенда" data-name="Легенда" class="st53">
    <rect class="st56" x="457.74" y="58.57" width="88.66" height="14.06"/>
    <rect class="st59" x="-6.08" y="43.73" width="91.72" height="23.93"/>
    <rect class="st59" x="457.6" y="43.78" width="88.8" height="14.61"/>
    <circle class="st21" cx="529.31" cy="65.6" r=".9"/>
    <circle class="st21" cx="529.31" cy="65.6" r=".9"/>
    <circle class="st21" cx="537.6" cy="65.6" r=".43"/>
    <circle class="st21" cx="519.54" cy="65.6" r="1.33"/>
    <circle class="st21" cx="509.22" cy="65.6" r="1.71"/>
    <circle class="st21" cx="497.93" cy="65.6" r="2.13"/>
    <circle class="st21" cx="485.24" cy="65.6" r="2.55"/>
    <circle class="st21" cx="471.05" cy="65.6" r="2.98"/>
    <rect class="st52" x="440.78" y="67.62" width="88.66" height="14.06"/>
    <circle class="st22" cx="523.51" cy="74.65" r=".9"/>
    <circle class="st22" cx="523.51" cy="74.65" r=".85"/>
    <circle class="st22" cx="513.75" cy="74.65" r="1.28"/>
    <circle class="st22" cx="503.43" cy="74.65" r="1.91"/>
    <circle class="st22" cx="492.13" cy="74.65" r="2.83"/>
    <circle class="st22" cx="479.44" cy="74.65" r="4.25"/>
    <circle class="st22" cx="465.25" cy="74.65" r="6.38"/>
    <circle class="st22" cx="447.34" cy="75.5" r="8.5"/>
    <rect x="-3.51" y="69.31" width="28.13" height="64.05"/>
    <circle class="st44" cx="10.48" cy="74.4" r="2.55"/>
    <circle class="st43" cx="10.48" cy="83.65" r="2.55"/>
    <circle class="st21" cx="10.48" cy="93.01" r="2.55"/>
    <circle class="st55" cx="10.48" cy="101.84" r="2.55"/>
    <circle class="st24" cx="10.48" cy="111.09" r="2.55"/>
    <circle class="st45" cx="10.48" cy="120.33" r="2.55"/>
    <circle class="st51" cx="10.48" cy="129.03" r="2.55"/>
    <text class="st11" transform="translate(30.57 75.55)"><tspan x="0" y="0">До 50 000 К</tspan><tspan x="0" y="9">До 20 000 К</tspan><tspan x="0" y="18">До 10 000 К</tspan><tspan x="0" y="27">До 7 000 К</tspan><tspan x="0" y="36">До 6 000 К</tspan><tspan x="0" y="45">До 5 000 К</tspan><tspan x="0" y="54">До 3 500 К</tspan></text>
    <text class="st41" transform="translate(495.8 79.77)"><tspan x="0" y="0">2</tspan></text>
    <text class="st36" transform="translate(484.04 79.77)"><tspan x="0" y="0">1</tspan></text>
    <text class="st36" transform="translate(465.91 79.77)"><tspan x="0" y="0">&lt;0</tspan></text>
    <text class="st41" transform="translate(507.51 79.77)"><tspan x="0" y="0">3</tspan></text>
    <text class="st36" transform="translate(517.18 79.77)"><tspan x="0" y="0">4</tspan></text>
    <text class="st36" transform="translate(527.66 79.77)"><tspan x="0" y="0">5</tspan></text>
    <text class="st36" transform="translate(533.89 79.77)"><tspan x="0" y="0">&gt;6</tspan></text>
    <text class="st39" transform="translate(-.86 55.7)"><tspan x="0" y="0">Цвет</tspan></text>
    <text class="st40" transform="translate(28.4 55.55)"><tspan class="st54"><tspan x="0" y="0">Температура</tspan></tspan><tspan class="st50"><tspan x="0" y="10">звёзд </tspan></tspan></text>
    <text class="st38" transform="translate(207.01 19.46)"><tspan x="0" y="0">СЕВЕРНОЕ ПОЛУШАРИЕ</tspan></text>
    <text class="st42" transform="translate(460.54 55.22)"><tspan x="0" y="0">Звёздная величина</tspan></text>
    <circle class="st45" cx="135.51" cy="195.39" r="1.33"/>
    <circle class="st45" cx="137.74" cy="214.26" r="1.7"/>
    <text class="st42" transform="translate(91.51 553.69)"><tspan x="0" y="0">Названия созвездий</tspan></text>
    <text class="st39" transform="translate(91.51 593.46)"><tspan x="0" y="0">Млечный путь</tspan></text>
    <text class="st42" transform="translate(91.51 573.38)"><tspan x="0" y="0">Названия ярких звёзд</tspan></text>
    <text class="st42" transform="translate(421.33 554.8)"><tspan x="0" y="0">Переменные звёзды</tspan></text>
    <text class="st42" transform="translate(421.33 574.58)"><tspan x="0" y="0">Двойные звёзды</tspan></text>
    <text class="st39" transform="translate(421.33 594.98)"><tspan x="0" y="0">Тройные звёзды</tspan></text>
    <rect x="18.96" y="561.6" width="60.15" height="14.17"/>
    <rect x="18.96" y="580.33" width="60.15" height="17.73"/>
    <rect x="18.96" y="542.99" width="60.15" height="14.06"/>
    <rect x="342.31" y="542.92" width="60.15" height="14.06"/>
    <rect x="342.31" y="563" width="60.15" height="14.06"/>
    <rect x="342.31" y="583.25" width="60.15" height="14.06"/>
    <rect class="st59" x="2.49" y="510.33" width="543.48" height="25.22"/>
    <path class="st46" d="M22.81,587.09c.84-1.33,2.82-.71,7.45-1.61,3.73-.72,3.68-1.37,6.99-2.06,4.11-.87,4.6.04,10.43-.34,6.91-.45,7.06-1.77,10.78-1.15,4.45.75,4.71,2.72,8.37,2.64,4.16-.1,6.26-2.71,8.03-1.49,1.19.82,1.69,3,.92,4.24-1.28,2.05-5.05-.11-9.63,2.29-2.3,1.21-1.84,2.01-4.13,3.21-3.22,1.69-6,1.07-9.97,1.03-4.98-.04-4.14.89-11.35,1.49-8.1.68-12.8,1.01-15.82-1.95-1.84-1.8-3.02-4.79-2.06-6.31Z"/>
    <path class="st47" d="M27.33,591.44c-.4-1.66,1.87-3.51,3.52-4.28,1.58-.73,2.04-.21,4.66-.84,3.17-.76,4.25-1.95,4.97-1.38.73.59.54,2.6-.46,3.82-1.18,1.44-2.6.68-4.82,2.29-1.53,1.11-1.35,1.83-2.52,2.29-1.95.76-4.95-.24-5.35-1.91Z"/>
    <path class="st48" d="M45.47,586.86c.96-.93,2.3-.96,3.44-.99,2.11-.06,2.45.71,4.43.76,2.29.06,2.36-.94,4.74-.99,2.31-.06,2.52.88,5.04.99,2.99.14,4.85-1.08,5.04-.69.27.54-3.42,2.85-4.74,3.67-2.85,1.78-4.31,2.67-5.81,2.75-2.37.13-2.58-1.16-5.27-1.38-3.93-.31-5.79,2.26-7.18,1.22-1.22-.91-1.17-3.92.31-5.35Z"/>
    <text class="st20" transform="translate(41.18 570.15)"><tspan x="0" y="0">Вега</tspan></text>
    <text class="st14" transform="translate(42.73 551.57)"><tspan x="0" y="0">ЛИРА</tspan></text>
    <text class="st37" transform="translate(211.97 528.79)"><tspan x="0" y="0">УСЛОВНЫЕ ОБОЗНАЧЕНИЯ</tspan></text>
    <g>
      <circle class="st21" cx="372.39" cy="549.95" r="2.55"/>
      <circle class="st30" cx="372.39" cy="549.95" r="3.4"/>
    </g>
    <g>
      <circle class="st21" cx="370.8" cy="570.03" r="2.13"/>
      <circle class="st21" cx="373.97" cy="570.03" r="2.13"/>
    </g>
    <g>
      <circle class="st21" cx="370.65" cy="591.83" r="2.13"/>
      <circle class="st21" cx="374.12" cy="590.9" r="2.13"/>
      <circle class="st21" cx="371.43" cy="588.74" r="2.13"/>
    </g>
  </g>
</svg>
  );
}
