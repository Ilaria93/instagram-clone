import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import UploadImageButton from './UploadImageButton';
import images from '../assets/images_upload.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/modal.css'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 450,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    'border-radius': '8px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
    const icon = props.icon ;
    const title = props.title
    const text = props.text
    const classes = useStyles();
   
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className="modal__top">
                <h4 id="simple-modal-title">{title} </h4>
            </div>
            <hr className="modal__hr"/>
            <div className="modal__center">
                <img src={images}/>
                <p>{text}</p>
                <UploadImageButton />
            </div>
            <SimpleModal />
        </div>
    );

    return (
        <div>
         <FontAwesomeIcon className="menu__icon" icon={icon} onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
    );
}
