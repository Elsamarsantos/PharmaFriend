package pharmafriend.repositories;


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
	
	protected String getNamedQuery2() {
		return Pharmacy.QUERYNAME;
	}

	public Pharmacy getPharmacyByName(String pharmacyName) {
		return em.createNamedQuery(Pharmacy.QUERYNAME, Pharmacy.class).setParameter("pharmacyName", pharmacyName).getSingleResult();
		
	}
	
	public Pharmacy getPharmacyByLocation(double lon, double lat) {
		return em.createNamedQuery(Pharmacy.QUERYLOCATION, Pharmacy.class).setParameter("lonLocation", lon).setParameter("latLocation", lat).getSingleResult();
		
	}
	public void remove(String name) {
		 em.remove(getPharmacyByName(name));
		
	}

}
