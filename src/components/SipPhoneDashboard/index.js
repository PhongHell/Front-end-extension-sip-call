import React from 'react';
import { SipPhoneDashboardDialog } from './components';
import { 
  StyledSipPhoneDashboardHeader,
  StyledSipPhoneDashboardHeaderTitle,
  StyledAdjustIcon, 
  StyledSipPhoneDashboardHeaderRegisteredContainer, 
  StyledSettingsSuggestIcon,
  StyledSipPhoneDashboardHeaderRightBar
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
      <SipPhoneDashboardDialog />
    </div>
  )
};
