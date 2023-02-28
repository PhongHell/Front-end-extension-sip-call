import styled from "styled-components";
import { Box, Button, TextField, LocalPhoneIcon } from "@ui-components";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";

export const SipPhoneDashboardDialPadContainer = styled(Box)`
    box-shadow : 0px -3px 0px 0px #ff0000;
    background-color : white;
`;

export const SipPhoneDashboardDialPadHeader = styled(Box)`
    border-bottom : 1px solid black;
    padding : 20px 5px;
`;

export const SipPhoneDashboardDialPadBody = styled(Box)`
`;

export const SipPhoneDashboardDialPadFooter = styled(Box)`
`;

export const SipPhoneDashboardDialPadHeaderTextField = styled(TextField)`

`;

export const SipPhoneDashboardDialPadButtonDial = styled(Button)`
    &&& {
        background-color : #ff0000;
        color : white;
        width : 100%;
        text-align : center;
        align-items : center;
        border-radius : 5px;
    }
`;

export const SipPhoneDashboardDialPadLocalPhoneIcon = styled(LocalPhoneIcon)`

`;

export const SipPhoneDashboardDialPadNumber = styled(Button)`
   &&& {
    font-weight : bold;
    color : black;
    width : 33.33%;
   }
`;

export const StyledBackSpaceIcon = styled(KeyboardBackspace)`
    border : 1px solid black;
    cursor : pointer;
`