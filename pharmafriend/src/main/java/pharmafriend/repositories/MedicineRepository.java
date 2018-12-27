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
	
	protected String getNamedQueryAll() {
		return Medicine.QUERY_ALL;
	}
	
	public Medicine getMedicineByName(String name){
		
		return em.createNamedQuery(Medicine.QUERYNAME, Medicine.class).setParameter("medicineName", name).getSingleResult();
		
	}
	
	
	public Medicine getMedicineByNameDose(String name,String dose, String volumeUnit){
		
		return em.createNamedQuery(Medicine.QUERY_NAME_DOSE, Medicine.class).setParameter("medicineName", name).setParameter("dose", dose).setParameter("volumeUnit", volumeUnit).getSingleResult();
		
	}
	
	public void remove(String name,String dose, String volumeUnit) {
		 em.remove(getMedicineByNameDose(name,dose,volumeUnit));
		
	}
	
	
}
