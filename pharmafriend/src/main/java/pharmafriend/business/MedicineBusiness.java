package pharmafriend.business;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.QueryParam;

import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;
import pharmafriend.models.StockInPharmacy;
import pharmafriend.repositories.MedicineRepository;

public class MedicineBusiness {
	
	@Inject
	MedicineRepository medicineRepository1;
	
	@Inject
	StockInPharmacy stockInPharmacy1;
	

	
	//create new medicine
	@Transactional
	public void createMedicine(Medicine medicine){
		medicineRepository1.saveEntity(medicine);
		
	}
	
	//consult medicine by name
	@Transactional 
	public Medicine consultMedicine(String name,String dose, String volumeUnit) {
		return medicineRepository1.getMedicineByNameDose(name,dose,volumeUnit);
	}
	public Medicine consultMedicine(String name) {
		return medicineRepository1.getMedicineByName(name);
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
	public void removeMedicine(String name,String dose, String volumeUnit) {
		medicineRepository1.remove(name,dose,volumeUnit);
	}
	
	//remove medicine by id 
		@Transactional 
		public void removeMedicineById(long id) {
			Medicine medicineToRemove= medicineRepository1.consultEntityId(id);
			
			medicineRepository1.remove(medicineToRemove.getMedicineName(),medicineToRemove.getDose(),medicineToRemove.getVolumeUnit());
		}
	
	
	@Transactional 
	public void updateMedicine(Medicine medicine) {
		
		 medicineRepository1.update(medicine);
	}
	
}
