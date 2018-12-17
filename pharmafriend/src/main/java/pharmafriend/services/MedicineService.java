package pharmafriend.services;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pharmafriend.business.MedicineBusiness;
import pharmafriend.models.Medicine;

@Path("medicine")
public class MedicineService {
	
	@Inject
	MedicineBusiness medicineBusiness1;
	
	@GET
	@Path("consult/{name}")
	@Produces (MediaType.APPLICATION_JSON)
	public Medicine consutlMedicine(@PathParam("name") String name) {
		return medicineBusiness1.consultMedicine(name);
	}
	
	@POST
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void createMedicine(Medicine medicine) {
		medicineBusiness1.createMedicine(medicine);
	}

}


