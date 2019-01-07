package pharmafriend.repositories;


import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;
import pharmafriend.models.User;

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

	public long getBiggestId() {
		
		long biggestId = 0;
		
		if (em.createNamedQuery(Pharmacy.QUERY_ALL, Pharmacy.class).getResultList().size() > 0) {
			biggestId =(long) em.createNamedQuery(Pharmacy.QUERY_BIGGEST_F).getSingleResult();
		};
		
		return biggestId;
	}
	
}
