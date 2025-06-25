using Hospital_API.Data;
using Hospital_API.Interfaces;
using Hospital_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_API.Repositories
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly HospitalDbContext _context;

        public InvoiceRepository(HospitalDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Invoice>> GetAllAsync()
        {
            return await _context.Invoices.Include(i => i.Appointment).ToListAsync();
        }

        public async Task<Invoice?> GetByIdAsync(int id)
        {
            return await _context.Invoices.Include(i => i.Appointment)
                                          .FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Invoice?> GetByAppointmentIdAsync(int appointmentId)
        {
            return await _context.Invoices.FirstOrDefaultAsync(i => i.AppointmentId == appointmentId);
        }

        public async Task AddAsync(Invoice invoice)
        {
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Invoice invoice)
        {
            _context.Invoices.Update(invoice);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Invoice invoice)
        {
            _context.Invoices.Remove(invoice);
            await _context.SaveChangesAsync();
        }
    }

}