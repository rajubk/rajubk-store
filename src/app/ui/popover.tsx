import React, { useState, useRef, useEffect, ReactNode } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./popover.css";

const Popover = ({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false); // Manages the visibility state of the popover
  const popoverRef = useRef<HTMLDivElement>(null); // Reference to the popover element
  const triggerRef = useRef<HTMLButtonElement>(null); // Reference to the button element that triggers the popover

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target as Node) &&
        !triggerRef?.current?.contains(target as Node)
      ) {
        setIsVisible(false); // Close the popover if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popover-container">
      <button
        type="button"
        ref={triggerRef}
        onClick={toggleVisibility}
        className="popover-trigger"
        aria-haspopup="true"
        aria-expanded={isVisible}
        aria-controls="popover-content"
      >
        <span className="flex items-center">
          {children}
          <MdOutlineArrowDropDown />
        </span>
      </button>

      {isVisible && (
        <div
          id="popover-content"
          ref={popoverRef}
          className="popover-content"
          role="dialog"
          aria-modal="true"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
