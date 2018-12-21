package pharmafriend.business;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

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
	public Pharmacy consultPharmacyByLocation(String namePharmacy) {
		return pharmacyRepository1.getPharmacyByLocation(namePharmacy);
		
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
}
