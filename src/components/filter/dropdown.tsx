import styles from "./dropdown.module.css";
import { useAppDispatch } from "../../redux/hook";
import { filter } from "../../redux/actions";
import { AnchorClickEvent, DropdownInfo } from "../../models/types";

export default function Dropdown({ name, array }: DropdownInfo) {
  const dispatch = useAppDispatch();

  const handleClick = (e: AnchorClickEvent) => {
    const value = e.target.dataset.value;
    dispatch(filter({ value, name }));
  };

  return (
    <div className={styles.dropdown}>
      <p>{name}</p>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownLimit}>
          {array.map((array: string) => {
            return (
              <a
                key={array}
                data-value={array}
                onClick={(e) => handleClick(e as AnchorClickEvent)}
              >
                {array}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
