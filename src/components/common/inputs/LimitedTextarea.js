import React, { useCallback } from "react";
import styles from "./inputs.module.css";

const LimitedTextarea = ({
  disabled = false,
  isButton = false,
  isLive = false,
  button,
  btnClasses,
  handleClick,
  rows,
  cols,
  value,
  limit,
  placeholder,
  classes,
  content,
  setContent,
  inputClasses,
  onKeyDown,
  ...props
}) => {
  const setFormattedContent = useCallback(
    (text) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );
  const remaining = limit - content?.length;
  return (
    <div>
      <div className={classes}>
        <textarea
          className={`${inputClasses ? inputClasses : styles.input}  ${
            isButton && `${styles.textAreaInput} resize-none`
          } ${content?.length === 0 && ""}`}
          placeholder={placeholder}
          rows={rows == 0 ? 1 : rows}
          cols={cols}
          onChange={(event) => setFormattedContent(event.target.value)}
          value={content}
          onKeyDown={onKeyDown}
          disabled={disabled}
        />
        {isButton ? (
          <button
            className={`${btnClasses}  ${styles.textAreaInput}`}
            onClick={handleClick}
          >
            {button}
          </button>
        ) : (
          content.length > 0 &&
          !isLive && (
            <p className="text-gray-300">
              {remaining} <span>characters left.</span>
            </p>
          )
        )}
        {isLive && content.length > 0 && (
          <button
            className={`${btnClasses}  ${styles.textAreaInput}`}
            onClick={handleClick}
          >
            {button}
          </button>
        )}
      </div>
        {content.length > 0 && isLive && (
          <div className="text-gray-300">
            {remaining} <span>characters left.</span>
          </div>
        )}
    </div>
  );
};
export default LimitedTextarea;
