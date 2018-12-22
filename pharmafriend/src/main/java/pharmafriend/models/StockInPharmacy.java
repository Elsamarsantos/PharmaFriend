package pharmafriend.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.repositories.MedicineRepository;

public class StockInPharmacy {
	 
	@Inject
	MedicineRepository medicineRepository1;
	
	@Transactional
	public Pharmacy listStockInPharmacy(Pharmacy pharmacy){

		int number = (int)Math.random()*10;

		List<Medicine> medicineInPharmacy = new ArrayList<Medicine>();

		Iterator<Medicine> listMedicine = medicineRepository1.getAllEntity().iterator();

		while (listMedicine.hasNext()) {
			Medicine medicine1 = listMedicine.next();

			if(medicine1.getId()%Math.abs(number-3)==0) {
				medicineInPharmacy.add(medicine1);
				medicine1.getListPharmacyInMedicine().add(pharmacy);
				
			}
		}
		pharmacy.setListStock(medicineInPharmacy);	
		return pharmacy;
				
	}
}
