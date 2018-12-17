package pharmafriend.business;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.models.Medicine;
import pharmafriend.repositories.MedicineRepository;

public class MedicineBusiness {
	
	@Inject
	private MedicineRepository medicineRepository1;
	
	@Transactional
	public void createMedicine(Medicine medicine){
		
		medicineRepository1.saveEntity(medicine);
		
	}
	
	@Transactional 
	public Medicine consultMedicine(String medicine) {
		
		Medicine medicine2 = medicineRepository1.consultEntity(medicine);
		
		return medicine2;
	}
	
	@Transactional 
	public Medicine consultMedicineId(Long id) {
		return medicineRepository1.consultEntityId(id);
	}
	

}
