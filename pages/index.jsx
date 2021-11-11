import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
// import Label from "../components/Label";
import Modal from "../components/Modal";
import ModalSection from "../components/Modal/ModalSection";
import ModalSectionGroup from "../components/Modal/ModalSectionGroup";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <div className="home">
    <h1>Home</h1>
      <Button onClick={toggleModal}>Создать модальное окно</Button>
      <Modal onClose={toggleModal} show={showModal} t="30%" title="Тестовое окно">
        <div className="modal-body">
          <ModalSectionGroup>
            <ModalSection w="50%">
              <Input id="input-d" />
              <Button intent="primary">test</Button>
            </ModalSection>
            <ModalSection w="20%">
              <Button intent="primary">Test</Button>
            </ModalSection>
            <ModalSection w="30%">
              <Button intent="primary">Test</Button>
            </ModalSection>
          </ModalSectionGroup>
        </div>
        <div className="modal-footer">
          <Button onClick={toggleModal}>Close</Button>
          <Button intent="primary">Save</Button>
        </div>
      </Modal>
    </div>
  )
}
