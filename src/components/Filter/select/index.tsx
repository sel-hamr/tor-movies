import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFilterProps {
  value?: string;
  onChange?: (value: string) => void;
  items: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

function SelectFilter({
  items,
  onChange,
  value,
  placeholder,
  className,
}: SelectFilterProps) {
  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectFilter;
