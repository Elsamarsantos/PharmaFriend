package  io.altar.pharmaFriend.business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

import javax.inject.Inject;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import  io.altar.pharmaFriend.Dtos.MedicineDto;
import  io.altar.pharmaFriend.Dtos.PharmacyDto;
import  io.altar.pharmaFriend.models.Medicine;
import  io.altar.pharmaFriend.models.Pharmacy;
import  io.altar.pharmaFriend.repositories.MedicineRepository;
import  io.altar.pharmaFriend.repositories.PharmacyRepository;

@Component
public class PharmacyBusiness {
	
	@Inject
	PharmacyRepository pharmacyRepository1; 
	@Inject
	MedicineRepository medicineRepository1;
	

	
	
	//create a pharmacy
	@Transactional
	public void createPharmacy(Pharmacy newpharmacy) {
		long lastId= pharmacyRepository1.getBiggestId();
		long novoId = 1+ lastId;
		newpharmacy.setId(novoId);
		
		newpharmacy=pharmacyRepository1.saveEntity(newpharmacy);
		newpharmacy=listStockInPharmacy(newpharmacy);
		pharmacyRepository1.saveEntity(newpharmacy);
	}
	
	//consult pharmacy by name
	@Transactional
	public PharmacyDto consultPharmacy(String namePharmacy) {
			
		 return pharmacyRepository1.getPharmacyByName(namePharmacy);	
	}
	
	//consult pharmacy by location
	@Transactional
	public PharmacyDto consultPharmacy(double lon, double lat) {
		
		 return pharmacyRepository1.getPharmacyByLocation(lon,lat);
		
	}
	
	//consult pharmacy by Id
	@Transactional
	public PharmacyDto consultPharmacy(long id) {
		return pharmacyRepository1.getPharmacyById(id);
	}
	
	//to get all the pharmacies on the DB
//	@Transactional
//	public List<PharmacyDto> consultAll() {
//
//		Iterator<Pharmacy> listPharmacy = pharmacyRepository1.getAllEntity().iterator();
//		List <PharmacyDto> listPharmacyDto= new ArrayList<PharmacyDto>();
//		
//		while (listPharmacy.hasNext()) {
//			Pharmacy pharmacy = listPharmacy.next();
//			List<MedicineDto> listDto = getStockListPharmacy (pharmacy.getId());
//			
//			listPharmacyDto.add(new PharmacyDto(pharmacy.getId(),pharmacy.getPharmacyName(),pharmacy.getaddress(),pharmacy.getLonLocation(), pharmacy.getLatLocation(),listDto));
//		}
//		return listPharmacyDto;
//	
//	}
	

	
	//to remove pharmacy
		@Transactional 
		public void removePharmacy(long id) {
			Pharmacy pharmacy =  pharmacyRepository1.consultEntityId(id);
			
			List<Medicine> stock= pharmacy.getListStock();
			for(Medicine m: stock) {
				m.getListPharmacyInMedicine().remove(pharmacy);
				medicineRepository1.update(m);
			}
			
			
			pharmacy.setListStock(null);
			pharmacyRepository1.update(pharmacy);
			
			pharmacyRepository1.delete(pharmacy);
		}
	
	//method to edit pharmacy
	@Transactional 
	public void updatePharmacy(Pharmacy pharmacy) {
		
		
		pharmacyRepository1.update(pharmacy);
	}
	
	
	//method to get the list of pharmacies nearest to the user
	@Transactional 
	public List<PharmacyDto> getTheNeartsPharmacy(double userLon, double userLat, double userdistance) {
		
		
		Iterator <PharmacyDto> pharmacyListDto = pharmacyRepository1.getAllPharmaciesDto().iterator();
		
		List <PharmacyDto> nearestList = new ArrayList<PharmacyDto>() ;
		
		while (pharmacyListDto.hasNext()) {
			
			PharmacyDto pharmacyToAdd = pharmacyListDto.next();
			
			NearLocationBusiness userlocation = new NearLocationBusiness(userLon,userLat);
			
			NearLocationBusiness pharmacy = new NearLocationBusiness(pharmacyToAdd.getLonLocation(),pharmacyToAdd.getLatLocation());
			
			double distance= pharmacy.distanceTo(userlocation);
			
			if(distance<userdistance) {
				nearestList.add(pharmacyToAdd);
			}		
		}
		
		return nearestList;
	}
	
	// method to transform pharmacy in a phamracy dto
//	@Transactional
//	public List<PharmacyDto> transformInToDto(List<Pharmacy> newList){
//		Iterator<Pharmacy> newlist1 = newList.iterator();
//		ArrayList<PharmacyDto> listPharmacyDto = new ArrayList(); 
//		while (newlist1.hasNext()) {
//			Pharmacy pharmacy = newlist1.next();
//			//List<MedicineDto> listDto = getStockListPharmacy (pharmacy.getId());
//			
//			listPharmacyDto.add(new PharmacyDto(pharmacy.getId(),pharmacy.getPharmacyName(),pharmacy.getaddress(),pharmacy.getLonLocation(), pharmacy.getLatLocation()));
//		}
//		return listPharmacyDto;
//	
//		
//	}
	
	
	//this method is to create stock in all pharmacies
	@Transactional 
	public void updateAll() {
		
		Iterator<Pharmacy> newList = pharmacyRepository1.getAllEntity().iterator();
		while (newList.hasNext()) {
			Pharmacy pharmacy = newList.next();
			listStockInPharmacy(pharmacy);
			}
		
	}

	//get list of stock in a pharmacy
	@Transactional
	public List<MedicineDto> getStockListPharmacy (long id,int max, int offset){
	
		return pharmacyRepository1.getPharmacyStock(id,max,offset);
		
	}
	
	//get number row in the list Stock of pharmacies
			@Transactional
			public long getNumberRowsStock (long id){
			
				return  pharmacyRepository1.getNumberOfRowsStock(id);
				
			}
	
	
	
	//method to generate pharmacy stock 
		@Transactional
		public Pharmacy listStockInPharmacy(Pharmacy pharmacy){
			Random rand = new Random();
			int number = rand.nextInt(10) + 1;

			List<Medicine> medicineInPharmacy = new ArrayList<Medicine>();

			Iterator<Medicine> listMedicine = medicineRepository1.getAllEntity().iterator();

			while (listMedicine.hasNext()) {
				Medicine medicine1 = listMedicine.next();

				if(medicine1.getId()%number==0) {
					medicineInPharmacy.add(medicine1);
					medicine1.getListPharmacyInMedicine().add(pharmacy);
					
				}
			}
			pharmacy.setListStock(medicineInPharmacy);	
			return pharmacy;
					
		}
	
		
		
		//get short list of Pharmacies
		@Transactional
		public List <PharmacyDto> shortList(int max, int offset){
	
			return pharmacyRepository1.getShortList(max,offset);
		}
		
		
		//get max row in the list of pharmacies
		@Transactional
		public Long getNumberRows (){
		
			return  pharmacyRepository1.getNumberOfRows();
			
		}
		
		
		//get a list of pharmacy name
		@Transactional
		public List<PharmacyDto> getAllPharmacyNames (String letter){
		
			return  pharmacyRepository1.getAllPharmacyName(letter);
			
		}
		
	
	
}
