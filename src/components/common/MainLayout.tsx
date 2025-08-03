type MainLayoutProps = {
  title?: string;
  subtitle?: string;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
};

const MainLayout = ({ title, subtitle, children, sidebar }: MainLayoutProps) => {
  return (
    <div className="h-[calc(100vh-var(--header-height))] w-full bg-[var(--background)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        {title && <h1 className="text-4xl font-bold text-[var(--color-text-base)]">{title}</h1>}
        <section className="flex w-full gap-6">
          {/* 사이드 바 */}
          {sidebar && <div className="w-[25%]">{sidebar}</div>}
          {/* 내용 */}
          <section className="flex w-full flex-col gap-6">
            <div className="text-2xl font-semibold text-[var(--color-text-title)]">{subtitle}</div>
            <div>{children}</div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
