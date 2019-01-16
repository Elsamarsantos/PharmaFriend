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
@NamedQueries({@NamedQuery(name=Pharmacy.QUERYLOCATION, query="SELECT p From Pharmacy p WHERE p.lonLocation= :lonLocation and p.latLocation= :latLocation"),
				@NamedQuery(name=Pharmacy.QUERY_ALL, query="SELECT p From Pharmacy p"), 
				@NamedQuery(name=Pharmacy.QUERYNAME, query="SELECT p From Pharmacy p WHERE p.pharmacyName= :pharmacyName"),
				@NamedQuery(name=Pharmacy.QUERY_BIGGEST_F, query="SELECT MAX(p.id) FROM Pharmacy p"),
				@NamedQuery(name=Pharmacy.QUERY_TEST, query="SELECT distinct p From Pharmacy p join p.listStock m WHERE m.medicineName= :name AND m.dose= :dose")
})

public class Pharmacy extends BaseEntity{
	
	
	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByPharmacy";
	public static final String QUERYLOCATION = "findByLocation";
	public static final String QUERY_ALL = "findAllPharmacy";	
	public static final String QUERY_BIGGEST_F = "getBiggestId";
	public static final String QUERY_TEST = "getteest";
	
	@Column(name="pharmacyName")
	private String pharmacyName;
	
	@Column(name="address")
	private String address;
	
	@Column(name="lonLocation")
	private double lonLocation;
	
	@Column(name="latLocation")
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
