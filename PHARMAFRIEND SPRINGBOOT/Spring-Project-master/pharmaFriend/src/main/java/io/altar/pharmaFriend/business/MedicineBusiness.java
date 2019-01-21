package io.altar.pharmaFriend.business;

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
	
	
	
	
	
	//consult medicine by Id
	@Transactional 
	public MedicineDto consultMedicine(Long id) {
		
		return medicineRepository1.getMedicineId(id);

	}
	
	//consult list medicine with equal names
	@Transactional 
	public List<MedicineDto> getListOfMedicinesWithEqualNames(String name){
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
	
	
	
	
	//get short list of medicines
	@Transactional
	public List <MedicineDto> shortList(int max, int offset){
		
		List <MedicineDto> listMedicine= medicineRepository1.getShortList(max,offset);

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
