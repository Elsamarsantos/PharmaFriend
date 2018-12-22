package pharmafriend.business;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.QueryParam;

import pharmafriend.Dtos.MedicineDto;
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
	
	//consult medicine by name,dose,volume
	@Transactional 
	public MedicineDto consultMedicine(String name,String dose, String volumeUnit) {
		
		Medicine medicine = medicineRepository1.getMedicineByNameDose(name,dose,volumeUnit);
		
		MedicineDto medicineDto=  new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate());
		
		return medicineDto;
		
		
	}
	
	//consult medicine by name
	public MedicineDto consultMedicine(String name) {
		
		Medicine medicine = medicineRepository1.getMedicineByName(name);
		
		MedicineDto medicineDto=  new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate());
		
		return medicineDto;
	}
	
	//consult medicine by Id
	@Transactional 
	public MedicineDto consultMedicine(Long id) {
		
		Medicine medicine = medicineRepository1.consultEntityId(id);
		
		MedicineDto medicineDto=  new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate());
		
		return medicineDto;
		
	
	}
	
	//consult all medicine on DB
	@Transactional
	public List<MedicineDto> consultAll() {
		Iterator<Medicine> listMedicine = medicineRepository1.getAllEntity().iterator();
		List <MedicineDto> listMedicineDto= new ArrayList<MedicineDto>();
		
		while (listMedicine.hasNext()) {
			Medicine medicine = listMedicine.next();
			listMedicineDto.add(new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate()));
		}
		return listMedicineDto;
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
