using Hospital_API.Models;
using Hospital_API.Interfaces;
using Hospital_API.Data;
using Microsoft.EntityFrameworkCore;

namespace Hospital_API.Repositories
{
    public class PrescriptionsRepository : IPrescriptionsRepository
    {
        private readonly HospitalDbContext _context;
        public PrescriptionsRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Prescriptions>> GetAllAsync()
        {
            return await _context.Prescriptions.Include(p => p.MedicalRecord).ToListAsync();
        }

        public async Task<Prescriptions> GetByIdAsync(int id)
        {
            return await _context.Prescriptions.Include(p => p.MedicalRecord).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Prescriptions> AddAsync(Prescriptions prescription)
        {
            await _context.Prescriptions.AddAsync(prescription);
            await _context.SaveChangesAsync();
            return prescription;
        }

        public async Task<Prescriptions> UpdateAsync(Prescriptions prescription)
        {
            _context.Prescriptions.Update(prescription);
            await _context.SaveChangesAsync();
            return prescription;
        }

        public async Task<Prescriptions> DeleteAsync(int id)
        {
            var prescription = await _context.Prescriptions.FindAsync(id);
            if (prescription != null)
            {
                _context.Prescriptions.Remove(prescription);
                await _context.SaveChangesAsync();
            }
            return prescription;
        }
    }
}