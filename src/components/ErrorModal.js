import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import errorIcon from "../assets/ic_error.png";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const ErrorModal = ({ errorOpen, handleErrorClose, text }) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={errorOpen}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={errorOpen}>
          <div className="error-modal">
            <img className="error-icon" src={errorIcon} alt="" />
            <p className="offer-modal-error-title">Өөө</p>
            <p className="offer-modal-error">{text}</p>
            <div className="offer-cancel-button">
              <Button className="offer-close-button" onClick={handleErrorClose}>
                <span className="offer-close-button-text">Хаах</span>
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
