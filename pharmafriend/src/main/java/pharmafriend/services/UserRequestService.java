package pharmafriend.services;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;


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
//	@Path("{medicinename}/{lonlocation}/{latlocation}/{userdistance}")
	@Produces (MediaType.APPLICATION_JSON)
	public String medicineRequest(@QueryParam("medicinename") String name,@QueryParam("lonlocation") double lon,@QueryParam("latlocation") double lat, @QueryParam("userdistance") double distance) {
		
		
		return "Estas sao as farmacias com o produto" + name + UserRequestBusiness1.userRequeste(name, lon, lat, distance);
	}
	

}
