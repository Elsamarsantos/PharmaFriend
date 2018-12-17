package pharmafriend.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import pharmafriend.models.BaseEntity;

public abstract class EntityRepository  <T extends BaseEntity> {
	
	
	@PersistenceContext
	protected EntityManager em;
	
	
	
	public T saveEntity(T entity) {
		
		return em.merge(entity);
		
	}
	
	public T consultEntity(String entityName) {
		
		
		return em.find(getEntityClass(),entityName);
	}
	
	public T consultEntityId(long id) {

		return em.find(getEntityClass(),id);
	}
	
	public List<T> getAll(){
		return em.createNamedQuery();
	}
	
	protected abstract Class<T> getEntityClass();

	protected abstract String getNamedQuery();
}
