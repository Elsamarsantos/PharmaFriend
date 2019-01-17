package  io.altar.pharmaFriend.models;

import java.util.List;


import javax.persistence.*;

@Entity
@Table(name="Medicine")
@NamedQueries({@NamedQuery(name=Medicine.QUERYNAME, query="SELECT new io.altar.pharmaFriend.Dtos.MedicineDto(m.id, m.medicineName, m.dose, m.volumeUnit, m.pvp, m.reImbursementRate ) From Medicine m WHERE m.medicineName= :medicineName"),			
				@NamedQuery(name=Medicine.QUERY_NAME_DOSE_UNIT, query="SELECT new io.altar.pharmaFriend.Dtos.MedicineDto(m.id, m.medicineName, m.dose, m.volumeUnit, m.pvp, m.reImbursementRate ) From Medicine m WHERE m.medicineName= :medicineName and m.dose= :dose and m.volumeUnit= :volumeUnit"),
				@NamedQuery(name=Medicine.QUERY_ALL, query="SELECT m FROM Medicine m "),
				@NamedQuery(name=Medicine.QUERY_ALL_DTO, query="SELECT new io.altar.pharmaFriend.Dtos.MedicineDto(m.id, m.medicineName, m.dose, m.volumeUnit, m.pvp, m.reImbursementRate ) FROM Medicine m "),
				@NamedQuery(name=Medicine.QUERY_NAME_DOSE, query="SELECT m From Medicine m WHERE m.medicineName= :medicineName and m.dose= :dose"),
				@NamedQuery(name=Medicine.QUERY_BIGGEST_M, query="SELECT MAX(m.id) FROM Medicine m"),
				@NamedQuery(name=Medicine.QUERY_MAX_ROW, query="SELECT COUNT(*) FROM Medicine"),
				@NamedQuery(name=Medicine.QUERY_MEDICINE_NAME, query="SELECT new io.altar.pharmaFriend.Dtos.MedicineDto(m.id, m.medicineName, m.dose, m.volumeUnit, m.pvp, m.reImbursementRate ) From Medicine m WHERE medicineName LIKE  :letter"),
				@NamedQuery(name=Medicine.QUERY_BY_ID, query="SELECT new io.altar.pharmaFriend.Dtos.MedicineDto(m.id, m.medicineName, m.dose, m.volumeUnit, m.pvp, m.reImbursementRate ) From Medicine m WHERE id= :id"),
				
				
})
public class Medicine extends BaseEntity {


	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByName";
	public static final String QUERY_NAME_DOSE_UNIT= "findByNameDoseUnit";
	public static final String QUERY_NAME_DOSE= "findByNameDose";
	public static final String QUERY_BIGGEST_M= "getTheBiggestNumberOfId";
	public static final String QUERY_ROW_LIMIT= "getLimitedList";
	public static final String QUERY_MAX_ROW= "getMaxRow";
	public static final String QUERY_ALL = "findAllMedicines";
	public static final String QUERY_ALL_DTO = "findAllMedicinesDto";	
	public static final String QUERY_MEDICINE_NAME = "getAllMedicineNames";
	public static final String QUERY_TEST = "gettest";
	public static final String QUERY_BY_ID = "getMedicineById";
	
	private String medicineName;
	
	private String dose;
	
	private String volumeUnit;
	
	private double pvp;
	
	private String reImbursementRate;
	
	
	public List<Pharmacy> getListPharmacyInMedicine() {
		return listPharmacyInMedicine;
	}
	public void setListPharmacyInMedicine(List<Pharmacy> listPharmacyInMedicine) {
		this.listPharmacyInMedicine = listPharmacyInMedicine;
	}
	
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "Stock_in_pharmacy",
    joinColumns = @JoinColumn(name = "medicine_id"),
    inverseJoinColumns = @JoinColumn(name = "pharmacy_id")
)
	private List<Pharmacy> listPharmacyInMedicine;
	
	
	
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getDose() {
		return dose;
	}
	public void setDose(String dose) {
		this.dose = dose;
	}
	public String getVolumeUnit() {
		return volumeUnit;
	}
	public void setVolumeUnit(String volumeUnit) {
		this.volumeUnit = volumeUnit;
	}
	public double getPvp() {
		return pvp;
	}
	public void setPvp(double pvp) {
		this.pvp = pvp;
	}
	public String getReImbursementRate() {
		return reImbursementRate;
	}
	public void setReimbursementRate(String reimbursementRate) {
		this.reImbursementRate = reimbursementRate;
	}
	
	
	
	


}
