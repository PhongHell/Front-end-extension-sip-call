import styled from "styled-components";
import { Box, Button, TextField, LocalPhoneIcon } from "@ui-components";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";

export const SipPhoneDashboardDialogContainer = styled(Box)`
    box-shadow : 0px -3px 0px 0px #ff0000;
`;

export const SipPhoneDashboardDialogHeader = styled(Box)`
    border-bottom : 1px solid black;
    padding : 20px 5px;
`;

export const SipPhoneDashboardDialogBody = styled(Box)`
`;

export const SipPhoneDashboardDialogFooter = styled(Box)`
`;

export const SipPhoneDashboardDialogHeaderTextField = styled(TextField)`

`;

export const SipPhoneDashboardDialogButtonDial = styled(Button)`
    &&& {
        background-color : #ff0000;
        color : white;
        width : 100%;
        text-align : center;
        align-items : center;
        border-radius : 5px;
    }
`;

export const SipPhoneDashboardDialogLocalPhoneIcon = styled(LocalPhoneIcon)`

`;

export const SipPhoneDashboardDialogNumber = styled(Button)`
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