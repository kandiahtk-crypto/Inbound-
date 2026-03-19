import clsx from "clsx";

type Props = {
  onClick?: () => void;
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  onClick,
  variant = "solid",
  children,
  className,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:translate-y-[1px]";

  const styles =
    variant === "solid"
      ? "bg-steel text-white hover:bg-steel2 shadow-sm"
      : "border border-steel text-steel hover:bg-cloud";

  return (
    <button type={type} onClick={onClick} className={clsx(base, styles, className)}>
      {children}
    </button>
  );
}
