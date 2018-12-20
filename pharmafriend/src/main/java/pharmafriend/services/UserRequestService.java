package pharmafriend.services;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import pharmafriend.business.MedicineBusiness;
import pharmafriend.business.PharmacyBusiness;


@Path("request")
public class UserRequestService {
	
	@Inject
	PharmacyBusiness pharmacyBusiness1;
	@Inject
	MedicineBusiness medicineBusiness1;
	
	
	@GET
	@Produces (MediaType.APPLICATION_JSON)
	public String medicineRequest(@QueryParam("medicineName") String name,@QueryParam("dose") String dose ,@QueryParam("volumeUnit") String volumeUnit,@PathParam("lonlocation") double lon,@PathParam("latlocation") double lat, @PathParam("userDistance") double distance) {
		
		medicineBusiness1.consultMedicine(name, dose, volumeUnit);
		pharmacyBusiness1.getTheNeartsPharmacy(lon, lat,distance);
		
		return "ola";
	}
	

}
