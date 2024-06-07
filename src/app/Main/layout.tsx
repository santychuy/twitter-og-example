const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col pt-5 grow min-w-64 basis-[400px] border-l border-r border-white/30">
      {children}
    </main>
  );
};

export default MainLayout;
