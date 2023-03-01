import styled from "styled-components";
import { Checkbox , FlexBox, Box, Typography } from "@ui-components";

export const StyledCheckbox= styled(Checkbox)`
`;

export const StyledSipPhoneSettingWrapper = styled(Box)`
    &&& {
        width : 100%;
        padding : 0;
        margin-bottom : 15px;
    }
`;

export const StyledSipPhoneSettingContainer = styled(FlexBox)`
    &&& {
        width : 100%;
        border: 1px solid black;
        align-items : center;
    }
`;

export const StyledSipPhoneSettingOptionTextContainer = styled(FlexBox)`
    &&& {
        width : 90%;
        height : 42px;
        align-items : center;
        padding-left : 10px;
        border-left: 1px solid black;
        background-color : #dbdbdb;
    }
`;

export const StyledSipPhoneSettingLabel = styled(Typography)`
    &&& {
    }
`;