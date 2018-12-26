package pharmafriend.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.repositories.MedicineRepository;

public class StockInPharmacy {
	
	@Inject
	MedicineRepository medicineRepository1;
	
	//method to generate pharmacy stock 
	@Transactional
	public Pharmacy listStockInPharmacy(Pharmacy pharmacy){
		Random rand = new Random();
		int number = rand.nextInt(10) + 1;
		
	

		List<Medicine> medicineInPharmacy = new ArrayList<Medicine>();

		Iterator<Medicine> listMedicine = medicineRepository1.getAllEntity().iterator();

		while (listMedicine.hasNext()) {
			Medicine medicine1 = listMedicine.next();

			if(medicine1.getId()%number==0) {
				medicineInPharmacy.add(medicine1);
				medicine1.getListPharmacyInMedicine().add(pharmacy);
				
			}
		}
		pharmacy.setListStock(medicineInPharmacy);	
		return pharmacy;
				
	}
}
