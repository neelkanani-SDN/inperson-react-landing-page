import { createPortal } from "react-dom";
import React from "react";
import { IoIosClose as CloseIcon } from "react-icons/io";
import { BiArrowBack as BackIcon } from "react-icons/bi";

export function Modal({
  title,
  onClose,
  onBack,
  children,
  className,
  actions,
  ...props
}) {
  React.useEffect(() => {
    document.onkeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    return function () {
      document.onkeydown = null;
    };
    //eslint-disable-next-line
  }, []);

  return createPortal(
    <div className="z-high fixed top-0 bottom-0 left-0 bg-gray-800 bg-opacity-80 right-0 flex-center ">
      <div
        className={`  w-full max-h-[90vh] transition-all mx-4 md:w-8/12 lg:w-6/12 shadow-lg animate__animated animate__slideInDown  bg-white overflow-y-auto scrollbar-hide rounded-md ${className} ${
          !actions ? "pb-5" : ""
        }`}
        {...props}
      >
        <div className="px-5 sticky top-0 bg-white  py-3  flex justify-between items-center">
          {onBack && (
            <>
              <span
                onClick={onBack}
                className="h-10 w-10 ml-auto rounded-full bg-gray-100 flex-center"
              >
                <BackIcon className="text-3xl text-gray-500 cursor-pointer" />
              </span>
            </>
          )}
          {title && <h4 className="text-xl text-gray-600">{title}</h4>}
          {onClose && (
            <>
              <span
                onClick={onClose}
                className="h-10 w-10 ml-auto rounded-full bg-gray-100 flex-center"
              >
                <CloseIcon className="text-3xl text-gray-500 cursor-pointer" />
              </span>
            </>
          )}
        </div>
        <div className="px-5 scrollbar-hide ">{children} </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
