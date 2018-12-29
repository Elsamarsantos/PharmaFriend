package pharmafriend.services;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import pharmafriend.Dtos.PharmacyDto;
import pharmafriend.business.UserRequestBusiness;


@Path("request")
public class UserRequestService {
	
	@Inject 
	UserRequestBusiness UserRequestBusiness1;
	

	@GET
	@Path("test")
	@Produces (MediaType.APPLICATION_JSON)
	public String medicineRequest() {
		
		
		return "funciona";
				}
	
	
	
	@GET
	@Produces (MediaType.APPLICATION_JSON)
	public List<PharmacyDto> medicineRequest(@QueryParam("medicinename") String name,@QueryParam("dose") String dose,@QueryParam("volume") String volume,@QueryParam("lonlocation") double lon,@QueryParam("latlocation") double lat, @QueryParam("userdistance") double distance) {
		
		
		return UserRequestBusiness1.userRequest(name,dose,volume, lon, lat, distance);
	}
	

}
