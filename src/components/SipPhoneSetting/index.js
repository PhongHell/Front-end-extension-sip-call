import React from 'react';
import { Dialog, DialogTitle, IconButton, CloseIcon, DialogActions, DialogContent, Typography, FlexBoxBetween } from '@ui-components';
import { StyledSavedButton, StyledCloseButton } from "./SipPhoneSetting.styles"
import { styled } from '@mui/material/styles';
import { sipPhoneSettingDataList } from 'utils/constant';
import { SipPhoneSettingItem } from './components';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width : theme.spacing(40)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const  BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export const SipPhoneSetting = ({ handleClose, open }) => {
  const onApplySettingSipPhone = async() => {
    handleClose();
  };

  const onCloseSettingSipPhone = () => {
    handleClose();
  }

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <b>Call</b> Assistant
      </BootstrapDialogTitle>
      <DialogContent dividers>
        {sipPhoneSettingDataList.map((item) => {
          return <SipPhoneSettingItem key={item.label} label={item.label} optionText={item.optionText} />
        })}
      </DialogContent>
      <DialogActions>
        <FlexBoxBetween sx={{width : "100%"}}>
          <StyledCloseButton onClick={onCloseSettingSipPhone}>
            Close
          </StyledCloseButton>
          <StyledSavedButton onClick={onApplySettingSipPhone}>
            Save
          </StyledSavedButton>
        </FlexBoxBetween>
      </DialogActions>
    </BootstrapDialog>
  );
}
