package  io.altar.pharmaFriend.services;



import javax.ws.rs.Path;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import io.altar.pharmaFriend.webfilters.CorsFilter;

@Component
public class JerseyInitializer extends ResourceConfig {
	public JerseyInitializer() {
		registerEndpoints();
        register(CorsFilter.class);
	}

	private void registerEndpoints() {
		register(MedicineService.class);
		register(PharmacyService.class);
		register(UserRequestService.class);
	}

}
