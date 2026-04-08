export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "clamp(2rem, 5vw, 5rem)",
        paddingRight: "clamp(2rem, 5vw, 5rem)",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
