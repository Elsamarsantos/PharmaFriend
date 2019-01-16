package  io.altar.pharmaFriend.repositories;



import java.util.List;

import org.springframework.stereotype.Repository;

import  io.altar.pharmaFriend.models.Medicine;
import io.altar.pharmaFriend.Dtos.MedicineDto;


@Repository
public class MedicineRepository extends EntityRepository<Medicine>{

	
	 MedicineRepository() {}
	
	@Override
	protected Class<Medicine> getEntityClass() {
		return Medicine.class;
	}
	
	protected String getNamedQuery() {
		return Medicine.QUERYNAME;
	}
	
	@Override
	protected String getNamedQueryAll() {
		return Medicine.QUERY_ALL;
	}
	
	public Medicine getMedicineByName(String name){
		
		return em.createNamedQuery(Medicine.QUERYNAME, Medicine.class).setParameter("medicineName", name).getSingleResult();
		
	}
	public List<Medicine> getListMedicineByName(String name){
		
		return em.createNamedQuery(Medicine.QUERYNAME, Medicine.class).setParameter("medicineName", name).getResultList();
		
	}
	public List<Medicine> getListMedicineByNameDose(String name,String dose){
		
		return em.createNamedQuery(Medicine.QUERY_NAME_DOSE, Medicine.class).setParameter("medicineName", name).setParameter("dose", dose).getResultList();
		
	}
	
	public Medicine getMedicineByNameDoseUnit(String name,String dose, String volumeUnit){
		
		return em.createNamedQuery(Medicine.QUERY_NAME_DOSE_UNIT, Medicine.class).setParameter("medicineName", name).setParameter("dose", dose).setParameter("volumeUnit", volumeUnit).getSingleResult();
		
	}
	

	
	public long getBiggestId() {
		
		long biggestId = 0;
		
		if (em.createNamedQuery(Medicine.QUERY_MAX_ROW,Long.class).getSingleResult() > 0) {
			biggestId =(long) em.createNamedQuery(Medicine.QUERY_BIGGEST_M).getSingleResult();
		}
		;

		return biggestId;
	}
	

	public List<MedicineDto> getShortList(int max, int offset){

		return em.createNamedQuery(Medicine.QUERY_ALL, MedicineDto.class).setFirstResult(offset).setMaxResults(max).getResultList();
	}
	
	
	
	public Long getNumberOfRows () {
		return  em.createNamedQuery(Medicine.QUERY_MAX_ROW,Long.class).getSingleResult();
	}
	
	public List<MedicineDto> getAllMedicineName(String letter){
		
		return em.createNamedQuery(Medicine.QUERY_MEDICINE_NAME,MedicineDto.class).setParameter("letter", letter + "%").setMaxResults(20).getResultList();
		
	}
	
	
}
