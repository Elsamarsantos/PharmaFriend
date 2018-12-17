package pharmafriend.repositories;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import pharmafriend.models.BaseEntity;

public abstract class EntityRepository  <T extends BaseEntity  > {
	
	
	@PersistenceContext
	protected EntityManager em;
	
	
	
	public T saveEntity(T entity) {
		
		return em.merge(entity);
		
		
	}
	
	public T consultEntity(String entityName) {
		return em.find(getEntityClass(),entityName);
	}
	

	
	protected abstract Class<T> getEntityClass();

}
