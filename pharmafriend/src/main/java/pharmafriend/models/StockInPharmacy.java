package pharmafriend.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.inject.Inject;

import pharmafriend.repositories.MedicineRepository;

public class StockInPharmacy {
	 
	@Inject
	private MedicineRepository medicineRepository1;
	
	
	public int stock = (int) Math.random()+1;
	private List<Medicine> medicineStock;
	
	
	Iterator<Medicine> listmedicine=  medicineRepository1.getAllEntity().iterator();
		
	
	while (listmedicine.hasNext()) {
		medicineStock.add(listmedicine.next());
	}
	
}
