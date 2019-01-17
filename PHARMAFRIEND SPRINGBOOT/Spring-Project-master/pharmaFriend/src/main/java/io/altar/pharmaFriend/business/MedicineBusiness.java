package io.altar.pharmaFriend.business;

import java.util.ArrayList;

import java.util.Iterator;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import io.altar.pharmaFriend.Dtos.MedicineDto;
import io.altar.pharmaFriend.models.Medicine;
import io.altar.pharmaFriend.repositories.MedicineRepository;

@Component
public class MedicineBusiness {
	
	@Inject
	MedicineRepository medicineRepository1;
	
	
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
	public MedicineDto consultMedicineByNameDoseUnit(String name,String dose, String volumeUnit) {
		
		return  medicineRepository1.getMedicineByNameDoseUnit(name,dose,volumeUnit);
		
	}
	
	@Transactional 
	public List<Medicine> consultMedicineWithoutDto(String name,String dose) {
		
		List<Medicine> medicine = medicineRepository1.getListMedicineByNameDose(name,dose);
		return medicine;
	}
	
	
	
	//consult medicine by Id
	@Transactional 
	public MedicineDto consultMedicine(Long id) {
		
		return medicineRepository1.getMedicineId(id);

	}
	
	//consult list medicine with equal names
	@Transactional 
	public List<Medicine> getListOfMedicinesWithEqualNames(String name){
		return medicineRepository1.getListMedicineEqualNames(name);
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
	
	//get short list of medicines
	@Transactional
	public List <MedicineDto> shortList(int max, int offset){
		
		List <MedicineDto> listMedicine= medicineRepository1.getShortList(max,offset);
		List <MedicineDto> listMedicineDto= new ArrayList<MedicineDto>();

//		for(Medicine medicine: listMedicine) {
//			System.out.println("pedido");
//			listMedicineDto.add(new MedicineDto(medicine.getId(),medicine.getMedicineName(),medicine.getDose(),medicine.getVolumeUnit(),medicine.getPvp(),medicine.getReImbursementRate()));		
//		}
		return listMedicine;
	}
	
	
	//get max row in the list of medicines
	@Transactional
	public Long getNumberRows (){
	
		return  medicineRepository1.getNumberOfRows();
		
	}
	
	
	//get a list of medicine name
	@Transactional
	public List<MedicineDto> getAllMedicineNames (String letter){
	
		return  medicineRepository1.getAllMedicineName(letter);
		
	}
	
}
