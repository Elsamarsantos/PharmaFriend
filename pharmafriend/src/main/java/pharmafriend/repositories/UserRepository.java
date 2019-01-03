package pharmafriend.repositories;

import pharmafriend.models.Pharmacy;
import pharmafriend.models.User;

public class UserRepository extends EntityRepository<User>{
	
	
	private UserRepository() {}

	@Override
	protected Class<User> getEntityClass() {
		// TODO Auto-generated method stub
		return User.class;
	}

	@Override
	protected String getNamedQueryAll() {
		// TODO Auto-generated method stub
		return User.QUERY_ALL;
	}

	public User getUserByName(String UserName) {
		return em.createNamedQuery(User.QUERYNAME, User.class).setParameter("UserName", UserName).getSingleResult();
		
	}
	
	public User getUserByEmail(String login) {
		return em.createNamedQuery(User.QUERY_EMAIL, User.class).setParameter("login", login).getSingleResult();
		
	}
	
	public void remove(String login) {
		 em.remove(getUserByEmail(login));
		
	}

	public long getBiggestId() {
		
		return (long) em.createNamedQuery(User.QUERY_BIGGEST).getSingleResult();
	}
	
}