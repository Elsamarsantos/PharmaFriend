package pharmafriend.business;


import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;


import pharmafriend.models.User;
import pharmafriend.repositories.UserRepository;

public class UserBusiness {
	
	@Inject
	UserRepository userRepository1;
	
	
	//create new user
		@Transactional
		public void createUser(User user){
			long lastId= userRepository1.getBiggestId();	
			long novoId = 1+ lastId;
			user.setId(novoId);
			
			userRepository1.saveEntity(user);
			
		}
		
		//consult user by name
		@Transactional 
		public User consultByName(String name) {
			
			return userRepository1.getUserByName(name);
		}
		
		//consult user by login
		@Transactional 
		public User consultByLogin(String name) {
					
			return userRepository1.getUserByEmail(name);
		}
		
		
		//consult user by Id
		@Transactional 
		public User consultById(Long id) {
			
			return userRepository1.consultEntityId(id);
	
		}
		
		//consult all user on DB
		@Transactional
		public List<User> consultAll() {
			
			List <User> listUser= userRepository1.getAllEntity();
			return listUser;
		}
		
		
		//remove user by name 
		@Transactional 
		public void removeUser(String login) {
			userRepository1.remove(login);
		}
		
		//remove user by id 
		@Transactional 
		public void removeUserById(long id) {
				
		String userToRemove = userRepository1.consultEntityId(id).getLogin();
		userRepository1.remove(userToRemove);
		}
		
		
		@Transactional 
		public void updateUser(User user) {
			
			userRepository1.update(user);
		}
		
	
		
}
	
	


