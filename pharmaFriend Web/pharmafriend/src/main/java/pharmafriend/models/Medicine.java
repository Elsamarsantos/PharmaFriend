package pharmafriend.models;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({@NamedQuery(name=Medicine.QUERYNAME, query="SELECT m From Medicine m WHERE m.medicineName= :medicineName"),
				@NamedQuery(name=Medicine.QUERY_ALL, query="SELECT m From Medicine m")})
public class Medicine extends BaseEntity {
	
	
	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByName";
	public static final String QUERY_ALL = "findAllMedicines";		
			
	private String medicineName;
	private String medicineType;
	private double pvp;
	
	
	
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getMedicineType() {
		return medicineType;
	}
	public void setMedicineType(String medicineType) {
		this.medicineType = medicineType;
	}
	public double getPvp() {
		return pvp;
	}
	public void setPvp(double pvp) {
		this.pvp = pvp;
	}
	
	


}
