type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-8 lg:px-8 xl:px-8">
      {children}
    </div>
  );
}
