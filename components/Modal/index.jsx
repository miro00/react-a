import {
  VscChromeClose as Close,
  VscChromeMinimize as Minimize,
  VscChromeMaximize as Maximize,
  VscChromeRestore as Restore,
  VscBrowser as Window,
} from "react-icons/vsc";
import Draggable from "react-draggable";
import { useState } from "react";

export default function Modal(props) {
  const { w, h, t, mw, mh } = props;
  const { show, title, sections, children, onClose } = props;

  const [modalState, setModalState] = useState();

  if (!show) return null;

  const startDrag = (e) => {
    if (!e.target.classList.contains("modal-header")) {
      return false;
    }
  };

  const minimizeModal = () => {
    setModalState("minimized");
  };
  const maximizeModal = () => {
    setModalState("maximized");
  };

  const restoreModal = () => {
    setModalState(null);
  };

  return (
    <div className="modal-wrap">
      <Draggable
        positionOffset={{ x: "-50%", y: "-50%" }}
        onStart={startDrag}
        cancel=".maximized"
        // bounds="parent"
        // offsetParent={document.querySelector(".modal-wrap")}
      >
        <div
          className={`modal${modalState ? ` ${modalState}` : ""}`}
          style={{
            width: w,
            height: h,
            top: t,
            // transform: `translate(-50%, -${t})`,
            maxWidth: mw,
            maxHeight: mh,
          }}
        >
          <div className="modal-header">
            <div className="modal-header__title">{title}</div>
            <div className="modal-header__buttons">
              <div className="modal-header__btn" onClick={minimizeModal}>
                <Minimize />
              </div>
              {modalState === "maximized" ? (
                <div className="modal-header__btn" onClick={restoreModal}>
                  <Restore />
                </div>
              ) : (
                <div className="modal-header__btn" onClick={maximizeModal}>
                  <Maximize />
                </div>
              )}
              <div className="modal-header__btn" onClick={onClose}>
                <Close />
              </div>
            </div>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </Draggable>

      {modalState === "minimized" && (
        <div className="modal-tray">
          <div className="modal-tray__item" onClick={restoreModal}>
            <div className="modal-tray__item-icon">
              <Window />
            </div>
            {title}
          </div>
        </div>
      )}
    </div>
  );
}
