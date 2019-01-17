package  io.altar.pharmaFriend.models;



import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name= "Pharmacy")
@NamedQueries({@NamedQuery(name=Pharmacy.QUERYLOCATION, query="SELECT new io.altar.pharmaFriend.Dtos.PharmacyDto(p.id,p.pharmacyName,p.address,p.lonLocation, p.latLocation) From Pharmacy p WHERE p.lonLocation= :lonLocation and p.latLocation= :latLocation"),
				@NamedQuery(name=Pharmacy.QUERY_ALL, query="SELECT p From Pharmacy p"), 
				@NamedQuery(name=Pharmacy.QUERY_ALL_DTO, query="SELECT new io.altar.pharmaFriend.Dtos.PharmacyDto(p.id,p.pharmacyName,p.address,p.lonLocation, p.latLocation) From Pharmacy p"), 
				@NamedQuery(name=Pharmacy.QUERYNAME, query="SELECT new io.altar.pharmaFriend.Dtos.PharmacyDto(p.id,p.pharmacyName,p.address,p.lonLocation, p.latLocation) From Pharmacy p WHERE p.pharmacyName= :pharmacyName"),
				@NamedQuery(name=Pharmacy.QUERY_BIGGEST_F, query="SELECT MAX(p.id) FROM Pharmacy p"),
				@NamedQuery(name=Pharmacy.QUERY_TEST, query="SELECT distinct p From Pharmacy p join p.listStock m WHERE m.medicineName= :name AND m.dose= :dose"),
				@NamedQuery(name=Pharmacy.QUERY_MAX_ROW, query="SELECT COUNT(*) FROM Pharmacy"),
				@NamedQuery(name=Pharmacy.QUERY_PHARMACY_NAME, query="SELECT new io.altar.pharmaFriend.Dtos.PharmacyDto(p.id,p.pharmacyName,p.address,p.lonLocation, p.latLocation) From Pharmacy p WHERE pharmacyName LIKE  :letter"),	 
				@NamedQuery(name=Pharmacy.QUERY_BY_ID, query="SELECT new io.altar.pharmaFriend.Dtos.PharmacyDto(p.id,p.pharmacyName,p.address,p.lonLocation, p.latLocation) From Pharmacy p WHERE p.id= :id"),
				@NamedQuery(name=Pharmacy.QUERY_STOCK, query="SELECT new io.altar.pharmaFriend.Dtos.MedicineDto(m.id, m.medicineName, m.dose, m.volumeUnit, m.pvp, m.reImbursementRate ) From Medicine m join m.listPharmacyInMedicine p WHERE p.id= :id"),

})

public class Pharmacy extends BaseEntity{
	
	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByPharmacy";
	public static final String QUERYLOCATION = "findByLocation";
	public static final String QUERY_ALL = "findAllPharmacy";
	public static final String QUERY_ALL_DTO = "findAllPharmacyDto";
	public static final String QUERY_BIGGEST_F = "getBiggestId";
	public static final String QUERY_TEST = "getteest";
	public static final String QUERY_MAX_ROW = "getNumberOfRows";
	public static final String QUERY_PHARMACY_NAME="getPharmacy";
	public static final String QUERY_BY_ID="getPharmacyById";
	public static final String QUERY_STOCK="getPharmacyStock";
	
	private String pharmacyName;
	
	private String address;
	
	private double lonLocation;
	
	private double latLocation;
	
	@ManyToMany(mappedBy = "listPharmacyInMedicine",fetch = FetchType.EAGER)
	private List<Medicine> listStock;
			
	
	public List<Medicine> getListStock() {
		return listStock;
	}

	public void setListStock(List<Medicine> listStock) {
		this.listStock = listStock;
	}

	public void setMedicineInStock(Medicine medicine) {
		listStock.add(medicine);
	}	

	public String getPharmacyName() {
		return pharmacyName;
	}

	public void setPharmacyName(String pharmacyName) {
		this.pharmacyName = pharmacyName;
	}

	public String getaddress() {
		return address;
	}

	public void setaddress(String address) {
		this.address = address;
	}

	public double getLonLocation() {
		return lonLocation;
	}

	public void setLonLocation(double lonLocation) {
		this.lonLocation = lonLocation;
	}

	public double getLatLocation() {
		return latLocation;
	}

	public void setLatLocation(double latLocation) {
		this.latLocation = latLocation;
	}



	
	

}
