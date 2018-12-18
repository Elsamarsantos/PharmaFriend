package pharmafriend.business;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;
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
		
		return medicineRepository1.getMedicineByName(medicine);
		
		
	}
	
	@Transactional 
	public Medicine consultMedicineId(Long id) {
		return medicineRepository1.consultEntityId(id);
	}
	
	@Transactional
	public List<Medicine> consultAll() {
		return medicineRepository1.getAllEntity();
		
	}
}
