import { CiSearch } from "react-icons/ci";
import { Input } from "./ui/input";

interface SearchInputProps {
  value: string;
  onSearch: (value: string) => void;
}

const SearchInput = ({ value, onSearch, ...props }: SearchInputProps) => {
  return (
    <div className="relative flex">
      <span className="absolute right-1 top-2 text-[24px]">
        <CiSearch />
      </span>
      <Input
        className="pr-8"
        placeholder="جست و جو"
        value={value || ""}
        onChange={(e) => onSearch(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
