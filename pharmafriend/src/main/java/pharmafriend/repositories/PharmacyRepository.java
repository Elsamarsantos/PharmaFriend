package pharmafriend.repositories;

import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;

public class PharmacyRepository extends EntityRepository<Pharmacy> {
	
	
	private PharmacyRepository() {}
	
	
	protected Class<Pharmacy> getEntityClass() {
		
		return Pharmacy.class;
	}


	protected String getNamedQuery() {
		return Pharmacy.QUERYLOCATION;
	}
	
	protected String getNamedQueryAll() {
		return Pharmacy.QUERY_ALL;
	}


	public Pharmacy getPharmacyByLocation(String locationName) {
		return em.createNamedQuery(Pharmacy.QUERYLOCATION, Pharmacy.class).setParameter("location", locationName).getSingleResult();
		
	}
	
	

}
