// import Modal from "@material-ui/core/Modal";
import React from "react";
import {
  ModalElement,
  Overlay,
  ContainerIcon,
  ContentContainerModal,
} from "./style";
import { RiCloseCircleLine } from "react-icons/ri";
import { useOpen } from "../../context/openModal";

export default function SimpleModal(props) {
  const { open, setOpen } = useOpen();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Overlay>
          <ModalElement>
            <ContainerIcon>
              <RiCloseCircleLine onClick={handleClose} />
            </ContainerIcon>
            <ContentContainerModal>{props.children}</ContentContainerModal>
          </ModalElement>
        </Overlay>
      )}
    </>
  );
}
