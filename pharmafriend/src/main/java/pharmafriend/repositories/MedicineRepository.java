package pharmafriend.repositories;

import java.util.List;

import pharmafriend.models.Medicine;

public class MedicineRepository extends EntityRepository<Medicine>{

	
	private MedicineRepository() {}
	
	
	protected Class<Medicine> getEntityClass() {
		return Medicine.class;
	}
	
	protected String getNamedQuery() {
		return Medicine.QUERYNAME;
	}
	
	protected String getNamedQueryAll() {
		return Medicine.QUERY_ALL;
	}
	
	public Medicine getMedicineByName(String name){
		
		return em.createNamedQuery(Medicine.QUERYNAME, Medicine.class).setParameter("medicineName", name).getSingleResult();
		
	}
	

}
