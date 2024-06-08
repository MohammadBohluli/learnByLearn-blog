import { TooltipProps, tooltip } from "./tooltipType";

const Tooltip = (props: TooltipProps) => {
  const { message, children, visible, placement, offset = 5 } = props;

  return (
    <div className="group relative cursor-pointer">
      {children}
      {visible && (
        <span
          style={{ "--offset": `${offset}px` } as React.CSSProperties}
          className={tooltip({ placement })}
        >
          {message}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
