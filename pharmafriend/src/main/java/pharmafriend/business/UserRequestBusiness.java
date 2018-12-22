package pharmafriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import pharmafriend.Dtos.MedicineDto;
import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;

public class UserRequestBusiness {
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	@Inject
	MedicineBusiness medicineBusiness1;
	
	public List<Pharmacy> userRequeste(String name,double lon, double lat, double distance) {
		
		MedicineDto medicineDto =medicineBusiness1.consultMedicine(name);
		Iterator<Pharmacy> listp= pharmacyBusiness1.getTheNeartsPharmacy(lon, lat,distance).iterator();
		
		List<Pharmacy> listToAdd =new ArrayList<>();
		
		while(listp.hasNext()) {
			Pharmacy pharmacy =listp.next();
			Iterator <Medicine> listOfMedicine =listp.next().getListStock().iterator();
			if(listOfMedicine.next().getMedicineName()==medicineDto.getMedicineName()) {
				listToAdd.add(pharmacy);
			};
			
		}
		
		
		return listToAdd;
	}

}
