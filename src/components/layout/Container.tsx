type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
      {children}
    </div>
  );
}