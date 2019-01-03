package pharmafriend.models;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({@NamedQuery(name=User.QUERY_ALL, query="SELECT u From User u"), 
	@NamedQuery(name=User.QUERYNAME, query="SELECT u From User u WHERE u.userName= :userName"),
	@NamedQuery(name=User.QUERY_EMAIL, query="SELECT u From User u WHERE u.login= :login"),
	@NamedQuery(name=User.QUERY_BIGGEST, query="SELECT MAX(u.id) FROM User u")
})
public class User extends BaseEntity{

	private static final long serialVersionUID = 1L;
	
	public static final String QUERYNAME = "findByUser";
	public static final String QUERY_EMAIL= "findByUserEmail";
	public static final String QUERY_ALL = "findAllUsers";	
	public static final String QUERY_BIGGEST = "getBiggestIdUser";
	
	private String userName;
    private String login;
    private String passWord;
    private boolean userAccess;
    private String address;
    private double lonLocation;
	private double latLocation;
	


	public String getuserName() {
		return userName;
	}
	public void setName(String userName) {
		this.userName = userName;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public boolean isuserAccess() {
		return userAccess;
	}
	public void setuserAccess(boolean userAccess) {
		this.userAccess = userAccess;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getLonLocation() {
		return lonLocation;
	}
	public void setLonLocation(double lonLocation) {
		this.lonLocation = lonLocation;
	}
	public double getLatLocation() {
		return latLocation;
	}
	public void setLatLocation(double latLocation) {
		this.latLocation = latLocation;
	}
	
	

}
