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
import pharmafriend.Dtos.PharmacyDto;
import pharmafriend.business.PharmacyBusiness;

import pharmafriend.models.Pharmacy;


@Path("pharmacies")
public class PharmacyService {
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	
	@GET
	@Path("consult")
	@Produces (MediaType.APPLICATION_JSON)
	public PharmacyDto consultPharmacy(@QueryParam("lonlocation") double lon,@QueryParam("latlocation") double lat) {
		
		return pharmacyBusiness1.consultPharmacy(lon,lat);
	}
	
	@GET
	@Path("consult/{pharmacyName}")
	@Produces (MediaType.APPLICATION_JSON)
	public PharmacyDto consultPharmacyName(@PathParam("pharmacyName") String name) {
		
		return pharmacyBusiness1.consultPharmacy(name);
	}
	
	@GET
	@Path("consultid/{id}")
	@Produces (MediaType.APPLICATION_JSON)
	public PharmacyDto consutlPharmacy(@PathParam("id") long id) {
		return pharmacyBusiness1.consultPharmacy(id);
	}
	
	@GET
	@Path("consultall")
	@Produces (MediaType.APPLICATION_JSON)
	public List<PharmacyDto> consultAll() {
		return pharmacyBusiness1.consultAll();
	}
	
	
	
	@POST
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Pharmacy createMedicine(Pharmacy pharmacy1) {
		pharmacyBusiness1.createPharmacy(pharmacy1);
		return pharmacy1;
	}
	
	
//	@PUT
//	@Path("update/{pharmacy}")
//	@Produces(MediaType.APPLICATION_JSON)
//	@Consumes(MediaType.APPLICATION_JSON)
//	public void updatePharmacyName(@PathParam("pharmacy")Pharmacy pharmacy1) {
//		pharmacyBusiness1.updatePharmacy(pharmacy1);
//	
//	}
	
	
	@DELETE
	@Path("delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	
	public void removePharmacyId(@PathParam("id")long id) {
		pharmacyBusiness1.removePharmacy(id);
	}

	@GET
	@Path("consultnear")
	@Produces (MediaType.APPLICATION_JSON)
	public List<Pharmacy> consultnear(@QueryParam("lon") double lon,@QueryParam("lat") double lat, @QueryParam("distance") double distance) {
		
		return pharmacyBusiness1.getTheNeartsPharmacy(lon, lat,distance);
	}
	
	
	@PUT
	@Path("updateall")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void updatePharmacyName() {
		
		 pharmacyBusiness1.updateAll();

	}
	

	
	@GET
	@Path("consultstock/{id}")
	@Produces (MediaType.APPLICATION_JSON)
	public List<MedicineDto> consultStock(@PathParam("id") long id) {
		
		return pharmacyBusiness1.getStockListPharmacy(id);
	}
	
	
	
}
