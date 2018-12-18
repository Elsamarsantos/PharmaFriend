package pharmafriend.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({@NamedQuery(name=Pharmacy.QUERYLOCATION, query="SELECT p From Pharmacy p WHERE p.location= :location"),
				@NamedQuery(name=Pharmacy.QUERY_ALL, query="SELECT p From Pharmacy p")})

public class Pharmacy extends BaseEntity{
	
	private static final long serialVersionUID = 1L;
	
	public static final String QUERYLOCATION = "findByLocation";
	public static final String QUERY_ALL = "findAllPharmacy";		
			
	private String pharmacyName;
	private String location;
	

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
