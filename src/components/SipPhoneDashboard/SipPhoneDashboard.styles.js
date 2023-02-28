import styled from "styled-components";
import { Box, Typography, AdjustIcon, FlexBoxCenter, SettingsSuggestIcon } from "@ui-components";

export const StyledSipPhoneDashboardHeader = styled(Box)`
    display : flex;
    justify-content : space-between;
    padding : 20px 10px;
    color : white;
    background-color : #337bb4;
`;

export const StyledSipPhoneDashboardHeaderTitle = styled(Typography)`
    font-size : 24px;
    font-weight : bold;
    color : white;
`;

export const StyledAdjustIcon = styled(AdjustIcon)`
    color : #51ad32;
    margin-right : 4px;
`;

export const StyledSipPhoneDashboardHeaderRegisteredContainer= styled(FlexBoxCenter)`
    align-items : center;
    margin-right : 15px;
`;

export const StyledSipPhoneDashboardHeaderRightBar = styled(Box)`
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

export const StyledSettingsSuggestIcon = styled(SettingsSuggestIcon)`
    cursor : pointer;
`;

export const StyledSipPhoneDashboardBody = styled(Box)`
    padding : 20px 10px 40px 10px;
    background-color : #d5e4ea;
`;