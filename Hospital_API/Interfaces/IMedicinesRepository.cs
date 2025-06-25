using Hospital_API.Models;
namespace Hospital_API.Interfaces
{
    public interface IMedicinesRepository
    {
        // Task<IEnumerable<Medicines>> GetAllMedicinesAsync();
        // Task<Medicines> GetMedicineByIdAsync(int id);
        Task<Medicines> AddMedicineAsync(Medicines medicine);
        Task<Medicines> UpdateMedicineAsync(Medicines medicine);
        Task<IEnumerable<Medicines>> GetAllMedicinesAsync();
        Task<Medicines> DeleteMedicineAsync(int id);
        Task<Medicines> GetMedicineByIdAsync(int id);
    }
}