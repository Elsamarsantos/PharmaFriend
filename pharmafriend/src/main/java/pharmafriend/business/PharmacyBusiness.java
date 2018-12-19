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

	
	@Transactional
	public void createPharmacy(Pharmacy newpharmacy) {
		pharmacyRepository1.saveEntity(newpharmacy);
		
	}
	
	@Transactional
	public Pharmacy consultPharmacyByName(String namePharmacy) {
		return pharmacyRepository1.getPharmacyByName(namePharmacy);
		
	}
	
	@Transactional
	public Pharmacy consultPharmacyByLocation(double lon, double lat) {
		return pharmacyRepository1.getPharmacyByLocation(lon,lat);
		
	}
	@Transactional
	public Pharmacy consultPharmacyById(long id) {
		return pharmacyRepository1.consultEntityId(id);
		
	}
	
	@Transactional
	public List<Pharmacy> consultAll() {
		return pharmacyRepository1.getAllEntity();
	}
	
	@Transactional 
	public void removePharmacy(String name) {
		pharmacyRepository1.remove(name);
	}
	
	@Transactional 
	public void updatePharmacy(Pharmacy pharmacy) {
		pharmacyRepository1.update(pharmacy);
	}
	
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
