import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./style.scss";

interface Iprops {
  message: string;
  display: boolean;
  icon?: string;
  type: Types;
  isHighlight?: boolean;
}

export enum Types {
  warning = "warning",
  success = "success",
  error = "error",
  info = "info",
}

export const GenericMessage = (props: Iprops) => {
  const { message, display = true, icon, type, isHighlight = false } = props;

  return (
    <>
      {display && (
        <div className="generic-message">
          <div
            className={`generic-message-content generic-message-content-${type} generic-message-content-${type}${
              isHighlight && "-highlight"
            }`}
          >
            <div
              className={`generic-message-border generic-message-border-${type}`}
            />
            <div className="message">
              {icon && <img src={icon} className="generic-message-icon" />}
              <ReactMarkdown
                remarkPlugins={[gfm]}
                children={message}
                className="generic-message-message"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
