import React from 'react';
import { 
    StyledCheckbox,
    StyledSipPhoneSettingOptionTextContainer,
    StyledSipPhoneSettingWrapper,
    StyledSipPhoneSettingContainer,
    StyledSipPhoneSettingLabel
} from "./SipPhoneSettingItem.styles"

export const SipPhoneSettingItem = ({label, optionText, onChecked}) => {
  return (
    <StyledSipPhoneSettingWrapper>
        <StyledSipPhoneSettingLabel>{label}</StyledSipPhoneSettingLabel>
        <StyledSipPhoneSettingContainer>
            <StyledCheckbox onChange={onChecked} />
            <StyledSipPhoneSettingOptionTextContainer>
                {optionText}
            </StyledSipPhoneSettingOptionTextContainer>
        </StyledSipPhoneSettingContainer>
    </StyledSipPhoneSettingWrapper>
  )
}
