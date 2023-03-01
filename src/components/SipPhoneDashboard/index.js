import React from 'react';
import { SipPhoneDashboardDialPad } from './components';
import { 
  StyledSipPhoneDashboardHeader,
  StyledSipPhoneDashboardHeaderTitle,
  StyledAdjustIcon, 
  StyledSipPhoneDashboardHeaderRegisteredContainer, 
  StyledSettingsSuggestIcon,
  StyledSipPhoneDashboardHeaderRightBar,
  StyledSipPhoneDashboardBody,
  SipPhoneDashboardDashboardWrapper
} from "./SipPhoneDashboard.styles";


export const SipPhoneDashboard = ({ onClickSetting }) => {
  return (
    <SipPhoneDashboardDashboardWrapper>
      <StyledSipPhoneDashboardHeader>
        <StyledSipPhoneDashboardHeaderTitle>SIP Phone</StyledSipPhoneDashboardHeaderTitle>
        <StyledSipPhoneDashboardHeaderRightBar>
          <StyledSipPhoneDashboardHeaderRegisteredContainer>
            <StyledAdjustIcon/>
            Registered
          </StyledSipPhoneDashboardHeaderRegisteredContainer>
          <StyledSettingsSuggestIcon onClick={onClickSetting}/>
        </StyledSipPhoneDashboardHeaderRightBar>
      </StyledSipPhoneDashboardHeader>
      <StyledSipPhoneDashboardBody>
        <SipPhoneDashboardDialPad />
      </StyledSipPhoneDashboardBody>
    </SipPhoneDashboardDashboardWrapper>
  )
};
