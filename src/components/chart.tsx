import * as React from "react";

export interface IAppProps {}

export function Chart(props: IAppProps) {
    return (
            <svg
                className="recharts-surface"
                width="906"
                height="350"
                viewBox="0 0 906 350"
                style={{ width: "100%", height: "100%" }}
            >
                <title></title>
                <desc></desc>
                <defs>
                    <clipPath id="recharts7-clip">
                        <rect x="115" y="20" height="300" width="741"></rect>
                    </clipPath>
                </defs>
                <g className="recharts-cartesian-grid">
                    <g className="recharts-cartesian-grid-vertical">
                        <line
                            strokeDasharray="5 0"
                            className="stroke-muted first:stroke-transparent last:stroke-transparent"
                            stroke="#ccc"
                            fill="none"
                            x="115"
                            y="20"
                            width="741"
                            height="300"
                            x1="115"
                            y1="20"
                            x2="115"
                            y2="320"
                        ></line>
                        <line
                            strokeDasharray="5 0"
                            className="stroke-muted first:stroke-transparent last:stroke-transparent"
                            stroke="#ccc"
                            fill="none"
                            x="115"
                            y="20"
                            width="741"
                            height="300"
                            x1="300.25"
                            y1="20"
                            x2="300.25"
                            y2="320"
                        ></line>
                        <line
                            strokeDasharray="5 0"
                            className="stroke-muted first:stroke-transparent last:stroke-transparent"
                            stroke="#ccc"
                            fill="none"
                            x="115"
                            y="20"
                            width="741"
                            height="300"
                            x1="485.5"
                            y1="20"
                            x2="485.5"
                            y2="320"
                        ></line>
                        <line
                            strokeDasharray="5 0"
                            className="stroke-muted first:stroke-transparent last:stroke-transparent"
                            stroke="#ccc"
                            fill="none"
                            x="115"
                            y="20"
                            width="741"
                            height="300"
                            x1="670.75"
                            y1="20"
                            x2="670.75"
                            y2="320"
                        ></line>
                        <line
                            strokeDasharray="5 0"
                            className="stroke-muted first:stroke-transparent last:stroke-transparent"
                            stroke="#ccc"
                            fill="none"
                            x="115"
                            y="20"
                            width="741"
                            height="300"
                            x1="856"
                            y1="20"
                            x2="856"
                            y2="320"
                        ></line>
                    </g>
                </g>
                <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <line
                        orientation="bottom"
                        width="741"
                        height="30"
                        x="115"
                        y="320"
                        className="recharts-cartesian-axis-line"
                        stroke="#666"
                        fill="none"
                        x1="115"
                        y1="320"
                        x2="856"
                        y2="320"
                    ></line>
                    <g className="recharts-cartesian-axis-ticks">
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                orientation="bottom"
                                width="741"
                                height="30"
                                x="115"
                                y="320"
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1="115"
                                y1="326"
                                x2="115"
                                y2="320"
                            ></line>
                            <text
                                x="115"
                                y="343"
                                className="recharts-text fill-foreground"
                                textAnchor="middle"
                                fill="#808080"
                            >
                                <tspan x="115" dy="0em">
                                    0%
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                orientation="bottom"
                                width="741"
                                height="30"
                                x="115"
                                y="320"
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1="300.25"
                                y1="326"
                                x2="300.25"
                                y2="320"
                            ></line>
                            <text
                                x="300.25"
                                y="343"
                                className="recharts-text fill-foreground"
                                textAnchor="middle"
                                fill="#808080"
                            >
                                <tspan x="300.25" dy="0em">
                                    25%
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                orientation="bottom"
                                width="741"
                                height="30"
                                x="115"
                                y="320"
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1="485.5"
                                y1="326"
                                x2="485.5"
                                y2="320"
                            ></line>
                            <text
                                x="485.5"
                                y="343"
                                className="recharts-text fill-foreground"
                                textAnchor="middle"
                                fill="#808080"
                            >
                                <tspan x="485.5" dy="0em">
                                    50%
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                orientation="bottom"
                                width="741"
                                height="30"
                                x="115"
                                y="320"
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1="670.75"
                                y1="326"
                                x2="670.75"
                                y2="320"
                            ></line>
                            <text
                                x="670.75"
                                y="343"
                                className="recharts-text fill-foreground"
                                textAnchor="middle"
                                fill="#808080"
                            >
                                <tspan x="670.75" dy="0em">
                                    75%
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                orientation="bottom"
                                width="741"
                                height="30"
                                x="115"
                                y="320"
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1="856"
                                y1="326"
                                x2="856"
                                y2="320"
                            ></line>
                            <text
                                x="856"
                                y="343"
                                className="recharts-text fill-foreground"
                                textAnchor="middle"
                                fill="#808080"
                            >
                                <tspan x="856" dy="0em">
                                    100%
                                </tspan>
                            </text>
                        </g>
                    </g>
                </g>
                <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis border-l border-r border-t border-b border-primary">
                    <line
                        className="recharts-cartesian-axis-line"
                        orientation="left"
                        width="60"
                        height="300"
                        x="55"
                        y="20"
                        stroke="#666"
                        fill="none"
                        x1="115"
                        y1="20"
                        x2="115"
                        y2="320"
                    ></line>
                    <g className="recharts-cartesian-axis-ticks">
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="41.42857142857143"
                                x2="115"
                                y2="41.42857142857143"
                            ></line>
                            <text
                                x="7"
                                y="41.42857142857143"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    ボム
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="84.28571428571428"
                                x2="115"
                                y2="84.28571428571428"
                            ></line>
                            <text
                                x="7"
                                y="84.28571428571428"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    ドラパルト単
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="127.14285714285714"
                                x2="115"
                                y2="127.14285714285714"
                            ></line>
                            <text
                                x="7"
                                y="127.14285714285714"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    悪リザ
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="169.99999999999997"
                                x2="115"
                                y2="169.99999999999997"
                            ></line>
                            <text
                                x="7"
                                y="169.99999999999997"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    ピジョ
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="212.85714285714283"
                                x2="115"
                                y2="212.85714285714283"
                            ></line>
                            <text
                                x="7"
                                y="212.85714285714283"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    ネイティオ
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="255.7142857142857"
                                x2="115"
                                y2="255.7142857142857"
                            ></line>
                            <text
                                x="7"
                                y="255.7142857142857"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    その他
                                </tspan>
                            </text>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line
                                className="recharts-cartesian-axis-tick-line"
                                orientation="left"
                                width="60"
                                height="300"
                                x="55"
                                y="20"
                                stroke="#666"
                                fill="none"
                                x1="109"
                                y1="298.57142857142856"
                                x2="115"
                                y2="298.57142857142856"
                            ></line>
                            <text
                                x="7"
                                y="298.57142857142856"
                                className="recharts-text fill-foreground underline"
                                textAnchor="start"
                                fill="#808080"
                            >
                                <tspan x="7" dy="0.355em">
                                    ロスト
                                </tspan>
                            </text>
                        </g>
                    </g>
                </g>
                <g className="recharts-layer recharts-bar fill-primary">
                    <g className="recharts-layer recharts-bar-rectangles">
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="36"
                                // width="617.9940000000001"
                                width="417.9940000000001"
                                height="20"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="ボム"
                                d="M 115,36 h 617.9940000000001 v 10 h -617.9940000000001 Z"
                            ></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="78.85714285714286"
                                width="31.863"
                                height="10"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="ドラパルト単"
                                d="M 115,78.85714285714286 h 31.863 v 10 h -31.863 Z"
                            ></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="121.71428571428571"
                                width="28.157999999999987"
                                height="10"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="悪リザ"
                                d="M 115,121.71428571428571 h 28.157999999999987 v 10 h -28.157999999999987 Z"
                            ></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="164.57142857142856"
                                width="25.194000000000017"
                                height="10"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="ピジョ"
                                d="M 115,164.57142857142856 h 25.194000000000017 v 10 h -25.194000000000017 Z"
                            ></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="207.42857142857142"
                                width="22.22999999999999"
                                height="10"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="ネイティオ"
                                d="M 115,207.42857142857142 h 22.22999999999999 v 10 h -22.22999999999999 Z"
                            ></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="250.28571428571428"
                                width="9.632999999999996"
                                height="10"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="その他"
                                d="M 115,250.28571428571428 h 9.632999999999996 v 10 h -9.632999999999996 Z"
                            ></path>
                        </g>
                        <g className="recharts-layer recharts-bar-rectangle">
                            <path
                                x="115"
                                y="293.1428571428571"
                                width="6.669000000000011"
                                height="10"
                                radius="0"
                                className="recharts-rectangle fill-primary"
                                name="ロスト"
                                d="M 115,293.1428571428571 h 6.669000000000011 v 10 h -6.669000000000011 Z"
                            ></path>
                        </g>
                    </g>
                    <g className="recharts-layer"></g>
                    <g className="recharts-layer recharts-label-list">
                        <text
                            x="737.9940000000001"
                            y="46"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="737.9940000000001" dy="0em">
                                83.4%
                            </tspan>
                        </text>
                        <text
                            x="151.863"
                            y="88.85714285714286"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="151.863" dy="0em">
                                4.3%
                            </tspan>
                        </text>
                        <text
                            x="148.158"
                            y="131.71428571428572"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="148.158" dy="0em">
                                3.8%
                            </tspan>
                        </text>
                        <text
                            x="145.19400000000002"
                            y="174.57142857142856"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="145.19400000000002" dy="0em">
                                3.4%
                            </tspan>
                        </text>
                        <text
                            x="142.23"
                            y="217.42857142857142"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="142.23" dy="0em">
                                3%
                            </tspan>
                        </text>
                        <text
                            x="129.63299999999998"
                            y="260.2857142857143"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="129.63299999999998" dy="0em">
                                1.3%
                            </tspan>
                        </text>
                        <text
                            x="126.66900000000001"
                            y="303.1428571428571"
                            className="recharts-text fill-foreground"
                            textAnchor="start"
                            fill="#808080"
                        >
                            <tspan x="126.66900000000001" dy="0em">
                                0.9%
                            </tspan>
                        </text>
                    </g>
                </g>
            </svg>
    );
}
