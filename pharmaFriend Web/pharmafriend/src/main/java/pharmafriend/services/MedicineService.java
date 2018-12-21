package pharmafriend.services;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pharmafriend.business.MedicineBusiness;
import pharmafriend.models.Medicine;
import pharmafriend.models.Pharmacy;

@Path("medicines")
public class MedicineService {
	
	@Inject
	MedicineBusiness medicineBusiness1;
	
	@GET
	@Path("consult/{medicineName}")
	@Produces (MediaType.APPLICATION_JSON)
	public Medicine consutlMedicine(@PathParam("medicineName") String name) {
		
		return medicineBusiness1.consultMedicine(name);
	}
	
	@GET
	@Path("consultid/{id}")
	@Produces (MediaType.APPLICATION_JSON)
	public Medicine consutlMedicineid(@PathParam("id") long id) {
		return medicineBusiness1.consultMedicineId(id);
	}
	
	@GET
	@Path("consultall")
	@Produces (MediaType.APPLICATION_JSON)
	public List<Medicine> consultAll() {
		return medicineBusiness1.consultAll();
	}
	
	
	@POST
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void createMedicine(Medicine medicine) {
		medicineBusiness1.createMedicine(medicine);
	}
	
	@PUT
	@Path("update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateMedicine(Medicine medicine) {
		
		
		medicineBusiness1.updateMedicine(medicine);
	}

	@DELETE
	@Path("delete")
	@Produces(MediaType.APPLICATION_JSON)
	
	public void removeMedicine(String name) {
		medicineBusiness1.removeMedicine(name);
	}
	
}


