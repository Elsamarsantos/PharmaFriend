package pharmafriend.models;

import java.util.List;

import javax.persistence.Entity;

@Entity
public class Pharmacy extends BaseEntity{
	
	private static final long serialVersionUID = 1L;
	
	private String pharmacyName;
	private String location;
	//private List <Medicine> medicineList;
	
	
	
//	public List<Medicine> getMedicineList() {
//		return medicineList;
//	}
//
//	public void setMedicineList(List<Medicine> medicineList) {
//		this.medicineList = medicineList;
//	}

	public String getPharmacyName() {
		return pharmacyName;
	}
	
	public void setPharmacyName(String pharmacyName) {
		this.pharmacyName = pharmacyName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
	

}
