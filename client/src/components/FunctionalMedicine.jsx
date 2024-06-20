import "./functionalMedicine.css";
import { FunctionalMedicineSlider } from "./FunctionalMedicineSlider";
import { Philosophy } from "./Philosophy";

export const FunctionalMedicine = () => {
  return (
    <div className="functionalMedicine">
        <h2> Functional <span>Medicine</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at condimentum diam. Aliquam faucibus dolor ac nibh pulvinar pretium. Cras a ipsum eu erat tincidunt efficitur. Nullam vitae <a href="#">elit lectus</a>.</p>
        <FunctionalMedicineSlider />
        <Philosophy />
    </div>
  )
}
