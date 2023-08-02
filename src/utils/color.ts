import {Palette} from './palette';
import {Platform} from 'react-native';

const Base = {
  Black: Palette.black,
  White: Palette.white,
};

const Brand = {
  Orange: Palette.orange['600'],
  Blue: Palette.blue['900'],
  Yellow: Palette.yellow['600'],
  Purple: Palette.purple['600'],
  Magenta: Palette.magenta['700'],
};

const Main = {
  Primary: Palette.purple['600'],
  Accent: Palette.orange['600'],
  Active: Palette.purple['600'],
};

const BG = {
  Black: Base.Black,
  White: Base.White,
  Disabled: Palette.gray['50'],
  GrayLight: Palette.gray['100'],
  GrayMedium: Palette.gray['200'],
  OverlayDark5: Palette.cDark['5'],
  OverlayDark10: Palette.cDark['10'],
  OverlayDark25: Palette.cDark['25'],
  OverlayLight8: Palette.cLight['8'],
  OverlayLight15: Palette.cLight['15'],
  OverlayLight30: Palette.cLight['30'],
};

const BGSupport = {
  Error: Palette.red['700'],
  ErrorLow: Palette.red['100'],
  Warning: Palette.yellow['600'],
  WarningLow: Palette.yellow['100'],
  Success: Palette.green['800'],
  SuccessLow: Palette.green['100'],
  Info: Palette.blue['800'],
  InfoLow: Palette.blue['100'],
  Primary: Palette.purple['600'],
  PrimaryLow: Palette.purple['50'],
  Accent: Palette.orange['600'],
  AccentLow: Palette.orange['100'],
};

const Icon = {
  Primary: Palette.yellow['900'],
  Secondary: Palette.orange['200'],
  Support: Palette.yellow['50'],
  Teritary: Palette.magenta['800'],
  Base: Palette.cDark['100'],
};

const TextBlack = {
  Primary: Palette.cDark['100'],
  Secondary: Palette.cDark['60'],
  Teritary: Palette.cDark['45'],
  Disabled: Palette.cDark['25'],
};

const TextLight = {
  Primary: Palette.cLight['100'],
  Secondary: Palette.cLight['60'],
  Teritary: Palette.cLight['45'],
  Disabled: Palette.cLight['30'],
};

const TextSupport = {
  Error: Palette.red['800'],
  // Handpick from Figma design
  Warning: '#996E00',
  Success: Palette.green['900'],
  Info: Palette.blue['900'],
  Action: Palette.magenta['700'],
};

const Stroke = {
  Dark5: Palette.cDark['5'],
  Dark10: Palette.cDark['10'],
  Light8: Palette.cLight['8'],
  Light15: Palette.cLight['15'],
  Gray: Palette.gray['300'],
  GrayLow: Palette.gray['200'],
  GrayDisabled: Palette.gray['50'],
};

const System = {
  KeyboardLight: Platform.select({
    ios: '#D1D5DB',
    android: '#F0F0F3',
  }),
  KeyboardDark: Platform.select({
    ios: '#696969',
    android: '#181B1C',
  }),
};

const GradientColors = Object.freeze({
  // To control Light/Dark -> Provide maskColor to BGColor
  Primary: [
    {color: '#B776F0', offset: '0%', opacity: '1'},
    {color: '#FABA5C', offset: '100%', opacity: '1'},
  ],
  Action: [
    {color: Palette.blue['600'], offset: '0%', opacity: '1'},
    {color: '#4957E5', offset: '100%', opacity: '1'},
  ],
  Accent: [
    {color: Palette.yellow['400'], offset: '0%', opacity: '1'},
    {color: Palette.orange['700'], offset: '100%', opacity: '1'},
  ],
  VerticalProgressBar: [
    Palette.orange[200],
    'rgba(242, 196, 130, 0.48)',
    'rgba(255, 202, 127,0)',
  ],
});

const Colors = Object.freeze({
  Base,
  Brand,
  Main,
  BG,
  BGSupport,
  Icon,
  TextBlack,
  TextLight,
  TextSupport,
  Stroke,
  System,
});

export type ColorsType = typeof Colors;

export {Colors};
