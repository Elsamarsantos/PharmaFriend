package pharmafriend.services;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pharmafriend.business.PharmacyBusiness;
import pharmafriend.models.Pharmacy;


@Path("pharmacies")
public class PharmacyService {
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	
	@GET
	@Path("consult/pharmacylocation}")
	@Produces (MediaType.APPLICATION_JSON)
	public Pharmacy consultPharmacy(@PathParam("pharmacylocation") String name) {
		
		return pharmacyBusiness1.consultPharmacyByLocation(name);
	}
	
	@GET
	@Path("consultid/{id}")
	@Produces (MediaType.APPLICATION_JSON)
	public Pharmacy consutlMedicine(@PathParam("id") long id) {
		return pharmacyBusiness1.consultPharmacyById(id);
	}
	
	@GET
	@Path("consultall")
	@Produces (MediaType.APPLICATION_JSON)
	public List<Pharmacy> consultAll() {
		return pharmacyBusiness1.consultAll();
	}
	
	
	
	@POST
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void createMedicine(Pharmacy pharmacy1) {
		pharmacyBusiness1.createPharmacy(pharmacy1);
	}

}
