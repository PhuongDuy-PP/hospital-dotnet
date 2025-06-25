using Hospital_API.Models;
using Hospital_API.Interfaces;
using Hospital_API.Data;
using Microsoft.EntityFrameworkCore;
namespace Hospital_API.Repositories
{
    public class MedicinesRepository : IMedicinesRepository
    {
        private readonly HospitalDbContext _hospitalDbContext;
        public MedicinesRepository(HospitalDbContext hospitalDbContext)
        {
            _hospitalDbContext = hospitalDbContext;
        }
        public async Task<Medicines> AddMedicineAsync(Medicines medicine)
        {
            await _hospitalDbContext.Medicines.AddAsync(medicine);
            await _hospitalDbContext.SaveChangesAsync();
            return medicine;
        }
        public async Task<Medicines> UpdateMedicineAsync(Medicines medicines)
        {
            var existingMedicine = await _hospitalDbContext.Medicines.FindAsync(medicines.Id);
            if (existingMedicine != null)
            {
                existingMedicine.Name = medicines.Name;
                existingMedicine.Price = medicines.Price;
                existingMedicine.Quantity = medicines.Quantity;
                existingMedicine.Unit = medicines.Unit;
                existingMedicine.SupplierId = medicines.SupplierId; 
                await _hospitalDbContext.SaveChangesAsync();
            }
            return existingMedicine;
        }
        public async Task<IEnumerable<Medicines>> GetAllMedicinesAsync()
        {
            return await _hospitalDbContext.Medicines
                .Include(m => m.Supplier) 
                .ToListAsync();
        }
        public async Task<Medicines> DeleteMedicineAsync(int id)
        {
            var medicine = await _hospitalDbContext.Medicines.FindAsync(id);
            if (medicine != null)
            {
                _hospitalDbContext.Medicines.Remove(medicine);
                await _hospitalDbContext.SaveChangesAsync();
            }
            return medicine;
        }
        public async Task<Medicines?> GetMedicineByIdAsync(int id)
        {
            return await _hospitalDbContext.Medicines
                .Include(m => m.Supplier) 
                .FirstOrDefaultAsync(m => m.Id == id);
        }
    }
}