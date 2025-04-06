import BrandSelect from "../BrandSelect/BrandSelect.jsx";
import MileageInput from "../MileageInput/MileageInput.jsx";
import PriceSelect from "../PriceSelect/PriceSelect.jsx";
import SearchBtn from "../SearchBtn/SearchBtn.jsx";

const FilterPanel = () => {
  return (
    <form>
      <BrandSelect />
      <PriceSelect />
      <MileageInput />
      <SearchBtn />
    </form>
  );
};
export default FilterPanel;
