using System.Collections.Generic;
using System.Threading.Tasks;
using Hospital_API.DTOs;
namespace Hospital_API.Interfaces
{
    public interface IMedicineSupplierService
    {
        Task<IEnumerable<MedicineSupplierDTO>> GetAllAsync();
        Task<MedicineSupplierDTO> GetByIdAsync(int id);
        Task<MedicineSupplierDTO> AddAsync(MedicineSupplierCreateDTO medicineSupplierCreateDTO);
        Task<MedicineSupplierDTO> UpdateAsync(MedicineSupplierDTO dto);
        Task<MedicineSupplierDTO> DeleteAsync(int id);
    }
}
