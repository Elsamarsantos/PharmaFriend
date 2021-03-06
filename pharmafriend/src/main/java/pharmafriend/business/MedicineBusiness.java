package pharmafriend.business;

import java.util.ArrayList;

import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import pharmafriend.Dtos.MedicineDto;
import pharmafriend.models.Medicine;
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
		long lastId= medicineRepository1.getBiggestId();
		long novoId = 1+ lastId;
		medicine.setId(novoId);
		
		medicineRepository1.saveEntity(medicine);
		
	}
	
	//consult medicine by name,dose,volume
	@Transactional 
	public MedicineDto consultMedicine(String name,String dose, String volumeUnit) {
		
		Medicine medicine = medicineRepository1.getMedicineByNameDoseUnit(name,dose,volumeUnit);
		MedicineDto medicineDto=  new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate());
		return medicineDto;
	}
	
	@Transactional 
	public Medicine consultMedicineWithoutDto(String name,String dose, String volumeUnit) {
		
		Medicine medicine = medicineRepository1.getMedicineByNameDoseUnit(name,dose,volumeUnit);
		return medicine;
	}
	
	//consult medicine by name
		public Medicine consultMedicineWithoutDto(String name) {
			
			Medicine medicine = medicineRepository1.getMedicineByName(name);
			return medicine;
		}
	
	
	//consult medicine by name and return medicineDto
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
	
	

	
	//remove medicine by id 
		@Transactional 
		public void removeMedicineById(long id) {
			Medicine medicineToRemove= medicineRepository1.consultEntityId(id);
			
			medicineRepository1.delete(medicineToRemove);
		}
	
	
	@Transactional 
	public void updateMedicine(Medicine medicine) {
		
		 medicineRepository1.update(medicine);
	}
	
	//get list of medicines with equal names
	
	@Transactional 
	public List<MedicineDto> getListMedicinewithEqualName(String name){
		Iterator<Medicine> listMedicines = medicineRepository1.getListMedicineByName(name).iterator();
		List <MedicineDto> listMedicineDto= new ArrayList<MedicineDto>();
		
		while (listMedicines.hasNext()) {
			Medicine medicine = listMedicines.next();
			listMedicineDto.add(new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate()));
		}
		return listMedicineDto;
		 
		
	}
	
	//get list of medicines by name and dose
	
	@Transactional 
	public List<MedicineDto> getListMedicineByNameDose(String name, String dose){
		Iterator<Medicine> listMedicines = medicineRepository1.getListMedicineByNameDose(name,dose).iterator();
		List <MedicineDto> listMedicineDto= new ArrayList<MedicineDto>();
		
		while (listMedicines.hasNext()) {
			Medicine medicine = listMedicines.next();
			listMedicineDto.add(new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate()));
		}
		return listMedicineDto;
	}
		
}
