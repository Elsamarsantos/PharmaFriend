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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import pharmafriend.Dtos.MedicineDto;
import pharmafriend.business.MedicineBusiness;
import pharmafriend.models.Medicine;


@Path("medicines")
public class MedicineService {
	
	@Inject
	MedicineBusiness medicineBusiness1;
	
	@GET
	@Path("consult")
	@Produces (MediaType.APPLICATION_JSON)
	public MedicineDto consultMedicine(@QueryParam("medicineName") String name,@QueryParam("dose") String dose ,@QueryParam("volumeUnit") String volumeUnit) {
		
		return medicineBusiness1.consultMedicine(name,dose,volumeUnit);
	}
	
	
	@GET
	@Path("consultbyname")
	@Produces (MediaType.APPLICATION_JSON)
	public MedicineDto consultMedicine(@QueryParam("medicineName") String name) {
		
		return medicineBusiness1.consultMedicine(name);
	}
	
	@GET
	@Path("consultid/{id}")
	@Produces (MediaType.APPLICATION_JSON)
	public MedicineDto consultMedicineId(@PathParam("id") long id) {
		return medicineBusiness1.consultMedicine(id);
	}
	
	@GET
	@Path("consultall")
	@Produces (MediaType.APPLICATION_JSON)
	public List<MedicineDto> consultAll() {
		return medicineBusiness1.consultAll();
	}
	
	
	@POST
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Medicine createMedicine(Medicine medicine) {
		medicineBusiness1.createMedicine(medicine);
		return medicine;
	}
	
	@PUT
	@Path("update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateMedicine( Medicine medicine) {
	
		medicineBusiness1.updateMedicine(medicine);
	}

	
	
	@DELETE
	@Path("delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	
	public void removeMedicine(@PathParam("id")long id) {
		medicineBusiness1.removeMedicineById(id);
	}
	
	@GET
	@Path("listmedicine")
	@Produces (MediaType.APPLICATION_JSON)
	public List<MedicineDto> consultMedicineName(@QueryParam("medicineName") String name) {
		
		return medicineBusiness1.getListMedicinewithEqualName(name);
	}
}


