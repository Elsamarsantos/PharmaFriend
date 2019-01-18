package  io.altar.pharmaFriend.repositories;



import java.util.List;

import org.springframework.stereotype.Repository;

import io.altar.pharmaFriend.Dtos.MedicineDto;
import io.altar.pharmaFriend.Dtos.PharmacyDto;
import io.altar.pharmaFriend.models.Medicine;
import  io.altar.pharmaFriend.models.Pharmacy;

@Repository
public class PharmacyRepository extends EntityRepository<Pharmacy> {
	
	
	PharmacyRepository() {}
	
	@Override
	protected Class<Pharmacy> getEntityClass() {
		
		return Pharmacy.class;
	}


	protected String getNamedQuery() {
		return Pharmacy.QUERYLOCATION;
	}
	@Override
	protected String getNamedQueryAll() {
		return Pharmacy.QUERY_ALL;
	}
	
	protected String getNamedQuery2() {
		return Pharmacy.QUERYNAME;
	}

	public PharmacyDto getPharmacyByName(String pharmacyName) {
		return em.createNamedQuery(Pharmacy.QUERYNAME, PharmacyDto.class).setParameter("pharmacyName", pharmacyName).getSingleResult();
		
	}
	
	public PharmacyDto getPharmacyById(Long pharmacyId) {
		return em.createNamedQuery(Pharmacy.QUERY_BY_ID, PharmacyDto.class).setParameter("id", pharmacyId).getSingleResult();
		
	}

	
	
	public PharmacyDto getPharmacyByLocation(double lon, double lat) {
		return em.createNamedQuery(Pharmacy.QUERYLOCATION, PharmacyDto.class).setParameter("lonLocation", lon).setParameter("latLocation", lat).getSingleResult();
		
	}
	

	public long getBiggestId() {
		
		long biggestId = 0;
		
		if (em.createNamedQuery(Pharmacy.QUERY_ALL, Pharmacy.class).getResultList().size() > 0) {
			biggestId =(long) em.createNamedQuery(Pharmacy.QUERY_BIGGEST_F).getSingleResult();
		};
		
		return biggestId;
	}
	public List<Pharmacy> getPharmacytest(String name, String dose) {
		return em.createNamedQuery(Pharmacy.QUERY_TEST, Pharmacy.class).setParameter("name", name).setParameter("dose", dose).getResultList();
		
	}
	
	public List<MedicineDto> getPharmacyStock(Long id, int max, int offset) {
		return em.createNamedQuery(Pharmacy.QUERY_STOCK,MedicineDto.class).setParameter("id", id).setFirstResult(offset).setMaxResults(max).getResultList();
		
	}
	
	public List<PharmacyDto> getShortList(int max, int offset){

		return em.createNamedQuery(Pharmacy.QUERY_ALL_DTO, PharmacyDto.class).setFirstResult(offset).setMaxResults(max).getResultList();
	}
	
	public Long getNumberOfRows () {
		return  em.createNamedQuery(Pharmacy.QUERY_MAX_ROW,Long.class).getSingleResult();
	}
	
	public Long getNumberOfRowsStock (Long id) {
		return  em.createNamedQuery(Pharmacy.QUERY_MAX_ROW_STOCK,Long.class).setParameter("id", id).getSingleResult();
	}
	
	public List<PharmacyDto> getAllPharmacyName(String letter){
		
		return em.createNamedQuery(Pharmacy.QUERY_PHARMACY_NAME,PharmacyDto.class).setParameter("letter", letter + "%").setMaxResults(20).getResultList();
		
	}

	public List<PharmacyDto> getAllPharmaciesDto(){

	return em.createNamedQuery(Pharmacy.QUERY_ALL_DTO, PharmacyDto.class).getResultList();
}	
}
