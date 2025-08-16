"use client";

import Image from "next/image";
import Close from "public/Close.svg";
import "./style.scss";
import React from "react";

interface ModalHeaderProps {
  isShown: boolean;
  children: string;
  handleClickContacts: any;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({isShown, children, handleClickContacts}) => {
  return (
    <>
      {isShown && (
        <div className="modal">
        {children}
          <Image
            src={Close}
            alt="x"
            className="close"
            onClick={() => handleClickContacts("")}
          />
        </div>
      )}
    </>
  );
}

export default ModalHeader;
