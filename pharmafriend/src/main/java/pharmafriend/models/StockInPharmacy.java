package pharmafriend.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class StockInPharmacy {
	
	private String pharmacyName;
	private String address;
	private double lonLocation;
	private double latLocation;
	public int stock = (int) Math.random()+1;
	
	List<Medicine> medicineStock = new ArrayList();

}
