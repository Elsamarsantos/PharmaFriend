package pharmafriend.models;



import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({@NamedQuery(name=Pharmacy.QUERYLOCATION, query="SELECT p From Pharmacy p WHERE p.lonLocation= :lonLocation and p.latLocation= :latLocation"),
				@NamedQuery(name=Pharmacy.QUERY_ALL, query="SELECT p From Pharmacy p"), 
				@NamedQuery(name=Pharmacy.QUERYNAME, query="SELECT p From Pharmacy p WHERE p.pharmacyName= :pharmacyName")
})

public class Pharmacy extends BaseEntity{
	
	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByPharmacy";
	public static final String QUERYLOCATION = "findByLocation";
	public static final String QUERY_ALL = "findAllPharmacy";		
			
	private String pharmacyName;
	private String address;
	private double lonLocation;
	private double latLocation;
	
	
	

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
