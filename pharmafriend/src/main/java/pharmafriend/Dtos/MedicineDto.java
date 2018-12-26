package pharmafriend.Dtos;


public class MedicineDto {
	
	private long id;
	private String medicineName;
	private String dose;
	private String volumeUnit;
	private double pvp;
	private String reImbursementRate;
	
	
	
	
	public MedicineDto(long id,String medicineName, String dose, String volumeUnit, double pvp, String reImbursementRate) {
		this.id=id;
		this.medicineName = medicineName;
		this.dose = dose;
		this.volumeUnit = volumeUnit;
		this.pvp = pvp;
		this.reImbursementRate = reImbursementRate;
	}
	
	
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


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
	public void setReImbursementRate(String reImbursementRate) {
		this.reImbursementRate = reImbursementRate;
	}
	
}
