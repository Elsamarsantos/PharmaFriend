package pharmafriend.models;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({@NamedQuery(name=Medicine.QUERYNAME, query="SELECT m From Medicine m WHERE m.medicineName= :medicineName"),
				@NamedQuery(name=Medicine.QUERY_NAME_DOSE, query="SELECT m From Medicine m WHERE m.medicineName= :medicineName and m.dose= :dose and m.volumeUnit= :volumeUnit"),
				@NamedQuery(name=Medicine.QUERY_ALL, query="SELECT m From Medicine m")})
public class Medicine extends BaseEntity {
	
	
	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByName";
	public static final String QUERY_NAME_DOSE= "findByNameDose";
	
	public static final String QUERY_ALL = "findAllMedicines";		
			
	private String medicineName;
	private String dose;
	private String volumeUnit;
	private double pvp;
	private String reImbursementRate;
	
	
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
