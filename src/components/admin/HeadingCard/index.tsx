type HeadingCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};
export function HeadingCard({ title, description }: HeadingCardProps) {
  return (
    <div className="w-full shadow-sm py-4 px-1 rounded-md mb-5">
      <h2 className="text-5xl font-bold capitalize mb-2">{title}</h2>
      <p className="text-gray-500 text-md text-shadow-sm">{description}</p>
    </div>
  );
}
