import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import NumberFormat from "react-number-format";
import successIcon from "../assets/ic_success_leaf.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const OfferModal = ({ open, handleClose, amount }) => {
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
          <div
            className={amount < 5000000 ? "offer-modal small" : "offer-modal"}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src={successIcon}
                alt="success"
                style={{
                  width: 90,
                  height: 90,
                  marginTop: 50,
                  marginBottom: 20,
                }}
              />
            </div>
            {amount < 5000000 ? (
              <>
                <p className="offer-modal-title">
                  Өөө, танд зээлийн эрх үүссэнгүй.
                </p>
                <p className="offer-modal-description-1">
                  Дараа дахин эрхээ шинэчлэх боломжтой шүү.
                </p>
                <div className="offer-cancel-button">
                  <Button className="offer-close-button" onClick={handleClose}>
                    <span className="offer-close-button-text">Дуусгах</span>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="offer-modal-title">
                  Таны зээлийн хүсэлтийг хүлээн авлаа
                </p>
                <p className="offer-modal-description-1">
                  Бид тантай эргэн холбогдох болно.
                </p>
                <div className="offer-modal-offer-div">
                  <span className="offer-div-title">Санал болгож буй дүн</span>
                  <br />
                  <span className="offer-div-offer">
                    <NumberFormat
                      defaultValue={amount}
                      thousandSeparator
                      displayType="text"
                      prefix="₮ "
                    />
                  </span>
                  <Divider
                    style={{
                      backgroundColor: "#f0f2f6",
                      margin: "15px",
                    }}
                  />
                  <p className="offer-div-description">
                    Таны оруулсан мэдээлэлд үндэслэн энэхүү зээлийн дүнг санал
                    болгож байна.
                  </p>
                </div>
                <Button className="offer-close-button" onClick={handleClose}>
                  <span className="offer-close-button-text">Дуусгах</span>
                </Button>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
