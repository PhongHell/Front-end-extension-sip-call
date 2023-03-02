import styled from "styled-components";
import { Box, Button, TextField,  } from "@ui-components";

export const SipPhoneSignInContainer = styled(Box)`
    background-color : white;
`;

export const SipPhoneSignInHeaderTextField = styled(TextField)`
    &&& {
        fieldSet {
            border-radius: 0;
        }
    }

`;

export const SipPhoneSignInButton = styled(Button)`
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