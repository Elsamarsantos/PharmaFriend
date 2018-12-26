package pharmafriend.Dtos;

import java.util.List;



public class PharmacyDto {
	
	private long id;
	private String pharmacyName;
	private String address;
	private double lonLocation;
	private double latLocation;
	private List<MedicineDto> listStock;
	
	
	public PharmacyDto(long id, String pharmacyName, String address, double lonLocation, double latLocation,
			List<MedicineDto> listStock) {
		
		this.id=id;
		this.pharmacyName = pharmacyName;
		this.address = address;
		this.lonLocation = lonLocation;
		this.latLocation = latLocation;
		this.listStock = listStock;
	}
	
	public PharmacyDto(long id, String pharmacyName, String address, double lonLocation, double latLocation) {
		this.id=id;
		this.pharmacyName = pharmacyName;
		this.address = address;
		this.lonLocation = lonLocation;
		this.latLocation = latLocation;
	}
	
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPharmacyName() {
		return pharmacyName;
	}
	public void setPharmacyName(String pharmacyName) {
		this.pharmacyName = pharmacyName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
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
	public List<MedicineDto> getListStock() {
		return listStock;
	}
	public void setListStock(List<MedicineDto> listStock) {
		this.listStock = listStock;
	}
	
	
	
	
	

}
