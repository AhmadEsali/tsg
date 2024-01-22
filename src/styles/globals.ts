import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import universals from './universals';
import fonts from './fonts';
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  :root {

    font-size:62.5%;

    --blue-50:236, 241, 255; // #ECF1FF
    --blue-100:196, 212, 254; // #C4D4FE
    --blue-200:168, 192, 254; // #A8C0FE
    --blue-300:140, 172, 254; // #8CACEE
    --blue-400:103, 145, 253; // #6791FD
    --blue-500:65, 117, 252; // #4175FC
    --blue-600:59, 106, 229; // #3B6AE5
    --blue-700:46, 83, 179; // #2E53B3
    --blue-800:36, 64, 139; // #24408B
    --blue-900:27, 49, 106; // #1B316A

    --nblue-1:255, 255, 255; // #FFFFFF
    --nblue-2:253, 254, 255; // #FDFEFF
    --nblue-3:247, 249, 255; // #F7F9FF
    --nblue-4:244, 247, 255; // #F4F7FF
    --nblue-5:227, 234, 255; // #E3EAFF
    --nblue-6:208, 221, 254; // #D0DDFE
    --nblue-7:170, 193, 254; // #AAC1FE
    --nblue-8:132, 165, 253; // #84A5FD
    --nblue-9:116, 154, 253; // #749AFD
    --nblue-10:94, 138, 252; // #5E8AFD
    --nblue-11:88, 134, 252; // #5886FC
    --nblue-12:80, 128, 252; // #5080FC
    --nblue-13:65, 117, 252; // #4175FC

    --navy-1:255, 255, 255; // #FFFFFF
    --navy-2:253, 253, 253 ;
    --navy-3:245, 246, 246;
    --navy-4:241, 241, 241;
    --navy-5: 219, 219, 220;
    --navy-6:195, 196, 197;
    --navy-7:147, 148, 151;
    --navy-8:100, 101, 105;
    --navy-9:81, 82, 86;
    --navy-10:52, 54, 59;
    --navy-11: 45, 46, 52;//2D2E34
    --navy-12: 35, 37, 42;//23252a
    --navy-13: 16, 18, 24;//101218

    --red: 255, 59, 48; // #FF3B30



    --main-font: sans-serif;


  }




  ${universals}


`;

export default GlobalStyle;
