type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1440px]
        px-5
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;