import Button from "./Button";

interface HeaderProps {
  onAddList: () => void,
  onSearchClick: () => void
}

const Header = ({ onAddList, onSearchClick } : HeaderProps) => {
  const size_30 = 30;
  const size_32 = 32;

  return (
    <header className="py-8 pl-5 pr-10 flex shadow-bottom-black">
      <div className="flex-1">
        <h1 className="font-bold text-5xl">Todo with api</h1>
        <p className="mt-2">FastAPI specifically</p>
      </div>
      <div className="flex gap-20 items-center justify-end">
        <Button
          label=""
          imgSrc="/plus.png"
          width={size_30}
          height={size_30}
          alt="Add new task"
          onClick={onAddList}
          className="hover:scale-110 transition-all"
        />
        <Button
          label=""
          imgSrc="/search.svg"
          width={size_32}
          height={size_32}
          alt="Search"
          onClick={onSearchClick}
          className="hover:scale-110 transition-all"
        />
      </div>
    </header>
  );
};

export default Header;
