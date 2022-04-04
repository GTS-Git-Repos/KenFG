import React from 'react';
import SvG, {
  G,
  Path,
  Defs,
  RadialGradient,
  Rect,
  Stop,
  ClipPath,
} from 'react-native-svg';

interface PropTypes {
  color: string;
}

function Icon(props: PropTypes) {
  return (
    <SvG width="75" height="75" viewBox="0 0 75 75" fill="none">
      <G clipPath="url(#clip0_1860_3728)">
        <Path
          d="M63.2695 61.129C63.0952 62.2471 62.7644 63.3727 62.4512 64.4382C62.3123 64.9095 62.181 65.3858 62.0573 65.8671C61.3476 68.5596 60.8349 71.3549 60.4688 74.1476C60.4309 74.4309 60.3955 74.7167 60.3602 75H14.6373C14.607 74.7167 14.5716 74.4309 14.5338 74.1476C14.1651 71.3549 13.6524 68.5596 12.9427 65.8671C12.819 65.3858 12.6902 64.9095 12.5513 64.4382C12.2356 63.3727 11.9073 62.2471 11.7331 61.129C11.5058 59.6624 11.5512 58.2109 12.2811 56.9373C12.7205 56.1702 13.3569 55.5685 14.0792 55.0471C14.7989 54.5181 15.602 54.0694 16.3647 53.6106C19.9357 51.4571 23.0975 48.6292 25.628 45.3276C25.926 44.9365 26.2164 44.5404 26.4967 44.1368C26.7442 44.6908 27.0624 45.2223 27.4008 45.7312C28.7999 47.8446 30.6056 49.785 32.6411 51.3192H42.3614C44.3944 49.785 46.2001 47.8446 47.6017 45.7312C47.9401 45.2223 48.2583 44.6908 48.5033 44.1343C49.0336 44.8964 49.5968 45.6359 50.1928 46.3504C52.5718 49.2159 55.4381 51.6827 58.6353 53.6106C59.4005 54.0694 60.2011 54.5181 60.9208 55.0471C61.6431 55.5685 62.2795 56.1702 62.7214 56.9373C63.4488 58.2109 63.4967 59.6624 63.2695 61.129Z"
          fill={props.color ? props.color : '#E84097'}
        />
        <Path
          d="M4.55073 73.2025C4.34617 70.6855 4.3386 68.1535 4.53558 65.6365C4.56588 65.2454 4.60629 64.8418 4.70731 64.4632C4.81085 64.0822 5.34119 64.032 5.51797 64.3855C6.19226 65.7468 6.84129 67.1181 7.47012 68.5019C7.84894 69.3343 8.21765 70.1691 8.57879 71.0089C8.90962 71.776 9.40713 72.6259 9.57886 73.4381C9.25055 73.1875 9.02074 72.5206 8.81113 72.1521C8.55353 71.6958 8.29594 71.237 8.03835 70.7808C7.51558 69.8507 6.99282 68.9231 6.47006 67.9955C6.33621 67.7599 6.19731 67.5167 6.03063 67.3011C5.79324 66.9953 5.30078 67.1231 5.25533 67.5067L4.55073 73.2025Z"
          fill="#1A3C59"
        />
        <Path
          d="M9.35157 67.973C9.26065 67.5819 9.77584 67.3262 10.0309 67.6395C10.2784 67.9479 10.4779 68.3114 10.6597 68.6624C11.5361 70.3872 12.3063 72.1671 12.968 73.9847C13.0917 74.3256 13.2155 74.6716 13.3721 75H11.6421C11.6396 74.9925 11.6371 74.9824 11.6346 74.9749C10.9199 72.6259 9.90464 70.3571 9.35157 67.973Z"
          fill="#1A3C59"
        />
        <Path
          d="M25.4259 41.7025C25.6128 41.5772 25.7946 41.4568 25.9663 41.339C25.7946 41.4568 25.6153 41.5797 25.4259 41.7025Z"
          fill="#1A3C59"
        />
        <Path
          d="M26.2997 41.1084C26.2416 41.151 26.1785 41.1936 26.1179 41.2387C26.0674 41.2713 26.0169 41.3039 25.9664 41.339C26.0169 41.3039 26.0674 41.2688 26.1179 41.2337C26.1482 41.2111 26.176 41.1936 26.2088 41.171C26.2391 41.1485 26.2694 41.1284 26.2997 41.1084Z"
          fill="#1A3C59"
        />
        <Path
          d="M26.7593 40.7774C26.7113 40.815 26.6608 40.8501 26.6129 40.8852C26.6457 40.8602 26.6785 40.8351 26.7113 40.81C26.729 40.8 26.7442 40.7875 26.7593 40.7774Z"
          fill="#1A3C59"
        />
        <Path
          d="M46.7405 40.8702C46.733 40.8978 46.7279 40.9253 46.7178 40.9529C46.6875 41.0707 46.6496 41.1886 46.6092 41.3014C46.4425 41.7526 46.1976 42.1788 45.9476 42.5925C43.8464 46.1022 41.1164 49.3638 37.5 51.3192C33.8861 49.3638 31.1536 46.1022 29.055 42.5925C28.8176 42.2014 28.5878 41.8003 28.4236 41.3766C28.3681 41.2387 28.3201 41.0983 28.2847 40.9529C28.2746 40.9253 28.2696 40.8978 28.262 40.8702C28.1408 40.3688 28.1433 39.8248 28.3352 39.356C28.3883 39.2858 28.4463 39.2231 28.507 39.168C28.8176 38.8797 29.1913 38.7693 29.6181 38.7693C29.7015 38.7693 29.7899 38.7744 29.8783 38.7819C29.8934 38.7844 29.9086 38.7844 29.9237 38.7869C29.9667 38.7919 30.0096 38.7969 30.0525 38.8044C30.1005 38.8095 30.1535 38.8195 30.204 38.8295C30.2546 38.837 30.3076 38.8496 30.3606 38.8596C30.5197 38.8947 30.6839 38.9373 30.8506 38.9849C30.944 39.015 31.0374 39.0426 31.1334 39.0727C31.4945 39.1905 31.8759 39.3284 32.2698 39.4688C34.0124 40.0955 37.5 39.9978 37.5 39.9978C37.5 39.9978 40.9876 40.0955 42.7302 39.4688C43.1065 39.3359 43.4676 39.2031 43.8136 39.0902C43.8717 39.0727 43.9297 39.0551 43.9853 39.0376C44.1545 38.9824 44.3212 38.9348 44.4803 38.8972C44.5535 38.8797 44.6242 38.8621 44.695 38.8496C44.7707 38.832 44.8439 38.8195 44.9172 38.8095C44.9273 38.807 44.9374 38.8044 44.945 38.8044C44.9525 38.8019 44.9601 38.8019 44.9652 38.8019C45.0258 38.7919 45.0864 38.7844 45.1445 38.7819C45.2707 38.7693 45.3894 38.7668 45.5031 38.7744C45.5283 38.7744 45.5536 38.7769 45.5814 38.7794C45.6571 38.7844 45.7304 38.7944 45.8011 38.812C45.8263 38.817 45.8491 38.822 45.8743 38.8295C45.9122 38.837 45.9501 38.8496 45.9854 38.8621C46.0284 38.8772 46.0688 38.8922 46.1117 38.9122C46.1496 38.9298 46.19 38.9499 46.2279 38.9724C46.2506 38.985 46.2708 38.9975 46.2935 39.0125C46.3643 39.0551 46.4299 39.1078 46.4956 39.168C46.5562 39.2231 46.6117 39.2858 46.6673 39.356C46.8567 39.8248 46.8592 40.3688 46.7405 40.8702Z"
          fill="#1A3C59"
        />
        <Path
          d="M47.1017 39.8524L47.0714 39.8223C47.0739 39.8273 47.0789 39.8298 47.084 39.8323C47.089 39.8398 47.0941 39.8448 47.1017 39.8524Z"
          fill="#1A3C59"
        />
        <Path
          d="M47.5841 40.2685C47.5664 40.256 47.5436 40.2384 47.526 40.2234C47.5159 40.2134 47.5058 40.2058 47.4957 40.1958C47.5234 40.2184 47.5538 40.2434 47.5841 40.2685Z"
          fill="#1A3C59"
        />
        <Path
          d="M47.9679 40.5719C47.9452 40.5568 47.9275 40.5418 47.9073 40.5242C47.9224 40.5368 47.9401 40.5493 47.9578 40.5618C47.9603 40.5644 47.9654 40.5669 47.9679 40.5719Z"
          fill="#1A3C59"
        />
        <Path
          d="M65.4211 73.4381C65.5929 72.6259 66.0904 71.776 66.4212 71.0089C66.7823 70.1691 67.1536 69.3343 67.5299 68.5019C68.1587 67.1181 68.8103 65.7468 69.4846 64.3855C69.6588 64.032 70.1892 64.0822 70.2927 64.4632C70.3962 64.8418 70.4366 65.2454 70.467 65.6365C70.6614 68.1535 70.6564 70.6855 70.4493 73.2025L69.7472 67.5067C69.6992 67.1231 69.2068 66.9953 68.9719 67.3011C68.8052 67.5167 68.6638 67.7599 68.5325 67.9955C68.0097 68.9231 67.4844 69.8507 66.9617 70.7808C66.7041 71.237 66.4465 71.6958 66.1889 72.1521C65.9818 72.5206 65.7494 73.1875 65.4211 73.4381Z"
          fill="#1A3C59"
        />
        <Path
          d="M65.6484 67.973C65.0978 70.3571 64.0826 72.6259 63.3654 74.9749C63.3629 74.9824 63.3603 74.9925 63.3578 75H61.6304C61.7845 74.6716 61.9082 74.3256 62.032 73.9847C62.6936 72.1671 63.4639 70.3872 64.3427 68.6624C64.522 68.3114 64.7216 67.9479 64.9716 67.6395C65.2266 67.3262 65.7393 67.5819 65.6484 67.973Z"
          fill="#1A3C59"
        />
        <Path
          d="M11.6346 74.9749C11.6371 74.9824 11.6396 74.9925 11.6422 75H1C1.97229 71.5655 3.46987 66.1554 3.69463 64.6136C4.03304 62.3072 3.74261 49.9529 11.6851 47.9323C12.0563 47.837 12.4276 47.7368 12.7988 47.629C12.9503 47.5838 13.1018 47.5387 13.2534 47.4936C13.4049 47.4459 13.5539 47.3983 13.7054 47.3507C13.8822 47.2955 14.0565 47.2379 14.2332 47.1777C14.4429 47.1075 14.6525 47.0373 14.8621 46.9621C15.049 46.8969 15.2358 46.8292 15.4202 46.7615C15.6803 46.6638 15.9379 46.566 16.193 46.4657C16.3698 46.3955 16.544 46.3278 16.7183 46.2551C16.9228 46.1749 17.1249 46.0922 17.3244 46.0044C17.5163 45.9242 17.7082 45.844 17.8976 45.7588C18.3042 45.5808 18.7032 45.4003 19.0947 45.2173C19.4786 45.0393 19.8548 44.8563 20.2236 44.6732C20.4079 44.5805 20.5897 44.4902 20.7716 44.3975C20.9509 44.3047 21.1302 44.212 21.307 44.1192C22.0116 43.7482 22.6808 43.3746 23.3046 43.0111C23.3829 42.966 23.4612 42.9209 23.5369 42.8758C24.2289 42.4696 24.8602 42.0735 25.4259 41.7025C25.6153 41.5797 25.7946 41.4568 25.9664 41.339C26.0169 41.3039 26.0674 41.2713 26.1179 41.2387C26.0346 41.6047 26.0017 41.9808 26.0245 42.3568C26.0421 42.6025 26.08 42.8432 26.1381 43.0813C26.2214 43.4423 26.3452 43.7933 26.4967 44.1368C26.2164 44.5404 25.926 44.9365 25.628 45.3276C23.0975 48.6292 19.9357 51.4571 16.3647 53.6106C15.602 54.0694 14.7989 54.5181 14.0792 55.0471C13.3569 55.5685 12.7205 56.1702 12.2811 56.9373C11.5512 58.2109 11.5058 59.6624 11.7331 61.129C11.9073 62.2471 12.2356 63.3727 12.5513 64.4382C12.6902 64.9095 12.819 65.3858 12.9427 65.8671C13.6524 68.5596 14.1651 71.3549 14.5338 74.1476C14.5716 74.4309 14.607 74.7167 14.6373 75H13.3721"
          fill="#2E292F"
        />
        <Path
          opacity="0.1"
          d="M4.55073 73.2025C4.34617 70.6855 4.3386 68.1535 4.53558 65.6365C4.56588 65.2454 4.60629 64.8418 4.70731 64.4632C4.81085 64.0822 5.34119 64.032 5.51797 64.3855C6.19226 65.7468 6.84129 67.1181 7.47012 68.5019C7.84894 69.3342 8.21765 70.1691 8.57879 71.0089C8.90962 71.776 9.40713 72.6259 9.57886 73.4381C9.25055 73.1874 9.02074 72.5206 8.81113 72.1521C8.55353 71.6958 8.29594 71.237 8.03835 70.7808C7.51558 69.8507 6.99282 68.9231 6.47006 67.9955C6.33621 67.7599 6.19731 67.5167 6.03063 67.3011C5.79324 66.9952 5.30078 67.1231 5.25533 67.5067L4.55073 73.2025Z"
          fill="white"
        />
        <Path
          opacity="0.1"
          d="M9.35157 67.973C9.26065 67.5819 9.77584 67.3262 10.0309 67.6395C10.2784 67.9479 10.4779 68.3114 10.6597 68.6624C11.5361 70.3872 12.3063 72.1671 12.968 73.9847C13.0917 74.3256 13.2155 74.6716 13.3721 75H11.6421C11.6396 74.9925 11.6371 74.9824 11.6346 74.9749C10.9199 72.6259 9.90464 70.3571 9.35157 67.973Z"
          fill="white"
        />
        <Path
          d="M47.9679 40.5719C47.9452 40.5568 47.9275 40.5418 47.9073 40.5242C47.9224 40.5368 47.9401 40.5493 47.9578 40.5618C47.9603 40.5644 47.9654 40.5669 47.9679 40.5719Z"
          fill="url(#paint0_radial_1860_3728)"
        />
        <Path
          d="M48.4301 40.9153C48.4174 40.9053 48.4048 40.8953 48.3922 40.8877C48.3568 40.8627 48.3215 40.8376 48.2886 40.81C48.3215 40.8351 48.3568 40.8602 48.3922 40.8852C48.4048 40.8953 48.4174 40.9053 48.4301 40.9153Z"
          fill="url(#paint1_radial_1860_3728)"
        />
        <Path
          d="M61.6305 75H60.3602C60.3955 74.7167 60.4309 74.4309 60.4688 74.1476C60.835 71.3549 61.3476 68.5596 62.0573 65.8671C62.181 65.3858 62.3123 64.9095 62.4512 64.4382C62.7644 63.3727 63.0952 62.2471 63.2695 61.129C63.4968 59.6624 63.4488 58.2109 62.7214 56.9373C62.2795 56.1702 61.6431 55.5685 60.9208 55.0471C60.2011 54.5181 59.4005 54.0694 58.6353 53.6106C55.4381 51.6827 52.5718 49.2159 50.1928 46.3504C49.5968 45.6359 49.0336 44.8964 48.5033 44.1343C48.6649 43.7733 48.7937 43.4022 48.8771 43.0212C48.925 42.8031 48.9604 42.5824 48.9755 42.3568C48.9983 41.9783 48.9654 41.6047 48.8846 41.2362C49.8948 41.9356 51.208 42.7554 52.7233 43.5953C52.8698 43.6755 53.0213 43.7582 53.1728 43.8409C54.0315 44.3047 54.9482 44.7685 55.9078 45.2173C56.0543 45.2875 56.2033 45.3551 56.3523 45.4228C57.0872 45.7588 57.8449 46.0847 58.6202 46.3905C58.8348 46.4758 59.0495 46.561 59.2667 46.6412C59.3879 46.6863 59.5066 46.7315 59.6278 46.7766C60.0041 46.917 60.3854 47.0499 60.7693 47.1777C60.9461 47.2379 61.1229 47.2955 61.2996 47.3532C61.3703 47.3758 61.4411 47.3983 61.5118 47.4209C61.6532 47.4635 61.7921 47.5061 61.931 47.5487C62.0194 47.5763 62.1103 47.6014 62.1987 47.6265C62.2214 47.634 62.2441 47.6415 62.2669 47.6465C62.4032 47.6866 62.5396 47.7242 62.676 47.7618C62.8881 47.822 63.1028 47.8772 63.3149 47.9323C71.2599 49.9529 70.967 62.3072 71.3054 64.6136C71.5327 66.1554 73.0302 71.5655 74 75H63.3579C63.3604 74.9925 63.3629 74.9824 63.3654 74.9749"
          fill="#2E292F"
        />
        <Path
          opacity="0.1"
          d="M65.4211 73.4381C65.5929 72.6259 66.0904 71.776 66.4212 71.0089C66.7823 70.1691 67.1536 69.3343 67.5299 68.5019C68.1587 67.1181 68.8103 65.7468 69.4846 64.3855C69.6588 64.032 70.1892 64.0822 70.2927 64.4632C70.3962 64.8418 70.4366 65.2454 70.467 65.6365C70.6614 68.1535 70.6564 70.6855 70.4493 73.2025L69.7472 67.5067C69.6992 67.1231 69.2068 66.9953 68.9719 67.3011C68.8052 67.5167 68.6638 67.7599 68.5325 67.9955C68.0097 68.9231 67.4844 69.8507 66.9617 70.7808C66.7041 71.237 66.4465 71.6958 66.1889 72.1521C65.9818 72.5206 65.7494 73.1875 65.4211 73.4381Z"
          fill="white"
        />
        <Path
          opacity="0.1"
          d="M65.6484 67.973C65.0978 70.3571 64.0826 72.6259 63.3654 74.9749C63.3629 74.9824 63.3603 74.9925 63.3578 75H61.6304C61.7845 74.6716 61.9082 74.3256 62.032 73.9847C62.6936 72.1671 63.4639 70.3872 64.3427 68.6624C64.522 68.3114 64.7216 67.9479 64.9716 67.6395C65.2266 67.3262 65.7393 67.5819 65.6484 67.973Z"
          fill="white"
        />
        <Path
          d="M26.7594 40.7774C26.7114 40.815 26.6609 40.8501 26.6129 40.8852C26.5876 40.9028 26.5599 40.9203 26.5346 40.9404C26.5952 40.8978 26.6533 40.8526 26.7114 40.81C26.7291 40.8 26.7442 40.7875 26.7594 40.7774Z"
          fill="url(#paint2_radial_1860_3728)"
        />
        <Path
          d="M27.0018 40.5944C26.9892 40.6044 26.974 40.617 26.9589 40.6295C26.9336 40.6471 26.9084 40.6671 26.8831 40.6847C26.9235 40.6546 26.9639 40.6245 27.0018 40.5944Z"
          fill="url(#paint3_radial_1860_3728)"
        />
        <Path
          d="M27.2998 40.3638C27.2948 40.3688 27.2922 40.3738 27.2872 40.3763C27.2493 40.4064 27.2064 40.439 27.1635 40.4716C27.2114 40.434 27.2569 40.3989 27.2998 40.3638Z"
          fill="url(#paint4_radial_1860_3728)"
        />
        <Path
          d="M46.7405 40.8702C46.733 40.8978 46.7279 40.9253 46.7178 40.9529C46.4425 40.7148 45.9324 40.6621 45.344 40.7273H45.3415C44.5459 40.8125 43.604 41.1083 42.8918 41.4418C41.2452 42.2114 37.5 42.0685 37.5 42.0685C37.5 42.0685 33.7548 42.2114 32.1082 41.4418C31.4036 41.1109 30.4717 40.8175 29.6813 40.7298C29.0828 40.6621 28.565 40.7122 28.2847 40.9529C28.2746 40.9253 28.2696 40.8978 28.262 40.8702C28.1408 40.3688 28.1433 39.8248 28.3352 39.356C28.3883 39.2858 28.4463 39.2231 28.507 39.168C28.8176 38.8797 29.1913 38.7693 29.6181 38.7693C29.7015 38.7693 29.7899 38.7744 29.8783 38.7819C29.8934 38.7844 29.9086 38.7844 29.9237 38.7869C29.9667 38.7919 30.0096 38.7969 30.0525 38.8044C30.1005 38.8095 30.1535 38.8195 30.204 38.8295C30.2546 38.837 30.3076 38.8496 30.3606 38.8596C30.5197 38.8947 30.6839 38.9373 30.8506 38.9849C30.944 39.015 31.0374 39.0426 31.1334 39.0727C31.4945 39.1905 31.8759 39.3284 32.2698 39.4688C34.0124 40.0955 37.5 39.9978 37.5 39.9978C37.5 39.9978 40.9876 40.0955 42.7302 39.4688C43.1065 39.3359 43.4676 39.2031 43.8136 39.0902C43.8717 39.0727 43.9297 39.0551 43.9853 39.0376C44.1545 38.9824 44.3212 38.9348 44.4803 38.8972C44.5535 38.8797 44.6242 38.8621 44.695 38.8496C44.7707 38.832 44.8439 38.8195 44.9172 38.8095C44.9273 38.807 44.9374 38.8044 44.945 38.8044C44.9525 38.8019 44.9601 38.8019 44.9652 38.8019C45.0258 38.7919 45.0864 38.7844 45.1445 38.7819C45.2707 38.7693 45.3894 38.7668 45.5031 38.7744C45.5283 38.7744 45.5536 38.7769 45.5814 38.7794C45.6571 38.7844 45.7304 38.7944 45.8011 38.812C45.8263 38.817 45.8491 38.822 45.8743 38.8295C45.9122 38.837 45.9501 38.8496 45.9854 38.8621C46.0284 38.8772 46.0688 38.8922 46.1117 38.9122C46.1496 38.9298 46.19 38.9499 46.2279 38.9724C46.2506 38.985 46.2708 38.9975 46.2935 39.0125C46.3643 39.0551 46.4299 39.1078 46.4956 39.168C46.5562 39.2231 46.6117 39.2858 46.6673 39.356C46.8567 39.8248 46.8592 40.3688 46.7405 40.8702Z"
          fill="#2E292F"
        />
        <Path
          d="M47.1623 39.9075C47.1421 39.89 47.1219 39.8699 47.1017 39.8524L47.0714 39.8223C47.0739 39.8273 47.0789 39.8298 47.084 39.8323C47.1092 39.8574 47.1345 39.8824 47.1623 39.9075Z"
          fill="url(#paint5_radial_1860_3728)"
        />
        <Path
          d="M47.9679 40.5719C47.9452 40.5568 47.9275 40.5418 47.9073 40.5242C47.9224 40.5368 47.9401 40.5493 47.9578 40.5618C47.9603 40.5644 47.9654 40.5669 47.9679 40.5719Z"
          fill="url(#paint6_radial_1860_3728)"
        />
        <Path
          d="M48.3922 40.8852V40.8877C48.3568 40.8627 48.3215 40.8376 48.2886 40.81C48.3215 40.8351 48.3568 40.8602 48.3922 40.8852Z"
          fill="url(#paint7_radial_1860_3728)"
        />
        <Path
          d="M37.5 51.3192H32.6411C30.6056 49.785 28.7999 47.8446 27.4008 45.7312C27.0624 45.2223 26.7442 44.6908 26.4967 44.1368C26.3452 43.7933 26.2215 43.4423 26.1381 43.0813C26.08 42.8432 26.0422 42.6025 26.0245 42.3568C26.0017 41.9808 26.0346 41.6047 26.1179 41.2387C26.1785 41.1936 26.2417 41.151 26.2997 41.1084C26.3174 41.0958 26.3326 41.0833 26.3477 41.0733C26.3856 41.0457 26.4235 41.0206 26.4588 40.9955C26.4841 40.978 26.5094 40.9579 26.5346 40.9404C26.5599 40.9203 26.5876 40.9028 26.6129 40.8852C26.6609 40.8501 26.7114 40.815 26.7594 40.7774C26.7695 40.7699 26.7771 40.7649 26.7846 40.7574C26.8175 40.7348 26.8503 40.7097 26.8831 40.6847C26.9084 40.6671 26.9336 40.6471 26.9589 40.6295C26.974 40.617 26.9892 40.6045 27.0018 40.5944C27.017 40.5844 27.0321 40.5744 27.0447 40.5618C27.0852 40.5318 27.1256 40.5017 27.1634 40.4716C27.2064 40.439 27.2493 40.4064 27.2872 40.3763C27.2922 40.3738 27.2948 40.3688 27.2998 40.3638C27.3049 40.3588 27.3099 40.3563 27.315 40.3538L27.3175 40.3513C27.3352 40.3362 27.3554 40.3212 27.3731 40.3061C27.3832 40.2986 27.3933 40.2886 27.4034 40.2836C27.4109 40.276 27.416 40.271 27.4236 40.266C27.4539 40.2409 27.4842 40.2159 27.512 40.1933C27.6711 40.0604 27.8049 39.9401 27.9185 39.8323C27.9488 39.8047 27.9792 39.7746 28.0044 39.7496C28.1155 39.6393 28.1963 39.5465 28.2494 39.4688C28.2746 39.4287 28.3024 39.3911 28.3352 39.356C28.1433 39.8248 28.1408 40.3688 28.262 40.8702C28.2696 40.8978 28.2746 40.9253 28.2847 40.9529C28.3201 41.0983 28.3681 41.2387 28.4236 41.3766C28.5878 41.8003 28.8176 42.2014 29.055 42.5925C31.1536 46.1022 33.8861 49.3638 37.5 51.3192Z"
          fill="#2E292F"
        />
        <Path
          d="M26.2998 41.1084C26.2417 41.151 26.1785 41.1936 26.1179 41.2387C26.1179 41.2362 26.1179 41.2362 26.1179 41.2337C26.1482 41.2111 26.176 41.1936 26.2088 41.171C26.2391 41.1485 26.2694 41.1284 26.2998 41.1084Z"
          fill="white"
        />
        <Path
          d="M26.7594 40.7774C26.7114 40.815 26.6609 40.8501 26.6129 40.8852C26.6457 40.8602 26.6786 40.8351 26.7114 40.81C26.7291 40.8 26.7442 40.7875 26.7594 40.7774Z"
          fill="white"
        />
        <Path
          d="M48.9755 42.3568C48.9604 42.5824 48.925 42.8031 48.877 43.0212C48.7937 43.4022 48.6649 43.7733 48.5033 44.1343C48.2583 44.6908 47.9401 45.2223 47.6017 45.7312C46.2001 47.8446 44.3944 49.785 42.3614 51.3192H37.5C41.1164 49.3638 43.8464 46.1022 45.9476 42.5925C46.1976 42.1788 46.4425 41.7526 46.6092 41.3014C46.6496 41.1886 46.6875 41.0707 46.7178 40.9529C46.7279 40.9253 46.733 40.8978 46.7405 40.8702C46.8592 40.3688 46.8567 39.8248 46.6673 39.356C46.6976 39.3911 46.7254 39.4287 46.7532 39.4688C46.7784 39.5064 46.8112 39.549 46.8517 39.5941C46.8517 39.5967 46.8567 39.5992 46.8592 39.6042C46.8971 39.6493 46.9426 39.6969 46.9956 39.7496C47.0183 39.7721 47.0436 39.7972 47.0714 39.8223L47.1017 39.8524C47.1219 39.8699 47.1421 39.89 47.1623 39.9075C47.1825 39.9276 47.2027 39.9451 47.2254 39.9652C47.2456 39.9827 47.2658 40.0003 47.286 40.0178C47.3239 40.0504 47.3618 40.0855 47.4022 40.1181C47.43 40.1432 47.4603 40.1682 47.4906 40.1933C47.4906 40.1933 47.4931 40.1958 47.4956 40.1958C47.5057 40.2058 47.5158 40.2134 47.5259 40.2234C47.5436 40.2384 47.5664 40.256 47.584 40.2685C47.5866 40.271 47.5866 40.2735 47.5891 40.2735C47.6118 40.2936 47.6371 40.3136 47.6623 40.3312C47.6699 40.3387 47.6749 40.3437 47.6825 40.3487C47.7027 40.3638 47.7229 40.3813 47.7431 40.3964C47.7633 40.4139 47.7835 40.429 47.8037 40.444C47.8391 40.4716 47.8719 40.4967 47.9073 40.5242C47.9275 40.5418 47.9452 40.5568 47.9679 40.5719C48.0108 40.607 48.0563 40.6396 48.1043 40.6746C48.1169 40.6847 48.127 40.6922 48.1396 40.6997C48.1674 40.7223 48.1952 40.7423 48.223 40.7624C48.2432 40.7799 48.2659 40.795 48.2886 40.81C48.3215 40.8376 48.3568 40.8627 48.3922 40.8877C48.4048 40.8953 48.4174 40.9053 48.43 40.9153C48.4351 40.9203 48.4427 40.9228 48.4477 40.9279C48.4528 40.9329 48.4604 40.9354 48.4654 40.9404C48.526 40.9855 48.5891 41.0281 48.6523 41.0733C48.6977 41.1058 48.7432 41.1384 48.7912 41.171C48.824 41.1936 48.8518 41.2111 48.8846 41.2337V41.2362C48.9654 41.6047 48.9983 41.9783 48.9755 42.3568Z"
          fill="#2E292F"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.4808 21.4212C51.1979 21.2708 50.8141 21.3059 50.3317 21.534C50.2256 21.5841 50.112 21.6468 49.9933 21.717C49.8898 21.7797 49.7887 21.8474 49.6928 21.9201C49.1271 22.3462 48.7154 22.9329 48.4275 23.5897C47.9401 24.7078 47.8113 26.0164 47.9098 27.0343C47.9654 27.6334 48.1497 28.5786 48.8947 29.4635C49.0286 29.624 49.1549 29.7418 49.266 29.8245C49.4352 29.9524 49.5817 30.0025 49.6953 29.99C50.2559 29.9373 50.4655 28.8919 50.9277 27.5432C51.5161 25.8234 52.0869 24.8908 52.0768 23.1936C52.0692 22.1808 51.8747 21.6242 51.4808 21.4212Z"
          fill="#E5856E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.287 22.3061C24.4486 21.5214 23.8576 21.2733 23.5016 21.4187C23.2313 21.529 23.0116 21.8774 22.9056 22.5994C22.7237 23.8429 23.1834 24.5223 23.5016 25.851C23.7162 26.751 23.691 27.3827 24.0976 28.215C24.6683 29.3858 25.2643 29.9925 25.883 29.9875C26.7644 29.9824 27.4336 28.744 27.6685 27.9192C28.3605 25.4925 26.128 23.0933 25.287 22.3061Z"
          fill="#E5856E"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M45.3439 40.7273H45.3414C45.3338 40.7248 45.3237 40.7223 45.3162 40.7173C45.2076 40.0705 45.0864 39.4387 44.9449 38.8044C44.902 38.6064 44.8591 38.4083 44.8111 38.2103C44.7025 37.7465 44.5863 37.2877 44.46 36.8315C44.3338 36.3702 44.1974 35.9114 44.0535 35.4526C39.4243 35.6181 34.7927 35.7861 30.1636 35.954C30.1434 36.1571 30.1232 36.3577 30.103 36.5607C30.0272 37.3003 29.954 38.0423 29.8782 38.7819C29.8126 39.4312 29.7494 40.0805 29.6812 40.7298C29.6737 40.81 29.6661 40.8877 29.6585 40.968C29.2469 41.1033 28.8352 41.2387 28.4236 41.3766C28.5877 41.8003 28.8176 42.2014 29.0549 42.5925C31.1536 46.1022 33.8861 49.3638 37.5 51.3192C41.1164 49.3638 43.8464 46.1022 45.9475 42.5925C46.1975 42.1788 46.4425 41.7526 46.6092 41.3014C46.1874 41.1083 45.7657 40.9178 45.3439 40.7273Z"
          fill="#CC7564"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.3973 14.4643C48.6472 13.098 45.9172 10.5836 41.3614 9.14457C36.3762 7.57019 32.684 8.24958 31.2394 9.14457C30.4869 9.61086 28.618 11.8621 27.3705 14.7602C26.1179 17.6682 25.4815 20.4159 25.287 23.0331C25.2542 23.4593 25.2365 23.8805 25.2264 24.2966C25.1809 26.746 25.5143 28.9596 25.8805 30.1228C26.3149 31.5017 27.0927 33.1187 28.262 34.851C28.4337 35.1042 28.6079 35.3423 28.7847 35.5655C29.5626 36.5632 30.3858 37.3379 31.2369 38.3958C31.4516 38.6616 31.6486 38.9097 31.8354 39.1429V39.1454C32.6133 40.1206 33.2143 40.8326 34.2144 41.349C35.0074 41.7602 35.8206 41.9808 36.6262 42.066H36.6388C37.207 42.1287 37.7677 42.1212 38.293 42.066H38.3056C38.995 41.9958 39.6239 41.8404 40.1693 41.6423C41.4674 41.1685 42.3614 40.2886 43.2857 39.1103C44.0055 38.1978 44.7454 37.1047 45.7076 35.8813C45.7455 35.8312 45.7859 35.7836 45.8238 35.7334C46.7708 34.5426 47.5891 33.7153 48.2053 32.4819C48.8088 31.276 49.1144 30.1529 49.2659 29.0649C49.372 28.3003 49.4023 27.5557 49.4048 26.8161C49.4099 26.1418 49.3947 25.4749 49.3947 24.798C49.3947 23.4568 49.5336 22.256 49.6902 21.1604C50.0614 18.5407 50.516 16.4975 49.3973 14.4643Z"
          fill="#F59275"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M49.0993 8.84874C48.3998 7.61531 47.4957 6.53481 46.4198 5.59721C43.7252 5.06573 41.0457 4.45905 38.6794 3.82478C36.2979 3.183 33.4315 2.34066 30.9389 3.82478C30.0904 4.32618 29.401 5.03314 28.8555 5.89303C28.459 5.82033 28.06 5.81531 27.666 5.89303C26.5447 6.10863 25.4057 6.99609 24.3905 9.14456C22.8247 12.4538 23.6405 15.9058 24.0925 18.0092C24.5218 19.9947 24.8981 22.1081 25.2239 24.2966C25.3527 25.144 25.4714 26.0039 25.58 26.8738C25.5598 25.9813 25.6532 25.0914 25.878 24.2139C26.0497 23.532 26.3376 23.1284 26.474 22.4415C26.6962 21.2983 26.5018 20.5512 27.07 19.7816C27.368 19.378 27.7796 19.0897 28.2595 18.8941C28.3201 18.1045 28.3201 17.3173 28.2595 16.5301C28.2064 15.8331 28.1079 15.1437 27.9615 14.4618C28.757 14.0657 29.5474 13.6721 30.3429 13.2811C31.6309 13.3788 32.9239 13.4766 34.2119 13.5769C35.8004 14.5621 37.495 15.3518 39.2729 15.9409C41.4851 16.668 43.7858 17.0641 46.1193 17.1217C46.0486 17.6081 46.0461 18.1019 46.1193 18.5983C46.3718 20.288 47.4148 21.1329 48.2028 22.439C48.2811 22.5694 48.3543 22.6997 48.4225 22.8351C49.0362 23.9933 49.3544 25.337 49.3922 26.8713C49.3948 26.8538 49.3973 26.8387 49.4023 26.8212C49.8039 24.8031 50.117 22.7799 50.3292 20.7794C50.4428 19.7515 50.5262 18.7287 50.5842 17.7134C50.8014 13.9655 50.5337 11.3733 49.0993 8.84874Z"
          fill="#0C0C0C"
        />
        <Path
          d="M48.5278 3.72507L50.9029 6.17475L50.4555 7.28773L48.8032 5.89938L47.3575 4.10944L48.5278 3.72507Z"
          fill="#B2B2B2"
        />
        <Path
          d="M27.0945 3.72507L24.7194 6.17475L25.1668 7.28773L26.9166 5.54369L28.2648 4.10944L27.0945 3.72507Z"
          fill="#B2B2B2"
        />
        <Path
          d="M49.6908 19C49.6908 31.1177 44.449 41.4441 37.5052 41.4441C30.5562 41.4441 25.3196 31.1177 25.3196 19H24C24 31.6848 30.0588 42 37.5 42C44.9465 42 51 31.6848 51 19H49.6908Z"
          fill="#2C3E50"
        />
        <Path
          d="M37.9488 46.9417C32.7569 46.9417 28.0124 45.0313 24.9316 41.6981C22.2066 38.755 20.9444 34.8883 21.2887 30.5282L21.3345 29.9316H54.5402V30.5798C54.5402 40.2122 47.7189 46.9417 37.9488 46.9417ZM22.545 31.2224C22.3902 34.9686 23.5375 38.2789 25.884 40.8146C28.7238 43.8839 33.1183 45.6451 37.9488 45.6451C46.7321 45.6451 52.9338 39.7475 53.2321 31.2224H22.545Z"
          fill="#808080"
        />
        <Path
          d="M52.1593 37.7855H23.4171V39.082H52.1593V37.7855Z"
          fill="#808080"
        />
        <Path
          d="M48.6827 41.9505H26.842V43.2471H48.6827V41.9505Z"
          fill="#808080"
        />
        <Path
          d="M42.2688 46.0123L40.4788 38.0896V30.5741H41.7696V38.015L43.5252 45.7255L42.2688 46.0123Z"
          fill="#808080"
        />
        <Path
          d="M33.4683 45.9722L32.2119 45.6796L33.9674 37.992V30.5741H35.2582L35.241 38.21L33.4683 45.9722Z"
          fill="#808080"
        />
        <Path
          d="M22.6598 34.0106L21.369 34.0048L20.2675 17.1266H23.8818L22.6598 34.0106ZM21.6501 18.4232L22.0459 24.5044L22.4819 18.4232H21.6501Z"
          fill="#808080"
        />
        <Path
          d="M22.6111 21.4351L20.9559 22.4669L21.6418 23.5672L23.297 22.5353L22.6111 21.4351Z"
          fill="#808080"
        />
        <Path
          d="M22.9467 14.2008H20.9559V17.7749H22.9467V14.2008Z"
          fill="#999999"
        />
        <Path
          d="M20.9559 14.4417H20.1642V16.7423H20.9559V14.4417Z"
          fill="#808080"
        />
        <Path
          d="M54.2992 34.0048L53.0084 33.9991L51.8839 17.1209H55.4982L54.2992 34.0048ZM53.2665 18.4232L53.6738 24.5044L54.1041 18.4232H53.2665Z"
          fill="#808080"
        />
        <Path
          d="M53.146 21.4387L52.4598 22.5389L54.1149 23.5711L54.801 22.471L53.146 21.4387Z"
          fill="#808080"
        />
        <Path
          d="M54.7984 14.2008H53.2264V17.7749H54.7984V14.2008Z"
          fill="#999999"
        />
        <Path
          d="M55.5958 14.4417H54.7983V16.7423H55.5958V14.4417Z"
          fill="#808080"
        />
        <Path
          d="M53.9607 19.1116H21.9312C21.151 7.52868 29.2229 1 37.9488 1C46.6748 1 53.9607 7.76389 53.9607 19.1116Z"
          fill={props.color ? props.color : '#E84097'}
        />
        <Path
          d="M40.2666 7.28772C40.2666 8.25154 39.1307 9.0375 37.7251 9.0375C36.3196 9.0375 35.1837 8.25727 35.1837 7.28772C35.1837 6.32391 36.3196 5.53795 37.7251 5.53795C39.1307 5.54369 40.2666 6.32391 40.2666 7.28772Z"
          fill="#E6E6E6"
        />
        <Path
          d="M39.3085 6.65666C39.3085 7.27052 38.5971 7.76964 37.7251 7.76964C36.8531 7.76964 36.1417 7.27052 36.1417 6.65666C36.1417 6.0428 36.8531 5.54369 37.7251 5.54369C38.5971 5.54369 39.3085 6.03707 39.3085 6.65666Z"
          fill="#6D6E71"
        />
        <Path
          d="M37.7251 8.05648C36.6752 8.05648 35.8491 7.44262 35.8491 6.65666C35.8491 5.87069 36.6695 5.2511 37.7251 5.2511C38.775 5.2511 39.6011 5.86495 39.6011 6.65666C39.5954 7.44262 38.775 8.05648 37.7251 8.05648ZM37.7251 5.83053C37.0252 5.83053 36.4343 6.20917 36.4343 6.65092C36.4343 7.0984 37.0252 7.47131 37.7251 7.47131C38.425 7.47131 39.0159 7.09267 39.0159 6.65092C39.0159 6.20917 38.425 5.83053 37.7251 5.83053Z"
          fill="#BCBEC0"
        />
        <Path
          d="M53.9607 19.1116H21.9312C21.1452 20.1099 29.2229 20.6778 37.9488 20.6778C46.6748 20.6721 53.9607 20.0927 53.9607 19.1116Z"
          fill="#E84097"
        />
        <Path
          d="M53.9607 19.1116H21.9312C21.1452 20.1099 29.2229 20.6778 37.9488 20.6778C46.6748 20.6721 53.9607 20.0927 53.9607 19.1116Z"
          fill="#1A3C59"
          fill-opacity="0.2"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.8921 40.5607) scale(0.0786135 0.078026)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48.2532 40.8907) scale(0.183243 0.181907)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint2_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(26.647 40.8589) scale(0.0983902 0.0976689)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint3_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(26.9425 40.6395) scale(0.0528602 0.0524715)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint4_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.2316 40.4177) scale(0.0616206 0.0611743)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint5_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.1168 39.8649) scale(0.0442222 0.0438944)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint6_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.9376 40.5481) scale(0.0273241 0.0271199)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <RadialGradient
          id="paint7_radial_1860_3728"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48.3404 40.8489) scale(0.0458886 0.0455499)">
          <Stop offset="0.3262" stopColor="#FFBC36" />
          <Stop offset="0.5407" stopColor="#FDB933" />
          <Stop offset="0.7052" stopColor="#F8B129" />
          <Stop offset="0.8526" stopColor="#EEA419" />
          <Stop offset="0.99" stopColor="#E19102" />
          <Stop offset="1" stopColor="#E08F00" />
        </RadialGradient>
        <ClipPath id="clip0_1860_3728">
          <Rect width="75" height="75" fill="white" />
        </ClipPath>
      </Defs>
    </SvG>
  );
}

export default React.memo(Icon);