package pharmafriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.Dtos.MedicineDto;
import pharmafriend.Dtos.PharmacyDto;
import pharmafriend.models.Medicine;
import pharmafriend.models.NearLocation;
import pharmafriend.models.Pharmacy;
import pharmafriend.models.StockInPharmacy;
import pharmafriend.repositories.MedicineRepository;
import pharmafriend.repositories.PharmacyRepository;

public class PharmacyBusiness {
	
	@Inject
	PharmacyRepository pharmacyRepository1; 
	@Inject
	MedicineRepository medicineRepository1;
	@Inject
	StockInPharmacy stockInPharmacy1;

	//create a pharmacy
	@Transactional
	public void createPharmacy(Pharmacy newpharmacy) {
		
		newpharmacy=pharmacyRepository1.saveEntity(newpharmacy);
		newpharmacy=stockInPharmacy1.listStockInPharmacy(newpharmacy);
		pharmacyRepository1.saveEntity(newpharmacy);
	}
	
	//consult pharmacy by name
	@Transactional
	public PharmacyDto consultPharmacy(String namePharmacy) {
		Pharmacy pharmacy= pharmacyRepository1.getPharmacyByName(namePharmacy);
		
		List<MedicineDto> listDto = getStockListPharmacy (pharmacy.getId());
		
		PharmacyDto pharmacyDto = new PharmacyDto(pharmacy.getId(),pharmacy.getPharmacyName(),pharmacy.getaddress(),pharmacy.getLonLocation(), pharmacy.getLatLocation(),listDto);
		
		 return pharmacyDto;
		
	}
	
	//consult pharmacy by location
	@Transactional
	public PharmacyDto consultPharmacy(double lon, double lat) {
		Pharmacy pharmacy= pharmacyRepository1.getPharmacyByLocation(lon,lat);
		
		List<MedicineDto> listDto = getStockListPharmacy (pharmacy.getId());
		
		PharmacyDto pharmacyDto = new PharmacyDto(pharmacy.getId(),pharmacy.getPharmacyName(),pharmacy.getaddress(),pharmacy.getLonLocation(), pharmacy.getLatLocation(),listDto);
		
		 return pharmacyDto;
		
		
	}
	
	//consult pharmacy by Id
	@Transactional
	public PharmacyDto consultPharmacy(long id) {
		Pharmacy pharmacy= pharmacyRepository1.consultEntityId(id);
		List<MedicineDto> listDto = getStockListPharmacy (pharmacy.getId());
		
		PharmacyDto pharmacyDto = new PharmacyDto(pharmacy.getId(),pharmacy.getPharmacyName(),pharmacy.getaddress(),pharmacy.getLonLocation(), pharmacy.getLatLocation(),listDto);
		
		 return pharmacyDto;
	}
	
	//to get all the pharmacies on the DB
	@Transactional
	public List<PharmacyDto> consultAll() {

		Iterator<Pharmacy> listPharmacy = pharmacyRepository1.getAllEntity().iterator();
		List <PharmacyDto> listPharmacyDto= new ArrayList<PharmacyDto>();
		
		while (listPharmacy.hasNext()) {
			Pharmacy pharmacy = listPharmacy.next();
			List<MedicineDto> listDto = getStockListPharmacy (pharmacy.getId());
			
			listPharmacyDto.add(new PharmacyDto(pharmacy.getId(),pharmacy.getPharmacyName(),pharmacy.getaddress(),pharmacy.getLonLocation(), pharmacy.getLatLocation(),listDto));
		}
		return listPharmacyDto;
	
	}
	
	//to remove pharmacy
	@Transactional 
	public void removePharmacy(String name) {
		pharmacyRepository1.remove(name);
	}
	
	//it´s not working 
	@Transactional 
	public void updatePharmacy(Pharmacy pharmacy) {
		
		
		pharmacyRepository1.update(pharmacy);
	}
	
	
	//method to get the list of pharmacies nearest to the user
	@Transactional 
	public List<Pharmacy> getTheNeartsPharmacy(double userLon, double userLat, double userdistance) {
		
		Iterator <Pharmacy> pharmacyList = pharmacyRepository1.getAllEntity().iterator();
		
		List <Pharmacy> nearestList = new ArrayList<Pharmacy>() ;
		
		while (pharmacyList.hasNext()) {
			
			Pharmacy pharmacyToAdd = pharmacyList.next();
			
			NearLocation userlocation = new NearLocation(userLon,userLat);
			
			NearLocation pharmacy = new NearLocation(pharmacyToAdd.getLonLocation(),pharmacyToAdd.getLatLocation());
			
			double distance= pharmacy.distanceTo(userlocation);
			
			if(distance<userdistance) {
				nearestList.add(pharmacyToAdd);
			}		
		}
		
		
			
		return nearestList;
	}
	
	
	//this method is to create stock in all pharmacies
	@Transactional 
	public void updateAll() {
		
		
		
		Iterator<Pharmacy> newList = pharmacyRepository1.getAllEntity().iterator();
		while (newList.hasNext()) {
			Pharmacy pharmacy = newList.next();
			stockInPharmacy1.listStockInPharmacy(pharmacy);
			}
		
	}

	//get list of stock in a pharmacy
	@Transactional
	public List<MedicineDto> getStockListPharmacy (long id){
	
		Iterator <Medicine> listMedicine = pharmacyRepository1.consultEntityId(id).getListStock().iterator();
		
		List<MedicineDto> listMedicineDto = new ArrayList<>();
		
		while(listMedicine.hasNext()) {
			Medicine medicine = listMedicine.next();
			listMedicineDto.add(new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate()));
		}
		return listMedicineDto;
		
	}
	
	
}
