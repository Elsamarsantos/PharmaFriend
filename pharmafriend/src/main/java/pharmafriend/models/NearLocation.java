package pharmafriend.models;



public class NearLocation {

	
	
	private double lon;
	private double lat;
	
	
	public NearLocation(double lon, double lat) {
		this.lon = lon;
		this.lat = lat;
		
	}
	
	
	public double distanceTo(NearLocation that) {
        double STATUTE_MILES_PER_NAUTICAL_MILE = 1.15077945;
        double lat1 = Math.toRadians(this.lon);
        double lon1 = Math.toRadians(this.lat);
        double lat2 = Math.toRadians(that.lon);
        double lon2 = Math.toRadians(that.lat);

        // great circle distance in radians, using law of cosines formula
        double angle = Math.acos(Math.sin(lat1) * Math.sin(lat2)
                               + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));

        // each degree on a great circle of Earth is 60 nautical miles
        double nauticalMiles = 60 * Math.toDegrees(angle);
        double statuteMiles = STATUTE_MILES_PER_NAUTICAL_MILE * nauticalMiles;
        double distanceInKm = statuteMiles * (1.609344); //get in Km
        return distanceInKm;
        
    }
	// return string representation of this point
    public String toString() {
        return " (" + lon + ", " + lat + ")";
    }
    
}
