import styled from "styled-components";
import { Box, Button, TextField, LocalPhoneIcon, KeyboardBackspace } from "@ui-components";

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
    &&& {
        fieldSet {
            border-radius: 0;
        }
    }

`;

export const SipPhoneDashboardDialPadButtonDial = styled(Button)`
    &&& {
        background-color : #ff0000;
        color : white;
        width : 100%;
        text-align : center;
        align-items : center;
        border-radius : 5px;
        font-weight : bold;
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
    cursor : pointer;
`;

export const StyledBackSpaceButton = styled(Button)`
    &&& {
        text-align : center;
        align-items : center;
        border-radius : 0;
        padding : 0;
        margin : 0;
        border : 1px solid black;
        color : #111111;
    }
`;