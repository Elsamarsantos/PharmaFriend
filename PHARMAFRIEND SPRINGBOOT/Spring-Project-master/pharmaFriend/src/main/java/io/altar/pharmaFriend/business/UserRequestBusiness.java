package  io.altar.pharmaFriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;


import io.altar.pharmaFriend.Dtos.MedicineDto;
import  io.altar.pharmaFriend.Dtos.PharmacyDto;
import io.altar.pharmaFriend.repositories.MedicineRepository;
import io.altar.pharmaFriend.repositories.PharmacyRepository;

@Component
public class UserRequestBusiness {
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	@Inject
	MedicineBusiness medicineBusiness1;
	@Inject
	PharmacyRepository pharmacyRepository1; 
	@Inject
	MedicineRepository medicineRepository1;
	
	
	@Transactional
	public List<PharmacyDto> userRequest(String name,String dose,String volumeUnit,double lon, double lat, double distance) {
		
		
		MedicineDto medicine =medicineBusiness1.consultMedicineByNameDoseUnit(name, dose, volumeUnit);
		
		Iterator<PharmacyDto> listpharmacy= pharmacyBusiness1.getTheNeartsPharmacy(lon,lat,distance).iterator();
		
		List<PharmacyDto> listToAdd =new ArrayList<>();
		
		while(listpharmacy.hasNext()) {
			
			PharmacyDto pharmacy =listpharmacy.next();
			Iterator <MedicineDto> listMedicineInPharmacy= pharmacyRepository1.getPharmacyStockAll(pharmacy.getId()).iterator();
			
			while(listMedicineInPharmacy.hasNext()) {
				
				
			if(listMedicineInPharmacy.next().getId()== medicine.getId()) {
				listToAdd.add(pharmacy);
				
			}	
			}
		}	
	
		return listToAdd;

	}
	
	@Transactional
	public List<PharmacyDto> userRequest(String name,String dose,double userLon, double userLat, double userdistance) {
		
		
			
			Iterator <PharmacyDto> pharmacyList = pharmacyRepository1.getPharmacytest(name, dose).iterator();
			
			List <PharmacyDto> nearestList = new ArrayList<PharmacyDto>() ;
			
			while (pharmacyList.hasNext()) {
				
				PharmacyDto pharmacyToAdd = pharmacyList.next();
				
				NearLocationBusiness userlocation = new NearLocationBusiness(userLon,userLat);
				
				NearLocationBusiness pharmacy = new NearLocationBusiness(pharmacyToAdd.getLonLocation(),pharmacyToAdd.getLatLocation());
				
				double distance= pharmacy.distanceTo(userlocation);
				
				if(distance<userdistance) {
					nearestList.add(pharmacyToAdd);
				}		
			}
			
			
		

	return nearestList;
	
	}
	
	@Transactional
	public List<PharmacyDto> pharmacyWithoutMedicine(String name,String dose, String volume,double userLon, double userLat, double userdistance) {
		
		List <PharmacyDto> nearestList = pharmacyBusiness1.getTheNeartsPharmacy(userLon, userLat, userdistance);
		int size=nearestList.size();
		
			
		MedicineDto medicine1 =medicineBusiness1.consultMedicineByNameDoseUnit(name, dose, volume);
			for(int i=0;i<size;i++) {
				PharmacyDto pharmacy=nearestList.get(i);
				List <MedicineDto> listMedicineInPharmacy= pharmacyRepository1.getPharmacyStockAll(pharmacy.getId());
				
				for(MedicineDto medicine2: listMedicineInPharmacy) {
					
					
				if(medicine2.getId()==medicine1.getId()) {
					size--;
					i--;
					nearestList.remove(pharmacy);
					
				}	
				
			}
		
	}
	return nearestList;
	}
	
	@Transactional
	public List<PharmacyDto> pharmacyWithoutMedicine2(String name,String dose,double userLon, double userLat, double userdistance) {
		
		
		List <PharmacyDto> nearestList = pharmacyBusiness1.getTheNeartsPharmacy(userLon, userLat, userdistance);
		int size=nearestList.size();
		
		
			
		Iterator<MedicineDto> medicineList =medicineRepository1.getListMedicineByNameDose(name, dose).iterator();
		
		while(medicineList.hasNext()) {
			MedicineDto medicine1 =  medicineList.next();
			
			for(int i=0;i<size;i++) {
				PharmacyDto pharmacy=nearestList.get(i);
				List <MedicineDto> listMedicineInPharmacy=pharmacyRepository1.getPharmacyStockAll(pharmacy.getId());
				
				for(MedicineDto medicine2: listMedicineInPharmacy) {
					
					
				if(medicine2.getId()==medicine1.getId()) {
					size--;
					i--;
					nearestList.remove(pharmacy);
					
				}	
				
			}
			}
	}
	return nearestList;
	}
}
