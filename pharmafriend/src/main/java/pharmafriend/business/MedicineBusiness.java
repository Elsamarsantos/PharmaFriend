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
	
	
	//create new medicine
	@Transactional
	public void createMedicine(Medicine medicine){
		medicineRepository1.saveEntity(medicine);
	}
	
	//consult medicine by name
	@Transactional 
	public Medicine consultMedicine(String medicine) {
		return medicineRepository1.getMedicineByName(medicine);
	}
	
	//consult medicine by Id
	@Transactional 
	public Medicine consultMedicineId(Long id) {
		return medicineRepository1.consultEntityId(id);
	}
	
	//consult all medicine on DB
	@Transactional
	public List<Medicine> consultAll() {
		return medicineRepository1.getAllEntity();
	}
	
	
	//remove medicine by name 
	@Transactional 
	public void removeMedicine(String name) {
		medicineRepository1.remove(name);
	}
	
	//its not working
	@Transactional 
	public void updateMedicine(Medicine medicine) {
		medicineRepository1.update(medicine);
	}
	
}
