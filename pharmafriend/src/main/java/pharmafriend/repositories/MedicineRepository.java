package pharmafriend.repositories;

import pharmafriend.models.Medicine;

public class MedicineRepository extends EntityRepository<Medicine>{

	
	private MedicineRepository() {}
	
	
	protected Class<Medicine> getEntityClass() {
		return Medicine.class;
	}
	
	protected String getNamedQuery() {
		return Medicine.QUERYNAME;
	}
	
	protected List<Medicine> getAll(){
		
	}
	

}
