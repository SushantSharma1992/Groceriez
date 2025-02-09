import React, { useRef, useState } from "react";
import BarCodeScanner from "./BarCodeScanner";
import { IoMdBarcode } from "react-icons/io";

const BarCodeDialog = ({ setBarcode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef();

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsDialogOpen(dialogRef.current.open);
  };
  const closeDialog = () => {
    dialogRef.current.close();
    setIsDialogOpen(dialogRef.current.open);
  };
  return (
    <div>
      <dialog className="barcode_scanner_modal" ref={dialogRef}>
        <div className="direction_column">
          {isDialogOpen && (
            <BarCodeScanner
              updateBarcode={setBarcode}
              closeDialog={closeDialog}
            />
          )}
          <button
            className="secondary button_margin_top "
            value="cancel"
            formMethod="dialog"
            onClick={closeDialog}
          >
            Cancel
          </button>
        </div>
      </dialog>
      <IoMdBarcode
        onClick={() => {
          openDialog();
        }}
        className="barcode_image"
      />
    </div>
  );
};

export default BarCodeDialog;
