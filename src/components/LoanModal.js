import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import helpIcon from "../assets/ic_help.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const LoanModal = ({ open, onClick }) => {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="help-modal">
            <img className="error-icon" src={helpIcon} alt="" />
            <p className="offer-modal-help-title">Тавигдах шаардлага</p>
            <div className='help-text-div'>
                <p className='help-text-number'>01</p>
                <p className='help-text-desc'>Бизнесийн үйл ажиллагааг 6 сараас доошгүй<br/>хугацаанд эрхэлсэн байх.</p>
            </div>
            <div style={{marginBottom: '40px'}} className='help-text-div'>
                <p className='help-text-number'>02</p>
                <p className='help-text-desc'>Бусад банк болон ББСБ-д чанаргүй зээлийн<br/>үлдэгдэлгүй байх.</p>
            </div>
            <div onClick={onClick} className="help-cancel-button">
             <Link
                style={{ textDecoration: "none" }}
                to={`${process.env.PUBLIC_URL}/business-loan`}
              >
              <Button className="offer-help-button" >
                <span className="offer-close-button-text">Үргэлжлүүлэх</span>
              </Button>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
