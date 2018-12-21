package pharmafriend.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import pharmafriend.repositories.MedicineRepository;

public class StockInPharmacy {
	 
	@Inject
	MedicineRepository medicineRepository1;
	
	public void listStockInPharmacy(Pharmacy pharmacy){

		long number = pharmacy.getId();

		List<Medicine> medicineInPharmacy = new ArrayList<Medicine>();

		Iterator<Medicine> listMedicine = medicineRepository1.getAllEntity().iterator();

		while (listMedicine.hasNext()) {
			Medicine medicine1 = listMedicine.next();

			if(medicine1.getId()%Math.abs(number-3)==0) {
				medicineInPharmacy.add(medicine1);
			}
		}
		pharmacy.setListStock(medicineInPharmacy);		
	}
}
