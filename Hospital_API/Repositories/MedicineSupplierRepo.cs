using Hospital_API.Models;
using Hospital_API.Interfaces;
using Hospital_API.Data;
using Microsoft.EntityFrameworkCore;
namespace Hospital_API.Repositories
{
    public class MedicineSupplierRepository : IMedicineSupplierRepository
    {
        public readonly HospitalDbContext _context;
        public MedicineSupplierRepository(HospitalDbContext context)
        {
            _context = context;
        }
        //add supplier
        public async Task<MedicineSupplier> AddAsync(MedicineSupplier supplier)
        {
            await _context.MedicineSuppliers.AddAsync(supplier);
            await _context.SaveChangesAsync();
            return supplier;
        }
        //get all suppliers
        public async Task<IEnumerable<MedicineSupplier>> GetAllAsync()
        {
            return await _context.MedicineSuppliers
                .Include(s => s.Medicines)
                .ToListAsync();
        }
        //get supplier by id
        public async Task<MedicineSupplier> GetByIdAsync(int id)
        {
            return await _context.MedicineSuppliers
                .Include(s => s.Medicines) 
                .FirstOrDefaultAsync(s => s.SupplierId == id);
        }
        //update supplier
        public async Task<MedicineSupplier> UpdateAsync(MedicineSupplier supplier)
        {
            var existingSupplier = await _context.MedicineSuppliers.FindAsync(supplier.SupplierId);
            if (existingSupplier != null)
            {
                existingSupplier.SupplierName = supplier.SupplierName;
                existingSupplier.Phone = supplier.Phone;
                existingSupplier.Address = supplier.Address;
                await _context.SaveChangesAsync();
            }
            return existingSupplier;
        }
        //delete supplier
        public async Task<MedicineSupplier> DeleteAsync(int id)
        {
            var supplier = await _context.MedicineSuppliers.FindAsync(id);
            if (supplier != null)
            {
                _context.MedicineSuppliers.Remove(supplier);
                await _context.SaveChangesAsync();
            }
            return supplier;
        }
    }
}