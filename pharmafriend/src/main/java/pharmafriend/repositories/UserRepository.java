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
		 if(em.createNamedQuery(User.QUERY_EMAIL, User.class).setParameter("login", login).getResultList().size()>0) {
			 return em.createNamedQuery(User.QUERY_EMAIL, User.class).setParameter("login", login).getSingleResult();
		 }
		 else {
			 return null;
		 }
		
	}
	
	public void remove(String login) {
		 em.remove(getUserByEmail(login));
		
	}

	public long getBiggestId() {
		long biggestId = 0;
		
		if (em.createNamedQuery(User.QUERY_ALL, User.class).getResultList().size() > 0) {
			biggestId =(long) em.createNamedQuery(User.QUERY_BIGGEST).getSingleResult();
		}
		;
		

		System.out.println(biggestId);
		return biggestId;
	}
	
	public User getUserByEmailAndPass(String login, String passWord) {
		return em.createNamedQuery(User.QUERY_TO_LOGIN, User.class).setParameter("login", login).setParameter("passWord", passWord).getSingleResult();
		
	}
}
