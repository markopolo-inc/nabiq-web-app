import { Stack } from '@nabiq-ui';

export const GeneratedContents = () => {
  const contents = ['hello', 'world', '2024'];
  return (
    <Stack className='relative h-full'>
      {contents.map((content, index) => (
        <div
          key={content}
          className={`bg-gray-100 p-4 rounded-md h-[200px] absolute w-full z-${
            10 + index * 2
          } top-[${index * 200}px] left-0 w-[${200 - 20 * index}px]`}
        >
          {content}
        </div>
      ))}
    </Stack>
  );
};
