package pharmafriend.repositories;

import pharmafriend.models.Pharmacy;

public class PharmacyRepository extends EntityRepository<Pharmacy> {
	
	
	private PharmacyRepository() {}
	
	
	protected Class<Pharmacy> getEntityClass() {
		
		return Pharmacy.class;
	}



	
	
	

}
