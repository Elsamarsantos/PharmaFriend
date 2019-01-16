package  io.altar.pharmaFriend.services;

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

import org.springframework.stereotype.Component;


import  io.altar.pharmaFriend.Dtos.MedicineDto;
import  io.altar.pharmaFriend.business.MedicineBusiness;
import  io.altar.pharmaFriend.models.Medicine;

@Component
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
	@Path("consultid/{id}")
	@Produces (MediaType.APPLICATION_JSON)
	public MedicineDto consultMedicineId(@PathParam("id") long id) {
		return medicineBusiness1.consultMedicine(id);
	}
	
	
	@GET
	@Path("consultallname")
	@Produces (MediaType.APPLICATION_JSON)
	public List <MedicineDto> consultAllMedicineName(@QueryParam("letter") String letter) {
		
		return medicineBusiness1.getAllMedicineNames(letter);
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
	@Path("medicinebydose")
	@Produces (MediaType.APPLICATION_JSON)
	public List<MedicineDto> consultMedicineNameDose(@QueryParam("medicineName") String name, @QueryParam("dose") String dose) {
		
		return medicineBusiness1.getListMedicineByNameDose(name,dose);
	}
	


	@GET
	@Path("consultshort")
	@Produces (MediaType.APPLICATION_JSON)
	public List<MedicineDto> consultShortList(@QueryParam("max")int max,@QueryParam("offset") int offset) {
		return medicineBusiness1.shortList(max, offset);
	}
	
	
	@GET
	@Path("numberrow")
	@Produces (MediaType.APPLICATION_JSON)
	public Long consultNumberRows() {
		return medicineBusiness1.getNumberRows();
	}
	
}


