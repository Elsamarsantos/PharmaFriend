package pharmafriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.models.NearLocation;
import pharmafriend.models.Pharmacy;
import pharmafriend.repositories.PharmacyRepository;

public class PharmacyBusiness {
	
	@Inject
	PharmacyRepository pharmacyRepository1; 

	//create a pharmacy
	@Transactional
	public void createPharmacy(Pharmacy newpharmacy) {
		pharmacyRepository1.saveEntity(newpharmacy);
	}
	
	//consult pharmacy by name
	@Transactional
	public Pharmacy consultPharmacyByName(String namePharmacy) {
		return pharmacyRepository1.getPharmacyByName(namePharmacy);
	}
	
	//consult pharmacy by location
	@Transactional
	public Pharmacy consultPharmacyByLocation(double lon, double lat) {
		return pharmacyRepository1.getPharmacyByLocation(lon,lat);
		
	}
	
	//consult pharmacy by Id
	@Transactional
	public Pharmacy consultPharmacyById(long id) {
		return pharmacyRepository1.consultEntityId(id);
		
	}
	
	//to get all the pharmacies on the DB
	@Transactional
	public List<Pharmacy> consultAll() {
		return pharmacyRepository1.getAllEntity();
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
	public List<Pharmacy> getTheNeartsPharmacy(double userLon, double userLat) {
		
		
		Iterator <Pharmacy> pharmacyList = pharmacyRepository1.getAllEntity().iterator();
		
		List <Pharmacy> nearestList = new ArrayList<Pharmacy>() ;
		
		while (pharmacyList.hasNext()) {
			
			Pharmacy pharmacyToAdd = pharmacyList.next();
			
			NearLocation userlocation = new NearLocation(userLon,userLat);
			
			NearLocation pharmacy = new NearLocation(pharmacyToAdd.getLonLocation(),pharmacyToAdd.getLatLocation());
			
			double distance= pharmacy.distanceTo(userlocation);
			
			if(distance<1) {
				nearestList.add(pharmacyToAdd);
			}
		}
				
		
		
		return nearestList;
	}
	
	
	
}
