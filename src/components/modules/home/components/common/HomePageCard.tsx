export const HomePageCard = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div className='bg-white rounded-xl p-8 shadow-lg flex flex-row gap-4 items-start min-h-[250px]'>
      <div>{icon}</div>
      <div className='flex gap-3 flex-col justify-between h-full'>{children}</div>
    </div>
  );
};
