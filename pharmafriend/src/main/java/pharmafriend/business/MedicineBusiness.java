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
		return (Medicine) medicineRepository1.consultEntity(medicine);
	}
	
	

}
