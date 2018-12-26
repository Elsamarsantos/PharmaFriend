package pharmafriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;

import pharmafriend.Dtos.MedicineDto;
import pharmafriend.Dtos.PharmacyDto;
import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;

public class UserRequestBusiness {
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	@Inject
	MedicineBusiness medicineBusiness1;
	
	public List<PharmacyDto> userRequest(String name,double lon, double lat, double distance) {
		
		Medicine medicine =medicineBusiness1.consultMedicineWithoutDto(name);
		
		Iterator<Pharmacy> listpharmacy= pharmacyBusiness1.getTheNeartsPharmacy(lon,lat,distance).iterator();
		
		List<Pharmacy> listToAdd =new ArrayList<>();
		
		while(listpharmacy.hasNext()) {
			
			Pharmacy pharmacy =listpharmacy.next();
			Iterator <Medicine> listMedicineInPharmacy=pharmacy.getListStock().iterator();
			
			while(listMedicineInPharmacy.hasNext()) {
			if(listMedicineInPharmacy.next().getMedicineName().equals(medicine.getMedicineName())) {
				listToAdd.add(pharmacy);
				System.out.println("entrou");
			}	
			}
		}
		
		
		Iterator<Pharmacy> listpharmacy1= listToAdd.iterator();
		
		List<PharmacyDto> listToAddDto =new ArrayList<>();
		
		
		while (listpharmacy1.hasNext()) {
			Pharmacy pharmacy1 = listpharmacy1.next();

			PharmacyDto pharmacyDto = new PharmacyDto(pharmacy1.getId(),pharmacy1.getPharmacyName(),pharmacy1.getaddress());
			listToAddDto.add(pharmacyDto);
		}

	
return listToAddDto;

	}
	
}
