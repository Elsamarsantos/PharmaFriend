package pharmafriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;


import pharmafriend.Dtos.PharmacyDto;
import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;

public class UserRequestBusiness {
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	@Inject
	MedicineBusiness medicineBusiness1;
	
	@Transactional
	public List<PharmacyDto> userRequest(String name,String dose,String volumeUnit,double lon, double lat, double distance) {
		
		Medicine medicine =medicineBusiness1.consultMedicineWithoutDto(name, dose, volumeUnit);
		
		Iterator<Pharmacy> listpharmacy= pharmacyBusiness1.getTheNeartsPharmacy(lon,lat,distance).iterator();
		
		List<Pharmacy> listToAdd =new ArrayList<>();
		
		while(listpharmacy.hasNext()) {
			
			Pharmacy pharmacy =listpharmacy.next();
			Iterator <Medicine> listMedicineInPharmacy=pharmacy.getListStock().iterator();
			
			while(listMedicineInPharmacy.hasNext()) {
			if(listMedicineInPharmacy.next().getId().equals(medicine.getId())) {
				listToAdd.add(pharmacy);
				
			}	
			}
		}
		
		
		Iterator<Pharmacy> listpharmacy1= listToAdd.iterator();
		
		List<PharmacyDto> listToAddDto =new ArrayList<>();
		
		
		while (listpharmacy1.hasNext()) {
			Pharmacy pharmacy1 = listpharmacy1.next();

			PharmacyDto pharmacyDto = new PharmacyDto(pharmacy1.getId(),pharmacy1.getPharmacyName(),pharmacy1.getaddress(),pharmacy1.getLonLocation(),pharmacy1.getLatLocation());
			listToAddDto.add(pharmacyDto);
		}

	
		return listToAddDto;

	}
	
}
