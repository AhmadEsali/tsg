import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import universals from './universals';
import fonts from './fonts';
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  :root {

    font-size:62.5%;

    --green:96, 195, 128;//#60C380
    --green-500:105, 214, 141;//#69D68D
    --green-800:58, 118, 78;//#3A764E
    --blue:45, 122, 247;//#2D7AF7
    --red:225, 104, 111;//#E1686F
    --purple:142, 110, 212;//#8E6ED4
    --purple-4:165, 139, 221;//#A58BDD;
    --purple-7:204, 190, 236;//#CCBEEC
    --purple-700:101, 78, 151;//#654E97
    --light-grey:150, 160, 167;//#96A0A7
    --light-grey-5:250, 250, 250;//#FAFAFA
    --light-grey-200:240, 240, 241;//#F0F0F1
    --light-grey-100:245, 245, 245;//#F5F5F5
    --light-grey-500:222, 222, 224;//#DEDEE0
    --light-grey-700:158, 158, 159;//#9E9E9F
    --navy-navy-40:65, 68, 85;//#414455;
    --np-np-5:238, 233, 249;//#EEE9F9
    --np-np-6:227, 219, 244;//#E3DBF4
    --nn-nn-6:196, 197, 202;//#C4C5CA
    --nn-nn-7:148, 150, 160;//#9496A0
    --nn-nn-8:101, 103, 117;//#656775
    --nn-nn-9:82, 84, 100;//#525464
    --nn-nn-10:54, 56, 75 ;//#36384B
    --navy-500:18, 21, 43;//#12152B
    --off-white:245, 246, 248;//#f5f6f8
    --main-text:32, 48, 70;//#203046
    --border-color:114, 146, 176; //#7292B0
    /* --title-font:  'Hubot-Sans'; */

    --main-font: 'Satoshi-Variable';
    --secondary-font: 'Switzer-Variable';

  }




  ${universals}


`;

export default GlobalStyle;
