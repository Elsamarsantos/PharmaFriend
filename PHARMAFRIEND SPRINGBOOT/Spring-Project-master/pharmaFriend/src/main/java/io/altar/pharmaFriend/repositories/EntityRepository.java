package io.altar.pharmaFriend.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;



import  io.altar.pharmaFriend.models.BaseEntity;


public abstract class EntityRepository  <T extends BaseEntity> {
	
	
	@PersistenceContext
	protected EntityManager em;
	
	
	
	public T saveEntity(T entity) {
		
		return em.merge(entity);	
	}
		
	public T consultEntityId(long id) {
		
		return em.find(getEntityClass(),id);
	}
	
	public List<T> getAllEntity(){
		return em.createNamedQuery(getNamedQueryAll(),getEntityClass()).getResultList();
	}
	
	public T update(T entity) {
		return em.merge(entity);
	}
	
	public void delete(T entity) {
		em.remove(entity);
	}
	
	
	protected abstract Class<T> getEntityClass();

	protected abstract String getNamedQueryAll();
}
