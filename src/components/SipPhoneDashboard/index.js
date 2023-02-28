import React from 'react';
import { SipPhoneDashboardDialPad } from './components';
import { 
  StyledSipPhoneDashboardHeader,
  StyledSipPhoneDashboardHeaderTitle,
  StyledAdjustIcon, 
  StyledSipPhoneDashboardHeaderRegisteredContainer, 
  StyledSettingsSuggestIcon,
  StyledSipPhoneDashboardHeaderRightBar,
  StyledSipPhoneDashboardBody
} from "./SipPhoneDashboard.styles";


export const SipPhoneDashboard = () => {
  return (
    <div>
      <StyledSipPhoneDashboardHeader>
        <StyledSipPhoneDashboardHeaderTitle>SIP Phone</StyledSipPhoneDashboardHeaderTitle>
        <StyledSipPhoneDashboardHeaderRightBar>
          <StyledSipPhoneDashboardHeaderRegisteredContainer>
            <StyledAdjustIcon/>
            Registered
          </StyledSipPhoneDashboardHeaderRegisteredContainer>
          <StyledSettingsSuggestIcon />
        </StyledSipPhoneDashboardHeaderRightBar>
      </StyledSipPhoneDashboardHeader>
      <StyledSipPhoneDashboardBody>
        <SipPhoneDashboardDialPad />
      </StyledSipPhoneDashboardBody>
    </div>
  )
};
