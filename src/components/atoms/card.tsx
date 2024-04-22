export type Card = { content: string };

export const Card = ({ content }: { content: string }) => {
  return (
    <div
      className="w-[300px] h-[400px] bg-white rounded-3xl flex items-center justify-center text-3xl font-extrabold text-background shadow-2xl cursor-pointer"
      style={{ transform: `rotate(${Math.round(Math.random() * (10 - -10) + -10)}deg)` }}
    >
      {content}
    </div>
  );
};
