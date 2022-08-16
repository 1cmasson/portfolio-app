import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
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
};

export default function ProjectModal({
  open,
  handleClose,
  title,
  desc,
  url,
  imgs
}) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="project-modal-title"
      open={open}
      fullWidth maxWidth="md"
    >
      <BootstrapDialogTitle id="project-modal-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        {imgs && (
          <Box mb={5}>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {imgs.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
        {desc && (
          <>
            <Typography variant='h6' gutterBottom>
              Project description
            </Typography>
            <Typography gutterBottom>
              {desc}
            </Typography>
          </>
        )}
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
}
