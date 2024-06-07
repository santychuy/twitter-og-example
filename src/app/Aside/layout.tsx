const AsideLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <aside
      className={`min-w-32 max-w-52 basis-[208px] shrink-[999999] p-3 ${className}`}
    >
      {children}
    </aside>
  );
};

export default AsideLayout;
